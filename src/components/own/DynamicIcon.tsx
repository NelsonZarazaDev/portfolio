import type { LucideIcon } from "lucide-react";

type DynamicIconProps = {
  icon?: LucideIcon;
  className?: string;
};

export default function DynamicIcon({
  icon: Icon,
  className,
}: DynamicIconProps) {
  return Icon ? <Icon className={className} /> : null;
}
