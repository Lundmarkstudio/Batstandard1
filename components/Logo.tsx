
import React from 'react';

interface LogoProps {
  className?: string;
  size?: number | string;
}

const Logo: React.FC<LogoProps> = ({ className, size = 100 }) => {
  return (
    <svg 
      viewBox="0 0 500 500" 
      width={size} 
      height={size} 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background/Outer bounds */}
      <rect width="500" height="500" fill="transparent" />
      
      {/* Horizontal Stripes - Top */}
      <g fill="#2C4696">
        <rect x="180" y="160" width="140" height="6" />
        <rect x="160" y="175" width="180" height="6" />
        <rect x="140" y="190" width="220" height="6" />
        <rect x="120" y="205" width="260" height="6" />
      </g>

      {/* Horizontal Stripes - Bottom */}
      <g fill="#2C4696">
        <rect x="30" y="470" width="440" height="6" />
        <rect x="50" y="455" width="400" height="6" />
        <rect x="70" y="440" width="360" height="6" />
        <rect x="90" y="425" width="320" height="6" />
        <rect x="110" y="410" width="280" height="6" />
        <rect x="130" y="395" width="240" height="6" />
        <rect x="150" y="380" width="200" height="6" />
        <rect x="170" y="365" width="160" height="6" />
      </g>

      {/* Central Connector */}
      <rect x="235" y="225" width="30" height="50" fill="#2C4696" />

      {/* Diagonal Arms of the X */}
      <path 
        d="M20 20 L240 240 L260 240 L480 20 L500 40 L270 250 L500 460 L480 480 L250 270 L20 480 L0 460 L230 250 L0 40 Z" 
        fill="#2C4696" 
      />

      {/* Text on Paths is the most accurate way to mimic the logo */}
      <defs>
        <path id="pathTopLeft" d="M30 40 L230 240" />
        <path id="pathTopRight" d="M470 40 L270 240" />
        <path id="pathBottomLeft" d="M230 260 L30 460" />
        <path id="pathBottomRight" d="M270 260 L470 460" />
      </defs>

      <text fill="white" fontSize="42" fontWeight="900" fontFamily="Tahoma, Verdana, sans-serif">
        <textPath href="#pathTopLeft" startOffset="5%">ТӨМӨР</textPath>
      </text>
      <text fill="white" fontSize="42" fontWeight="900" fontFamily="Tahoma, Verdana, sans-serif">
        <textPath href="#pathTopRight" textAnchor="end" startOffset="95%">БЕТОН</textPath>
      </text>
      <text fill="white" fontSize="42" fontWeight="900" fontFamily="Tahoma, Verdana, sans-serif">
        <textPath href="#pathBottomLeft" textAnchor="end" startOffset="95%">ЭДЛЭЛ</textPath>
      </text>
      <text fill="white" fontSize="34" fontWeight="900" fontFamily="Tahoma, Verdana, sans-serif">
        <textPath href="#pathBottomRight" startOffset="5%">ҮЙЛДВЭРЛЭЛ</textPath>
      </text>
    </svg>
  );
};

export default Logo;
