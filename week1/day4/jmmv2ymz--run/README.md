# Rescue the Div-Soup Page

## Problem Statement

Someone built a small blog page using nothing but generic `<div>` elements — "div soup." It *looks* fine in a browser, but underneath it carries no meaning: a screen reader finds no landmarks to jump between, and the "Subscribe" control is a clickable `<div>` that a keyboard user can't even reach.

`index.html` is already set up as a **Jasmine Spec Runner** — its `<head>` loads the tests for you. Your job is to refactor the `<body>` into correct **semantic HTML** so the page means what it looks like — without changing how it appears.

## Tasks

Inside the `<body>` of `index.html`, refactor the div-soup markup:

1. Turn the page-top `<div class="header">` into a `<header>` (exactly one).
2. Turn the links `<div class="nav">` into a `<nav>` (exactly one).
3. Turn the content `<div class="main">` into a `<main>` — there must be **exactly one** `<main>` on the page.
4. Turn the post `<div class="article">` into an `<article>`, kept **inside** the `<main>`.
5. Turn the page-bottom `<div class="footer">` into a `<footer>` (exactly one).
6. Replace the clickable `<div class="button">` with a real `<button>`.
7. Leave **no `<div>`** behind that duplicates a landmark.

## Instructions

- **Only edit the `<body>`.** Leave the doctype, the `<head>`, and its `<script>` tags exactly as they are — they load Jasmine and run your tests.
- Do **not** edit `tests/FunctionsTest.js`.
- Leave `main.css` empty and `src/app.js` untouched — semantic HTML is about **structure and meaning, not appearance**, so no CSS or JavaScript is needed.
- Keep the same content and nesting — you are changing the *element names*, not the text. A refactor should not change how the page looks.
- Remember why this matters: a real `<button>` is focusable, keyboard-operable, and announced as a button; landmarks let screen-reader users jump straight to a region.

## Test Cases

Open `index.html` in the browser — it **is** the Jasmine Spec Runner. Each of the 10 specs below shows up as **green** when it passes and **red** when it fails. All 10 are red to start with; make them go green one at a time.

| # | Test | What it checks |
|---|------|----------------|
| 1 | One `<header>` | Exactly one `<header>` landmark |
| 2 | One `<nav>` | Exactly one `<nav>` landmark |
| 3 | One `<main>` | Exactly one `<main>` landmark |
| 4 | An `<article>` | At least one `<article>` |
| 5 | One `<footer>` | Exactly one `<footer>` landmark |
| 6 | No landmark divs | No `<div>` with a landmark class (header/nav/main/article/footer) remains |
| 7 | Real `<button>` | The interactive control is a real `<button>` |
| 8 | No fake button | No clickable `<div>` pretending to be a button |
| 9 | Correct order | The `<header>` comes before the `<main>` |
| 10 | Correct nesting | The `<article>` sits inside the `<main>` |

## Submission Guidelines

- Make sure **all 10 specs are green** in the Jasmine Spec Runner before you submit.
- Submit with your changes only in the `<body>` of `index.html`; every other file should be unchanged.
- Double-check the page still *looks* the same as before — a good refactor changes the meaning, not the appearance.
