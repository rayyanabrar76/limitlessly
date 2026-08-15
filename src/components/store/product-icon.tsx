import {
  Sparkles,
  Globe,
  Smartphone,
  TrendingUp,
  Boxes,
  Bot,
  Search,
  MessagesSquare,
  Blocks,
  Rocket,
  MousePointerClick,
  LayoutDashboard,
  ShoppingBag,
  Store,
  Gauge,
  Code2,
  Workflow,
  Database,
  Zap,
  CreditCard,
  ShieldCheck,
  LucideProps,
} from "lucide-react";

const iconMap: Record<string, React.FC<LucideProps>> = {
  Sparkles,
  Globe,
  Smartphone,
  TrendingUp,
  Boxes,
  Bot,
  Search,
  MessagesSquare,
  Blocks,
  Rocket,
  MousePointerClick,
  LayoutDashboard,
  ShoppingBag,
  Store,
  Gauge,
  Code2,
  Workflow,
  Database,
  Zap,
  CreditCard,
  ShieldCheck,
};

export default function ProductIcon({
  name,
  ...props
}: { name: string } & LucideProps) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon {...props} />;
}
