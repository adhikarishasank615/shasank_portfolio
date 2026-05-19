/* =========================================================
   PORTFOLIO — CORE BEHAVIOR CONTROLLER
   Manages Theme Adapting state, Layout triggers, & Scroll logic
   ========================================================= */

"use strict";

/* ── 1. INITIAL LOADER DISMISSAL ── */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.classList.add("hidden");
      document.body.style.overflow = "";
      initRevealAnimations();
    }, 1400);
  }
});
document.body.style.overflow = "hidden";

/* ── 2. DYNAMIC FOOTER DATETIME ── */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ── 3. INTERACTION DRIVEN DESIGNERS CURSOR ── */
const cursor = document.getElementById("cursor");
const cursorFollow = document.getElementById("cursorFollower");

if (cursor && cursorFollow) {
  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;

  document.addEventListener("mousemove", (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
    cursor.style.left = targetX + "px";
    cursor.style.top  = targetY + "px";
  });

  requestAnimationFrame(function animateCursorLoop() {
    currentX += (targetX - currentX) * 0.14;
    currentY += (targetY - currentY) * 0.14;
    cursorFollow.style.left = currentX + "px";
    cursorFollow.style.top  = currentY + "px";
    requestAnimationFrame(animateCursorLoop);
  });

  document.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0";
    cursorFollow.style.opacity = "0";
  });
  document.addEventListener("mouseenter", () => {
    cursor.style.opacity = "1";
    cursorFollow.style.opacity = "1";
  });
}

/* ── 4. LIGHT / DARK THEME SYSTEM CONTROLLER ── */
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const activeTheme = document.documentElement.getAttribute("data-theme");
    const targetTheme = activeTheme === "dark" ? "light" : "dark";
    
    document.documentElement.setAttribute("data-theme", targetTheme);
    localStorage.setItem("theme", targetTheme);
  });
}

/* ── 5. RESPONSIVE MOBILE OVERLAY NAVIGATION ── */
const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");
const mobileMenu = document.getElementById("mobileMenu");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
}, { passive: true });

function switchMenuState(isOpen) {
  navToggle.classList.toggle("open", isOpen);
  mobileMenu.classList.toggle("open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
}

navToggle.addEventListener("click", () => {
  const isCurrentlyOpen = mobileMenu.classList.contains("open");
  switchMenuState(!isCurrentlyOpen);
});

document.querySelectorAll(".mobile-link").forEach(link => {
  link.addEventListener("click", () => switchMenuState(false));
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") switchMenuState(false);
});

/* ── 6. NATIVE SMOOTH SCROLL FOR INSTANT ACTION TARGETS ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    const destinationId = this.getAttribute("href");
    const destinationEl = document.querySelector(destinationId);
    
    if (destinationEl) {
      e.preventDefault();
      destinationEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

/* ── 7. INTERSECTION SCROLL REVEAL MECHANICS ── */
function initRevealAnimations() {
  const elementsToReveal = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  elementsToReveal.forEach(el => revealObserver.observe(el));
}

/* ── 8. SCROLL DETECTION ACTIVE LINK HIGHLIGHTER ── */
const pageSections = document.querySelectorAll("section[id]");
const desktopLinks = document.querySelectorAll(".nav-link");

const scrollHighlightObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const activeId = entry.target.getAttribute("id");
      desktopLinks.forEach(link => {
        const matchingHref = link.getAttribute("href") === `#${activeId}`;
        link.classList.toggle("active", matchingHref);
      });
    }
  });
}, { threshold: 0.35, rootMargin: "-10% 0px -50% 0px" });

pageSections.forEach(sec => scrollHighlightObserver.observe(sec));

/* ── 9. PARALLAX HERO BACKGROUND AMBIENT ILLUMINATION ── */
const ambientGlow = document.querySelector(".hero-glow");
if (ambientGlow) {
  document.addEventListener("mousemove", (e) => {
    const shiftX = (e.clientX / window.innerWidth - 0.5) * 25;
    const shiftY = (e.clientY / window.innerHeight - 0.5) * 15;
    ambientGlow.style.transform = `translate(${shiftX}px, ${shiftY}px)`;
  }, { passive: true });
}

/* ── 10. MOVE TO TOP TRIGGER REGISTRATION ── */
const backToTopTrigger = document.getElementById("backToTop");
if (backToTopTrigger) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopTrigger.classList.add("visible");
    } else {
      backToTopTrigger.classList.remove("visible");
    }
  }, { passive: true });

  backToTopTrigger.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}