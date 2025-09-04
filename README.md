# Playground of Tomorrow

Phenomena-first, story-driven learning with Socratic prompts, interactive sims, and auto-feedback—built on a truth layer of vetted facts and equations.

## What can I do here?
- Learn fundamentals (Scale, Energy, Information, Systems & Control...) through short quests.
- Play with **interactive sims** (e.g., Δv sliders, log-scale drag).
- Answer **open**, **numeric (with units)**, **multiple-choice** (single/multi), or **fill-in-the-blank** questions.
- Get **instant feedback** and export a **portfolio** of your work.
- Switch **skins** (Starship/Medieval/etc) without changing the underlying truth.

## Status (MVP)
- Quests: EP01 (Scale Atlas), EP08 (Rockets Δv)
- Sims: SizeAtlas, DeltaV
- Persistence: localStorage (via StorageAdapter)
- Content is JSON under `/content/**` and validated at runtime.

## Run locally
```bash
pnpm install
pnpm dev
```

## Repo structure
```
/content
  /cards/*.json         # UniverseCards (facts)
/equations/*.json       # EquationSpec (units, tolerances)
/schemas/*.json         # AnswerSchemas for open answers
/lore/*.json            # LoreTemplates by skin
/quests/*.json          # Quest specs
/src
  /components           # UI (LoreBlock, QuestionItem, SimHost, etc.)
  /sims                 # SizeAtlasSim, DeltaVSim
  /lib                  # storage, grader, units, planner, narrative
  /pages                # /, /quest/[slug], /portfolio, /settings, /content
```

## Authoring new content

1. Add Cards/Equations/Schemas JSON.
2. Create a Quest that references them.
3. (Optional) Add a LoreTemplate with placeholders for each skin.
4. Reload — your quest appears. JSON is validated; errors show on /content.

## Accessibility

- Keyboard navigable, ARIA-labeled controls, high-contrast friendly.

## Roadmap

- Energy Bookkeeping quest and sim
- Lane toggle (Intuition/Math)
- Planner v1 (unlock flow)
- Optional: LLM open-answer grading
- Optional: Firebase adapter

### License: MIT (TBD)