import React from 'react';
import logoImg from '../assets/images/redbury_crest_logo_1789820805264.jpg';

interface CrestLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'dark' | 'light' | 'gold';
}

export const CrestLogo: React.FC<CrestLogoProps> = ({ 
  className = '', 
  size = 'md',
  variant = 'dark'
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-20 h-20',
    xl: 'w-32 h-32',
  }[size];

  // For dark variant (white background logo placed on dark header/card), mix-blend or container treatment:
  return (
    <div className={`relative inline-flex items-center justify-center rounded-full overflow-hidden shrink-0 border border-amber-500/30 shadow-md ${sizeClasses} ${className}`}>
      <img
        src={logoImg}
        alt="Redbury Guesthouse Emblem Logo"
        className={`w-full h-full object-cover ${variant === 'light' ? 'brightness-110 contrast-125' : 'contrast-110'}`}
      />
    </div>
  );
};

export default CrestLogo;
