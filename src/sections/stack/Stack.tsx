import DynamicIcon from "@/components/own/DynamicIcon";
import {
  section,
  badge,
  heading,
  card,
  iconBox,
  pill,
} from "@/components/own/portfolioStyles";
import { cardStack, textGroupStack } from "@/data/sectionStackContentInfo";
import { siteIdentity, stackDisplay } from "@/data/siteContent";
import {
  ArrowRight,
  Cloud,
  CodeXml,
  Database,
  Layers,
  Monitor,
} from "lucide-react";

const architectureIcons = [Monitor, CodeXml, Layers, Database, Cloud];
export default function Stack() {
  const content = textGroupStack[0];
  return (
    <section
      id="stack"
      className={`${section} grid gap-8 bg-linear-to-br from-white to-blue-50 xl:grid-cols-[.8fr_1.2fr]`}
    >
      <header data-reveal>
        <span className={badge}>{stackDisplay.sectionLabel}</span>
        <h1 className={heading}>{content.title}</h1>
        <h2 className="my-5 text-2xl font-semibold leading-tight tracking-tight text-slate-500">
          {content.subtitle}
        </h2>
        <p className="leading-relaxed text-slate-500">{content.description}</p>
      </header>
      <div
        data-reveal
        aria-label={stackDisplay.architectureLabel}
        className="relative isolate flex min-w-0 items-center overflow-hidden rounded-3xl bg-radial from-blue-200/70 to-transparent py-16"
      >
        <div
          data-orbit
          className="absolute inset-x-0 inset-y-8 -z-10 rounded-[50%] border-2 border-white"
        />
        <div
          data-float
          className="absolute right-1/4 top-1 size-16 rounded-full bg-radial-[at_30%_25%] from-white via-blue-300 to-blue-600"
        />
        <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-5">
          {stackDisplay.architecture.map(([title, subtitle], index) => {
            const Icon = architectureIcons[index];
            return (
              <div
                key={title}
                className="grid justify-items-center rounded-2xl border border-white bg-white/70 px-2 py-5 text-center shadow-lg shadow-blue-900/5 backdrop-blur"
              >
                <Icon className="mb-3 size-8 text-blue-500" />
                <strong className="text-xs">{title}</strong>
                <small className="mt-1 text-[11px] text-slate-500">
                  {subtitle}
                </small>
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:col-span-2 xl:grid-cols-3">
        {cardStack.map((item) => (
          <article data-reveal data-tilt key={item.title} className={card}>
            <div className="flex items-start gap-3">
              <div className={iconBox}>
                <DynamicIcon icon={item.icon} />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{item.subtitle}</p>
              </div>
              <ArrowRight className="ml-auto size-4 shrink-0 text-blue-500" />
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.imageNameInfo.map((technology) => (
                <span key={technology.name} className={pill}>
                  {technology.image && (
                    <img
                      src={technology.image}
                      alt=""
                      className="size-6 object-contain"
                    />
                  )}
                  {technology.name}
                </span>
              ))}
            </div>
          </article>
        ))}
        <aside
          data-reveal
          data-tilt
          className={`${card} relative grid grid-cols-[1fr_38%] items-center gap-2 bg-linear-to-br from-blue-50 to-blue-100`}
        >
          <div className="min-w-0">
            <small className="text-[10px] text-blue-700">
              {stackDisplay.outro.eyebrow}
            </small>
            <h3 className="my-3 text-2xl font-semibold leading-tight tracking-tight">
              {stackDisplay.outro.title[0]}
              <br />
              {stackDisplay.outro.title[1]}
            </h3>
            <p className="text-xs leading-relaxed text-slate-500">
              {stackDisplay.outro.description}
            </p>
          </div>
          <img
            data-float
            src="/images/nelson-stack-mascot.png"
            alt={siteIdentity.name}
            className="w-full drop-shadow-xl"
          />
        </aside>
      </div>
    </section>
  );
}
