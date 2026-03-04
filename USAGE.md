# Usage Guide

## Installation

```bash
npm install @polgubau/astro-reveal
```

## Setup

### 1. Add to your layout

```astro
---
// src/layouts/Layout.astro
import "@polgubau/astro-reveal/styles";
---

<html>
  <head>
    <!-- ... -->
  </head>
  <body>
    <slot />
    
    <script>
      import "@polgubau/astro-reveal";
    </script>
  </body>
</html>
```

## Usage Methods

### Method 1: Data Attributes (Recommended)

The simplest way - just add data attributes to any HTML element:

```astro
<div data-reveal="bottom">
  Fades in from bottom
</div>

<h1 data-reveal="scale" data-speed="fast" data-easing="bounce">
  Bouncy heading
</h1>

<section data-reveal="left" data-delay="200">
  Delayed from left
</section>
```

### Method 2: Reveal Component

For more complex scenarios or when you prefer components:

```astro
---
import { Reveal } from "@polgubau/astro-reveal";
---

<Reveal direction="bottom" speed="fast">
  <h1>Animated heading</h1>
</Reveal>
```

### Method 3: RevealList for Stagger

Automatically stagger multiple elements:

```astro
---
import { Reveal, RevealList } from "@polgubau/astro-reveal";
---

<RevealList stagger={100}>
  <Reveal direction="left">Item 1</Reveal>
  <Reveal direction="left">Item 2</Reveal>
  <Reveal direction="left">Item 3</Reveal>
</RevealList>
```

Or with data attributes:

```astro
<div data-stagger="100">
  <div data-reveal="bottom">Item 1</div>
  <div data-reveal="bottom">Item 2</div>
  <div data-reveal="bottom">Item 3</div>
</div>
```

## Real-World Examples

### Hero Section

```astro
<section class="hero" data-stagger="100">
  <div data-reveal="scale" data-speed="fast" data-easing="bounce">
    <h1>Welcome to Our Site</h1>
  </div>
  
  <div data-reveal="bottom" data-speed="normal" data-easing="soft">
    <p>Beautiful animations made easy</p>
  </div>
  
  <div data-reveal="scale" data-speed="fast" data-easing="elastic">
    <button>Get Started</button>
  </div>
</section>
```

### Grid with Alternating Directions

```astro
---
const items = [1, 2, 3, 4, 5, 6];
---

<div class="grid" data-stagger="150">
  {items.map((item, i) => (
    <div data-reveal={i % 2 === 0 ? "left" : "right"}>
      <Card>Item {item}</Card>
    </div>
  ))}
</div>
```

### Stats Section

```astro
<section data-stagger="100">
  <div data-reveal="scale" data-easing="bounce">
    <h2>1000+</h2>
    <p>Happy Clients</p>
  </div>
  
  <div data-reveal="scale" data-easing="bounce">
    <h2>50+</h2>
    <p>Projects</p>
  </div>
  
  <div data-reveal="scale" data-easing="bounce">
    <h2>99%</h2>
    <p>Satisfaction</p>
  </div>
</section>
```

### FAQ Section

```astro
<div class="faq" data-stagger="80">
  {faqs.map((faq) => (
    <details data-reveal="bottom" data-speed="normal" data-easing="soft">
      <summary>{faq.question}</summary>
      <p>{faq.answer}</p>
    </details>
  ))}
</div>
```

## Tips & Best Practices

### 1. Use Stagger for Lists

Instead of manually setting delays:

```astro
<!-- ❌ Don't do this -->
<div data-reveal="bottom" data-delay="0">Item 1</div>
<div data-reveal="bottom" data-delay="100">Item 2</div>
<div data-reveal="bottom" data-delay="200">Item 3</div>

<!-- ✅ Do this -->
<div data-stagger="100">
  <div data-reveal="bottom">Item 1</div>
  <div data-reveal="bottom">Item 2</div>
  <div data-reveal="bottom">Item 3</div>
</div>
```

### 2. Choose the Right Easing

- `smooth` - General purpose (default)
- `bounce` - Playful, attention-grabbing
- `elastic` - Energetic, fun
- `sharp` - Quick, professional
- `soft` - Elegant, subtle

### 3. Respect User Preferences

The library automatically respects `prefers-reduced-motion`. No extra work needed!

### 4. Performance

- Use `scale` for the best performance (no layout shifts)
- Avoid animating too many elements at once
- Use appropriate thresholds to trigger animations at the right time

## Troubleshooting

### Animations not working?

1. Make sure you imported the CSS:
   ```astro
   import "@polgubau/astro-reveal/styles";
   ```

2. Make sure you imported the script:
   ```astro
   <script>
     import "@polgubau/astro-reveal";
   </script>
   ```

3. Check browser console for errors

### Animations triggering too early/late?

Adjust the `threshold` and `rootMargin`:

```astro
<div 
  data-reveal="bottom"
  data-threshold="0.5"
  data-root-margin="0px 0px -20% 0px"
>
  Content
</div>
```

### Want to trigger animations manually?

Listen for the `reveal` event:

```javascript
element.addEventListener('reveal', (e) => {
  console.log('Revealed!', e.detail);
});
```

