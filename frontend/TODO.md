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
- [ ] `npm i @next/mdx gray-matter`                                         [Codex-OK]
- [x] Add `content/neuro101/01-cells-and-membranes.mdx` stub
- [ ] Module page imports & renders MDX component                           [Codex-OK]

---

## Milestone 3 — Mark-Complete UI
- [ ] `useModuleStatus` hook (localStorage)                                 [Codex-OK]
- [ ] “✔ Mark complete” button → lock/unlock next module                    [Codex-OK]
- [ ] **If module doc contains `assetURL`** (Cloudinary) render             [Codex-OK]  
      `Download starter code` link (`<a href … download>`)

---

## Milestone 4 — Firebase Integration
1. **Setup**
   - [ ] Add Firebase SDK & `src/lib/firebase.ts`                           [Codex-OK]
   - [ ] Google sign-in; create `users/{uid}` on first login                [Codex-OK]
2. **Firestore reads**
   - [ ] Replace mock JSON with `courses` collection                        [Codex-OK]
   - [ ] Query `modules` where `courseId == cid` and `published == true`    [Codex-OK]
3. **Progress write-through**
   - [ ] `markComplete()` saves `progress/{uid}/{cid}/{mid}`                [Codex-OK]

---

## Milestone 5 — Styling Pass
- [ ] *(Optional)* Tailwind install; responsive nav / buttons               [Codex-OK]

---

## Milestone 6 — Deploy
- [ ] Import project to Vercel; add env vars (`NEXT_PUBLIC_*`)              [Codex-OK]
- [ ] Update root README with live URL                                      [Codex-OK]

---

## Icebox  (post-MVP)
- [ ] Replace local MDX loader with **Cloudinary-hosted assets or Firestore-stored MDX** once authoring pipeline is live
- [ ] Add streak badge + XP bar
- [ ] LLM tutor sidebar
