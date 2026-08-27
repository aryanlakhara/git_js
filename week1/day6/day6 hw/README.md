# Class Timetable

## Problem Statement

Some information only makes sense in a grid — a timetable, a price list, a scoreboard. The right tool for that is an HTML **table**. But a table is only useful if its structure is clear to *everyone*, including people using a screen reader. That means a real `<caption>` that names it and `<th scope="…">` headers so every data cell is announced with its row and column.

`index.html` is already set up as a **Jasmine Spec Runner** — its `<head>` loads the tests for you. Your job is to build an accessible **class timetable** in the `<body>` so that all the checks pass.

## Tasks

Inside the `<body>` of `index.html`, build a single data `<table>` that contains:

1. A non-empty **`<caption>`** that titles the table (e.g. "Class timetable — Week 1").
2. A **`<thead>`** with one header row. Each column label is a **`<th scope="col">`** (for example: Day, 9 AM, 11 AM).
3. A **`<tbody>`** with **at least 3 rows**. In each row, the first cell is a **`<th scope="row">`** (the day) and the remaining cells are **`<td>`** data cells.
4. Every body row must have the **same number of cells** as the header row.

## Instructions

- **Only edit the `<body>`.** Leave the doctype, the `<head>`, and its `<script>` tags exactly as they are — they load Jasmine and run your tests.
- Do **not** edit `tests/FunctionsTest.js`.
- Leave `main.css` empty and `src/app.js` untouched — this task is **HTML only**. No CSS or JavaScript is needed.
- Remember the difference: a **`<th>`** is a *header* cell that labels data; a **`<td>`** is a *data* cell. Header cells need a `scope` (`"col"` or `"row"`).
- A table is for **data**, never for page layout.

## Test Cases

Open `index.html` in the browser — it **is** the Jasmine Spec Runner. Each of the 10 specs below shows up as **green** when it passes and **red** when it fails. All 10 are red to start with; make them go green one at a time.

| # | Test | What it checks |
|---|------|----------------|
| 1 | One `<table>` | Exactly one `<table>` on the page |
| 2 | Caption | A non-empty `<caption>` |
| 3 | `<thead>` | A `<thead>` is present |
| 4 | `<tbody>` | A `<tbody>` is present |
| 5 | Column headers | At least one `<th scope="col">` in the head |
| 6 | Scoped headers | Every `<th>` has `scope="col"` or `scope="row"` |
| 7 | Row headers | At least one `<th scope="row">` in the body |
| 8 | Rows | The `<tbody>` has at least 3 rows |
| 9 | Column counts | Every body row has the same number of cells as the header row |
| 10 | Data cells | Data lives in `<td>` cells inside the `<tbody>` |

## Submission Guidelines

- Make sure **all 10 specs are green** in the Jasmine Spec Runner before you submit.
- Submit with your changes only in the `<body>` of `index.html`; every other file should be unchanged.
- Double-check that each header cell is a `<th>` with a `scope`, and that every row has the same number of cells — that's what makes the table clear to everyone.
