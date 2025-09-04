# AGENTS — Build Rules for Playground of Tomorrow

## Goal
Implement Milestone 1 (Kernel MVP) with clean abstractions so we can swap storage and add content without code changes.

## Tech & Constraints
- Next.js + React + TypeScript + Tailwind
- Pure frontend; no backend
- Do **not** call `window.localStorage` directly—use `StorageAdapter`
- Validate all `/content/**` JSON with Zod at runtime; show readable errors
- Sims must be implemented with canvas/SVG (no heavy 3D libs)
- Ensure keyboard accessibility (Tab, Enter/Space, arrow keys for sliders)

## Architecture you must respect
- Truth Layer (Cards, Equations, Schemas) is separate from Narrative Layer (Lore)
- Question Engine supports: open, numeric, mcq_single, mcq_multi, fill_blank
- SimHost provides a stable API; sims post state up via `onState`
- All content is referenced by IDs; no hard-coded strings in components

## Acceptance tests
- Launch `/` → choose skin → play EP01 → interact with SizeAtlas → answer mixed questions → pass mastery
- Finish EP01 unlocks EP08; Δv moves with sliders; numeric answer graded w/ units
- Refresh keeps progress; Portfolio shows entries; export works
- Switch skins; lore changes but questions/sims stay identical

## Code quality
- TypeScript types for all models; no `any`
- Zod schemas mirror TS types
- Minimal dependencies; keep bundle light
- Use React ARIA patterns for labels and keyboard controls

## Do not
- Introduce server state or random uncontrolled APIs
- Bypass validation
- Tie logic to a single skin’s copy or visuals

## Stretch (if time remains)
- EP02 Energy Bars sim
- Lane toggle (Intuition/Math)
