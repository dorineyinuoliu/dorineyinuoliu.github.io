// Small helpers for the portfolio. No libraries.

// 1. Light / dark switch. The choice is remembered in this browser only.
(function () {
  var root = document.documentElement;
  var btn = document.querySelector(".theme-toggle");
  if (!btn) return;
  btn.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    btn.setAttribute("aria-label", next === "light" ? "Switch to dark mode" : "Switch to light mode");
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
})();

// 2. Click a figure to see it full size. Without JavaScript the link just opens the image.
(function () {
  var links = document.querySelectorAll("a.zoom");
  if (!links.length) return;
  var box = document.createElement("div");
  box.className = "lightbox";
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-label", "Full-size image");
  var img = document.createElement("img");
  box.appendChild(img);
  document.body.appendChild(box);

  function close() { box.classList.remove("open"); img.removeAttribute("src"); }
  links.forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      var inner = a.querySelector("img");
      img.src = a.getAttribute("href");
      img.alt = inner ? inner.alt : "";
      box.classList.add("open");
    });
  });
  box.addEventListener("click", close);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
})();
