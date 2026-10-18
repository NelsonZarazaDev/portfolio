import { ArrowRight } from "lucide-react";
import { contactContent, siteIdentity } from "@/data/siteContent";
import PortfolioVisual from "@/components/own/PortfolioVisual";
import {
  section,
  badge,
  heading,
  card,
  iconBox,
} from "@/components/own/portfolioStyles";

export default function Contact() {
  return (
    <section
      id="contacto"
      className={`${section} grid items-center gap-10 bg-linear-to-br from-white to-blue-50 lg:grid-cols-[1.04fr_.96fr]`}
    >
      <div data-reveal className="min-w-0">
        <span className={badge}>{contactContent.sectionLabel}</span>
        <h1 className={`${heading} max-sm:text-[clamp(2rem,11vw,3rem)]`}>
          {contactContent.title[0]}
          <br />
          <em className="not-italic text-blue-600">
            {contactContent.title[1]}
          </em>
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-slate-500">
          {contactContent.description}
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {contactContent.items.map((item) => {
            const Icon = item.icon;
            return (
              <a
                data-tilt
                href={item.href}
                key={item.title}
                className={`${card} flex items-center gap-3`}
              >
                <div className={iconBox}>
                  <Icon />
                </div>
                <div className="min-w-0">
                  <strong className="block">{item.title}</strong>
                  <small className="mt-1 block break-words text-slate-500">
                    {item.value}
                  </small>
                </div>
                <ArrowRight className="ml-auto size-4 shrink-0" />
              </a>
            );
          })}
        </div>
      </div>
      <PortfolioVisual variant="contact">
        <div className="absolute right-4 top-8 z-30 max-w-40 rotate-6 rounded-2xl border border-white bg-white/80 p-4 text-sm text-slate-600 shadow-lg">
          <i className="mr-2 inline-block size-3 rounded-full bg-emerald-500" />
          {contactContent.availability}
        </div>
        <div className="absolute inset-x-[12%] bottom-20 z-30 rounded-2xl border border-white bg-white/90 p-4 text-center">
          <strong className="block text-xl tracking-tight">
            {siteIdentity.name}
          </strong>
          <span className="text-xs tracking-widest text-blue-700">
            {siteIdentity.role}
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 z-30 flex justify-around gap-2 rounded-t-2xl border border-white bg-white/90 p-4">
          {contactContent.values.map(([title, detail]) => (
            <span key={title} className="text-xs font-semibold">
              {title}
              <small className="mt-1 block font-normal text-slate-500">
                {detail}
              </small>
            </span>
          ))}
        </div>
      </PortfolioVisual>
    </section>
  );
}
