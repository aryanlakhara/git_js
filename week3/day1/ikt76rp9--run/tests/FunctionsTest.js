// tests/FunctionsTest.js
// ------------------------------------------------------------------
// Page Layout Skeleton — 10 checks.
// These specs read the CSS rules you write in main.css (via
// document.styleSheets) and confirm you built the classic page
// skeleton with CSS Grid: a full-width header, a sidebar + main
// content row, and a full-width footer.
// Edit ONLY main.css. Use LINE-BASED placement (grid-column).
// ------------------------------------------------------------------
describe("Page Layout Skeleton", function () {

  function allRules() {
    var out = [], sh = document.styleSheets;
    for (var i = 0; i < sh.length; i++) {
      var rs;
      try { rs = sh[i].cssRules; } catch (e) { continue; }
      if (!rs) continue;
      for (var j = 0; j < rs.length; j++) {
        if (rs[j].type === 1) out.push(rs[j]); // CSSStyleRule
      }
    }
    return out;
  }

  // Query at TEST time — the <body> isn't parsed when this describe()
  // first runs from the <head>, so never cache elements up here.
  function el(sel) { return document.querySelector(sel); }

  function declFor(target, prop) {
    if (!target) return null;
    var rules = allRules(), val = null;
    for (var i = 0; i < rules.length; i++) {
      var m = false;
      try { m = target.matches(rules[i].selectorText); } catch (e) { m = false; }
      if (!m) continue;
      var v = rules[i].style.getPropertyValue(prop);
      if (v) val = String(v).trim().toLowerCase();
    }
    return val;
  }

  // Count grid tracks in a template value, expanding repeat(n, ...).
  function countTracks(v) {
    if (!v) return 0;
    v = v.trim();
    v = v.replace(/repeat\(\s*(\d+)\s*,\s*([^)]*)\)/g, function (_, n, inner) {
      var one = inner.trim().split(/\s+/).filter(Boolean).length, out = [];
      for (var i = 0; i < parseInt(n, 10); i++) for (var j = 0; j < one; j++) out.push("x");
      return out.join(" ");
    });
    return v.split(/\s+/).filter(Boolean).length;
  }

  function hasGap(target) {
    var props = ["gap", "row-gap", "column-gap", "grid-gap", "grid-row-gap", "grid-column-gap"];
    for (var i = 0; i < props.length; i++) {
      var v = declFor(target, props[i]);
      if (!v) continue;
      var nums = v.match(/[0-9]*\.?[0-9]+/g);
      if (nums) for (var k = 0; k < nums.length; k++) if (parseFloat(nums[k]) > 0) return true;
    }
    return false;
  }

  // Resolve an item's column placement (grid-column, or the start/end pair).
  function gridColVal(t) {
    var c = declFor(t, "grid-column");
    if (c) return c;
    var s = declFor(t, "grid-column-start"), e = declFor(t, "grid-column-end");
    if (s || e) return (s || "") + " / " + (e || "");
    return null;
  }
  function fullWidth(t) {
    var v = gridColVal(t);
    if (!v) return false;
    v = v.replace(/\s+/g, "");
    return v.indexOf("1/-1") >= 0 || v.indexOf("1/3") >= 0 || /span2/.test(v);
  }
  function colStart(t) {
    var v = gridColVal(t);
    if (!v) return null;
    var first = v.trim().split(/[\/ ]/)[0];
    var n = parseInt(first, 10);
    return isNaN(n) ? null : n;
  }

  // 1
  it("makes the page a grid container (.page is display: grid)", function () {
    expect(declFor(el(".page"), "display")).toBe("grid");
  });
  // 2
  it("defines at least two columns (grid-template-columns)", function () {
    expect(countTracks(declFor(el(".page"), "grid-template-columns")) >= 2).toBe(true);
  });
  // 3
  it("uses an fr unit for a flexible column", function () {
    var v = declFor(el(".page"), "grid-template-columns");
    expect(!!v && v.indexOf("fr") >= 0).toBe(true);
  });
  // 4
  it("defines at least two rows (grid-template-rows)", function () {
    expect(countTracks(declFor(el(".page"), "grid-template-rows")) >= 2).toBe(true);
  });
  // 5
  it("puts a gap between the grid tracks", function () {
    expect(hasGap(el(".page"))).toBe(true);
  });
  // 6
  it("makes the page fill the screen (min-height uses vh)", function () {
    var v = declFor(el(".page"), "min-height");
    expect(!!v && /[0-9]+vh/.test(v)).toBe(true);
  });
  // 7
  it("spans the header across the full width", function () {
    expect(fullWidth(el(".site-header"))).toBe(true);
  });
  // 8
  it("spans the footer across the full width", function () {
    expect(fullWidth(el(".site-footer"))).toBe(true);
  });
  // 9
  it("places the sidebar in the first column", function () {
    var sb = el(".sidebar");
    expect(colStart(sb) === 1 && !fullWidth(sb)).toBe(true);
  });
  // 10
  it("places the main content in the second column", function () {
    expect(colStart(el(".content")) === 2).toBe(true);
  });

});
