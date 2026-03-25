// ============================================
//  LAKSHYA LEARNING — Main JavaScript
// ============================================

/* ===== NAVBAR SCROLL EFFECT ===== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* ===== HAMBURGER MENU ===== */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  if (navLinks.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    spans.forEach(s => s.style.background = '#fff');
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  });
});

/* ===== COUNTER ANIMATION ===== */
function animateCounters() {
  const counters = document.querySelectorAll('.stat-num');
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.target);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      counter.textContent = Math.floor(current);
    }, 16);
  });
}

// Run counters when hero is visible
const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      heroObserver.disconnect();
    }
  });
}, { threshold: 0.3 });

const heroSection = document.querySelector('.hero');
if (heroSection) heroObserver.observe(heroSection);

/* ===== FEE TOGGLE ===== */
function switchFee(mode) {
  const offlineBtn = document.getElementById('feeOfflineBtn');
  const onlineBtn = document.getElementById('feeOnlineBtn');
  const offlineTable = document.getElementById('feeOffline');
  const onlineTable = document.getElementById('feeOnline');

  if (mode === 'offline') {
    offlineBtn.classList.add('active');
    onlineBtn.classList.remove('active');
    offlineTable.classList.add('active');
    onlineTable.classList.remove('active');
  } else {
    onlineBtn.classList.add('active');
    offlineBtn.classList.remove('active');
    onlineTable.classList.add('active');
    offlineTable.classList.remove('active');
  }
}

/* ===== SCROLL REVEAL ANIMATIONS ===== */
const revealElements = document.querySelectorAll(
  '.course-card, .testi-card, .why-item, .fee-card, .mode-card, .about-grid, .contact-grid'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, 0);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealElements.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = `opacity 0.6s ease ${(i % 4) * 0.1}s, transform 0.6s ease ${(i % 4) * 0.1}s`;
  revealObserver.observe(el);
});

/* ===== CONTACT FORM SUBMIT ===== */
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const success = document.getElementById('formSuccess');

  btn.textContent = 'Sending...';
  btn.disabled = true;

  setTimeout(() => {
    btn.style.display = 'none';
    success.style.display = 'flex';
    success.style.alignItems = 'center';
    success.style.gap = '8px';
    e.target.reset();

    setTimeout(() => {
      btn.style.display = 'flex';
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Enquiry';
      btn.disabled = false;
      success.style.display = 'none';
    }, 5000);
  }, 1200);
}

/* ===== SMOOTH ACTIVE NAV HIGHLIGHT ===== */
const sections = document.querySelectorAll('section[id]');
const navLinkItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinkItems.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--accent)';
    }
  });
});

/* ===== NAVBAR LOGO COLOR ON SCROLL ===== */
// Already handled via CSS .navbar.scrolled class

/* ===== PAGE LOAD ANIMATION ===== */
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = '0';
  requestAnimationFrame(() => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
  });
});
