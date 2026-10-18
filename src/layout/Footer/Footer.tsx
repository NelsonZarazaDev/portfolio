import { footerContent, siteIdentity } from "@/data/siteContent";

export default function Footer() {
  return (
    <footer
      data-reveal
      className="mx-4 mb-5 flex max-w-[1460px] flex-wrap items-center justify-center gap-7 rounded-3xl border border-blue-100 bg-white/80 px-6 py-6 text-slate-700 sm:mx-8 xl:mx-auto xl:justify-between"
    >
      <div className="flex items-center gap-3">
        <b className="text-4xl font-black text-blue-600">
          {siteIdentity.initial}
        </b>
        <span>
          <strong className="block">{siteIdentity.name}</strong>
          <small className="text-[10px] uppercase tracking-widest">
            {siteIdentity.role}
          </small>
        </span>
      </div>
      <p className="text-center text-sm text-slate-500">
        {footerContent.message}
      </p>
      <div className="flex items-center gap-4">
        {footerContent.links.map((Icon, index) => (
          <Icon key={index} className="size-5" />
        ))}
        <span className="text-xs text-slate-500">{footerContent.location}</span>
      </div>
    </footer>
  );
}
