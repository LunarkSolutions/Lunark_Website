import React from 'react';
import { useInView } from 'react-intersection-observer';

interface ScrollAnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fadeInUp' | 'slideInLeft' | 'slideInRight' | 'fadeIn';
  delay?: number;
}

export default function ScrollAnimatedSection({ 
  children, 
  className = '', 
  animationType = 'fadeInUp',
  delay = 0 
}: ScrollAnimatedSectionProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const animationClass = inView ? `animate-${animationType}` : 'opacity-0 translate-y-8';
  const delayClass = delay > 0 ? `animate-delay-${delay}` : '';

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-800 ${animationClass} ${delayClass} ${className}`}
      style={{ animationDelay: delay > 0 ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}