import type { LucideIcon } from "lucide-react";

interface CarCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  label?: string | null;
}

const CarCard = ({ icon: Icon, title, desc, label }: CarCardProps) => (
  <div className="rounded-lg border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="rounded-md bg-primary/10 p-3 w-fit mb-4">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    {label && (
      <p className="text-xs text-muted-foreground italic mt-2">{label}</p>
    )}
  </div>
);

export default CarCard;
