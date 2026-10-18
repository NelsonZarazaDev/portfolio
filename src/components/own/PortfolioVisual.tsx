import { homeDisplay, siteIdentity } from "@/data/siteContent";

export default function PortfolioVisual({
  variant = "hero",
  children,
}: {
  variant?: "hero" | "about" | "contact";
  children?: React.ReactNode;
}) {
  const mascot = variant === "contact";
  return (
    <div
      data-reveal
      className="relative isolate min-h-[470px] overflow-hidden rounded-[36px] bg-radial from-blue-200/80 via-blue-50 to-transparent sm:min-h-[620px] xl:min-h-[720px]"
    >
      <div className="absolute inset-x-[12%] inset-y-[10%] rounded-[32px] border border-white bg-white/20" />
      <div
        data-float
        className="absolute left-[12%] top-10 z-10 size-20 rounded-full bg-radial-[at_30%_25%] from-white via-blue-300 to-blue-600 shadow-xl shadow-blue-500/20"
      />
      <div
        data-float
        className="absolute bottom-32 right-5 z-10 size-12 rounded-full bg-radial-[at_30%_25%] from-white via-blue-300 to-blue-600"
      />
      <div
        data-orbit
        className="pointer-events-none absolute inset-x-[-20%] top-[30%] h-[42%] -rotate-25 rounded-[50%] border-2 border-white/90 shadow-[inset_0_0_16px_#8db9fa55]"
      />
      <div
        data-float
        className="absolute left-[5%] top-[28%] z-20 grid size-20 -rotate-8 place-items-center rounded-2xl border border-white bg-white/65 text-3xl font-bold text-blue-500 shadow-lg backdrop-blur-sm sm:size-28"
      >
        {homeDisplay.visualLabels.code}
      </div>
      <div
        data-float
        className="absolute right-[3%] top-[38%] z-20 grid size-20 rotate-8 place-items-center rounded-2xl border border-white bg-white/65 text-4xl text-blue-500 shadow-lg backdrop-blur-sm"
      >
        {homeDisplay.visualLabels.cloud}
      </div>
      <div
        data-float
        className="absolute bottom-12 left-8 size-28 rounded-2xl border border-white bg-linear-to-br from-white to-blue-300/70 shadow-xl"
      />
      <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center">
        <img
          data-float={mascot ? "" : undefined}
          src={mascot ? "/images/nelson-mascot.png" : "/images/nelson-hero.png"}
          alt={siteIdentity.name}
          className={`w-[90%] max-w-[590px] object-contain ${mascot ? "mb-20 drop-shadow-xl" : "[mask-image:linear-gradient(to_bottom,black_82%,transparent)]"}`}
        />
      </div>
      {children}
    </div>
  );
}
