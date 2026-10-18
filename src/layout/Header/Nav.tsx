import { Button } from "@/components/ui/button";
import { navigation } from "@/data/navigation";
import { siteIdentity } from "@/data/siteContent";
import { Download } from "lucide-react";
import { useState } from "react";

export default function Nav() {
  const targets = ["inicio", "acerca", "proyectos", "stack", "contacto"],
    [active, setActive] = useState(0);
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex h-20 items-center px-6 md:px-8 before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-b before:from-white/75 before:via-white/40 before:to-transparent before:backdrop-blur-md before:[mask-image:linear-gradient(to_bottom,#000_0%,#000_55%,transparent_100%)]">
      <div className="mx-auto flex w-full max-w-[1524px] items-center justify-between">
      <Button
        onClick={() =>
          document
            .getElementById("inicio")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="bg-transparent place-items-center px-0 text-4xl font-black text-sky-400"
      >
        {siteIdentity.initial}
      </Button>

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

      <Button className="rounded-full py-4 px-4 bg-slate-950  text-white hover:text-black shadow-xl hover:bg-sky-300">
        Cv <Download />
      </Button>
      </div>
    </nav>
  );
}
