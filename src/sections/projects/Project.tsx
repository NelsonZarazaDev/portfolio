import DynamicIcon from "@/components/own/DynamicIcon";
import {
  section,
  heading,
  card,
  iconBox,
  pill,
} from "@/components/own/portfolioStyles";
import { projects, textGroupProject } from "@/data/sectionProjectContentInfo";
import { projectDisplay } from "@/data/siteContent";
import { ArrowRight } from "lucide-react";

export default function Project() {
  const content = textGroupProject[0];
  return (
    <section
      id="proyectos"
      className={`${section} bg-linear-to-b from-transparent via-blue-50/30 to-transparent`}
    >
      <header
        data-reveal
        className="mb-9 grid items-center gap-6 lg:grid-cols-[1fr_30%]"
      >
        <div>
          <h1 className={heading}>
            {content.title} <em className="not-italic">{content.subtitle}</em>
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-500">
            {content.description}
          </p>
        </div>
        <div
          aria-hidden="true"
          className="relative hidden h-48 items-center justify-center gap-4 rounded-[50%] border-2 border-white bg-blue-100/40 lg:flex"
        >
          {projectDisplay.decoration.map((label) => (
            <b
              data-float
              key={label}
              className="grid size-20 place-items-center rounded-2xl border border-white bg-white/70 text-3xl text-blue-500 shadow-lg"
            >
              {label}
            </b>
          ))}
        </div>
      </header>
      <div className="grid gap-4 xl:grid-cols-2">
        {projects.map((project, index) => (
          <article
            data-reveal
            data-tilt
            key={index}
            className={`${card} grid gap-4 overflow-hidden ${index === 0 ? "xl:row-span-3" : "sm:grid-cols-[1.35fr_1fr]"}`}
          >
            <div className="min-w-0">
              <div className="flex items-center gap-3">
                <div className={iconBox}>
                  <DynamicIcon icon={project.icon} />
                </div>
                <div className="min-w-0">
                  <h2 className="text-xl font-semibold tracking-tight">
                    {project.card.title}
                  </h2>
                  <h3 className="mt-1 text-xs text-slate-500">
                    {project.card.subtitle}
                  </h3>
                </div>
                <ArrowRight
                  aria-hidden="true"
                  className="ml-auto size-5 shrink-0 text-slate-600"
                />
              </div>
              <p className="my-5 text-sm leading-relaxed text-slate-600">
                {project.card.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.info.map((tag, tagIndex) => (
                  <span key={tagIndex} className={pill}>
                    <DynamicIcon icon={tag.icon} />
                    {tag.title}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.card.buttons?.map((button, buttonIndex) =>
                  button.link ? (
                    <a href={button.link} key={buttonIndex} className={pill}>
                      <DynamicIcon icon={button.icon} />
                      {button.text}
                    </a>
                  ) : (
                    <button key={buttonIndex} type="button" className={pill}>
                      <DynamicIcon icon={button.icon} />
                      {button.text}
                    </button>
                  ),
                )}
              </div>
            </div>
            <div className="min-w-0 overflow-hidden rounded-xl border border-blue-100 bg-blue-50">
              <img
                src={
                  project.images.find(Boolean) ||
                  "/images/opticlinic-dashboard.png"
                }
                alt={project.card.title}
                className={`w-full object-cover object-top ${index === 0 ? "h-auto min-h-64" : "h-52 sm:h-full"}`}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
