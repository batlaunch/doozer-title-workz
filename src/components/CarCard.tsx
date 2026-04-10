import type { LucideIcon } from "lucide-react";

interface CarCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  label?: string | null;
}

const CarCard = ({ icon: Icon, title, desc, label }: CarCardProps) => (
  <div className="relative group">
    {/* Car body */}
    <svg
      viewBox="0 0 400 200"
      className="w-full h-auto drop-shadow-lg group-hover:drop-shadow-xl transition-all"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="carPaint" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(25, 90%, 55%)" />
          <stop offset="100%" stopColor="hsl(20, 95%, 48%)" />
        </linearGradient>
        <linearGradient id="windowGlass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(200, 30%, 75%)" />
          <stop offset="100%" stopColor="hsl(200, 20%, 60%)" />
        </linearGradient>
      </defs>

      {/* Main body - muscle car profile */}
      <path
        d="M30,140 L30,110 L50,110 L60,100 L80,80 L120,60 L160,50 L200,48 L260,48 L300,50 L330,58 L350,70 L365,85 L370,100 L375,110 L380,110 L380,140 L350,140 Q350,140 350,140 L310,140 L290,140 Q290,155 275,155 Q260,155 260,140 L150,140 Q150,155 135,155 Q120,155 120,140 L30,140 Z"
        fill="url(#carPaint)"
        stroke="hsl(20, 80%, 35%)"
        strokeWidth="1.5"
      />

      {/* Windshield */}
      <path
        d="M155,55 L195,52 L260,52 L285,54 L300,58 L290,90 L270,95 L160,95 L150,90 Z"
        fill="url(#windowGlass)"
        stroke="hsl(20, 70%, 40%)"
        strokeWidth="1"
        opacity="0.7"
      />

      {/* Window divider */}
      <line x1="225" y1="52" x2="220" y2="95" stroke="hsl(20, 70%, 40%)" strokeWidth="2" />

      {/* Headlight */}
      <ellipse cx="370" cy="105" rx="6" ry="8" fill="hsl(45, 100%, 80%)" stroke="hsl(20, 60%, 40%)" strokeWidth="1" />

      {/* Taillight */}
      <rect x="30" y="105" width="8" height="12" rx="2" fill="hsl(0, 80%, 50%)" stroke="hsl(0, 60%, 35%)" strokeWidth="0.5" />

      {/* Front bumper */}
      <path d="M365,108 L385,108 L385,130 L375,135 L365,130 Z" fill="hsl(0, 0%, 75%)" stroke="hsl(0, 0%, 55%)" strokeWidth="1" />

      {/* Rear bumper */}
      <path d="M20,108 L38,108 L38,130 L30,135 L20,130 Z" fill="hsl(0, 0%, 75%)" stroke="hsl(0, 0%, 55%)" strokeWidth="1" />

      {/* Hood scoop */}
      <path d="M300,65 L340,72 L340,78 L300,72 Z" fill="hsl(20, 80%, 42%)" opacity="0.6" />

      {/* Body line */}
      <path d="M50,110 L370,110" stroke="hsl(20, 80%, 42%)" strokeWidth="1" opacity="0.5" />

      {/* Front wheel */}
      <circle cx="135" cy="140" r="22" fill="hsl(0, 0%, 20%)" />
      <circle cx="135" cy="140" r="18" fill="hsl(0, 0%, 30%)" />
      <circle cx="135" cy="140" r="12" fill="hsl(0, 0%, 70%)" />
      <circle cx="135" cy="140" r="8" fill="hsl(0, 0%, 40%)" />
      {/* Wheel spokes */}
      {[0, 72, 144, 216, 288].map((angle) => (
        <line
          key={angle}
          x1={135 + 8 * Math.cos((angle * Math.PI) / 180)}
          y1={140 + 8 * Math.sin((angle * Math.PI) / 180)}
          x2={135 + 17 * Math.cos((angle * Math.PI) / 180)}
          y2={140 + 17 * Math.sin((angle * Math.PI) / 180)}
          stroke="hsl(0, 0%, 75%)"
          strokeWidth="2"
        />
      ))}

      {/* Rear wheel */}
      <circle cx="275" cy="140" r="22" fill="hsl(0, 0%, 20%)" />
      <circle cx="275" cy="140" r="18" fill="hsl(0, 0%, 30%)" />
      <circle cx="275" cy="140" r="12" fill="hsl(0, 0%, 70%)" />
      <circle cx="275" cy="140" r="8" fill="hsl(0, 0%, 40%)" />
      {[0, 72, 144, 216, 288].map((angle) => (
        <line
          key={angle}
          x1={275 + 8 * Math.cos((angle * Math.PI) / 180)}
          y1={140 + 8 * Math.sin((angle * Math.PI) / 180)}
          x2={275 + 17 * Math.cos((angle * Math.PI) / 180)}
          y2={140 + 17 * Math.sin((angle * Math.PI) / 180)}
          stroke="hsl(0, 0%, 75%)"
          strokeWidth="2"
        />
      ))}

      {/* Wheel well arches */}
      <path d="M110,140 Q110,115 135,115 Q160,115 160,140" fill="none" stroke="hsl(20, 80%, 35%)" strokeWidth="2" />
      <path d="M250,140 Q250,115 275,115 Q300,115 300,140" fill="none" stroke="hsl(20, 80%, 35%)" strokeWidth="2" />
    </svg>

    {/* Content overlay positioned on the car body */}
    <div className="absolute inset-0 flex items-center px-[15%] pb-[8%]">
      <div className="flex items-start gap-3 max-w-full">
        <div className="rounded-lg bg-primary/20 p-2 shrink-0 backdrop-blur-sm">
          <Icon className="w-5 h-5 text-primary-foreground" />
        </div>
        <div className="min-w-0">
          <h3 className="text-sm md:text-base font-bold text-primary-foreground leading-tight mb-1 drop-shadow-sm">
            {title}
          </h3>
          <p className="text-xs text-primary-foreground/80 leading-snug drop-shadow-sm line-clamp-3">
            {desc}
          </p>
          {label && (
            <p className="text-[10px] text-primary-foreground/60 italic mt-1">{label}</p>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default CarCard;
