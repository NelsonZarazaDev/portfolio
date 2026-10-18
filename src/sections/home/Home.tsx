import { Button } from "@/components/ui/button";
import DynamicIcon from "@/components/own/DynamicIcon";
import PortfolioVisual from "@/components/own/PortfolioVisual";
import {
  section,
  badge,
  heading,
  pill,
} from "@/components/own/portfolioStyles";
import {
  metricInfo,
  sectionHeroContentInfo,
  stackInfo,
} from "@/data/sectionHeroContentInfo";
import { homeDisplay } from "@/data/siteContent";

export default function Home() {
  const content = sectionHeroContentInfo[0];
  return (
    <section
      id="inicio"
      className={`${section} grid items-center gap-10 pt-28 lg:min-h-screen lg:grid-cols-[1fr_1.08fr]`}
    >
      <div data-reveal className="min-w-0">
        <span className={badge}>
          <i className="mr-2 size-2 rounded-full bg-emerald-500" />
          {homeDisplay.availability}
        </span>
        <h1 className={heading}>{content.title}</h1>
        <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-slate-500 xl:text-3xl">
          {content.subtitle}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          {content.paragraphs?.[0]}
        </p>
        <div className="my-8 flex flex-wrap gap-4">
          {content.buttons?.map((button, index) => (
            <Button
              key={button.text}
              onClick={() =>
                document
                  .getElementById(index ? "contacto" : "proyectos")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`h-auto rounded-full px-6 py-4 text-base transition-transform motion-safe:hover:-translate-y-1 ${index ? "border border-slate-200 bg-white text-slate-900 hover:bg-blue-50" : "bg-slate-950 text-white shadow-lg hover:bg-blue-800"}`}
            >
              <DynamicIcon icon={button.icon} />
              {button.text}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {metricInfo.map((metric) => (
            <div
              key={metric.title}
              className="grid grid-cols-[24px_1fr] gap-x-2 [&>svg]:row-span-2 [&>svg]:size-5 [&>svg]:text-slate-600"
            >
              <DynamicIcon icon={metric.icon} />
              <strong className="text-base">{metric.title}</strong>
              <span className="text-xs text-slate-500">
                {metric.description}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3 border-t border-blue-100 pt-6">
          {stackInfo.map((technology) => (
            <span key={technology.name} className={pill}>
              {technology.name}
            </span>
          ))}
        </div>
      </div>
      <PortfolioVisual />
    </section>
  );
}
