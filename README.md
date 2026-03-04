# @polgubau/astro-reveal

Beautiful scroll-reveal animations for Astro with **zero JavaScript in production**. GPU-accelerated, performant, and accessible.

## ✨ Features

- 🎨 **9 animation directions** (top, bottom, left, right, scale, diagonals)
- ⚡ **Zero JS in production** - Pure CSS animations
- 🎯 **IntersectionObserver** - No scroll listeners
- 🎭 **Presets** - Speed, easing, and distance presets
- 🔄 **Stagger animations** - Automatic sequential delays
- ♿ **Accessible** - Respects `prefers-reduced-motion`
- 📦 **Tiny** - < 2KB gzipped
- 🎨 **Customizable** - Full control via data attributes

## 📦 Installation

```bash
pnpm add @polgubau/astro-reveal
# or
npm install @polgubau/astro-reveal
# or
yarn add @polgubau/astro-reveal
```

## 🚀 Quick Start

### 1. Add the script to your layout

```astro
---
// src/layouts/Layout.astro
---
<html>
  <head>
    <!-- ... -->
  </head>
  <body>
    <slot />
    
    <!-- Add reveal script -->
    <script>
      import "@polgubau/astro-reveal";
    </script>
  </body>
</html>
```

### 2. Import the CSS

```astro
---
// src/layouts/Layout.astro
import "@polgubau/astro-reveal/styles";
---
```

### 3. Use data attributes

```astro
<div data-reveal="bottom">
  Fades in from bottom
</div>

<div data-reveal="scale" data-speed="fast" data-easing="bounce">
  Scales in with bounce
</div>
```

### 4. Or use the component

```astro
---
import { Reveal } from "@polgubau/astro-reveal";
---

<Reveal direction="left" speed="fast" easing="smooth">
  <h1>Animated heading</h1>
</Reveal>
```

## 📖 Documentation

### Directions

- `top` - Fade from top ↓
- `bottom` - Fade from bottom ↑
- `left` - Fade from left →
- `right` - Fade from right ←
- `scale` - Scale from small 🔍
- `top-left` - Diagonal ↖️
- `top-right` - Diagonal ↗️
- `bottom-left` - Diagonal ↙️
- `bottom-right` - Diagonal ↘️

### Speed Presets

| Speed | Duration |
|-------|----------|
| `instant` | 200ms |
| `fast` | 400ms |
| `normal` | 700ms (default) |
| `slow` | 1000ms |

### Easing Presets

| Easing | Curve | Use Case |
|--------|-------|----------|
| `smooth` | cubic-bezier(0.4, 0, 0.2, 1) | General (default) |
| `bounce` | cubic-bezier(0.68, -0.55, 0.265, 1.55) | Playful |
| `elastic` | cubic-bezier(0.34, 1.56, 0.64, 1) | Elastic bounce |
| `sharp` | cubic-bezier(0.4, 0, 0.6, 1) | Quick movements |
| `soft` | cubic-bezier(0.25, 0.1, 0.25, 1) | Smooth & elegant |

### Distance Presets

| Distance | Pixels |
|----------|--------|
| `small` | 16px |
| `medium` | 32px (default) |
| `large` | 64px |

### Data Attributes

```html
<div
  data-reveal="bottom"           <!-- Direction -->
  data-speed="fast"              <!-- Speed preset -->
  data-easing="bounce"           <!-- Easing preset -->
  data-distance="large"          <!-- Distance preset -->
  data-delay="200"               <!-- Delay in ms -->
  data-duration="600"            <!-- Custom duration in ms -->
  data-threshold="0.5"           <!-- IntersectionObserver threshold (0-1) -->
  data-root-margin="0px"         <!-- IntersectionObserver rootMargin -->
>
  Content
</div>
```

### Stagger Animations

```astro
<div data-stagger="100">
  <div data-reveal="bottom">Item 1</div>  <!-- 0ms -->
  <div data-reveal="bottom">Item 2</div>  <!-- 100ms -->
  <div data-reveal="bottom">Item 3</div>  <!-- 200ms -->
</div>
```

### Component API

```astro
---
import { Reveal, RevealList } from "@polgubau/astro-reveal";
---

<Reveal
  direction="bottom"
  speed="fast"
  easing="bounce"
  distance="large"
  delay={200}
  duration={600}
  threshold={0.5}
  rootMargin="0px"
  as="section"
  class="custom-class"
>
  <h1>Content</h1>
</Reveal>

<RevealList stagger={100} class="grid">
  <Reveal direction="left">Item 1</Reveal>
  <Reveal direction="right">Item 2</Reveal>
</RevealList>
```

## 🎨 Examples

### Hero Section

```astro
<section data-stagger="100">
  <div data-reveal="scale" data-speed="fast" data-easing="bounce">
    <h1>Welcome</h1>
  </div>
  
  <div data-reveal="bottom" data-speed="normal" data-easing="soft">
    <p>Subtitle</p>
  </div>
  
  <div data-reveal="scale" data-speed="fast" data-easing="elastic">
    <button>CTA</button>
  </div>
</section>
```

### Grid with Alternating Directions

```astro
<div class="grid" data-stagger="150">
  {items.map((item, i) => (
    <div data-reveal={i % 2 === 0 ? "left" : "right"}>
      {item}
    </div>
  ))}
</div>
```

## ⚙️ Advanced

### Custom Easing

```html
<div
  data-reveal="bottom"
  data-easing="cubic-bezier(0.68, -0.55, 0.265, 1.55)"
>
  Custom easing
</div>
```

### Custom Distance

```html
<div data-reveal="left" data-distance="100">
  100px distance
</div>
```

### Events

```javascript
element.addEventListener('reveal', (e) => {
  console.log('Element revealed!', e.detail);
});
```

## 🎯 Performance

- ✅ GPU-accelerated (uses `transform` and `opacity`)
- ✅ No layout shifts (uses `will-change`)
- ✅ Respects `prefers-reduced-motion`
- ✅ IntersectionObserver (no scroll listeners)
- ✅ Lazy initialization (only observes visible elements)

## � Advanced Usage

### Manual Initialization

If you need more control, you can import and call `init()` manually:

```astro
<script>
  import { init } from "@polgubau/astro-reveal/reveal";

  // Initialize manually when you want
  init();

  // Or re-initialize after dynamic content loads
  document.addEventListener('my-custom-event', () => {
    init();
  });
</script>
```

### Programmatic Control

```typescript
import { init, getObserver } from "@polgubau/astro-reveal/reveal";

// Initialize all reveal elements
init();

// Get a custom observer with specific settings
const observer = getObserver(0.5, "0px");
observer?.observe(myElement);
```

### Without Auto-initialization

If you want to handle everything manually, import only the reveal module:

```astro
<script>
  // This won't auto-initialize
  import { init } from "@polgubau/astro-reveal/reveal";

  // You control when to initialize
  window.addEventListener('load', () => {
    init();
  });
</script>
```

## �📄 License

MIT © [polgubau](https://polgubau.com)

## 🤝 Contributing

Contributions welcome! Please open an issue or PR.

## 🔗 Links

- [GitHub](https://github.com/polgubau/astro-reveal)
- [NPM](https://www.npmjs.com/package/@polgubau/astro-reveal)

