import { footerContent, siteIdentity } from "@/data/siteContent";

export default function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-[1524px] items-center justify-center gap-7 bg-transparent px-6 py-2 text-slate-700 md:px-8 xl:justify-between">
      <div className="flex items-center gap-3">
        <b className="text-4xl font-black text-sky-400">
          {siteIdentity.initial}
        </b>
        <span className="flex flex-col">
          <strong>{siteIdentity.name}</strong>
          <small className="text-[10px] uppercase tracking-widest">
            {siteIdentity.role}
          </small>
        </span>
      </div>
      <p className="text-center text-sm text-slate-500">
        {footerContent.message} &copy; {new Date().getFullYear()}
      </p>
      <div className="flex items-center gap-4">
        <span className="text-xs text-slate-500">{footerContent.location}</span>
      </div>
    </footer>
  );
}
