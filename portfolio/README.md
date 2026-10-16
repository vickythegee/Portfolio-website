# My Portfolio (ITW 205: Advance Website Programming)

Open `index.html` in your browser (or use VS Code's *Live Server*). No install needed.

## Folder map
```
portfolio/
├── index.html          the page (semantic HTML)
├── css/
│   ├── variables.css   colours, fonts, spacing (change the look here)
│   ├── base.css        reset, typography, links, focus styles
│   ├── layout.css      Flexbox + Grid page structure
│   ├── components.css  BEM components (card, btn, nav, form...)
│   ├── animations.css  transitions, transforms, keyframes
│   └── responsive.css  media queries (mobile-first)
├── js/script.js        empty roadmap for weeks 8-13
└── images/             placeholder SVGs, replace with your own
```

## Where each week appears
| Week | Topic | Where to look |
|---|---|---|
| 1 | HTML5 semantics, ARIA, alt text | `index.html`: header/nav/main/section/article/aside/footer, `aria-label`, skip link |
| 2 | CSS architecture, BEM, variables, selectors | separate CSS files, `variables.css`, `.card__title`/`.card--featured`, `:not()`, `:nth-child()`, `:focus-within`, `[href^="http"]` |
| 3 | Flexbox | `.site-header__inner`, `.nav__list`, `.card__body`, `.site-footer__inner` |
| 4 | Grid | `.skills`, `.projects`, `.timeline`, `.form`, `.hero__inner`, `.about` |
| 5 | Responsive design | `responsive.css`, `clamp()` in `base.css`, fluid images |
| 6 | Transitions, transforms, animations | `animations.css`, flip card in `components.css` |

## First things to personalise
1. Replace every `Your Name` in `index.html` (search with Ctrl+F).
2. Swap `images/avatar.svg` for your photo (keep the `alt` text meaningful).
3. Edit the About text, skills percentages and project cards.
4. Try changing `--color-primary` in `variables.css` and watch the site recolour.

## Adding JavaScript later
`js/script.js` is already linked in `index.html`. Each TODO in the file matches a course week.
The hooks are ready: `#theme-toggle` (hidden until Week 10), `#year`, `#contact-form` with
`#name-error` / `#email-error` / `#message-error`, and the `.projects` container.
