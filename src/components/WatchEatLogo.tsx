import React from 'react';

type Props = { className?: string };

export default function WatchEatLogo({ className = "" }: Props) {
  return (
    <img
      src="src/assets/image.png"
      alt="WatchEat logo"
      className={`block select-none pointer-events-none mix-blend-normal filter-none ${className}`}
      draggable={false}
      style={{
        imageRendering: "auto",
      }}
    />
  );
}