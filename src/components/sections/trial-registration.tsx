import { ReserveForm } from "@/components/sections/reserve-form";

export function TrialRegistration() {
  return (
    <section
      id="tasting-register"
      className="ysf-section ysf-trial relative overflow-hidden border-y border-[rgba(217,180,106,0.16)] bg-[#080604] py-16 scroll-mt-28 md:py-20"
    >
      <span
        id="trial"
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2 scroll-mt-28"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -left-16 bottom-3 h-72 w-72 rounded-full border border-[rgba(217,180,106,0.08)]" />
      <div className="pointer-events-none absolute -left-8 bottom-10 h-48 w-48 rounded-full border-l border-[rgba(217,180,106,0.12)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-72 bg-[radial-gradient(ellipse_at_bottom_left,rgb(217_180_106_/_10%),transparent_68%)]" />
      <div className="pointer-events-none absolute right-1/4 top-8 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgb(240_201_120_/_8%),transparent_70%)]" />

      <div className="ysj-container relative z-10">
        <div className="mx-auto mb-8 flex max-w-3xl flex-col items-center gap-3 text-center md:mb-10">
          <p className="text-sm uppercase tracking-[0.34em] text-soft-gold">Tasting Register</p>
          <h2 className="ysj-title-lg text-balance text-[#F5E7C8]">新品试吃登记</h2>
          <p className="max-w-2xl text-base leading-8 text-[#D6C09A] md:text-lg">
            填写信息，优先获得新品试吃与上市通知
          </p>
        </div>

        <ReserveForm variant="compact" tone="trial" />
      </div>
    </section>
  );
}
