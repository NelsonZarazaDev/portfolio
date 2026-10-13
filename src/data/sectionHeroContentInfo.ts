import type { SectionContentInfo } from "@/types/sectionContentInfo";
import type { MetricInfo } from "@/types/metricInfo";
import {
  ChartNoAxesColumnIncreasing,
  CodeXml,
  Folder,
  UserRound,
  Send,
} from "lucide-react";
import type { ImageNameInfo } from "@/types/imageNameInfo";

export const sectionHeroContentInfo: SectionContentInfo[] = [
  {
    title: "Nelson Mauricio",
    subtitle: "Ingeniero de Sistemas | Desarrollador Full Stack",
    paragraphs: [
      "Diseño y desarrollo soluciones de software de extremo a extremo, desde la arquitectura y la lógica de negocio hasta interfaces intuitivas y funcionales.",
      "Mi enfoque va más allá de escribir código: busco comprender cada problema, tomar decisiones técnicas fundamentadas y construir productos mantenibles, preparados para evolucionar junto con las necesidades del negocio.",
    ],
    buttons: [
      {
        text: "Ver proyectos",
        link: "",
        icon: Folder,
      },
      {
        text: "Contacto",
        link: "",
        icon: Send,
      },
    ],
  },
];

export const metricInfo: MetricInfo[] = [
  {
    icon: UserRound,
    title: "3+",
    description: "Años de experiencia",
  },
  {
    icon: Folder,
    title: "10+",
    description: "Proyectos",
  },
  {
    icon: ChartNoAxesColumnIncreasing,
    title: "Sistemas",
    description: "escalables",
  },
  {
    icon: CodeXml,
    title: "Open Source",
    description: "Contribuciones y aprendizaje",
  },
];

export const stackInfo: ImageNameInfo[] = [
  { image: "", name: "Java" },
  { image: "", name: "Spring Boot" },
  { image: "", name: "Python" },
  { image: "", name: "FastApi" },
  { image: "", name: "PostgreSQL" },
  { image: "", name: "Docker" },
];
