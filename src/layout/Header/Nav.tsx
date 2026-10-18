import { Button } from "@/components/ui/button";
import { navigation } from "@/data/navigation";
import { siteIdentity } from "@/data/siteContent";
import { Download } from "lucide-react";
import { useState } from "react";

export default function Nav() {
  const targets = ["inicio", "acerca", "proyectos", "stack", "contacto"],
    [active, setActive] = useState(0);
  return (
    <nav className="fixed inset-x-0 top-0 z-50 mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
      <button
        onClick={() =>
          document
            .getElementById("inicio")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-blue-700 to-sky-300 text-xl font-black text-white shadow-lg"
      >
        {siteIdentity.initial}
      </button>
      <div className="hidden items-center gap-1 rounded-full border border-white/80 bg-white/70 p-1 shadow-sm backdrop-blur md:flex">
        {navigation.map((item, i) => (
          <Button
            variant="ghost"
            key={item.name}
            onClick={() => {
              setActive(i);
              document
                .getElementById(targets[i])
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`rounded-full px-4 text-sm ${active === i ? "bg-blue-50 text-blue-600" : "text-slate-700"}`}
          >
            {item.name}
          </Button>
        ))}
      </div>
      <Button className="rounded-full bg-slate-950 px-5 py-5 text-white shadow-xl hover:bg-blue-700">
        Cv <Download />
      </Button>
    </nav>
  );
}
