import { ReserveForm } from "@/components/sections/reserve-form";
import { trialProducts } from "@/data/home-sections";

export function TrialRegistration() {
  return (
    <section id="tasting-register" className="ysf-section ysf-trial ysj-section-tight scroll-mt-28">
      <span
        id="trial"
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2 scroll-mt-28"
        aria-hidden="true"
      />
      <div className="ysj-container">
        <div className="ysf-trial-panel grid gap-8 rounded-[1.75rem] border border-soft-gold/20 bg-cloud-white/72 p-5 shadow-[0_24px_76px_rgb(79_95_78_/_8%)] md:p-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="ysf-section-head flex flex-col gap-6">
            <span className="h-px w-16 bg-soft-gold" />
            <div className="flex flex-col gap-4">
              <p className="text-sm uppercase tracking-[0.28em] text-soft-gold">Tasting Register</p>
              <h2 className="ysj-title-lg text-balance">新品试吃登记</h2>
              <p className="max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
                填写信息，优先获得新品试吃与上新通知。
              </p>
            </div>

            <div className="ysf-trial-products rounded-[1.25rem] border border-soft-gold/16 bg-rice-white/52 p-5">
              <p className="text-sm font-medium text-foreground">可关注产品</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {trialProducts.map((product) => (
                  <span
                    key={product}
                    className="rounded-full border border-soft-gold/22 bg-cloud-white/70 px-3 py-1 text-sm text-muted-foreground"
                  >
                    {product}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-sm leading-7 text-muted-foreground">
              本阶段复用现有预约表单与 `/api/reservations`，不新增后端字段；更多偏好可先填写在备注中。
            </p>
          </div>

          <ReserveForm variant="compact" />
        </div>
      </div>
    </section>
  );
}
