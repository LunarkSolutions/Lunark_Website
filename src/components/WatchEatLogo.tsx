// src/components/WatchEatLogo.tsx
import logoUrl from '@/assets/image.png; // adjust path alias as needed

export default function WatchEatLogo({ className = '' }) {
  return (
    <img
      src={logoUrl}
      alt="WatchEat logo"
      className={`block pointer-events-none select-none ${className}`}
      draggable={false}
    />
  );
}

}
