import React from 'react';

export default function WatchEatLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 200 200" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="watchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a3e635" />
          <stop offset="25%" stopColor="#22d3ee" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="75%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
        <linearGradient id="watchGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#eab308" />
          <stop offset="50%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
      </defs>
      
      {/* Watch body */}
      <path
        d="M50 60 Q50 40 70 40 L130 40 Q150 40 150 60 L150 140 Q150 160 130 160 L70 160 Q50 160 50 140 Z"
        fill="url(#watchGradient)"
      />
      
      {/* Watch crown */}
      <rect x="150" y="90" width="8" height="20" rx="4" fill="url(#watchGradient)" />
      
      {/* Watch band top */}
      <path
        d="M70 40 Q70 20 90 20 L110 20 Q130 20 130 40"
        fill="url(#watchGradient2)"
      />
      
      {/* Watch band bottom */}
      <path
        d="M70 160 Q70 180 90 180 L110 180 Q130 180 130 160"
        fill="url(#watchGradient2)"
      />
      
      {/* Outer ring */}
      <circle
        cx="100"
        cy="100"
        r="45"
        fill="none"
        stroke="white"
        strokeWidth="4"
      />
      
      {/* Inner ring */}
      <circle
        cx="100"
        cy="100"
        r="35"
        fill="none"
        stroke="white"
        strokeWidth="3"
      />
      
      {/* Fork */}
      <g transform="translate(100, 100)">
        {/* Fork handle */}
        <rect x="-2" y="5" width="4" height="25" fill="white" rx="2" />
        
        {/* Fork prongs */}
        <rect x="-8" y="-25" width="3" height="20" fill="white" rx="1.5" />
        <rect x="-2.5" y="-25" width="3" height="20" fill="white" rx="1.5" />
        <rect x="3" y="-25" width="3" height="20" fill="white" rx="1.5" />
        
        {/* Fork base */}
        <rect x="-8" y="-8" width="14" height="4" fill="white" rx="2" />
      </g>
    </svg>
  );
}