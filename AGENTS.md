# AGENTS.md

## Project Overview
Static HTML/CSS/JS site (no build step, no backend, no dependencies). Brazilian academic platform ("Formação.TI") for teacher training in IT. All content is in Portuguese (pt-BR).

## Structure
- `*.html` — pages (index, formacao, materiais, pratica, refletir, teste)
- `css/style.css` — single stylesheet
- `js/main.js` — shared header component injected into `#header-placeholder`
- `js/materiais.js`, `js/pratica.js`, `js/teste.js` — page-specific data/interactions

## Running
- Served by `docker-compose.base44.yml` (nginx:alpine on host port 3000, source bind-mounted read-only).
- No build, no migrations, no secrets, no external services.
- **Permissions quirk:** the repo root and subdirectories are `drwx------` (700) after import; nginx's worker (non-root) gets 403. Fix with `chmod a+rx . css js && chmod a+r *.html css/*.css js/*.js` whenever the sandbox is recreated.

## Editing
- Changes to HTML/CSS/JS are reflected immediately (nginx serves files directly from the bind mount). Call `reload_preview` only if a change doesn't appear.
