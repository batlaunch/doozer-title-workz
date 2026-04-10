import type { LucideIcon } from "lucide-react";

interface CarCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  label?: string | null;
}

const CarCard = ({ icon: Icon, title, desc, label }: CarCardProps) => (
  <div className="rounded-lg border-2 border-primary/20 bg-card p-6 shadow-sm hover:shadow-lg transition-all hover:border-secondary/50 group">
    <div className="rounded-md bg-primary/15 p-3 w-fit mb-4 group-hover:bg-primary/25 transition-colors">
      <Icon className="w-6 h-6 text-secondary" />
    </div>
    <h3 className="text-lg font-bold text-primary mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    {label && (
      <p className="text-xs text-muted-foreground italic mt-2">{label}</p>
    )}
  </div>
);

export default CarCard;
