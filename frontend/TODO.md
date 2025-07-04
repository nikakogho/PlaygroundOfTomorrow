# Frontend Roadmap (Learner-Facing)

> MVP = browse courses, view MDX lesson, mark complete (local or Firestore)

---

## Milestone 0 — Environment ✅
- [x] create-next-app scaffold
- [x] baseline README

---

## Milestone 1 — Routing & Layout
- [x] Dynamic route `/courses/[cid]/modules/[mid]` renders slug             [Codex-OK]
- [x] Navbar with SiteTitle + Google-login placeholder                      [Codex-OK]
- [x] Course-list page (`/courses`) fed by **mock JSON**                    [Codex-OK]

---

## Milestone 2 — MDX Content Loader (local)
- [x] `npm i @next/mdx gray-matter`                                         [Codex-OK]
- [x] Add `content/neuro101/01-cells-and-membranes.mdx` stub
- [x] Module page imports & renders MDX component                           [Codex-OK]

---

## Milestone 3 — Mark-Complete UI

Step-based Content Rendering
- [x] Create a <Step> wrapper component for chunking content in MDX.
- [x] Create useStepProgress hook to manage and persist currentStepIndex in localStorage.
- [x] Rework ModulePageLayout to render only unlocked <Step> components based on the hook.
- [x] For "passive" steps (no quiz), automatically add a "Continue" button that unlocks the next step.

Enhanced Interactive Components
- [x] Update ExerciseContext to provide an onComplete() callback that advances the current step.
- [x] Add attempt-tracking state to <MultipleChoice> and <FillInTheBlank>.
- [x] Implement a <Hint> component that can be nested within an exercise.
- [x] Add logic to show a "Show Answer & Continue" button after 3 failed attempts.

---

## Milestone 4 — Mark-Complete & Assets
- [x] The "✔ Mark complete" button for the entire module becomes enabled only after the final step is completed.
- [ ] If a module doc contains assetURL in its frontmatter, render a Download starter code link.

---

## Milestone 5 — Firebase Integration
1. **Setup**
   - [ ] Add Firebase SDK & `src/lib/firebase.ts`                           [Codex-OK]
   - [ ] Google sign-in; create `users/{uid}` on first login                [Codex-OK]
2. **Firestore reads**
   - [ ] Replace mock JSON with `courses` collection                        [Codex-OK]
   - [ ] Query `modules` where `courseId == cid` and `published == true`    [Codex-OK]
3. **Progress write-through**
   - [ ] useStepProgress hook writes lastCompletedStep to progress/{uid}/{cid}/{mid} document. [Codex-OK]
   - [ ] markComplete() sets a completed: true flag in the same progress document. [Codex-OK]

---

## Milestone 6 — Styling Pass
- [ ] *(Optional)* Tailwind install; responsive nav / buttons               [Codex-OK]

---

## Milestone 7 — Deploy
- [ ] Import project to Vercel; add env vars (`NEXT_PUBLIC_*`)              [Codex-OK]
- [ ] Update root README with live URL                                      [Codex-OK]

---

## Icebox  (post-MVP)
- [ ] Replace local MDX loader with **Cloudinary-hosted assets or Firestore-stored MDX** once authoring pipeline is live
- [ ] LLM-powered <OpenQuestion> component for Socratic-style free-response validation and feedback
- [ ] Add streak badge + XP bar
- [ ] LLM tutor sidebar
