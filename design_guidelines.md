# Design Guidelines: Modern Real Estate Landing Page

## Design Approach
**Reference-Based Approach**: Airbnb-inspired aesthetic
- Clean, aspirational imagery showcasing properties
- Generous white space creating premium feel
- Soft shadows and rounded corners for modern elegance
- Grid-based layouts with consistent card patterns
- Overlay interactions for seamless browsing experience

## Typography System
**Font Stack**: Google Fonts via CDN
- Primary: 'Circular' alternative → **Inter** (400, 500, 600, 700)
- Headings: Inter 600-700, sizes 32px (h1), 24px (h2), 18px (h3)
- Body: Inter 400-500, 14-16px for descriptions
- Price emphasis: Inter 600, 20-24px
- Property specs: Inter 400, 13-14px

## Layout & Spacing System
**Tailwind Units**: Use 2, 4, 6, 8, 12, 16 units consistently
- Header: py-4 to py-6, px-6 to px-8
- Property Grid Container: max-w-7xl, px-6, py-12
- Card spacing: gap-6 (desktop), gap-4 (mobile)
- Card internal padding: p-4
- Modal padding: p-8 to p-12

**Grid System**:
- Desktop: `grid grid-cols-3 lg:grid-cols-4` (3-4 columns)
- Tablet: `md:grid-cols-2` (2 columns)
- Mobile: `grid-cols-1` (single column)

## Component Library

### Header
- Fixed/sticky at top, subtle backdrop blur
- Logo left-aligned (text or icon, 32-40px height)
- Minimal navigation right-aligned: "Compra", "Affitta", "Contatti"
- Height: h-16 to h-20
- Clean separator line below (1px border)

### Property Cards
- Aspect ratio 4:3 for main image
- Rounded corners: rounded-xl (12px)
- Shadow: shadow-md on hover → shadow-xl transition
- Image: Full-width, rounded-t-xl, object-cover
- Info section below image with p-4
- Zone: Text semi-bold, 16px
- Specs row: Grid layout for sqm/rooms/bathrooms with icons
- Price: Bold, prominent at bottom-right
- Hover: Subtle lift effect (transform scale 1.02)
- Cursor: pointer on entire card

### Modal/Overlay
- Full-screen overlay: bg-black/60 backdrop-blur-sm
- Modal container: max-w-4xl, centered, bg-white, rounded-2xl
- Close button: Top-right, large X icon (Heroicons), hover state
- Image gallery: Large primary image with thumbnails below
- Content grid: 60/40 split (images left, details right)
- Details section: Same specs as cards but expanded with description
- Smooth entrance animation: fade in + scale from 0.95 to 1

### Icons
**Heroicons** (outline variant) via CDN:
- Square meters: Home icon
- Bedrooms: UserGroup icon or custom bed icon
- Bathrooms: Beaker icon (placeholder)
- Close modal: XMark icon
- All icons: 20px size, consistent stroke width

## Images
**Property Images**:
- Main card images: High-quality interior/exterior shots, 800x600px minimum
- Modal gallery: 1200x900px for primary, 200x150px thumbnails
- 8-12 diverse property images showing: modern apartments, villas, lofts, penthouses
- Bright, well-lit photography with staging
- Variety of architectural styles

**Placement**:
- Each card: 1 main hero image
- Modal: 4-6 images per property in gallery

No large hero section - content begins immediately with property grid after header.

## Visual Treatment
- Background: Pure white or very light gray (bg-gray-50)
- Cards: White with subtle shadow elevation
- Text hierarchy: Dark gray for body (text-gray-700), black for headings (text-gray-900)
- Price: Distinct weight and size to stand out
- Borders: Minimal, only for subtle separation where needed
- Focus states: Ring-2 for accessibility on interactive elements

## Responsive Behavior
**Mobile** (< 768px):
- Single column grid
- Full-width cards with 16px side margins
- Modal: 95% viewport width, full height scroll
- Touch-optimized tap targets (44px minimum)

**Tablet** (768px - 1024px):
- 2-column grid
- Balanced spacing

**Desktop** (> 1024px):
- 3-4 column grid
- Max container width for optimal readability
- Hover states active

## Interactions
- Card click: Opens modal with 200ms transition
- Modal backdrop click: Closes modal
- Image gallery: Click thumbnails to change main image
- Smooth scrolling within modal for long content
- No distracting animations - keep interactions purposeful and fast

## Accessibility
- Semantic HTML5 structure
- Focus management: trap focus in modal when open
- Keyboard navigation: ESC to close modal, TAB through elements
- ARIA labels for icons and interactive elements
- Sufficient color contrast ratios (WCAG AA minimum)