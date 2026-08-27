# My First Page

## Problem Statement

You've spent the lesson typing HTML into live editors. Now build a real page by hand. `index.html` is already set up as a **Jasmine Spec Runner** — its `<head>` loads the tests for you. Your job is to fill in the `<body>` to create a small **"My First Page"** about yourself: a main heading, a couple of section headings, some paragraphs, and a line break.

This is the foundation everything else in the course sits on top of. Get the content tags right and well-ordered, and you've written a real webpage by hand.

## Tasks

Inside the `<body>` of `index.html`, add:

1. **Exactly one** `<h1>` with text — the page's main title.
2. **At least two** `<h2>` section headings, each with text (e.g. "About Me", "What I'm Learning").
3. **At least two** `<p>` paragraphs, each with real sentences.
4. **At least one** `<br>` line break inside a paragraph.
5. A sensible order: the `<h1>` first, then each `<h2>` followed by its `<p>`, with every tag closed and correctly nested.

## Instructions

- **Only edit the `<body>`.** Leave the doctype, the `<head>`, and its `<script>` tags exactly as they are — they load Jasmine and run your tests.
- Do **not** edit `tests/FunctionsTest.js`.
- Leave `main.css` empty and `src/app.js` untouched — CSS and JavaScript come in later lessons.
- Remember: **whitespace and blank lines do not create layout.** Use `<br>` for a line break and a new `<p>` for a new block of text.
- Close tags in the reverse order you opened them, like nesting boxes: `<p><strong>…</strong></p>`, never `<p><strong>…</p></strong>`.

## Test Cases

Open `index.html` in the browser — it **is** the Jasmine Spec Runner. Each of the 10 specs below shows up as **green** when it passes and **red** when it fails. All 10 are red to start with; make them go green one at a time.

| # | Test | What it checks |
|---|------|----------------|
| 1 | One `<h1>` | The body has exactly one `<h1>` |
| 2 | `<h1>` has text | The `<h1>` is not empty |
| 3 | Two `<h2>` | At least two `<h2>` section headings |
| 4 | `<h2>` text | Every `<h2>` has non-empty text |
| 5 | Two `<p>` | At least two `<p>` paragraphs |
| 6 | `<p>` text | Every `<p>` has non-empty text |
| 7 | A line break | At least one `<br>` in the body |
| 8 | Heading order | The `<h1>` comes before the first `<h2>` |
| 9 | Sections have content | Every `<h2>` is followed by at least one `<p>` |
| 10 | Complete page | At least five content elements total (one `<h1>` + two `<h2>` + two `<p>`) |

## Submission Guidelines

- Make sure **all 10 specs are green** in the Jasmine Spec Runner before you submit.
- Submit with your changes only in the `<body>` of `index.html`; every other file should be unchanged.
- Double-check that every tag you added is closed and correctly nested.
