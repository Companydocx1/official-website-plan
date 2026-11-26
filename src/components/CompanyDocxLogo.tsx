import React from 'react';

interface CompanyDocxLogoProps {
  className?: string;
  variant?: 'full' | 'horizontal' | 'mark';
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const CompanyDocxLogo: React.FC<CompanyDocxLogoProps> = ({
  className = '',
  variant = 'horizontal',
  theme = 'dark',
  size = 'md',
}) => {
  // Dimension presets
  const sizeMap = {
    sm: { emblem: 34, textTitle: 'text-base', textSub: 'text-[9px]' },
    md: { emblem: 44, textTitle: 'text-xl', textSub: 'text-[10px]' },
    lg: { emblem: 64, textTitle: 'text-2xl', textSub: 'text-xs' },
    xl: { emblem: 88, textTitle: 'text-3xl', textSub: 'text-sm' },
  };

  const currentSize = sizeMap[size];
  const primaryNavy = theme === 'dark' ? '#FFFFFF' : '#061B36';
  const pillarNavy = theme === 'dark' ? '#E2E8F0' : '#061B36';
  const accentGold = '#C9A227';
  const subtitleColor = theme === 'dark' ? '#C9A227' : '#061B36';

  // SVG Vector Emblem precisely matching the official Company Docx logo
  const Emblem = ({ width = 48, height = 48 }: { width?: number; height?: number }) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform group-hover:scale-105 duration-200"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DFB738" />
          <stop offset="50%" stopColor="#C9A227" />
          <stop offset="100%" stopColor="#9E7B15" />
        </linearGradient>
      </defs>

      {/* Classical Greek/Roman Pillar (Left Stem of 'D') */}
      {/* Capital Top Pediment */}
      <path
        d="M25 32H75V40H68V45H32V40H25V32Z"
        fill={pillarNavy}
      />
      {/* Pillar Fluted Shaft */}
      <rect x="35" y="47" width="7" height="85" rx="1.5" fill={pillarNavy} />
      <rect x="46" y="47" width="8" height="85" rx="1.5" fill={pillarNavy} />
      <rect x="58" y="47" width="7" height="85" rx="1.5" fill={pillarNavy} />
      {/* Base Plinth */}
      <path
        d="M28 134H72V140H24L20 148H80L76 140H72V134Z"
        fill={pillarNavy}
      />

      {/* Curved Upper & Outer Loop of the 'D' */}
      <path
        d="M58 32H98C142 32 174 65 174 105C174 140 144 165 106 167C118 158 126 142 128 126C148 116 156 94 146 72C138 52 118 43 96 43H68L68 32H98"
        fill={pillarNavy}
      />

      {/* Financial Growth Bar Charts (Rising at base of 'D') */}
      <path d="M84 156H94V138H84V156Z" fill={pillarNavy} />
      <path d="M98 156H108V126H98V156Z" fill={pillarNavy} />
      <path d="M112 156H122V112H112V156Z" fill={pillarNavy} />

      {/* Golden Scales of Justice (Center of 'D') */}
      {/* Central Spire & Fulcrum */}
      <path
        d="M102 52L105 45L108 52H106V98H104V52H102Z"
        fill="url(#goldGrad)"
      />
      <circle cx="105" cy="58" r="4.5" fill="url(#goldGrad)" />
      
      {/* Crossbeam */}
      <path
        d="M72 63C84 61 105 60 105 60C105 60 126 61 138 63C140 63.3 140 65.5 138 66C126 68 105 67 105 67C105 67 84 68 72 66C70 65.5 70 63.3 72 63Z"
        fill="url(#goldGrad)"
      />

      {/* Left Scale Strings & Pan */}
      <line x1="72" y1="65" x2="63" y2="85" stroke="url(#goldGrad)" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="72" y1="65" x2="81" y2="85" stroke="url(#goldGrad)" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M59 85C59 93 85 93 85 85H59Z"
        fill="url(#goldGrad)"
      />

      {/* Right Scale Strings & Pan */}
      <line x1="138" y1="65" x2="129" y2="85" stroke="url(#goldGrad)" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="138" y1="65" x2="147" y2="85" stroke="url(#goldGrad)" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M125 85C125 93 151 93 151 85H125Z"
        fill="url(#goldGrad)"
      />

      {/* Golden Upward Growth Trajectory Arrow Swoosh */}
      <path
        d="M26 156C60 166 122 172 165 125L172 136L182 108L153 114L159 122C122 158 68 154 36 147L26 156Z"
        fill="url(#goldGrad)"
      />
    </svg>
  );

  if (variant === 'mark') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <Emblem width={currentSize.emblem} height={currentSize.emblem} />
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <Emblem width={currentSize.emblem * 1.5} height={currentSize.emblem * 1.5} />
        <div className="mt-3">
          <span
            className={`font-serif ${currentSize.textTitle} font-bold tracking-[0.18em] block transition-colors`}
            style={{ color: primaryNavy }}
          >
            COMPANY DOCX
          </span>
          <div className="flex items-center justify-center gap-2 mt-1">
            <span className="h-px w-6 bg-[#C9A227]/60" />
            <span
              className={`font-serif ${currentSize.textSub} font-semibold uppercase tracking-[0.22em] whitespace-nowrap`}
              style={{ color: subtitleColor }}
            >
              LAW & ACCOUNTING FIRM
            </span>
            <span className="h-px w-6 bg-[#C9A227]/60" />
          </div>
        </div>
      </div>
    );
  }

  // Default: Horizontal lockup
  return (
    <div className={`group flex items-center gap-3 text-left ${className}`}>
      <Emblem width={currentSize.emblem} height={currentSize.emblem} />
      <div className="flex flex-col">
        <span
          className={`font-serif ${currentSize.textTitle} font-bold tracking-[0.12em] leading-tight transition-colors group-hover:text-[#E5C76B]`}
          style={{ color: primaryNavy }}
        >
          COMPANY DOCX
        </span>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="h-px w-3 bg-[#C9A227]/60" />
          <span
            className={`font-serif ${currentSize.textSub} font-semibold uppercase tracking-[0.2em] whitespace-nowrap`}
            style={{ color: subtitleColor }}
          >
            LAW & ACCOUNTING FIRM
          </span>
          <span className="h-px w-3 bg-[#C9A227]/60" />
        </div>
      </div>
    </div>
  );
};
