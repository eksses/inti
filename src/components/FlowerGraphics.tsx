import React from 'react';

interface FlowerProps {
  className?: string;
  size?: number;
  interactive?: boolean;
  onClick?: () => void;
}

// Handcrafted SVG: Shapla (White Water Lily - Nymphaea nouchali)
export const ShaplaFlower: React.FC<FlowerProps> = ({
  className = "",
  size = 120,
  interactive = false,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative inline-flex items-center justify-center ${interactive ? 'cursor-pointer active:scale-95 transition-transform duration-300' : ''} ${className}`}
      style={{ width: size, height: size }}
      title="Shapla (White Water Lily)"
    >
      <svg
        viewBox="0 0 160 160"
        className="w-full h-full drop-shadow-md overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Water Lily Pad underneath with signature cleft */}
        <path
          d="M80 150 C35 150 10 115 10 80 C10 45 40 18 80 18 C120 18 150 45 150 80 C150 115 125 150 80 150 Z"
          fill="#2A3D2F"
          opacity="0.9"
        />
        {/* Leaf notch cut */}
        <path
          d="M80 80 L76 150 L84 150 Z"
          fill="#141E17"
        />
        {/* Veins of the pad */}
        <path d="M80 80 Q50 60 25 65" stroke="#374E3C" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M80 80 Q40 90 20 100" stroke="#374E3C" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M80 80 Q110 60 135 65" stroke="#374E3C" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M80 80 Q120 90 140 100" stroke="#374E3C" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M80 80 Q80 40 80 20" stroke="#374E3C" strokeWidth="1.5" strokeLinecap="round" />

        {/* Outer Sepals (pale green-bronze backing) */}
        <g opacity="0.95">
          <path d="M80 80 C70 50 60 30 80 22 C100 30 90 50 80 80 Z" fill="#4B634E" />
          <path d="M80 80 C50 70 30 60 22 80 C30 100 50 90 80 80 Z" fill="#4B634E" />
          <path d="M80 80 C110 70 130 60 138 80 C130 100 110 90 80 80 Z" fill="#4B634E" />
          <path d="M80 80 C70 110 60 130 80 138 C100 130 90 110 80 80 Z" fill="#4B634E" />
        </g>

        {/* Outer Pure White Pointed Petals */}
        <g filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.3))">
          {/* Diagonal Petals */}
          <path d="M80 80 C60 45 45 35 40 40 C35 45 45 60 80 80 Z" fill="#F4EBDD" />
          <path d="M80 80 C100 45 115 35 120 40 C125 45 115 60 80 80 Z" fill="#F4EBDD" />
          <path d="M80 80 C60 115 45 125 40 120 C35 115 45 100 80 80 Z" fill="#F4EBDD" />
          <path d="M80 80 C100 115 115 125 120 120 C125 115 115 100 80 80 Z" fill="#F4EBDD" />

          {/* Cardinal Petals */}
          <path d="M80 80 C72 45 68 28 80 25 C92 28 88 45 80 80 Z" fill="#FAF8F5" />
          <path d="M80 80 C45 72 28 68 25 80 C28 92 45 88 80 80 Z" fill="#FAF8F5" />
          <path d="M80 80 C115 72 132 68 135 80 C132 92 115 88 80 80 Z" fill="#FAF8F5" />
          <path d="M80 80 C72 115 68 132 80 135 C92 132 88 115 80 80 Z" fill="#FAF8F5" />
        </g>

        {/* Inner Layer Petals with soft ivory and hint of pink blush */}
        <g>
          <path d="M80 80 C74 55 70 38 80 34 C90 38 86 55 80 80 Z" fill="#FFFFFF" />
          <path d="M80 80 C55 74 38 70 34 80 C38 90 55 86 80 80 Z" fill="#FAF8F5" />
          <path d="M80 80 C105 74 122 70 126 80 C122 90 105 86 80 80 Z" fill="#FAF8F5" />
          <path d="M80 80 C74 105 70 122 80 126 C90 122 86 105 80 80 Z" fill="#FFFFFF" />

          {/* Inner 45 deg petals */}
          <path d="M80 80 C68 56 56 46 52 50 C48 54 56 68 80 80 Z" fill="#FFFFFF" />
          <path d="M80 80 C92 56 104 46 108 50 C112 54 104 68 80 80 Z" fill="#FFFFFF" />
          <path d="M80 80 C68 104 56 114 52 110 C48 106 56 92 80 80 Z" fill="#FFFFFF" />
          <path d="M80 80 C92 104 104 114 108 110 C112 106 104 92 80 80 Z" fill="#FFFFFF" />
        </g>

        {/* Golden Pistil & Anther Cluster Center */}
        <circle cx="80" cy="80" r="16" fill="#D4AF37" />
        <circle cx="80" cy="80" r="12" fill="#E6CA65" />
        <g fill="#A87B1A">
          <circle cx="80" cy="74" r="2" />
          <circle cx="80" cy="86" r="2" />
          <circle cx="74" cy="80" r="2" />
          <circle cx="86" cy="80" r="2" />
          <circle cx="76" cy="76" r="1.5" />
          <circle cx="84" cy="76" r="1.5" />
          <circle cx="76" cy="84" r="1.5" />
          <circle cx="84" cy="84" r="1.5" />
        </g>
        {/* Dewdrop reflection */}
        <ellipse cx="64" cy="58" rx="2.5" ry="1.5" fill="#FFFFFF" opacity="0.8" />
      </svg>
    </div>
  );
};

// Handcrafted SVG: Padma (Sacred Rose Lotus - Nelumbo nucifera)
export const PadmaFlower: React.FC<FlowerProps> = ({
  className = "",
  size = 120,
  interactive = false,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative inline-flex items-center justify-center ${interactive ? 'cursor-pointer active:scale-95 transition-transform duration-300' : ''} ${className}`}
      style={{ width: size, height: size }}
      title="Padma (Rose Lotus)"
    >
      <svg
        viewBox="0 0 160 160"
        className="w-full h-full drop-shadow-md overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft watery lotus aura */}
        <circle cx="80" cy="80" r="70" fill="url(#padmaGlow)" opacity="0.18" />
        <defs>
          <radialGradient id="padmaGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E8A2A8" />
            <stop offset="100%" stopColor="#E8A2A8" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="petalRose" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D97B88" />
            <stop offset="50%" stopColor="#ECA5AD" />
            <stop offset="100%" stopColor="#F9ECEF" />
          </linearGradient>
          <linearGradient id="innerPetal" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C96575" />
            <stop offset="70%" stopColor="#F4D3D7" />
            <stop offset="100%" stopColor="#FAF2F4" />
          </linearGradient>
        </defs>

        {/* Broad Outer Rose Petals */}
        <g opacity="0.95">
          <path d="M80 85 C65 50 45 35 35 48 C28 58 45 80 80 85 Z" fill="url(#petalRose)" />
          <path d="M80 85 C95 50 115 35 125 48 C132 58 115 80 80 85 Z" fill="url(#petalRose)" />
          <path d="M80 85 C55 95 35 115 45 126 C55 133 80 115 80 85 Z" fill="url(#petalRose)" />
          <path d="M80 85 C105 95 125 115 115 126 C105 133 80 115 80 85 Z" fill="url(#petalRose)" />
          <path d="M80 85 C70 40 65 18 80 14 C95 18 90 40 80 85 Z" fill="url(#petalRose)" />
        </g>

        {/* Upright Center Petals with sculpted curve */}
        <g>
          <path d="M80 85 C68 45 56 26 70 20 C84 26 76 52 80 85 Z" fill="url(#innerPetal)" />
          <path d="M80 85 C92 45 104 26 90 20 C76 26 84 52 80 85 Z" fill="url(#innerPetal)" />
          <path d="M80 85 C55 70 42 62 48 52 C58 44 72 65 80 85 Z" fill="url(#innerPetal)" />
          <path d="M80 85 C105 70 118 62 112 52 C102 44 88 65 80 85 Z" fill="url(#innerPetal)" />
        </g>

        {/* Sacred Lotus Seed Pod Center (Golden Carpel) */}
        <ellipse cx="80" cy="85" rx="14" ry="11" fill="#CCA63B" />
        <ellipse cx="80" cy="85" rx="10" ry="7.5" fill="#E8C35A" />
        {/* Seed holes */}
        <g fill="#7A5A12">
          <circle cx="80" cy="82" r="1.5" />
          <circle cx="75" cy="84" r="1.5" />
          <circle cx="85" cy="84" r="1.5" />
          <circle cx="77" cy="88" r="1.5" />
          <circle cx="83" cy="88" r="1.5" />
        </g>
        {/* Golden Stamen Ring */}
        <path
          d="M66 84 Q80 72 94 84 Q80 96 66 84"
          stroke="#E5BA43"
          strokeWidth="1.5"
          strokeDasharray="2 3"
          fill="none"
        />
      </svg>
    </div>
  );
};
