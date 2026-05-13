import { NextRequest, NextResponse } from "next/server";

import { products } from "@/data/products";

type ReservationPayload = {
  name?: string;
  contact?: string;
  city?: string;
  preferredTime?: string;
  productIds?: string[];
  reservationType?: string;
  notes?: string;
  notify?: boolean;
};

const productMap = new Map(products.map((product) => [product.id, product]));
const allowedPreferredTimes = new Set(["7 月上旬", "7 月下旬", "8 月上旬", "8 月下旬", "时间灵活"]);
const allowedReservationTypes = new Set(["个人试吃", "朋友分享", "礼盒咨询", "活动 / 快闪合作"]);

function cleanText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function normalizePayload(payload: ReservationPayload) {
  const productIds = Array.isArray(payload.productIds)
    ? payload.productIds.filter((id): id is string => typeof id === "string" && productMap.has(id))
    : [];

  const preferredTime = cleanText(payload.preferredTime);
  const reservationType = cleanText(payload.reservationType);

  return {
    name: cleanText(payload.name),
    contact: cleanText(payload.contact),
    city: cleanText(payload.city) || "Vancouver",
    preferredTime: allowedPreferredTimes.has(preferredTime) ? preferredTime : "时间灵活",
    productIds,
    reservationType: allowedReservationTypes.has(reservationType) ? reservationType : "个人试吃",
    notes: cleanText(payload.notes),
    notify: Boolean(payload.notify),
  };
}

function validateReservation(reservation: ReturnType<typeof normalizePayload>) {
  const errors: Partial<Record<"name" | "contact" | "productIds", string>> = {};

  if (!reservation.name) {
    errors.name = "请留下你的姓名，方便我们后续确认预约意向。";
  }

  if (!reservation.contact) {
    errors.contact = "请填写一种联系方式，例如微信、邮箱或手机号。";
  }

  if (reservation.productIds.length === 0) {
    errors.productIds = "请至少选择一款你感兴趣的甜点。";
  }

  return errors;
}

function getAirtableConfig() {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME;

  if (!apiKey || !baseId || !tableName) {
    return null;
  }

  return { apiKey, baseId, tableName };
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function POST(request: NextRequest) {
  let payload: ReservationPayload;

  try {
    payload = (await request.json()) as ReservationPayload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "预约信息格式不正确，请稍后再试。" },
      { status: 400 }
    );
  }

  const reservation = normalizePayload(payload);
  const errors = validateReservation(reservation);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, message: "请检查预约信息后再提交。", errors },
      { status: 400 }
    );
  }

  const selectedProducts = reservation.productIds.map((id) => productMap.get(id)!).filter(Boolean);
  const airtableConfig = getAirtableConfig();

  if (!airtableConfig) {
    await wait(800);

    return NextResponse.json({
      ok: true,
      mode: "mock",
      message: "已收到你的预约意向。",
      reservation: {
        preferredTime: reservation.preferredTime,
        productNames: selectedProducts.map((product) => product.name),
      },
    });
  }

  const endpoint = `https://api.airtable.com/v0/${airtableConfig.baseId}/${encodeURIComponent(
    airtableConfig.tableName
  )}`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${airtableConfig.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      typecast: true,
      fields: {
        Name: reservation.name,
        Contact: reservation.contact,
        City: reservation.city,
        "Preferred Time": reservation.preferredTime,
        "Interested Products": selectedProducts.map((product) => product.name),
        "Product IDs": reservation.productIds.join(", "),
        "Reservation Type": reservation.reservationType,
        Notes: reservation.notes,
        "Notify Me": reservation.notify,
        Source: "website",
        Status: "New",
        "Submitted At": new Date().toISOString(),
      },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Airtable reservation submission failed:", errorText);

    return NextResponse.json(
      {
        ok: false,
        message: "预约意向暂时未能提交成功，请稍后再试。",
      },
      { status: 502 }
    );
  }

  const result = (await response.json()) as { id?: string };

  return NextResponse.json({
    ok: true,
    mode: "airtable",
    id: result.id,
    message: "已收到你的预约意向。",
    reservation: {
      preferredTime: reservation.preferredTime,
      productNames: selectedProducts.map((product) => product.name),
    },
  });
}
