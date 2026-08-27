// tests/FunctionsTest.js
// ------------------------------------------------------------------
// Navbar Builder — 10 checks.
// These specs read the CSS rules you write in main.css (via
// document.styleSheets) and confirm the navbar is a proper Flexbox
// layout: logo left, links right, vertically centred, evenly gapped.
// Edit ONLY main.css.
// ------------------------------------------------------------------
describe("Navbar Builder", function () {

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

  // Query at TEST time — when this describe() first runs from the <head>,
  // the <body> isn't parsed yet, so don't cache elements up here.
  function el(sel) { return document.querySelector(sel); }

  function declFor(target, prop) {
    if (!target) return null;
    var rules = allRules(), val = null;
    for (var i = 0; i < rules.length; i++) {
      var r = rules[i], m = false;
      try { m = target.matches(r.selectorText); } catch (e) { m = false; }
      if (!m) continue;
      var v = r.style.getPropertyValue(prop);
      if (v) val = String(v).trim().toLowerCase();
    }
    return val;
  }

  function isSet(v) { return v !== null && v !== "" && v !== "auto"; }
  function isZero(v) { return v === "0" || v === "0px" || v === "0%" || /^0(px)?(\s+0(px)?)*$/.test(v || ""); }
  function nonZeroLen(v) { return isSet(v) && !isZero(v); }

  function anyImportant() {
    var rules = allRules();
    for (var i = 0; i < rules.length; i++) {
      var css = (rules[i].style.cssText || "").toLowerCase();
      if (css.indexOf("!important") >= 0) return true;
    }
    return false;
  }

  var SPREAD = ["space-between", "space-around", "space-evenly", "flex-end"];

  // 1
  it("turns the navbar into a flex row (.nav is display: flex)", function () {
    expect(declFor(el(".nav"), "display")).toBe("flex");
  });

  // 2
  it("vertically centres the navbar items (.nav align-items: center)", function () {
    expect(declFor(el(".nav"), "align-items")).toBe("center");
  });

  // 3
  it("pushes the logo left and links right (justify-content spread OR margin-left:auto on links)", function () {
    var jc = declFor(el(".nav"), "justify-content");
    var ml = declFor(el(".links"), "margin-left");
    var spread = jc !== null && SPREAD.indexOf(jc) >= 0;
    expect(spread || ml === "auto").toBe(true);
  });

  // 4
  it("gives the navbar breathing room (.nav has non-zero padding)", function () {
    expect(nonZeroLen(declFor(el(".nav"), "padding"))).toBe(true);
  });

  // 5
  it("lines the links up in their own row (.links is display: flex)", function () {
    expect(declFor(el(".links"), "display")).toBe("flex");
  });

  // 6
  it("vertically centres the links too (.links align-items: center)", function () {
    expect(declFor(el(".links"), "align-items")).toBe("center");
  });

  // 7
  it("adds even space between the links (.links has a positive gap)", function () {
    expect(nonZeroLen(declFor(el(".links"), "gap"))).toBe(true);
  });

  // 8
  it("removes the list bullets (.links list-style: none)", function () {
    var v = declFor(el(".links"), "list-style");
    var t = declFor(el(".links"), "list-style-type");
    expect((v && v.indexOf("none") >= 0) || t === "none").toBe(true);
  });

  // 9
  it("clears the default list indent (.links padding is 0)", function () {
    var p = declFor(el(".links"), "padding");
    var pl = declFor(el(".links"), "padding-left");
    expect(isZero(p) || isZero(pl)).toBe(true);
  });

  // 10
  it("solves it honestly, without !important anywhere in main.css", function () {
    expect(anyImportant()).toBe(false);
  });

});
