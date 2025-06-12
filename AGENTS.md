# AGENTS.md
> Guidelines for automated coding agents (e.g., GitHub Copilot Workspace, OpenAI Codex, ChatGPT “code mode”).

## ✨ Project Overview
Playground of Tomorrow is a multi-domain interactive-course platform (Brilliant-style).
Repo structure:
```
/README.md
/AGENTS.md <- this file
/frontend/ <- learner-facing Next.js app
/admin/ <- author/creator UI
```

Only **`frontend/`** and **`admin/`** contain runtime code; root holds docs.

---

## 🤖 Registered Agents & Roles

| Agent name | Intended tasks | Allowed paths |
|------------|---------------|---------------|
| **codex**  | Implement items tagged **\[Codex-OK]** in any TODO.md. Write React/TS, Firebase calls, basic tests. | `frontend/**` or `admin/**` depending on TODO location |
| _future_ (llm-tutor) | Will handle LLM backend once MVP is live. _Do not create yet._ | _(none)_ |

---

## 📂 Directory Rules
1. **`frontend/`**  
   *Language:* TypeScript, React, Next.js 14 App Router  
   *Style:* Prettier default settings; no Husky hooks required  
   *Env Vars:* use `process.env.NEXT_PUBLIC_…` or `process.env.FIREBASE_…`

2. **`admin/`**  
   Same stack unless README specifies otherwise.

3. **No writes outside those folders** (except modifying `package.json`, `pnpm-lock.yaml` or `README.md` when required).

---

## 🔑 Task Picking Protocol
* Agents **only pick tasks marked `[Codex-OK]`** in the nearest TODO.md.
* If a task is ambiguous, open a draft PR with a question instead of guessing.
* One PR ≈ one TODO item unless tasks are tightly coupled.

---

## 🛠️ Coding Standards
* Pass `npm run build` and `npm run lint` in the respective folder.
* For any new implemented feature, new appropriate success, edge case, and failure tests must be written
* Both newly added and previously existed tests must pass. It is *not* allowed to skip any.
* Favor **functional components** with hooks.
* Use **Firebase v10 modular SDK** (`import { getAuth } from 'firebase/auth'`).
* If adding a new dependency, update `package.json` **and** explain the reason in the PR body.

---

## 🔒 Commit / PR Conventions
* **Branch name:** `codex/<ticket-id>-<slug>`  
* **Commit message:**  `chore(frontend): task-name – one-line summary`
* **PR template** should include:
* TODO reference line (e.g., `Closes frontend/TODO#M1-2`)
* Brief “Implementation details”
* Screenshot or GIF if UI changes

---

## ✅ Definition of Done
1. CI passes (`npm run test` if tests exist, else `npm run build`).
2. Feature is manually verified in local dev (`npm run dev`) by human reviewer.
3. Documentation updated when API surface changes.

---

## 🧹 Out-of-Scope Actions
* Do **not** integrate any LLM chat functions yet.
* Do **not** introduce Husky or lint-staged hooks.
* Do **not** refactor files outside the task’s directory unless explicitly instructed.

---

*Last updated: 2025-06-12 by Nika (nikakogho)*
