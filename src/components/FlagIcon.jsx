import React from 'react';

/**
 * FlagIcon component that displays country flags using high-resolution images
 * This ensures cross-platform compatibility (Windows, Mac, Linux, mobile)
 * Uses flagcdn.com for high-quality flag images with better resolution
 */
export default function FlagIcon({ countryCode, size = 'sm', className = '' }) {
  // Map of country codes to their corresponding flag image URLs with higher resolution
  const getFlagUrl = (code) => {
    // Use higher resolution flags (w80) for maximum clarity
    // This provides 4x the resolution of the original w20 images
    return `https://flagcdn.com/w80/${code.toLowerCase()}.png`;
  };

  // Size classes for different flag sizes with better proportions
  const sizeClasses = {
    xs: 'w-5 h-4',      // 20x16px - increased from 16x12px
    sm: 'w-6 h-5',      // 24x20px - increased from 20x16px  
    md: 'w-8 h-6',      // 32x24px - increased from 24x20px
    lg: 'w-10 h-8',     // 40x32px - increased from 32x24px
    xl: 'w-12 h-10'     // 48x40px - increased from 40x32px
  };

  const sizeClass = sizeClasses[size] || sizeClasses.sm;

  return (
    <img
      src={getFlagUrl(countryCode)}
      alt={`${countryCode} flag`}
      className={`${sizeClass} object-cover rounded border border-gray-200 shadow-sm ${className}`}
      style={{
        imageRendering: 'high-quality',
        imageRendering: '-webkit-optimize-contrast'
      }}
      onError={(e) => {
        // Fallback to a default flag or text if image fails to load
        e.target.style.display = 'none';
        const fallback = document.createElement('span');
        fallback.textContent = countryCode;
        fallback.className = `${sizeClass} flex items-center justify-center text-xs font-bold text-gray-600 bg-gray-100 rounded border border-gray-200`;
        e.target.parentNode.appendChild(fallback);
      }}
    />
  );
}
