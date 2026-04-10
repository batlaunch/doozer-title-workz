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
      viewBox="0 0 520 260"
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
          M 20,190
          L 20,145
          L 25,140
          L 30,120
          L 40,105
          L 55,90
          L 80,75
          L 120,60
          L 160,52
          L 200,48
          L 240,46
          L 240,46
          L 290,44
          L 340,44
          L 370,46
          L 400,52
          L 425,60
          L 445,72
          L 460,88
          L 470,100
          L 480,100
          L 495,100
          L 500,105
          L 500,140
          L 500,190
          L 435,190
          L 355,190
          L 165,190
          L 85,190
          L 20,190
          Z
        "
        fill="url(#mustangPaint)"
        stroke="hsl(20, 70%, 32%)"
        strokeWidth="2"
        strokeLinejoin="miter"
      />

      {/* Windshield - angular */}
      <polygon
        points="295,50 360,48 400,54 430,68 450,85 440,130 285,130 280,100"
        fill="url(#mustangGlass)"
        opacity="0.6"
        stroke="hsl(20, 60%, 38%)"
        strokeWidth="1.5"
        strokeLinejoin="miter"
      />

      {/* Rear window - angular fastback */}
      <polygon
        points="150,62 210,50 250,47 270,47 275,100 270,128 155,128 140,100"
        fill="url(#mustangGlass)"
        opacity="0.5"
        stroke="hsl(20, 60%, 38%)"
        strokeWidth="1.5"
        strokeLinejoin="miter"
      />

      {/* B-pillar */}
      <line x1="278" y1="47" x2="280" y2="130" stroke="hsl(20, 60%, 30%)" strokeWidth="5" />

      {/* Body line */}
      <line x1="30" y1="140" x2="500" y2="140" stroke="hsl(20, 75%, 38%)" strokeWidth="1.5" opacity="0.5" />

      {/* Lower trim */}
      <line x1="25" y1="165" x2="498" y2="165" stroke="hsl(20, 60%, 35%)" strokeWidth="1" opacity="0.3" />

      {/* Hood scoop - angular */}
      <polygon points="410,58 450,75 450,82 410,66" fill="hsl(20, 80%, 38%)" opacity="0.5" />

      {/* Headlight - rectangular */}
      <rect x="492" y="108" width="6" height="18" rx="1" fill="hsl(45, 100%, 85%)" stroke="hsl(0, 0%, 55%)" strokeWidth="1" />

      {/* Triple taillights */}
      <rect x="22" y="120" width="10" height="7" fill="hsl(0, 85%, 45%)" />
      <rect x="22" y="129" width="10" height="7" fill="hsl(0, 85%, 50%)" />
      <rect x="22" y="138" width="10" height="7" fill="hsl(0, 85%, 55%)" />

      {/* Front bumper */}
      <rect x="498" y="105" width="12" height="85" rx="1" fill="hsl(0, 0%, 78%)" stroke="hsl(0, 0%, 55%)" strokeWidth="1" />

      {/* Rear bumper */}
      <rect x="10" y="115" width="12" height="75" rx="1" fill="hsl(0, 0%, 78%)" stroke="hsl(0, 0%, 55%)" strokeWidth="1" />

      {/* Front wheel well - squared */}
      <path d="M 355,190 L 355,160 L 365,152 L 405,152 L 415,160 L 415,190" fill="hsl(20, 70%, 28%)" stroke="hsl(20, 60%, 25%)" strokeWidth="1.5" strokeLinejoin="miter" />

      {/* Rear wheel well - squared */}
      <path d="M 85,190 L 85,160 L 95,152 L 135,152 L 145,160 L 145,190" fill="hsl(20, 70%, 28%)" stroke="hsl(20, 60%, 25%)" strokeWidth="1.5" strokeLinejoin="miter" />

      {/* Front wheel */}
      <circle cx="385" cy="192" r="28" fill="hsl(0, 0%, 15%)" />
      <circle cx="385" cy="192" r="23" fill="hsl(0, 0%, 25%)" />
      <circle cx="385" cy="192" r="15" fill="hsl(0, 0%, 72%)" />
      <circle cx="385" cy="192" r="9" fill="hsl(0, 0%, 35%)" />
      <circle cx="385" cy="192" r="4" fill="hsl(0, 0%, 55%)" />
      {[0, 72, 144, 216, 288].map((a) => (
        <line key={`fw-${a}`} x1={385 + 9 * Math.cos((a * Math.PI) / 180)} y1={192 + 9 * Math.sin((a * Math.PI) / 180)} x2={385 + 22 * Math.cos((a * Math.PI) / 180)} y2={192 + 22 * Math.sin((a * Math.PI) / 180)} stroke="hsl(0, 0%, 78%)" strokeWidth="3" strokeLinecap="round" />
      ))}

      {/* Rear wheel */}
      <circle cx="115" cy="192" r="28" fill="hsl(0, 0%, 15%)" />
      <circle cx="115" cy="192" r="23" fill="hsl(0, 0%, 25%)" />
      <circle cx="115" cy="192" r="15" fill="hsl(0, 0%, 72%)" />
      <circle cx="115" cy="192" r="9" fill="hsl(0, 0%, 35%)" />
      <circle cx="115" cy="192" r="4" fill="hsl(0, 0%, 55%)" />
      {[0, 72, 144, 216, 288].map((a) => (
        <line key={`rw-${a}`} x1={115 + 9 * Math.cos((a * Math.PI) / 180)} y1={192 + 9 * Math.sin((a * Math.PI) / 180)} x2={115 + 22 * Math.cos((a * Math.PI) / 180)} y2={192 + 22 * Math.sin((a * Math.PI) / 180)} stroke="hsl(0, 0%, 78%)" strokeWidth="3" strokeLinecap="round" />
      ))}

      {/* Ground shadow */}
      <ellipse cx="260" cy="224" rx="220" ry="6" fill="hsl(0, 0%, 0%)" opacity="0.08" />
    </svg>

    {/* Content overlay */}
    <div className="absolute top-[50%] left-[12%] right-[16%] -translate-y-1/2 flex items-start gap-3">
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
