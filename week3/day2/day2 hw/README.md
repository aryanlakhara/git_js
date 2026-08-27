# Make It Responsive

Turn a desktop-only card gallery into **one layout that adapts from phone to desktop** — using the mobile-first media queries you just learned.

## The brief

The markup in `index.html` is a gallery of six cards, each with an image, a heading, and a caption. **You may not edit the HTML.** All your work happens in **`main.css`**.

Make the gallery responsive, **mobile-first**:

- **Mobile (base styles):** **1 column**.
- **Tablet (a `min-width` media query):** **2 columns**.
- **Desktop (a second `min-width` media query):** **3 columns**.
- **Images:** must never overflow their card.

Build it the mobile-first way — write the phone layout as your base rules, then *add* `@media (min-width: …)` blocks that layer on more columns as the screen grows. Don't start from desktop and strip things away.

## What the tests check (10)

1. `.gallery` uses `display: grid` in the base styles.
2. The base (mobile) layout is a **single column**.
3. `.gallery` has a `gap` between cards.
4. At least one `min-width` media query targets `.gallery`.
5. A breakpoint switches `.gallery` to **2 columns**.
6. A **second** `min-width` media query targets `.gallery`.
7. A breakpoint switches `.gallery` to **3 columns**.
8. The breakpoints are **mobile-first** — the 2-column width is smaller than the 3-column width.
9. Images use `max-width: 100%` so they never overflow.
10. Images use `height: auto` to keep their proportions.

## How to run

Open `index.html` in your browser (or the platform's runner). The Jasmine report shows each check passing or failing. Keep editing `main.css` until all **10** pass.



## Hints

- The base rule is your phone layout: `display: grid; grid-template-columns: 1fr; gap: …;`.
- A breakpoint looks like `@media (min-width: 600px) { .gallery { grid-template-columns: 1fr 1fr; } }`.
- Flexible images are one rule: `.card img { max-width: 100%; height: auto; }`.
- Test as you go with the browser's **device toolbar** (F12 → the phone/tablet icon).
