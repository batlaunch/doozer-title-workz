import type { LucideIcon } from "lucide-react";

interface CarCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  label?: string | null;
}

const CarCard = ({ icon: Icon, title, desc, label }: CarCardProps) => (
  <div className="relative group">
    <svg
      viewBox="0 0 520 280"
      className="w-full h-auto drop-shadow-lg group-hover:drop-shadow-xl transition-all"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="mustangPaint" x1="0" y1="0" x2="1" y2="0.5">
          <stop offset="0%" stopColor="hsl(25, 90%, 52%)" />
          <stop offset="100%" stopColor="hsl(20, 95%, 46%)" />
        </linearGradient>
        <linearGradient id="mustangGlass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(210, 25%, 80%)" />
          <stop offset="100%" stopColor="hsl(210, 20%, 55%)" />
        </linearGradient>
      </defs>

      {/* Mustang fastback body */}
      <path
        d="
          M 25,195
          L 25,160
          L 35,155
          L 40,140
          L 45,130
          L 55,120
          L 70,108
          L 90,95
          L 130,72
          L 170,58
          L 210,50
          L 260,46
          L 310,44
          L 350,44
          L 380,46
          L 410,52
          L 435,62
          L 455,78
          L 470,95
          L 480,110
          L 488,130
          L 492,145
          L 495,160
          L 498,170
          L 498,195
          L 440,195
          L 420,195
          L 360,195
          L 170,195
          L 110,195
          L 85,195
          L 25,195
          Z
        "
        fill="url(#mustangPaint)"
        stroke="hsl(20, 70%, 32%)"
        strokeWidth="2"
      />

      {/* Rear quarter panel line (fastback slope) */}
      <path
        d="M 130,72 L 170,58 L 210,50 L 260,46 L 300,44"
        fill="none"
        stroke="hsl(20, 80%, 38%)"
        strokeWidth="1"
        opacity="0.6"
      />

      {/* Windshield - classic Mustang shape */}
      <path
        d="
          M 280,50
          L 350,48
          L 395,54
          L 420,65
          L 440,80
          L 430,120
          L 415,125
          L 290,125
          L 275,120
          L 270,105
          Z
        "
        fill="url(#mustangGlass)"
        opacity="0.65"
        stroke="hsl(20, 60%, 38%)"
        strokeWidth="1.5"
      />

      {/* Rear window - fastback style */}
      <path
        d="
          M 140,78
          L 200,58
          L 255,50
          L 270,50
          L 265,105
          L 250,118
          L 160,118
          L 148,110
          Z
        "
        fill="url(#mustangGlass)"
        opacity="0.55"
        stroke="hsl(20, 60%, 38%)"
        strokeWidth="1.5"
      />

      {/* Window divider / B-pillar */}
      <line x1="270" y1="50" x2="275" y2="122" stroke="hsl(20, 60%, 32%)" strokeWidth="4" />

      {/* Body character line */}
      <path d="M 45,145 L 492,145" stroke="hsl(20, 75%, 38%)" strokeWidth="1.2" opacity="0.5" />

      {/* Lower body trim */}
      <path d="M 40,165 L 495,165" stroke="hsl(20, 60%, 35%)" strokeWidth="1" opacity="0.3" />

      {/* Hood scoop */}
      <path d="M 400,60 L 445,75 L 445,82 L 400,68 Z" fill="hsl(20, 80%, 38%)" opacity="0.5" />

      {/* Front fender vent */}
      <path d="M 450,100 L 470,100 L 468,108 L 448,108 Z" fill="hsl(20, 70%, 35%)" opacity="0.4" />

      {/* Headlight */}
      <ellipse cx="490" cy="140" rx="5" ry="10" fill="hsl(45, 100%, 85%)" stroke="hsl(0, 0%, 60%)" strokeWidth="1" />

      {/* Taillight (triple) */}
      <rect x="27" y="135" width="10" height="6" rx="1" fill="hsl(0, 85%, 45%)" />
      <rect x="27" y="143" width="10" height="6" rx="1" fill="hsl(0, 85%, 50%)" />
      <rect x="27" y="151" width="10" height="6" rx="1" fill="hsl(0, 85%, 55%)" />

      {/* Front bumper */}
      <path d="M 488,150 L 505,150 L 508,170 L 505,190 L 495,195 L 488,190 Z" fill="hsl(0, 0%, 78%)" stroke="hsl(0, 0%, 55%)" strokeWidth="1" />

      {/* Rear bumper */}
      <path d="M 15,150 L 32,150 L 32,190 L 25,195 L 15,190 Z" fill="hsl(0, 0%, 78%)" stroke="hsl(0, 0%, 55%)" strokeWidth="1" />

      {/* Front wheel well */}
      <path d="M 350,195 Q 345,155 385,155 Q 425,155 420,195" fill="hsl(20, 70%, 32%)" stroke="hsl(20, 60%, 28%)" strokeWidth="1.5" />

      {/* Rear wheel well */}
      <path d="M 85,195 Q 80,155 120,155 Q 160,155 155,195" fill="hsl(20, 70%, 32%)" stroke="hsl(20, 60%, 28%)" strokeWidth="1.5" />

      {/* Front wheel */}
      <circle cx="385" cy="195" r="30" fill="hsl(0, 0%, 15%)" />
      <circle cx="385" cy="195" r="25" fill="hsl(0, 0%, 25%)" />
      <circle cx="385" cy="195" r="16" fill="hsl(0, 0%, 72%)" />
      <circle cx="385" cy="195" r="10" fill="hsl(0, 0%, 35%)" />
      <circle cx="385" cy="195" r="4" fill="hsl(0, 0%, 55%)" />
      {[0, 72, 144, 216, 288].map((angle) => (
        <line
          key={`fw-${angle}`}
          x1={385 + 10 * Math.cos((angle * Math.PI) / 180)}
          y1={195 + 10 * Math.sin((angle * Math.PI) / 180)}
          x2={385 + 24 * Math.cos((angle * Math.PI) / 180)}
          y2={195 + 24 * Math.sin((angle * Math.PI) / 180)}
          stroke="hsl(0, 0%, 78%)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      ))}

      {/* Rear wheel */}
      <circle cx="120" cy="195" r="30" fill="hsl(0, 0%, 15%)" />
      <circle cx="120" cy="195" r="25" fill="hsl(0, 0%, 25%)" />
      <circle cx="120" cy="195" r="16" fill="hsl(0, 0%, 72%)" />
      <circle cx="120" cy="195" r="10" fill="hsl(0, 0%, 35%)" />
      <circle cx="120" cy="195" r="4" fill="hsl(0, 0%, 55%)" />
      {[0, 72, 144, 216, 288].map((angle) => (
        <line
          key={`rw-${angle}`}
          x1={120 + 10 * Math.cos((angle * Math.PI) / 180)}
          y1={195 + 10 * Math.sin((angle * Math.PI) / 180)}
          x2={120 + 24 * Math.cos((angle * Math.PI) / 180)}
          y2={195 + 24 * Math.sin((angle * Math.PI) / 180)}
          stroke="hsl(0, 0%, 78%)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      ))}

      {/* Ground shadow */}
      <ellipse cx="260" cy="228" rx="220" ry="8" fill="hsl(0, 0%, 0%)" opacity="0.08" />
    </svg>

    {/* Content overlay - positioned in the body area between wheels */}
    <div className="absolute top-[48%] left-[12%] right-[18%] -translate-y-1/2 flex items-start gap-3">
      <div className="rounded-md bg-primary/30 p-2 shrink-0 backdrop-blur-sm">
        <Icon className="w-5 h-5 text-primary-foreground" />
      </div>
      <div className="min-w-0">
        <h3 className="text-sm md:text-base font-bold text-primary-foreground leading-tight mb-1 drop-shadow-md">
          {title}
        </h3>
        <p className="text-xs md:text-sm text-primary-foreground/85 leading-snug drop-shadow-md line-clamp-3">
          {desc}
        </p>
        {label && (
          <p className="text-[10px] text-primary-foreground/60 italic mt-1">{label}</p>
        )}
      </div>
    </div>
  </div>
);

export default CarCard;
