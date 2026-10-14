import type { ButtonInfo } from "./buttonInfo";
import type { TextGroup } from "./textGroup";

export interface SectionContentInfo extends TextGroup {
  paragraphs?: string[];
  buttons?: ButtonInfo[];
}
