# Page Layout Skeleton

A CSS-only mini-project for **CSS Grid (Module 2, Lesson 1)**. You're given the
markup for a classic page. Your job is to lay it out with **CSS Grid**: a
full-width header, a sidebar + main content row, and a full-width footer.

## What you edit

You do **all** of your work in **`main.css`**. Do **not** edit `index.html`
(the markup is fixed) or the files under `tests/`.

## The layout

```
+---------------------------+
|          HEADER           |   <- full width
+---------+-----------------+
| SIDEBAR |   MAIN CONTENT  |   <- two columns (sidebar + content)
+---------+-----------------+
|          FOOTER           |   <- full width
+---------------------------+
```

The markup:

```html
<div class="page">
  <header class="site-header">Header</header>
  <aside class="sidebar">Sidebar</aside>
  <main class="content">Main content</main>
  <footer class="site-footer">Footer</footer>
</div>
```

## Your tasks (all in `main.css`)

- `.page` → `display: grid`
- `.page` → `grid-template-columns` with **at least 2 columns**, one using an **`fr`** unit (e.g. `200px 1fr`)
- `.page` → `grid-template-rows` with at least 2 rows (e.g. `auto 1fr auto`)
- `.page` → a **`gap`** between tracks, and `min-height: 100vh`
- `.site-header` → `grid-column: 1 / -1` (span the full width)
- `.site-footer` → `grid-column: 1 / -1` (span the full width)
- `.sidebar` → `grid-column: 1` (first column)
- `.content` → `grid-column: 2` (second column)

Use **line-based placement** (`grid-column`) — that's what the tests read.

## How it's graded (10 tests)

Open `index.html` (the Jasmine Spec Runner). The specs read your `main.css`:

1. `.page` is `display: grid`
2. `grid-template-columns` defines **≥ 2** columns
3. a column uses an **`fr`** unit
4. `grid-template-rows` defines **≥ 2** rows
5. a **`gap`** is applied between tracks
6. `.page` fills the screen (`min-height` in `vh`)
7. the header spans the full width
8. the footer spans the full width
9. the sidebar sits in the first column
10. the main content sits in the second column
