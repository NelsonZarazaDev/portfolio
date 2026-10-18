import type { IconTextInfoTags } from "@/types/iconTextInfoTags";
import type { TextGroup } from "@/types/textGroup";
import { Database } from "lucide-react";

export const textGroupStack: TextGroup[] = [
  {
    title: "Stack tecnológico",
    subtitle:
      "Tecnologías que uso para construir productos robustos, escalables y modernos.",
    description:
      "Trabajo con herramientas y frameworks modernos que me permiten diseñar, desarrollar y desplegar soluciones de alto rendimiento, escalables y seguras, desde el frontend hasta la infraestructura en la nube.",
  },
];

export const cardStack: IconTextInfoTags[] = [
  {
    title: "Backend",
    subtitle: "Frameworks y lenguajes para la lógica de negocio.",
    icon: Database,
    imageNameInfo: [
      {
        image: "",
        name: "Java",
      },
      {
        image: "",
        name: "Spring Boot",
      },
      {
        image: "",
        name: "Python",
      },
      {
        image: "",
        name: "FastAPI",
      },
    ],
  },
  // 2
  {
    title: "Base de datos",
    subtitle: "Bases de datos, caché y almacenamiento.",
    icon: Database,
    imageNameInfo: [
      {
        image: "",
        name: "PostgreSQL",
      },
      {
        image: "",
        name: "MySQL",
      },
      {
        image: "",
        name: "MongoDB",
      },
      {
        image: "",
        name: "Redis",
      },
    ],
  },
  // 3
  {
    title: "Frontend",
    subtitle: "Desarrollo de interfaces modernas y escalables.",
    icon: Database,
    imageNameInfo: [
      {
        image: "",
        name: "React",
      },
      {
        image: "",
        name: "Angular",
      },
      {
        image: "",
        name: "TypeScript",
      },
      {
        image: "",
        name: "Tailwind CSS",
      },
    ],
  },
  // 4
  {
    title: "DevOps y Cloud",
    subtitle: "Despliegue, automatización y monitoreo.",
    icon: Database,
    imageNameInfo: [
      {
        image: "",
        name: "Docker",
      },
      {
        image: "",
        name: "GitHub Actions",
      },
      {
        image: "",
        name: "AWS",
      },
    ],
  },
  // 5
  {
    title: "Arquitectura e integración",
    subtitle: "Mensajería, APIs y patrones de arquitectura.",
    icon: Database,
    imageNameInfo: [
      {
        image: "",
        name: "Kafka",
      },
      {
        image: "",
        name: "RabbitMQ",
      },
      {
        image: "",
        name: "APIs REST",
      },
      {
        image: "",
        name: "Microservicios",
      },
      {
        image: "",
        name: "Arquitectura limpia",
      },
    ],
  },
];
