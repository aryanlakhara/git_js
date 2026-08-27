# Sign-Up Form

## Problem Statement

Every account you've ever made started with a sign-up form. A form is where a page stops *talking* and starts *listening* — it collects what a visitor types. But a form is only useful if it's **accessible**: every field needs a real label, the right input types, and basic validation so bad data is caught before it's ever sent.

`index.html` is already set up as a **Jasmine Spec Runner** — its `<head>` loads the tests for you. Your job is to build an accessible sign-up `<form>` in the `<body>` so that all the checks pass.

## Tasks

Inside the `<body>` of `index.html`, build a single sign-up `<form>` containing:

1. A **Full name** field — `<input type="text">` with an associated `<label>`.
2. An **Email** field — `<input type="email">` that is `required`, with an associated `<label>`.
3. A **Password** field — `<input type="password">` that is `required` and has `minlength="8"`, with an associated `<label>`.
4. A **Terms** checkbox — `<input type="checkbox">` with an associated `<label>`.
5. A **submit button** — `<button type="submit">`.

Associate every input with a `<label>` in one of two ways: give the input an `id` and point a `<label for="that-id">` at it, **or** wrap the input inside the `<label>`.

## Instructions

- **Only edit the `<body>`.** Leave the doctype, the `<head>`, and its `<script>` tags exactly as they are — they load Jasmine and run your tests.
- Do **not** edit `tests/FunctionsTest.js`.
- Leave `main.css` empty and `src/app.js` untouched — this task is **HTML only**. No CSS or JavaScript is needed.
- Remember: a **placeholder is not a label**. Placeholder text disappears when you type and is skipped by many screen readers — every field still needs a real `<label>`.

## Test Cases

Open `index.html` in the browser — it **is** the Jasmine Spec Runner. Each of the 10 specs below shows up as **green** when it passes and **red** when it fails. All 10 are red to start with; make them go green one at a time.

| # | Test | What it checks |
|---|------|----------------|
| 1 | One `<form>` | Exactly one `<form>` on the page |
| 2 | Name field | An `<input type="text">` exists |
| 3 | Email field | An `<input type="email">` exists |
| 4 | Email required | The email input has `required` |
| 5 | Password field | An `<input type="password">` exists |
| 6 | Password required | The password input has `required` |
| 7 | Password length | The password input has `minlength="8"` |
| 8 | Terms checkbox | An `<input type="checkbox">` exists |
| 9 | Submit button | A `<button type="submit">` (or `<input type="submit">`) exists |
| 10 | Labels | Every text/email/password/checkbox input has an associated `<label>` |

## Submission Guidelines

- Make sure **all 10 specs are green** in the Jasmine Spec Runner before you submit.
- Submit with your changes only in the `<body>` of `index.html`; every other file should be unchanged.
- Double-check that each field has a real `<label>` (for/id match, or the input wrapped inside the label) — that's what makes the form usable by everyone.
