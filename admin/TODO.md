# Admin Roadmap (Authoring Interface)

> Goal: CRUD UI for domains → courses → modules, author MDX + metadata,
> upload starter-code ZIPs, and push to Firestore.

---

## Milestone 0 — Scaffold
- [ ] `npx create-next-app@latest . --typescript --eslint --app` *(inside /admin)*  
      Choose **src/app/** layout to match frontend.

---

## Milestone 1 — Auth Guard
- [ ] Reuse Firebase config; restrict access to `admin@example.com` list.  [Codex-OK]
- [ ] `/dashboard` route redirects unauth users to Google login.

---

## Milestone 2 — Course & Module Manager
- [ ] Firestore collections:  
    ```
    domains/{id}
    courses/{cid}
    modules/{mid}
    ```
- [ ] Dashboard table: list courses with “Add”, “Edit”, “Delete”.  [Codex-OK]
- [ ] Nested view to list modules; drag-and-drop reorder saves `order` field.

---

## Milestone 3 — MDX Authoring Form
- [ ] `react-mde` or simple textarea for MDX body.  
- [ ] Inputs for front-matter: `title`, `unlockIf`, `recommendedPrereq`.  [Codex-OK]
- [ ] Preview pane: `next-mdx-remote` renders live preview.

---

## Milestone 4 — Asset & ZIP Upload
- [ ] Firebase Storage bucket `/starterCode/{cid}/{mid}/{filename}.zip`.  [Codex-OK]
- [ ] File-upload component returns download URL → stored in module doc.

---

## Milestone 5 — Publish Workflow
- [ ] “Publish” button writes/updates Firestore docs and sets `published: true`.
- [ ] Frontend course list filters out `published == false`.

---

## Icebox
- [ ] Version history / draft vs live.
- [ ] Multi-author roles & review queue.
