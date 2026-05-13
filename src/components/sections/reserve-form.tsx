"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";

import { products } from "@/data/products";
import { cn } from "@/lib/utils";

const preferredTimes = ["7 月上旬", "7 月下旬", "8 月上旬", "8 月下旬", "时间灵活"] as const;

const reservationTypes = ["个人试吃", "朋友分享", "礼盒咨询", "活动 / 快闪合作"] as const;

type PreferredTime = (typeof preferredTimes)[number];
type ReservationType = (typeof reservationTypes)[number];

type ReserveFormValues = {
  name: string;
  contact: string;
  city: string;
  preferredTime: PreferredTime;
  productIds: string[];
  reservationType: ReservationType;
  notes: string;
  notify: boolean;
};

type ReserveFormErrors = Partial<Record<"name" | "contact" | "productIds", string>>;

type ReservationResponse = {
  ok: boolean;
  message?: string;
  errors?: ReserveFormErrors;
};

const initialValues: ReserveFormValues = {
  name: "",
  contact: "",
  city: "Vancouver",
  preferredTime: "时间灵活",
  productIds: [products[0]?.id ?? ""].filter(Boolean),
  reservationType: "个人试吃",
  notes: "",
  notify: true,
};

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null;
  }

  return <p className="text-sm leading-6 text-primary/85">{message}</p>;
}

export function ReserveForm() {
  const [values, setValues] = useState<ReserveFormValues>(initialValues);
  const [errors, setErrors] = useState<ReserveFormErrors>({});
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedValues, setSubmittedValues] = useState<ReserveFormValues | null>(null);

  const selectedProducts = useMemo(
    () => products.filter((product) => values.productIds.includes(product.id)),
    [values.productIds]
  );

  const submittedProducts = useMemo(
    () =>
      submittedValues
        ? products.filter((product) => submittedValues.productIds.includes(product.id))
        : [],
    [submittedValues]
  );

  function validate(nextValues: ReserveFormValues) {
    const nextErrors: ReserveFormErrors = {};

    if (!nextValues.name.trim()) {
      nextErrors.name = "请留下你的姓名，方便我们后续确认预约意向。";
    }

    if (!nextValues.contact.trim()) {
      nextErrors.contact = "请填写一种联系方式，例如微信、邮箱或手机号。";
    }

    if (nextValues.productIds.length === 0) {
      nextErrors.productIds = "请至少选择一款你感兴趣的甜点。";
    }

    return nextErrors;
  }

  function updateProduct(productId: string) {
    setValues((current) => {
      const exists = current.productIds.includes(productId);
      const productIds = exists
        ? current.productIds.filter((id) => id !== productId)
        : [...current.productIds, productId];

      return { ...current, productIds };
    });
    setErrors((current) => ({ ...current, productIds: undefined }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);
    setSubmitError("");

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = (await response.json()) as ReservationResponse;

      if (!response.ok || !result.ok) {
        if (result.errors) {
          setErrors(result.errors);
        }

        setSubmitError(result.message ?? "预约意向暂时未能提交成功，请稍后再试。");
        return;
      }

      setSubmittedValues(values);
    } catch {
      setSubmitError("网络暂时不稳定，请稍后再试。");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submittedValues) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.985, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        className="ysj-card relative overflow-hidden p-7 md:p-9"
      >
        <div className="absolute -right-20 top-6 size-64 rounded-full border border-soft-gold/30" />
        <div className="absolute -bottom-24 -left-16 size-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative flex flex-col gap-8">
          <div className="flex items-start justify-between gap-6">
            <div className="flex max-w-xl flex-col gap-4">
              <span className="h-px w-16 bg-soft-gold" />
              <div className="flex flex-col gap-3">
                <p className="text-sm uppercase tracking-[0.28em] text-primary/80">Received</p>
                <h2 className="text-3xl font-semibold leading-tight text-balance">
                  已收到你的预约意向
                </h2>
                <p className="text-base leading-8 text-muted-foreground">
                  云酥记会在温哥华试吃和小批量预订开放时，优先通知你。
                </p>
              </div>
            </div>
            <span className="flex size-14 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-cloud-white/55 text-primary">
              <Check data-icon="inline-start" />
            </span>
          </div>

          <div className="grid gap-4 border-y border-border/70 py-6">
            <div className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">感兴趣产品</span>
              <div className="flex flex-wrap gap-2">
                {submittedProducts.map((product) => (
                  <span
                    key={product.id}
                    className="rounded-full border border-soft-gold/30 bg-cloud-white/55 px-3 py-1 text-sm text-foreground"
                  >
                    {product.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-muted-foreground">期望品尝时间</span>
              <span className="text-base text-foreground">{submittedValues.preferredTime}</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="ysj-button-primary inline-flex min-h-12 items-center justify-center px-6 text-sm font-medium"
            >
              返回首页
            </Link>
            <Link
              href="/products"
              className="ysj-button-secondary inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-medium"
            >
              查看产品
              <ArrowRight data-icon="inline-end" />
            </Link>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.78, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      onSubmit={handleSubmit}
      className="ysj-card relative overflow-hidden p-7 md:p-9"
      noValidate
    >
      <div className="absolute -right-20 top-8 size-64 rounded-full border border-soft-gold/25" />
      <div className="absolute -bottom-24 left-4 size-72 rounded-full bg-mist-gray/30 blur-3xl" />
      <div className="relative flex flex-col gap-7">
        <div className="flex items-start justify-between gap-5">
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase tracking-[0.28em] text-primary/80">Reserve</p>
            <h2 className="text-3xl font-semibold leading-tight text-balance">留下预约意向</h2>
          </div>
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-soft-gold/35 bg-cloud-white/55 text-primary">
            <Sparkles data-icon="inline-start" />
          </span>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className="text-sm text-foreground">姓名 / Name</span>
            <input
              value={values.name}
              onChange={(event) => {
                setValues((current) => ({ ...current, name: event.target.value }));
                setErrors((current) => ({ ...current, name: undefined }));
              }}
              placeholder="请输入你的姓名"
              aria-invalid={Boolean(errors.name)}
              className="min-h-12 rounded-2xl border border-border bg-cloud-white/60 px-4 text-base outline-none transition-colors duration-500 placeholder:text-muted-foreground/70 focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
            />
            <FieldError message={errors.name} />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm text-foreground">联系方式 / Contact</span>
            <input
              value={values.contact}
              onChange={(event) => {
                setValues((current) => ({ ...current, contact: event.target.value }));
                setErrors((current) => ({ ...current, contact: undefined }));
              }}
              placeholder="微信 / 邮箱 / 手机号"
              aria-invalid={Boolean(errors.contact)}
              className="min-h-12 rounded-2xl border border-border bg-cloud-white/60 px-4 text-base outline-none transition-colors duration-500 placeholder:text-muted-foreground/70 focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
            />
            <FieldError message={errors.contact} />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm text-foreground">所在城市 / City</span>
            <input
              value={values.city}
              onChange={(event) =>
                setValues((current) => ({ ...current, city: event.target.value }))
              }
              placeholder="例如 Vancouver / Richmond / Burnaby"
              className="min-h-12 rounded-2xl border border-border bg-cloud-white/60 px-4 text-base outline-none transition-colors duration-500 placeholder:text-muted-foreground/70 focus:border-soft-gold/80 focus:ring-4 focus:ring-soft-gold/15"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm text-foreground">期望品尝时间 / Preferred time</span>
            <select
              value={values.preferredTime}
              onChange={(event) =>
                setValues((current) => ({
                  ...current,
                  preferredTime: event.target.value as PreferredTime,
                }))
              }
              className="min-h-12 rounded-2xl border border-border bg-cloud-white/60 px-4 text-base outline-none transition-colors duration-500 focus:border-soft-gold/80 focus:ring-4 focus:ring-soft-gold/15"
            >
              {preferredTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </label>
        </div>

        <fieldset className="flex flex-col gap-3">
          <legend className="text-sm text-foreground">感兴趣产品 / Interested products</legend>
          <div className="grid gap-3 sm:grid-cols-2">
            {products.map((product) => {
              const checked = values.productIds.includes(product.id);

              return (
                <label
                  key={product.id}
                  className={cn(
                    "flex cursor-pointer items-center justify-between gap-4 rounded-2xl border bg-cloud-white/48 p-4 transition-all duration-500",
                    checked
                      ? "border-primary/45 shadow-[0_12px_30px_rgb(159_79_74_/_10%)]"
                      : "border-border hover:border-soft-gold/60"
                  )}
                >
                  <span className="flex flex-col gap-1">
                    <span className="text-base text-foreground">{product.name}</span>
                    <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {product.englishName}
                    </span>
                  </span>
                  <input
                    type="checkbox"
                    aria-label={product.name}
                    checked={checked}
                    onChange={() => updateProduct(product.id)}
                    className="size-4 accent-primary"
                  />
                </label>
              );
            })}
          </div>
          <FieldError message={errors.productIds} />
        </fieldset>

        <fieldset className="flex flex-col gap-3">
          <legend className="text-sm text-foreground">预约类型 / Reservation type</legend>
          <div className="grid gap-3 sm:grid-cols-2">
            {reservationTypes.map((type) => {
              const checked = values.reservationType === type;

              return (
                <label
                  key={type}
                  className={cn(
                    "flex cursor-pointer items-center gap-3 rounded-2xl border bg-cloud-white/48 p-4 transition-all duration-500",
                    checked ? "border-primary/45" : "border-border hover:border-soft-gold/60"
                  )}
                >
                  <input
                    type="radio"
                    name="reservationType"
                    aria-label={type}
                    value={type}
                    checked={checked}
                    onChange={() =>
                      setValues((current) => ({ ...current, reservationType: type }))
                    }
                    className="size-4 accent-primary"
                  />
                  <span className="text-base text-foreground">{type}</span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <label className="flex flex-col gap-2">
          <span className="text-sm text-foreground">备注 / Notes</span>
          <textarea
            value={values.notes}
            onChange={(event) => setValues((current) => ({ ...current, notes: event.target.value }))}
            placeholder="例如口味偏好、低糖需求、过敏信息、取货区域等"
            rows={4}
            className="resize-none rounded-2xl border border-border bg-cloud-white/60 px-4 py-3 text-base leading-7 outline-none transition-colors duration-500 placeholder:text-muted-foreground/70 focus:border-soft-gold/80 focus:ring-4 focus:ring-soft-gold/15"
          />
        </label>

        <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-border bg-cloud-white/42 p-4">
          <input
            type="checkbox"
            checked={values.notify}
            onChange={(event) =>
              setValues((current) => ({ ...current, notify: event.target.checked }))
            }
            className="size-4 accent-primary"
          />
          <span className="text-base text-foreground">开放预约时通知我</span>
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="ysj-button-primary inline-flex min-h-12 w-full items-center justify-center px-6 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "正在提交..." : "提交预约意向"}
        </button>

        <p className="text-center text-xs leading-6 text-muted-foreground">
          你提交的信息仅用于云酥记预约意向沟通与试吃通知，我们不会公开展示或出售你的联系方式。
        </p>

        {submitError ? (
          <p className="rounded-2xl border border-primary/20 bg-primary/8 px-4 py-3 text-center text-sm leading-6 text-primary/90">
            {submitError}
          </p>
        ) : null}

        {selectedProducts.length > 0 ? (
          <p className="text-center text-sm leading-6 text-muted-foreground">
            已选择：{selectedProducts.map((product) => product.name).join(" / ")}
          </p>
        ) : null}
      </div>
    </motion.form>
  );
}
