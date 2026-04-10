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
      viewBox="0 0 600 300"
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

      {/* Blocky Mustang body */}
      <path
        d="
          M 20,220
          L 20,160
          L 25,155
          L 30,130
          L 40,110
          L 60,90
          L 90,72
          L 140,55
          L 190,46
          L 240,42
          L 290,40
          L 340,40
          L 390,42
          L 440,48
          L 480,58
          L 510,72
          L 530,90
          L 545,110
          L 555,120
          L 570,120
          L 580,125
          L 580,160
          L 580,220
          L 500,220
          L 410,220
          L 190,220
          L 100,220
          L 20,220
          Z
        "
        fill="url(#mustangPaint)"
        stroke="hsl(20, 70%, 32%)"
        strokeWidth="2"
        strokeLinejoin="miter"
      />

      {/* Windshield */}
      <polygon
        points="340,46 420,44 470,52 510,70 530,88 518,150 330,150 325,110"
        fill="url(#mustangGlass)"
        opacity="0.6"
        stroke="hsl(20, 60%, 38%)"
        strokeWidth="1.5"
        strokeLinejoin="miter"
      />

      {/* Rear window */}
      <polygon
        points="170,58 250,44 300,42 320,42 322,110 318,148 175,148 158,110"
        fill="url(#mustangGlass)"
        opacity="0.5"
        stroke="hsl(20, 60%, 38%)"
        strokeWidth="1.5"
        strokeLinejoin="miter"
      />

      {/* B-pillar */}
      <line x1="325" y1="42" x2="327" y2="150" stroke="hsl(20, 60%, 30%)" strokeWidth="5" />

      {/* Body line */}
      <line x1="30" y1="160" x2="578" y2="160" stroke="hsl(20, 75%, 38%)" strokeWidth="1.5" opacity="0.5" />

      {/* Lower trim */}
      <line x1="25" y1="185" x2="578" y2="185" stroke="hsl(20, 60%, 35%)" strokeWidth="1" opacity="0.3" />

      {/* Hood scoop */}
      <polygon points="475,55 520,75 520,84 475,64" fill="hsl(20, 80%, 38%)" opacity="0.5" />

      {/* Headlight */}
      <rect x="572" y="128" width="7" height="20" rx="1" fill="hsl(45, 100%, 85%)" stroke="hsl(0, 0%, 55%)" strokeWidth="1" />

      {/* Triple taillights */}
      <rect x="22" y="135" width="12" height="8" fill="hsl(0, 85%, 45%)" />
      <rect x="22" y="145" width="12" height="8" fill="hsl(0, 85%, 50%)" />
      <rect x="22" y="155" width="12" height="8" fill="hsl(0, 85%, 55%)" />

      {/* Front bumper */}
      <rect x="578" y="125" width="14" height="95" rx="1" fill="hsl(0, 0%, 78%)" stroke="hsl(0, 0%, 55%)" strokeWidth="1" />

      {/* Rear bumper */}
      <rect x="8" y="130" width="14" height="90" rx="1" fill="hsl(0, 0%, 78%)" stroke="hsl(0, 0%, 55%)" strokeWidth="1" />

      {/* Front wheel well */}
      <path d="M 410,220 L 410,185 L 422,175 L 470,175 L 482,185 L 482,220" fill="hsl(20, 70%, 28%)" stroke="hsl(20, 60%, 25%)" strokeWidth="1.5" strokeLinejoin="miter" />

      {/* Rear wheel well */}
      <path d="M 100,220 L 100,185 L 112,175 L 160,175 L 172,185 L 172,220" fill="hsl(20, 70%, 28%)" stroke="hsl(20, 60%, 25%)" strokeWidth="1.5" strokeLinejoin="miter" />

      {/* Front wheel */}
      <circle cx="446" cy="222" r="32" fill="hsl(0, 0%, 15%)" />
      <circle cx="446" cy="222" r="26" fill="hsl(0, 0%, 25%)" />
      <circle cx="446" cy="222" r="17" fill="hsl(0, 0%, 72%)" />
      <circle cx="446" cy="222" r="10" fill="hsl(0, 0%, 35%)" />
      <circle cx="446" cy="222" r="5" fill="hsl(0, 0%, 55%)" />
      {[0, 72, 144, 216, 288].map((a) => (
        <line key={`fw-${a}`} x1={446 + 10 * Math.cos((a * Math.PI) / 180)} y1={222 + 10 * Math.sin((a * Math.PI) / 180)} x2={446 + 25 * Math.cos((a * Math.PI) / 180)} y2={222 + 25 * Math.sin((a * Math.PI) / 180)} stroke="hsl(0, 0%, 78%)" strokeWidth="3" strokeLinecap="round" />
      ))}

      {/* Rear wheel */}
      <circle cx="136" cy="222" r="32" fill="hsl(0, 0%, 15%)" />
      <circle cx="136" cy="222" r="26" fill="hsl(0, 0%, 25%)" />
      <circle cx="136" cy="222" r="17" fill="hsl(0, 0%, 72%)" />
      <circle cx="136" cy="222" r="10" fill="hsl(0, 0%, 35%)" />
      <circle cx="136" cy="222" r="5" fill="hsl(0, 0%, 55%)" />
      {[0, 72, 144, 216, 288].map((a) => (
        <line key={`rw-${a}`} x1={136 + 10 * Math.cos((a * Math.PI) / 180)} y1={222 + 10 * Math.sin((a * Math.PI) / 180)} x2={136 + 25 * Math.cos((a * Math.PI) / 180)} y2={222 + 25 * Math.sin((a * Math.PI) / 180)} stroke="hsl(0, 0%, 78%)" strokeWidth="3" strokeLinecap="round" />
      ))}

      {/* Ground shadow */}
      <ellipse cx="300" cy="258" rx="260" ry="7" fill="hsl(0, 0%, 0%)" opacity="0.08" />
    </svg>

    {/* Content overlay */}
    <div className="absolute top-[46%] left-[10%] right-[14%] -translate-y-1/2 flex items-start gap-4">
      <div className="rounded-md bg-primary/30 p-2.5 shrink-0 backdrop-blur-sm">
        <Icon className="w-6 h-6 text-primary-foreground" />
      </div>
      <div className="min-w-0">
        <h3 className="text-base md:text-lg font-bold text-primary-foreground leading-tight mb-1.5 drop-shadow-md">
          {title}
        </h3>
        <p className="text-sm md:text-base text-primary-foreground/85 leading-snug drop-shadow-md line-clamp-3">
          {desc}
        </p>
        {label && (
          <p className="text-xs text-primary-foreground/60 italic mt-1">{label}</p>
        )}
      </div>
    </div>
  </div>
);

export default CarCard;
