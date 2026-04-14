# Design System Strategy: The Intelligent Sanctuary

## 1. Overview & Creative North Star: "The Digital Curator"
This design system is built to transform the chaotic energy of exam preparation into a structured, high-end "Intelligent Sanctuary." We move away from the cluttered, "gamified" look of standard EdTech. Instead, we embrace **The Digital Curator**—a North Star that prioritizes cognitive ease through editorial-grade spacing, intentional asymmetry, and deep tonal layering.

To break the "template" look, we utilize a high-contrast typography scale where `display-lg` headers command attention, paired with generous `surface-container` breathing room. Layouts should feel organic; for example, a LaTeX formula card might slightly overlap a background container, creating a sense of physical depth and specialized focus.

## 2. Colors & Atmospheric Depth
Our palette transitions from the "Deep Focus" of Moroccan nights (`primary`, `secondary`) to the "Fresh Clarity" of a new morning (`tertiary`, `surface`).

### The "No-Line" Rule
**Strict Mandate:** 1px solid borders are prohibited for sectioning. Separation must be achieved through:
- **Tonal Shifts:** Placing a `surface-container-low` component against a `surface` background.
- **Negative Space:** Using the `12` (3rem) or `16` (4rem) spacing tokens to define content boundaries.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, semi-translucent sheets:
- **Base Layer:** `surface` (#f7f9fb) for the main viewport.
- **Section Layer:** `surface-container-low` (#f2f4f6) to group related modules.
- **Interaction Layer:** `surface-container-lowest` (#ffffff) for primary interactive cards.
- **Glassmorphism:** Use `surface_variant` with 40% opacity and a `20px` backdrop-blur for floating navigation or high-priority overlays.

### Signature Textures
Main CTAs and Hero sections should avoid flat fills. Use a subtle linear gradient from `primary` (#000b60) to `primary_container` (#142283) at a 135-degree angle to provide a "premium ink" feel.

## 3. Typography: The Bilingual Authority
We pair **Plus Jakarta Sans** (Latin) with high-quality Arabic equivalents to ensure a seamless RTL/LTR experience.

- **Display & Headlines (Plus Jakarta Sans):** Used for motivation and major section titles. The large scale (`display-lg` at 3.5rem) establishes an authoritative, editorial vibe.
- **Body & Labels (Inter):** Chosen for its exceptional legibility in technical contexts (mathematical Markdown/LaTeX). 
- **Hierarchy Logic:** Use `title-lg` for lesson headers to ensure they stand out against dense educational text. Always maintain a 1.5x line-height for `body-lg` to prevent visual fatigue during long study sessions.

## 4. Elevation & Depth: Tonal Layering
We reject heavy, artificial shadows in favor of "Ambient Presence."

- **The Layering Principle:** Depth is "built," not "dropped." A `secondary_container` element sitting on a `surface` background provides enough contrast to imply elevation without a single pixel of shadow.
- **Ambient Shadows:** For floating modals, use a "Tinted Cloud": `box-shadow: 0 20px 40px rgba(0, 11, 96, 0.06)`. The slight blue tint (`primary`) makes the shadow feel like a natural part of the atmosphere.
- **The "Ghost Border" Fallback:** If a divider is essential for accessibility (e.g., in a complex LaTeX table), use `outline_variant` (#c6c5d4) at 15% opacity.

## 5. Components: The Specialized Toolkit

### Educational Chat Bubbles
- **Design:** Instead of rounded "pills," use the `md` (0.75rem) roundedness for student messages and `xl` (1.5rem) for AI/Tutor responses to differentiate "Human" vs "System."
- **Content:** Bubbles must support `surface-container-highest` backgrounds to make white LaTeX formulas pop.
- **Spacing:** Use `padding: 4 (1rem)` to ensure formulas have enough "air" to be readable.

### High-Quality Study Cards
- **Structure:** No dividers. Use `title-sm` for categories and `body-md` for descriptions.
- **Visuals:** Use `tertiary_fixed` (#84f5e8) for small progress indicators or "Mint" success accents. 
- **States:** On hover, shift the background from `surface-container-lowest` to `primary_fixed` (#dfe0ff) for a soft, intelligent glow.

### Interactive Elements
- **Buttons:**
    - **Primary:** Gradient fill (`primary` to `primary_container`), `xl` roundedness, `headline-sm` text.
    - **Tertiary:** Transparent background with `on_primary_container` text. No border.
- **Inputs:** Use `surface-container-high` as the field fill. The active state is signaled by a 2px "Ghost Border" of `primary` at 40% opacity.

## 6. Do’s and Don’ts

### Do:
- **Embrace Asymmetry:** Align text to the start (Right for Arabic, Left for English) but allow images or decorative glass elements to bleed off the edge of the grid.
- **Use "Mint" Accents:** Reserve `tertiary` (#00201d) and its variants for "Success," "Completed," or "Correct Answer" states to maintain the fresh, smart vibe.
- **Prioritize LaTeX:** Ensure all containers holding mathematical content have a minimum width to prevent awkward formula wrapping.

### Don’t:
- **Don't use pure black:** Use `on_surface` (#191c1e) for text to keep the contrast high but the "vibe" soft.
- **Don't use 100% Opacity Borders:** They break the "Glassmorphism" immersion and create visual "noise."
- **Don't Over-gamify:** Avoid bright, neon "Level Up" style buttons. Keep animations subtle (e.g., a 200ms ease-in-out blur transition).