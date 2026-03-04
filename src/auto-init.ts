/**
 * Auto-initialization for @polgubau/astro-reveal
 * 
 * This file handles automatic initialization of reveal animations
 * when the DOM is ready and on Astro page transitions.
 * 
 * Import this in your Astro layout to enable automatic reveal animations.
 */

import { init } from './reveal';

// Ejecutar lo antes posible
if (typeof document !== 'undefined') {
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}

	// Soporte para Astro View Transitions
	document.addEventListener('astro:page-load', init);
}

