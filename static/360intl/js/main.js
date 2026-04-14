/* ============================================================
   360 International — interactions
   ------------------------------------------------------------
   - Sticky nav state on scroll
   - Mobile menu toggle
   - IntersectionObserver reveal-on-scroll (staggered)
   - Contact form client-side validation
   - Current year in footer
   ============================================================ */

(() => {
  "use strict";

  /* ---------- Nav: scroll state ---------- */
  const nav = document.getElementById("nav");
  const setScrolled = () => nav.classList.toggle("is-scrolled", window.scrollY > 8);
  setScrolled();
  window.addEventListener("scroll", setScrolled, { passive: true });

  /* ---------- Mobile menu ---------- */
  const menuBtn = document.getElementById("navMenu");
  menuBtn?.addEventListener("click", () => {
    const open = nav.dataset.open === "true";
    nav.dataset.open = (!open).toString();
    menuBtn.setAttribute("aria-expanded", (!open).toString());
    menuBtn.setAttribute("aria-label", open ? "Open menu" : "Close menu");
  });
  // Close menu on link click
  nav.querySelectorAll(".nav__links a, .nav__cta").forEach((a) =>
    a.addEventListener("click", () => {
      if (nav.dataset.open === "true") {
        nav.dataset.open = "false";
        menuBtn?.setAttribute("aria-expanded", "false");
      }
    })
  );

  /* ---------- Reveal-on-scroll with stagger ---------- */
  const revealEls = document.querySelectorAll(".reveal");

  // Assign stagger index per sibling group
  const indexedGroups = new WeakSet();
  revealEls.forEach((el) => {
    const parent = el.parentElement;
    if (!parent || indexedGroups.has(parent)) return;
    indexedGroups.add(parent);
    [...parent.querySelectorAll(":scope > .reveal")].forEach((child, i) => {
      child.style.setProperty("--i", i.toString());
    });
  });

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-in"));
  }

  /* ---------- Contact form ---------- */
  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const required = ["name", "company", "email", "region"];
    for (const key of required) {
      const val = (data.get(key) || "").toString().trim();
      if (!val) {
        showNote(`Please fill in: ${key}.`, "error");
        form.querySelector(`[name="${key}"]`)?.focus();
        return;
      }
    }
    const email = (data.get("email") || "").toString();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showNote("That email address doesn't look right.", "error");
      return;
    }
    showNote("Thanks — we'll be in touch within two business days.", "success");
    form.reset();
  });

  function showNote(msg, type) {
    if (!note) return;
    note.textContent = msg;
    note.classList.remove("is-success", "is-error");
    note.classList.add(type === "success" ? "is-success" : "is-error");
  }

  /* ---------- Footer year ---------- */
  const yr = document.getElementById("yr");
  if (yr) yr.textContent = new Date().getFullYear().toString();
})();
