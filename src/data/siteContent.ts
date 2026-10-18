import { AtSign, CodeXml, Mail, MapPin } from "lucide-react";

export const siteIdentity = {
  initial: "N",
  name: "Nelson Mauricio",
  role: "Desarrollador Full Stack",
  availability: "Abierto a oportunidades",
};

export const homeDisplay = {
  availability: "Disponible para oportunidades",
  visualLabels: { code: "</>", cloud: "☁", ideas: ["Ideas", "Sistemas", "Productos"] },
};

export const aboutDisplay = {
  sectionLabel: "01 — Acerca de mí",
  journeyLink: "Un vistazo a mi recorrido →",
};

export const projectDisplay = {
  sectionLabel: "02 — Proyectos",
  decoration: ["</>", "☁", "▥"],
  viewProject: "Ver proyecto",
};

export const stackDisplay = {
  sectionLabel: "03 — Herramientas y tecnologías",
  architectureLabel: "Arquitectura de software",
  architecture: [
    ["Cliente", "Web y apps"],
    ["API Gateway", "APIs REST"],
    ["Microservicios", "Lógica de negocio"],
    ["Datos", "Bases y caché"],
    ["Cloud", "Despliegue"],
  ],
  outro: {
    eyebrow: "✦ CONSTRUYENDO SISTEMAS ESCALABLES",
    title: ["Stack moderno.", "Impacto real."],
    description: "Las herramientas adecuadas para crear productos seguros, escalables y de alto rendimiento.",
  },
};

export const contactContent = {
  sectionLabel: "04 — Conectemos",
  title: ["Construyamos", "algo grande"],
  description: "Estoy abierto a colaboraciones, oportunidades laborales, proyectos freelance y productos digitales. Si tienes una idea o un reto, ¡hablemos!",
  visualLabel: "Nelson Mauricio disponible para nuevos proyectos",
  code: "</>",
  availability: "Disponible para nuevos proyectos",
  items: [
    { title: "Correo", value: "nelsonmauricio.dev@gmail.com", icon: Mail, href: "mailto:nelsonmauricio.dev@gmail.com" },
    { title: "LinkedIn", value: "linkedin.com/in/nelson-mauricio", icon: AtSign, href: "#" },
    { title: "GitHub", value: "github.com/NelsonZarazaDev", icon: CodeXml, href: "#" },
    { title: "Ubicación", value: "Ocaña, Colombia", icon: MapPin, href: "#" },
  ],
};

export const footerContent = {
  message: "Transformando ideas en soluciones digitales",
  location: "Ocaña, Colombia",
};
