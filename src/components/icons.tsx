import {
  Leaf,
  Star,
  Sun,
  Droplet,
  Clock,
  Target,
  FlaskConical,
  LucideIcon,
} from "lucide-react";

interface IconConfig {
  label: string;
  icon: LucideIcon;
}

export const categoryIcons: Record<string, IconConfig> = {
  leaf: {
    label: "Sản phẩm làm sạch",
    icon: Leaf,
  },
  star: {
    label: "Chăm sóc cơ bản",
    icon: Star,
  },
  sun: {
    label: "Dưỡng sáng",
    icon: Sun,
  },
  droplet: {
    label: "Làm dịu và phục hồi da",
    icon: Droplet,
  },
  clock: {
    label: "Chống lão hoá và tăng đàn hồi da",
    icon: Clock,
  },
  target: {
    label: "Nám và đốm thâm",
    icon: Target,
  },
  flask: {
    label: "DERMA BASIC",
    icon: FlaskConical,
  },
};
