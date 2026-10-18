import DynamicIcon from "@/components/own/DynamicIcon";
import PortfolioVisual from "@/components/own/PortfolioVisual";
import {
  section,
  badge,
  heading,
  card,
  iconBox,
} from "@/components/own/portfolioStyles";
import {
  cardInfo,
  journeySectionContentInfo,
  sectionAboutContentInfo,
} from "@/data/sectionAboutContentInfo";
import { aboutDisplay, siteIdentity } from "@/data/siteContent";

export default function AboutMe() {
  const content = sectionAboutContentInfo[0],
    journey = journeySectionContentInfo[0];
  return (
    <section
      id="acerca"
      className={`${section} grid items-center gap-10 xl:grid-cols-[.98fr_1.02fr]`}
    >
      <PortfolioVisual variant="about">
        <div className="absolute bottom-6 right-[6%] z-30 w-[80%] max-w-xs rounded-2xl border border-white bg-white/85 p-6 shadow-xl backdrop-blur">
          <strong className="block text-xl tracking-tight">
            {siteIdentity.name}
          </strong>
          <span className="text-slate-500">{siteIdentity.role}</span>
          <small className="mt-3 block text-emerald-700">
            {siteIdentity.availability}
          </small>
        </div>
      </PortfolioVisual>
      <div data-reveal className="min-w-0">
        <span className={badge}>{aboutDisplay.sectionLabel}</span>
        <h1 className={heading}>{content.title}</h1>
        <h2 className="my-5 text-2xl font-semibold leading-tight tracking-tight text-slate-500">
          {content.subtitle}
        </h2>
        {content.paragraphs?.map((paragraph) => (
          <p key={paragraph} className="mt-3 leading-relaxed text-slate-600">
            {paragraph}
          </p>
        ))}
        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {cardInfo.map((item) => (
            <article
              data-tilt
              key={item.title}
              className={`${card} flex items-start gap-3`}
            >
              <div className={iconBox}>
                <DynamicIcon icon={item.icon} />
              </div>
              <div>
                <h3 className="font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-1 text-sm leading-snug text-slate-500">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-7 border-t border-blue-100 pt-5">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-xl font-semibold">{journey.data.title}</h3>
            <span className="hidden text-xs text-blue-600 sm:block">
              {aboutDisplay.journeyLink}
            </span>
          </div>
          <ol className="mt-6 grid gap-5 sm:grid-cols-3">
            {journey.items.map((item, index) => (
              <li
                key={item.title}
                className="relative border-t border-blue-100 pt-4 before:absolute before:-top-1.5 before:size-3 before:rounded-full before:bg-blue-400 before:ring-4 before:ring-blue-50"
              >
                <b className="text-xs text-blue-500">
                  {String(index + 1).padStart(2, "0")}
                </b>
                <h4 className="my-2 text-sm font-semibold">{item.title}</h4>
                <p className="text-xs leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
