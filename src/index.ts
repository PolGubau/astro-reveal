/**
 * @polgubau/astro-reveal
 * Beautiful scroll-reveal animations for Astro
 *
 * @see https://github.com/polgubau/astro-reveal
 */

// Re-export the reveal functions
export { init, getObserver } from './reveal';

// Type exports for TypeScript users
export type Direction =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'scale'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

export type Speed = 'instant' | 'fast' | 'normal' | 'slow';
export type Easing = 'smooth' | 'bounce' | 'elastic' | 'sharp' | 'soft';
export type Distance = 'small' | 'medium' | 'large';

export interface RevealOptions {
  direction?: Direction;
  duration?: number;
  delay?: number;
  speed?: Speed;
  easing?: Easing | string;
  distance?: Distance | number;
  threshold?: number;
  rootMargin?: string;
}

// Auto-initialization for Astro projects
// This runs the reveal animations automatically when imported
import './auto-init';
