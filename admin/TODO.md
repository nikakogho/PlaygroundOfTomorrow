# Admin Roadmap (Authoring Interface)

> ✅ Scaffolding complete (`create-next-app`), app runs on :3001

---

## Milestone 1 — Auth Guard
- [ ] Add `src/lib/firebase.ts` with SDK init               [Codex-OK]
- [ ] Google login; restrict to ALLOWED_EMAILS list         [Codex-OK]
- [ ] `/dashboard` route redirects unauth users             [Codex-OK]

## Milestone 2 — Course & Module Manager
- [ ] CRUD table for `courses` and `modules`                [Codex-OK]
- [ ] Drag-and-drop reorder saves `order`                   [Codex-OK]

## Milestone 3 — MDX Authoring Form
- [ ] MDX textarea + front-matter inputs                    [Codex-OK]
- [ ] Live preview with `next-mdx-remote`                   [Codex-OK]

## Milestone 4 — Cloudinary Upload
- [ ] API route `/api/upload` (Cloudinary)                  [Codex-OK]
- [ ] `AssetUploader.tsx` returns `secure_url`              [Codex-OK]
- [ ] Save `assetURL` in `modules/{mid}` doc                [Codex-OK]

## Milestone 5 — Publish Workflow
- [ ] “Publish” toggles `published:true`                    [Codex-OK]
