# GL Dining website

Website for **GL Dining**, the Norman, OK restaurant group behind **blu** (fine wine & food) and **The Library** (bar & grill).

- **Live site:** `https://<github-username>.github.io/<repo-name>/` *(update after GitHub Pages is turned on)*
- **Built with:** HTML, [DaisyUI 5](https://daisyui.com) + [Tailwind CSS 4](https://tailwindcss.com) loaded from a CDN, plain JavaScript. No install or build step.

## Run it locally

1. Clone the repo (GitHub Desktop: **File → Clone repository**).
2. Open the folder in **VS Code**.
3. Install the **Live Server** extension, right-click `index.html` → **Open with Live Server**.

## Project structure

```
index.html        GL Dining homepage: two arched "doors" + at-a-glance hours table
blu.html          blu restaurant page
library.html      The Library restaurant page
careers.html      Careers page for both restaurants
css/styles.css    Design system: DaisyUI "gldining" theme, brand colors, fonts, components
js/data.js        Restaurant info, hours, specials and full menus (edit content here)
js/layout.js      Shared navbar (with mobile menu) and footer, injected into every page
js/hours.js       Live "Open now / Closed" badges using Norman, OK time
js/restaurant.js  Fills the restaurant page intro from data.js (+ shared helpers)
js/specials.js    Specials & activities cards
js/menu.js        Menu component: category tabs, items, prices, V/GF tags
js/visit.js       Hours table (today highlighted), directions, photo gallery
js/careers.js     Careers application form (demo mode until connected)
img/              Photos
```

## Design system

| Token | Value | Used for |
|---|---|---|
| `primary` | `#24427F` navy | blu |
| `secondary` | `#2E5546` forest green | The Library |
| `accent` | `#9C7A3C` gold | GL Dining |
| `base-200` | `#F2F1ED` soft grey-white | page background |
| Fonts | Playfair Display / Quicksand / Old Standard TT / Figtree | GL Dining / blu / The Library / body text |

Use DaisyUI classes with the theme colors, e.g. `btn btn-primary` (blu), `btn btn-secondary` (The Library), `badge badge-success`.

## Pages

| Page | Status |
|---|---|
| Homepage | Done: restaurant doors, live open/closed status, at-a-glance table |
| blu | Done: intro, specials, tabbed menu (8 categories), hours & location, careers callout |
| The Library | Done: intro, specials, tabbed menu (6 categories), hours & location, careers callout |
| Careers | Done: restaurant cards, application form (demo mode until connected) |
| Navigation | Done: shared navbar, mobile hamburger menu, active page highlight, footer |

## Task assignments

| Team member | Responsibilities | Main files |
|---|---|---|
| Lisset | Project setup, repo, design system/theme, shared navigation + footer, homepage, deployment | `index.html`, `css/styles.css`, `js/layout.js`, `js/hours.js` |
| Chinedu | Restaurant page hero, specials & activities cards, mobile sticky "Call / Menu" bar | `blu.html`, `library.html`, `js/specials.js` |
| Jaxson | Menu component: category tabs, menu item rows with prices and V/GF tags | `js/menu.js` |
| Shingai | Careers application form and receiving submissions; footer/form polish | `careers.html`, `js/careers.js` |
| Presley | Hours & location section, photo gallery, restaurant typography, accessibility check | `js/visit.js` |

## Working together

1. Pull the latest `main` before you start.
2. Create a branch for your task, e.g. `menu-component`.
3. Commit in small steps with clear messages, e.g. `Build menu tab component`, `Add V/GF tags to menu items`.
4. Push and open a pull request; someone else reviews and merges.

## Connecting the careers form

GitHub Pages can't receive form submissions by itself. To collect real applications:

1. Make a free account at [formspree.io](https://formspree.io) and create a new form.
2. Copy its endpoint (looks like `https://formspree.io/f/abcdwxyz`).
3. Paste it into `FORM_ENDPOINT` at the top of `js/careers.js` and push.

Until then the form checks the fields and shows a "Demo mode" message without sending anything.

## Deployment

GitHub Pages: **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)` → Save**. The site updates a minute or two after each push to `main`.

## Open questions for the client

- The client's site lists closing time as "12:00 PM"; we assumed midnight.
- The client's site shows (405) 360-4258 for The Library, which is blu's number; we used (405) 366-7465.
- Current job openings and private event capacity.
- How the careers form should be received (email, Google Form, etc.).
