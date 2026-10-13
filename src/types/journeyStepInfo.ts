import type { MetricInfo } from "@/types/metricInfo";
import type { TextGroup } from "@/types/textGroup";

export interface JourneyStepInfo {
  data: MetricInfo;
  items: TextGroup[];
}
