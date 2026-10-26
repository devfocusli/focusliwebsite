import React from 'react';

export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.focusli';
export const APP_STORE_URL = 'https://apps.apple.com/app/focusli/id6470000000';

export function GooglePlayIcon({ className = 'w-6 h-6', style = {} }) {
  return (
    <svg 
      viewBox="0 0 512 512" 
      className={className} 
      style={{ width: '24px', height: '24px', flexShrink: 0, ...style }} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M47.2 18.3C40.6 25.3 36.8 36.3 36.8 50.6v410.8c0 14.3 3.8 25.3 10.4 32.3l1.8 1.6 230-230v-5.4L49 16.7l-1.8 1.6z" fill="url(#gp_linear_1)"/>
      <path d="M358.8 339.6l-80-80v-5.4l80-80 1.8 1 94.7 53.8c27 15.3 27 40.5 0 55.9l-94.7 53.8-1.8 0.9z" fill="url(#gp_linear_2)"/>
      <path d="M280.6 254.2l-231.6 231.6c8.9 9.5 23.6 10.6 40.4 1.1l271.2-154-80-78.7z" fill="url(#gp_linear_3)"/>
      <path d="M280.6 257.8l80-80-271.2-154c-16.8-9.5-31.5-8.4-40.4 1.1l231.6 232.9z" fill="url(#gp_linear_4)"/>
      <defs>
        <linearGradient id="gp_linear_1" x1="255.8" y1="36.8" x2="-42.6" y2="335.2" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00A0FF"/>
          <stop offset="0.007" stopColor="#00A1FF"/>
          <stop offset="0.26" stopColor="#00BEFF"/>
          <stop offset="0.512" stopColor="#00D2FF"/>
          <stop offset="0.76" stopColor="#00DFFF"/>
          <stop offset="1" stopColor="#00E3FF"/>
        </linearGradient>
        <linearGradient id="gp_linear_2" x1="482.7" y1="256" x2="68.2" y2="256" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFE000"/>
          <stop offset="0.409" stopColor="#FFBD00"/>
          <stop offset="0.775" stopColor="#FFA500"/>
          <stop offset="1" stopColor="#FF9C00"/>
        </linearGradient>
        <linearGradient id="gp_linear_3" x1="309.8" y1="283.4" x2="8.8" y2="584.4" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF3A44"/>
          <stop offset="1" stopColor="#C31162"/>
        </linearGradient>
        <linearGradient id="gp_linear_4" x1="42.3" y1="-46.6" x2="223.4" y2="134.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00E676"/>
          <stop offset="1" stopColor="#00A0FF"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function AppleLogoIcon({ className = 'w-6 h-6', style = {} }) {
  return (
    <svg 
      viewBox="0 0 170 170" 
      className={className} 
      style={{ width: '22px', height: '22px', flexShrink: 0, fill: '#ffffff', ...style }} 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.34-6.19-9.44-11.05-20.2-14.58-32.27-3.53-12.07-5.3-23.75-5.3-35.04 0-16.71 4.79-30.41 14.38-41.11 9.58-10.7 21.05-16.14 34.42-16.32 4.9.11 10.37 1.48 16.42 4.11 6.05 2.63 10.14 4.01 12.28 4.14 2.14-.13 6.45-1.55 12.93-4.26 6.48-2.72 12.23-3.99 17.26-3.81 12.18.76 22.25 5.08 30.2 12.96-10.86 6.64-16.18 15.82-15.96 27.53.22 9.68 4.13 17.76 11.74 24.23 7.61 6.47 16.63 10.19 27.06 11.16-2.5 7.61-5.76 15.42-9.78 23.44zM119.22 33.15c0-7.07 2.61-13.88 7.83-20.43 5.22-6.55 11.74-10.98 19.57-13.29.76 2.39 1.14 4.89 1.14 7.5 0 7.07-2.67 14.07-8.01 21-5.34 6.93-11.9 11.39-19.68 13.38-.22-2.72-.85-5.44-.85-8.16z"/>
    </svg>
  );
}

export function GooglePlayBadge({ className = '', style = {} }) {
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`store-badge ${className}`}
      style={style}
      aria-label="Get Focusli on Google Play"
    >
      <div style={{ width: '26px', height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <GooglePlayIcon />
      </div>
      <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
        <span style={{ display: 'block', fontSize: '9px', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, lineHeight: 1.1 }}>
          GET IT ON
        </span>
        <span style={{ display: 'block', fontSize: '16px', fontWeight: 700, color: '#fff', fontFamily: 'Outfit, sans-serif', lineHeight: 1.2, marginTop: '1px' }}>
          Google Play
        </span>
      </div>
    </a>
  );
}

export function AppStoreBadge({ className = '', style = {} }) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`store-badge ${className}`}
      style={style}
      aria-label="Download Focusli on the App Store"
    >
      <div style={{ width: '26px', height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <AppleLogoIcon />
      </div>
      <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
        <span style={{ display: 'block', fontSize: '9px', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, lineHeight: 1.1 }}>
          DOWNLOAD ON THE
        </span>
        <span style={{ display: 'block', fontSize: '16px', fontWeight: 700, color: '#fff', fontFamily: 'Outfit, sans-serif', lineHeight: 1.2, marginTop: '1px' }}>
          App Store
        </span>
      </div>
    </a>
  );
}
