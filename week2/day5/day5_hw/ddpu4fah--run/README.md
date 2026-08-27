# Navbar Builder

A CSS-only mini-project for **Flexbox Layout (LU 1.13)**. You're given a navbar
with a logo and three links — but right now everything stacks and the links show
bullets. Your job is to lay it out with **Flexbox**: logo on the **left**, links
on the **right**, everything **vertically centred**, with an **even gap** between
the links.

## What you edit

You do **all** of your work in **`main.css`**. Do **not** edit `index.html`
(the markup is fixed) or the files under `tests/`. You may **not** use
`!important` — solve it with real Flexbox.

## The markup (already provided)

```html
<nav class="nav">
  <div class="brand">Gadget Store</div>
  <ul class="links">
    <li><a href="#">Home</a></li>
    <li><a href="#">Shop</a></li>
    <li><a href="#">About</a></li>
  </ul>
</nav>
```

## Your tasks

On **`.nav`**:
1. `display: flex` — make it a row.
2. `align-items: center` — vertically centre the logo and links.
3. `justify-content: space-between` — push the logo left and the links right.
4. Add some `padding` for breathing room.

On **`.links`** (the `ul`):
5. `display: flex` — the links are their own row.
6. `align-items: center`.
7. `gap` — even space between the links.
8. `list-style: none` — remove the bullets.
9. `padding: 0` — clear the default list indent.
10. Remove the leftover `!important` — solve it honestly.

## How it's graded (10 tests)

Open `index.html` (the Jasmine Spec Runner). The specs read your `main.css`:

1. `.nav` is `display: flex`
2. `.nav` is `align-items: center`
3. Space is distributed (`.nav` `justify-content` spread, or `margin-left: auto` on `.links`)
4. `.nav` has non-zero `padding`
5. `.links` is `display: flex`
6. `.links` is `align-items: center`
7. `.links` has a positive `gap`
8. `.links` is `list-style: none`
9. `.links` `padding` is `0`
10. No `!important` anywhere in `main.css`
