---
name: Orbital Glass
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#cfc2d6'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#988d9f'
  outline-variant: '#4d4354'
  surface-tint: '#ddb7ff'
  primary: '#ddb7ff'
  on-primary: '#490080'
  primary-container: '#b76dff'
  on-primary-container: '#400071'
  inverse-primary: '#842bd2'
  secondary: '#7bd0ff'
  on-secondary: '#00354a'
  secondary-container: '#00a6e0'
  on-secondary-container: '#00374d'
  tertiary: '#ddb8ff'
  on-tertiary: '#490081'
  tertiary-container: '#b175ec'
  on-tertiary-container: '#400071'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f0dbff'
  primary-fixed-dim: '#ddb7ff'
  on-primary-fixed: '#2c0051'
  on-primary-fixed-variant: '#6900b3'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#7bd0ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#f0dbff'
  tertiary-fixed-dim: '#ddb8ff'
  on-tertiary-fixed: '#2c0051'
  on-tertiary-fixed-variant: '#62259b'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: '0'
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: '0'
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: Space Grotesk
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 2rem
  margin-mobile: 1rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system targets aerospace engineers, mission controllers, satellite operators, and deep-tech SaaS teams navigating mission-critical data. The aesthetic fuses technical precision with the ethereal depth of deep orbital space. It evokes calm control, absolute dependability, and cutting-edge forward momentum.

The stylistic foundation blends **Glassmorphism** with **Technical Minimalism**:
- Deep cosmic darkness establishes infinite depth, reducing ocular strain during prolonged monitoring sessions.
- Atmospheric neon luminescence signals telemetry states, active computational pipelines, and high-priority interactive targets.
- Precision optics—including hairline glass highlights, subtle micro-gradients, and layered backdrop blurs—deliver a sophisticated, tactile heads-up display (HUD) feel without sacrificing enterprise density or legibility.

## Colors

The palette establishes an authentic vacuum-of-space substrate overlaid with energized gas ionization cues:

- **Canvas & Backgrounds:**
  - Base Deep Space: `#0B0D1B` (Root viewport canvas)
  - Surface Mid-Void: `#12162E` (Layered surfaces, panels, and sidebars)
  - Surface Elevated: `#181E3F` (Elevated overlays, popovers, and interactive modules)
- **Primary Violet/Purple Spectrum:**
  - Core Brand Primary: `#A855F7` (Primary action targets, active states, key focus indices)
  - Luminescent Lavender: `#C084FC` (Hover states, luminous highlights, glowing radial stops)
  - Deep Ultraviolet: `#7E22CE` (Muted action containers, pressed states, subtle glow cores)
- **Secondary Starlight Cyan Spectrum:**
  - Orbital Cyan: `#38BDF8` (Telemetry indicators, data visualizations, live status pulses, informational accents)
  - Cyan Sheen: `rgba(56, 189, 248, 0.15)` (Subtle active indicator fills)
- **Neutrals & Text:**
  - Starlight Bright (Crisp Off-White): `#F8FAFC` (Headings, primary metrics, high-contrast labels)
  - Telemetry Dust (Muted Slate): `#94A3B8` (Body prose, secondary metadata, inactive iconography)
  - Cosmic Dim: `#475569` (Structural dividers, subtle grids, disabled states)
- **Translucent Overlays & Borders:**
  - Glass Border: `rgba(168, 85, 247, 0.2)`
  - Active Border Glow: `rgba(168, 85, 247, 0.6)`
  - Surface Glass Fill: `rgba(18, 22, 46, 0.65)`

## Typography

Typography balances futuristic scientific display characteristics with neutral, high-density analytical reading:

- **Display & Headlines (`Space Grotesk`):** Injects aerospace character, engineered curves, and subtle technological tension into headings, KPI summaries, and module anchors.
- **Interface & Body Text (`Inter`):** Delivers clean readability for tabular values, code snippets, orbital coordinates, and dense logs without visual fatigue.
- **Labels & Micro-data (`Space Grotesk`):** Applied in uppercase or tracked variants to confer instrument panel authority on status chips, breadcrumbs, table headers, and axis markers.

## Layout & Spacing

The layout is built on an enterprise 12-column fluid grid system engineered for multi-display launch ops, mission command centers, and responsive tablets:

- **Grid Model:**
  - **Desktop (>= 1280px):** 12 columns, 32px gutters (`gutter-lg`), 48px canvas margins (`margin-desktop`). Max container bounds set to 1600px for ultra-wide command monitors.
  - **Tablet (768px - 1279px):** 8 columns, 24px gutters (`gutter`), 32px canvas margins (`margin`).
  - **Mobile (< 768px):** 4 columns, 16px gutters (`gutter-sm`), 16px canvas margins (`margin-mobile`).
- **Rhythm & Stacking:**
  - 8pt primary baseline grid governs structural spacing (`space-sm` = 8px, `space-md` = 16px, `space-lg` = 24px, `space-xl` = 40px).
  - Micro-alignment uses a 4pt sub-grid (`space-xs` = 4px) for badges, telemetry indicators, and dense table cell layouts.

## Elevation & Depth

Visual hierarchy does not rely on opaque drop shadows; instead, it utilizes physical optical depth, variable luminescence, and dark glass refraction:

- **Layer 0 (Canvas Base):** Solid `#0B0D1B` background, optionally enriched with ambient deep violet radial mesh gradients (`rgba(126, 34, 206, 0.08)` blur 120px) to simulate spatial nebulae.
- **Layer 1 (Glass Panels & Dashboard Cards):** `rgba(18, 22, 46, 0.65)` with `backdrop-filter: blur(16px)` and a top-weighted hairline border: `1px solid rgba(255, 255, 255, 0.08)` transitioning to `rgba(168, 85, 247, 0.15)` at the edges.
- **Layer 2 (Floating Modals & Flyouts):** `rgba(24, 30, 63, 0.85)` with `backdrop-filter: blur(24px)`, framed by `1px solid rgba(168, 85, 247, 0.35)` and an ambient violet cast shadow: `0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 25px -5px rgba(168, 85, 247, 0.2)`.
- **Active State / Interactive Aura:** Active or focused elements emit an electric glow:
  - Violet Focus: `box-shadow: 0 0 0 1px #A855F7, 0 0 16px rgba(168, 85, 247, 0.45)`
  - Starlight Telemetry Glow: `box-shadow: 0 0 12px rgba(56, 189, 248, 0.5)`

## Shapes

The design system adopts a balanced, refined industrial curvature (`roundedness: 2`):

- **Standard Elements (0.5rem / 8px):** Inputs, standard buttons, telemetry chips, notification toasts, and table row groupings.
- **Containers & Glass Surfaces (1rem / 16px):** Metric panels, operational cards, mission timelines, and command modals.
- **Specialized Overlays (1.5rem / 24px):** Primary hero viewport modules and floating command palettes.
- **Status & Indicators:** Fully circular / pill borders strictly reserved for live pulse nodes, orbital node anchors, and toggle switches.

## Components

### Buttons
- **Primary Futuristic Button:** Solid gradient fill (`linear-gradient(135deg, #C084FC 0%, #A855F7 50%, #7E22CE 100%)`), text `#FFFFFF`, font `Space Grotesk` (weight 600). Outer glow: `0 0 20px rgba(168, 85, 247, 0.4)`. Hover expands glow to `0 0 28px rgba(168, 85, 247, 0.7)` with a slight `brightness(1.1)` filter.
- **Secondary Glass Button:** Background `rgba(18, 22, 46, 0.6)`, border `1px solid rgba(168, 85, 247, 0.35)`, text `#F8FAFC`. Hover creates an internal glow via `inset 0 0 12px rgba(168, 85, 247, 0.2)` and border `#C084FC`.\n- **Tertiary Starlight Button:** Transparent background, text `#38BDF8`, minimal border `1px solid transparent`. Hover yields `border-color: rgba(56, 189, 248, 0.4)` with text glow `text-shadow: 0 0 8px rgba(56, 189, 248, 0.6)`.

### Cards & Panels
- Translucent dark glass container (`rgba(18, 22, 46, 0.7)`), 16px roundedness, `backdrop-filter: blur(20px)`.
- Bound by a gradient hairline border: `border: 1px solid rgba(168, 85, 247, 0.2)`.
- Header sections feature a bottom divider: `1px solid rgba(255, 255, 255, 0.05)`. Hovering on interactive cards shifts border glow to `rgba(192, 132, 252, 0.45)`.

### Input Fields
- Base fill `rgba(11, 13, 27, 0.75)`, border `1px solid rgba(148, 163, 184, 0.2)`, text `#F8FAFC`, placeholder `#475569`.
- Focused state transitions border to `#A855F7` accompanied by `box-shadow: 0 0 0 1px #A855F7, 0 0 14px rgba(168, 85, 247, 0.35)`.
- Accompanying monospaced telemetry indicators or units styled in `#38BDF8`.

### Chips & Telemetry Badges
- Pill or 8px rounded capsules with `rgba(18, 22, 46, 0.8)` background.
- Border and text dynamic by state:
  - **Nominal / Starlight:** Border `rgba(56, 189, 248, 0.3)`, text `#38BDF8`, inner dot with ping pulse `#38BDF8`.\n  - **Ionizing / Active:** Border `rgba(168, 85, 247, 0.4)`, text `#C084FC`.\n  - **Standby:** Border `rgba(148, 163, 184, 0.2)`, text `#94A3B8`.\n
### Checkboxes & Radio Buttons
- 18px dimensions, 4px border radius for checkboxes, circular for radios.
- Unchecked: Background `rgba(11, 13, 27, 0.8)`, border `1px solid rgba(148, 163, 184, 0.3)`.
- Checked: Fill `#A855F7` with electric white checkmark/dot and a soft purple halo `box-shadow: 0 0 8px rgba(168, 85, 247, 0.6)`.

### Lists & Data Grids
- Alternating subtle rows using `rgba(24, 30, 63, 0.2)` on hover, with a 2px left border accent in `#38BDF8` appearing on active selection.
- Column headers rendered in `Space Grotesk` uppercase (`label-sm`), `#94A3B8`, tracking `0.08em`.
