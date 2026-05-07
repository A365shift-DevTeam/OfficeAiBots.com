# Product Sections Design — 2026-05-07

## Summary
Add 4 product detail sections and 1 closing section after `SolutionsOverview` in `App.tsx`.

## Placement
`App.tsx` order after this change:
```
<SolutionsOverview />       ← existing "AI Solutions & Enterprise Products"
<Separator />
<ProductsSections />        ← NEW: 4 product sections
<Separator />
<WhyAmbotProducts />        ← NEW: closing unified section
<Separator />
<AgentsInAction />          ← existing (unchanged)
...
```

## New Files
- `src/components/sections/ProductsSections.tsx` — data-driven, renders all 4 product sections
- `src/components/sections/WhyAmbotProducts.tsx` — closing "Why Ambot365 Products?" section

## ProductsSections Layout (per product)

Each of the 4 products renders a full-width section with alternating backgrounds:
- Products 1 & 3 (Office AI Bots, AI Chatbots): white `bg-white dark:bg-gray-950`
- Products 2 & 4 (Business Hub, Premium Websites): soft green `bg-[#f2faf6] dark:bg-gray-950/50`

**Section structure:**
```
[badge]  [h2 Product Name]  [▶ Audio button — omitted, no audio assets]
[Overview paragraph — full width]

3-column grid:
  Col 1 (25%): Items Included — bullet list with teal dots
  Col 2 (35%): Comparison Table — two mini-cards (old ✗ / new ✓)
  Col 3 (40%): Features & Benefits — 2×3 grid of icon+title+desc cards
```

## Data Structure
```ts
interface Product {
  id: string;
  badge: string;
  title: string;
  overview: string;
  includedLabel: string;
  included: string[];
  comparison: {
    leftLabel: string;
    leftItems: string[];
    rightLabel: string;
    rightItems: string[];
  };
  features: { icon: LucideIcon; title: string; desc: string }[];
}
```

## WhyAmbotProducts Layout
Full-width gradient section (matching hero CTA palette):
- Heading: "Why Ambot365 Products?"
- 6 cards in a 2×3 grid, each with icon + title + one-line description
- Background: light green gradient matching existing section style

## Design Tokens (existing, reused)
- Primary green: `#00B050` / `primary-500`
- Teal gradient: `from-[#4C99A0] to-[#65A859]`
- Dark navy headings: `#002060` / `section-title`
- Cards: `section-card` class
- Motion: `motion/react`, `whileInView`, `once: true`
- Icons: `lucide-react`

## Constraints
- No new dependencies
- Follow existing motion/animation patterns (fade-up on scroll)
- Mobile responsive: 3-col grid collapses to 1 col on mobile
- Dark mode support via existing Tailwind dark: variants
