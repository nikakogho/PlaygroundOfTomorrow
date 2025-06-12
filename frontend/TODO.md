# Frontend Roadmap (Learner-Facing)

> Goal: public MVP that lets users browse a course list, open a module page,
> read MDX content, mark it complete, and see the next module unlock.

---

## Milestone 0 — Environment ✔️ *(done)*
- [x] create-next-app scaffold
- [x] commit baseline README

---

## Milestone 1 — Routing & Layout
- [ ] **Install React Router fallback**  
      Next.js App Router is on by default; confirm `/courses/[cid]/[mid]` renders.  [Codex-OK]
- [ ] Minimal page shell: top nav (`SiteTitle`, `Login`), main content area.  [Codex-OK]
- [ ] Course List page (`/courses`) that for now maps over a **mock JSON** array.  [Codex-OK]

---

## Milestone 2 — MDX Content Loader
- [ ] `npm i @next/mdx gray-matter`   [Codex-OK]
- [ ] Create local folder `content/neuro101/01-cells-and-membranes.mdx`.
- [ ] In `[mid]/page.tsx`, load MDX via `import fs/promises` (dev mode only).  
- [ ] Render `<MDXContent />` component.

*(Firestore fetch will replace local loader in Milestone 4.)*

---

## Milestone 3 — “Mark Complete” UI (Local State)
- [ ] Add “✅ Mark module complete” button that sets `completed` in **localStorage**.  [Codex-OK]
- [ ] Hook: `useModuleStatus(cid, mid)` returns `{ completed:boolean }`.
- [ ] If previous module not completed → lock current link (greyed-out).

---

## Milestone 4 — Firebase Integration
1. **Setup**  
   - [ ] `firebase` SDK install & config file.   [Codex-OK]  
   - [ ] Google sign-in button that writes `users/{uid}` doc on first login.
2. **Firestore schema (read-only phase)**  
   - [ ] Mirror same local JSON mock in `courses/{cid}` collection.  
3. **Progress write-through**  
   - [ ] `markComplete()` writes `progress/{uid}/{cid}/{mid}`.

---

## Milestone 5 — Styling Pass (optional Tailwind)
- [ ] Install Tailwind, regenerate config (`npx tailwindcss init -p`).  
      → If npm error persists, use Yarn or reinstall Node 20 LTS.  
- [ ] Add basic responsive classes to nav, sidebar, buttons.

---

## Milestone 6 — Deploy
- [ ] Push branch ➜ Vercel import ➜ environment vars (`NEXT_PUBLIC_FIREBASE_*`).  
- [ ] Custom domain or Vercel *.app URL in README.

---

## Icebox (post-MVP)
- [ ] Replace local MDX import with Firestore storage fetch.
- [ ] Integrate streak badge + XP bar.
- [ ] LLM tutor sidebar (blocked until backend billing design).
