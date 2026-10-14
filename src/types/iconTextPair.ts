import type { LucideIcon } from "lucide-react";
import type { IconTextInfoInfo } from "./iconTextInfoInfo";
import type { SectionContentInfo } from "./sectionContentInfo";

export interface IconTextPair {
  card: SectionContentInfo;
  info: IconTextInfoInfo[];
  images: string[];
  icon: LucideIcon;
}
