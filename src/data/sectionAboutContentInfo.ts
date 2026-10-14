import type { JourneyStepInfo } from "@/types/journeyStepInfo";
import type { IconTextInfoInfo } from "@/types/iconTextInfoInfo";
import type { SectionContentInfo } from "@/types/sectionContentInfo";
import {
  ChartNoAxesColumnIncreasing,
  CodeXml,
  GraduationCap,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

export const sectionAboutContentInfo: SectionContentInfo[] = [
  {
    title: "Sobre mí",
    subtitle:
      "Arquitectura limpia, sistemas escalables y productos con impacto.",
    paragraphs: [
      "Soy Nelson Mauricio, Desarrollador Full Stack apasionado por construir backend escalable con Java, Spring Boot y Python/FastAPI, y frontend moderno con React y Angular.",
      "Me interesan los productos SaaS, la arquitectura de software, el rendimiento y la experiencia de usuario. Disfruto transformar ideas en soluciones reales que generen valor y un impacto positivo.",
    ],
  },
];

export const cardInfo: IconTextInfoInfo[] = [
  {
    icon: ChartNoAxesColumnIncreasing,
    title: "Sistemas escalables",
    description: "Diseño y desarrollo sistemas robustos pensados para crecer.",
  },
  {
    icon: Lightbulb,
    title: "Mentalidad de producto",
    description:
      "Enfocado en resolver problemas reales y generar valor para los usuarios.",
  },
  {
    icon: CodeXml,
    title: "Código limpio",
    description:
      "Creo en un código mantenible, legible y con buenas prácticas.",
  },
  {
    icon: GraduationCap,
    title: "Aprendizaje continuo",
    description:
      "Siempre explorando nuevas tecnologías y mejores formas de construir.",
  },
];

export const journeySectionContentInfo: JourneyStepInfo[] = [
  {
    data: {
      title: "Mi camino",
      description:
        "Un recorrido de aprendizaje, experiencia y crecimiento constante.",
      icon: TrendingUp,
    },
    items: [
      {
        title: "Bases sólidas",
        description:
          "Formé una base sólida en ciencias de la computación, programación y buenas prácticas de desarrollo.",
      },
      {
        title: "Proyectos reales",
        description:
          "Desarrollé proyectos personales y colaborativos que me permitieron aplicar y fortalecer mis habilidades en soluciones del mundo real.",
      },
      {
        title: "Sistemas profesionales",
        description:
          "Hoy construyo sistemas escalables y productos digitales con tecnologías modernas, enfocado en el impacto y el crecimiento continuo.",
      },
    ],
  },
];
