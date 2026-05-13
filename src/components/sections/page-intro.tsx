type PageIntroProps = {
  title: string;
  description: string;
};

export function PageIntro({ title, description }: PageIntroProps) {
  return (
    <section className="ysj-container ysj-section flex flex-1 flex-col justify-center gap-5">
      <p className="text-sm text-muted-foreground">Yun Su Ji · Vancouver</p>
      <div className="flex max-w-3xl flex-col gap-5">
        <h1 className="ysj-title-lg text-balance">{title}</h1>
        <p className="text-lg leading-8 text-muted-foreground md:text-xl">{description}</p>
      </div>
    </section>
  );
}
