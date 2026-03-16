/* ================= INTRO SCREEN ================= */
window.addEventListener("load", function () {
  const intro = document.getElementById("intro-screen");
  if (intro) {
    setTimeout(function () {
      intro.style.opacity = "0";
      setTimeout(function () {
        intro.style.display = "none";
      }, 1000);
    }, 2500);
  }
});

/* ================= TYPING EFFECT ================= */
document.addEventListener("DOMContentLoaded", function () {
  const typingElement = document.querySelector("#typing-text");
  if (typingElement && typeof Typed !== "undefined") {
    new Typed("#typing-text", {
      strings: ["Data Analyst", "Python Developer", "Analytics Engineer", "Machine Learning Enthusiast"],
      typeSpeed: 65,
      backSpeed: 35,
      backDelay: 2000,
      startDelay: 500,
      loop: true
    });
  }
});

/* ================= SKILLS ANIMATION ================= */
const skillCategories = document.querySelectorAll('.skill-category');
const skillsSection = document.querySelector("#skills");

if (skillCategories.length > 0) {
  skillCategories.forEach((category, index) => {
    category.style.opacity = "1";
    category.style.transform = "translateY(0)";
  });
}

/* ================= PROJECTS ANIMATION ================= */
const projectCards = document.querySelectorAll('.project-card');
if (projectCards.length > 0) {
  projectCards.forEach(card => {
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  });
}

/* ================= TRAINING TIMELINE ================= */
const timelineItems = document.querySelectorAll('.timeline-item');
if (timelineItems.length > 0) {
  timelineItems.forEach(item => {
    item.style.opacity = "1";
    item.style.transform = "translateY(0)";
  });
}

/* ================= EDUCATION SECTION ANIMATION ================= */
const educationSection = document.querySelector('#education');
const timelineLine = document.querySelector('.timeline-line');
const timelineNodes = document.querySelectorAll('.timeline-node');
const eduCards = document.querySelectorAll('.edu-card');
const futureNode = document.querySelector('.future-node');

if (educationSection) {
  // Create intersection observer for education section
  const eduObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate timeline line
        if (timelineLine) {
          timelineLine.classList.add('animate');
        }
        
        // Animate timeline nodes with staggered delay
        timelineNodes.forEach((node, index) => {
          setTimeout(() => {
            node.classList.add('animate');
          }, 300 + (index * 300));
        });
        
        // Animate education cards with staggered delay
        eduCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('animate');
          }, 200 + (index * 300));
        });
        
        // Animate future node
        if (futureNode) {
          setTimeout(() => {
            futureNode.classList.add('animate');
          }, 1100);
        }
        
        // Unobserve after animation starts
        eduObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2, rootMargin: "0px 0px -100px 0px" });

  eduObserver.observe(educationSection);
}

/* ================= SMOOTH SCROLL ================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ================= ACTIVE NAVBAR ================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

/* ================= CURSOR LIGHT ================= */
const cursorLight = document.querySelector(".cursor-light");
document.addEventListener("mousemove", (e) => {
  if (cursorLight) {
    cursorLight.style.left = e.clientX + "px";
    cursorLight.style.top = e.clientY + "px";
  }
});

/* ================= MAGNETIC BUTTON ================= */
const magneticButtons = document.querySelectorAll(".magnetic");
magneticButtons.forEach(button => {
  button.addEventListener("mousemove", function(e) {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;
    button.style.transform = `translate(${x*0.3}px, ${y*0.3}px)`;
  });
  button.addEventListener("mouseleave", function() {
    button.style.transform = "translate(0,0)";
  });
});

/* ================= HERO PARALLAX ================= */
const hero = document.querySelector(".parallax");
if (hero) {
  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 30;
    const rotateY = (centerX - x) / 30;
    hero.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  hero.addEventListener("mouseleave", () => {
    hero.style.transform = "rotateX(0) rotateY(0)";
  });
}

/* ================= PARTICLES ================= */
if (typeof particlesJS !== "undefined") {
  particlesJS("particles-js", {
    particles: {
      number: { value: 60 },
      color: { value: "#38bdf8" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3 },
      line_linked: { enable: true, distance: 150, color: "#38bdf8", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 2 }
    },
    interactivity: {
      events: { onhover: { enable: true, mode: "repulse" } }
    }
  });
}

/* ================= LIGHT/DARK MODE TOGGLE ================= */
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.querySelector('.theme-icon');

// Check for saved theme preference or default to dark
let isDarkMode = localStorage.getItem('theme') !== 'light';

function applyTheme() {
  if (isDarkMode) {
    // Dark mode styles (current default)
    document.body.classList.remove('light-mode');
    themeIcon.textContent = '🌙';
  } else {
    // Light mode
    document.body.classList.add('light-mode');
    themeIcon.textContent = '☀️';
  }
}

// Initial theme apply
applyTheme();

// Toggle theme on click
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    applyTheme();
  });
}

