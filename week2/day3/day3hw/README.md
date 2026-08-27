

## Problem Statement

A page has a **"Buy now"** link that is *supposed* to be brand-blue. It isn't — it renders grey. The CSS isn't broken, and the brand rule is right there in the file. The problem is a **specificity conflict**: a more forceful rule is winning the cascade.

Worse, the grey rule is winning by leaning on **`!important`** — the sledgehammer that hides real specificity problems. Your job is to make the intended brand colour win **the right way**: by raising specificity, *without* using `!important`.

## Tasks

Work **only in `main.css`**. Do not touch the HTML, and do not add `!important`.

1. **Remove the crutch.** Delete the `!important` from the grey `#content a` rule.
2. **Refine the intended rule.** The `.cta` rule (specificity `(0,1,0)`) loses to `#content a` (specificity `(1,0,1)`). Make `.cta` **more specific** by refining it into a compound selector that also names the id/element already wrapping the link — for example `#content a.cta` `(1,1,1)`.
3. **Refine, don't delete.** Keep the existing `#content a` selector in place. You're *adjusting* selectors, not removing them.

When you're done, the intended brand colour should win **purely by specificity**.

## Instructions

1. Open **`main.css`** — that's the only file you edit.
2. Open **`index.html`**, the **Jasmine Spec Runner**. Each check shows **green (passing)** or **red (failing)**.
3. Edit `main.css`, save, refresh `index.html`, and watch the specs turn green.
4. Do **not** edit the page markup or the test file, and do **not** use `!important`.

## Test Cases

Ten checks run automatically in the Spec Runner (1 mark each). They simulate the real cascade — importance, then specificity, then source order:

1. **No `!important`** appears anywhere in `main.css`.
2. The grey `#content a` rule **no longer forces its colour with `!important`**.
3. The **"Buy now" link renders the intended brand colour** (the intended rule wins the cascade).
4. The link **no longer renders the grey colour**.
5. The intended rule's **specificity is raised beyond a lone class** (an id or element is added).
6. The intended selector is **more specific than `#content a`**.
7. The winning colour comes from a selector that **includes the `.cta` class**.
8. The winning selector is a **refinement naming both `#content` and `.cta`**.
9. The existing `#content a` selector is **kept (refined, not deleted)** while the intended colour wins.
10. The intended colour **wins by specificity, not by `!important`** on the winning rule.

## Submission Guidelines

- Make **all 10 specs green** in the Jasmine Spec Runner.
- Change only `main.css`; leave the markup and test file untouched.
- Use **no `!important`** — win the conflict with specificity.
- Commit and submit your work as instructed on the platform.
