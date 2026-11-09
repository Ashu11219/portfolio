'use strict';

/* ---------- Header ---------- */

function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  function update() {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ---------- Helpers ---------- */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/* ---------- Hero terminal ---------- */

async function initTerminal() {
  const body = document.getElementById('terminal-body');
  if (!body || prefersReducedMotion) return;

  const lines = body.querySelectorAll('.t-line');
  await wait(400);

  for (const line of lines) {
    const cmd = line.querySelector('.t-cmd');

    if (cmd) {
      const text = cmd.textContent;
      cmd.textContent = '';
      line.classList.add('is-typed');

      for (const char of text) {
        cmd.textContent += char;
        await wait(45 + Math.random() * 40);
      }
      await wait(250);
    } else {
      line.classList.add('is-typed');
      await wait(120);
    }
  }
}

/* ---------- Work section (project cards) ---------- */

function projectCardHTML(project) {
  const highlights = project.highlights.map(item => `<li>${item}</li>`).join('');
  const tags = project.tags.map(tag => `<li class="tag">${tag}</li>`).join('');

  const links = project.links.map(link => `
    <div class="project-link">
      <a href="${link.url}" target="_blank" rel="noopener">
        ${link.label}<span class="sr-only"> for ${project.name} (opens in a new tab)</span>
        <span aria-hidden="true">↗</span>
      </a>
      ${link.note ? `<p class="project-note">${link.note}</p>` : ''}
    </div>`).join('');

  return `
    <article class="card project-card">
      <div class="project-media">
        <div class="project-frame">
          <img src="${project.image}" alt="${project.imageAlt}"
               width="1600" height="1000" loading="lazy"
               data-placeholder="Screenshot coming soon">
        </div>
      </div>
      <div class="project-body">
        <h3>${project.name}</h3>
        <p>${project.summary}</p>
        <ul class="project-highlights">${highlights}</ul>
        <ul class="tags" aria-label="Tech used">${tags}</ul>
        <div class="project-links">${links}</div>
      </div>
    </article>`;
}

function renderProjects() {
  const list = document.getElementById('projects-list');
  if (!list || typeof projects === 'undefined') return;
  list.innerHTML = projects.map(projectCardHTML).join('');
}

/* ---------- Image placeholders ---------- */

function showPlaceholder(img) {
  const box = document.createElement('div');
  box.className = 'img-placeholder';
  box.setAttribute('role', 'img');
  box.setAttribute('aria-label', img.alt);
  box.innerHTML = `<span>${img.dataset.placeholder}</span><code>${img.getAttribute('src')}</code>`;
  img.replaceWith(box);
}

function initImageFallbacks() {
  document.querySelectorAll('img[data-placeholder]').forEach(img => {
    if (img.complete && img.naturalWidth === 0) {
      showPlaceholder(img);
    } else {
      img.addEventListener('error', () => showPlaceholder(img));
    }
  });
}

/* ---------- Mobile menu ---------- */

function initMobileMenu() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('nav-menu');
  if (!toggle || !menu) return;

  function setOpen(isOpen) {
    toggle.setAttribute('aria-expanded', String(isOpen));
    menu.classList.toggle('is-open', isOpen);
  }

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    setOpen(!isOpen);
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) {
      setOpen(false);
      toggle.focus();
    }
  });
}

/* ---------- Scroll reveal ---------- */

function initReveal() {
  const items = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    items.forEach(item => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  items.forEach(item => observer.observe(item));
}

/* ---------- Cursor spotlight ---------- */

function initSpotlight() {
  const canRun = window.matchMedia('(hover: hover) and (prefers-reduced-motion: no-preference)').matches;
  if (!canRun) return;

  const root = document.documentElement;
  const spotlight = document.querySelector('.spotlight');
  const cards = document.querySelectorAll('.card');
  let mouseX = 0;
  let mouseY = 0;
  let hasMoved = false;
  let ticking = false;

  root.classList.add('spotlight-on');

  function update() {
    root.style.setProperty('--mouse-x', mouseX + 'px');
    root.style.setProperty('--mouse-y', mouseY + 'px');

    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--x', (mouseX - rect.left) + 'px');
      card.style.setProperty('--y', (mouseY - rect.top) + 'px');
    });

    ticking = false;
  }

  function requestUpdate() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  window.addEventListener('mousemove', event => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    hasMoved = true;
    spotlight.classList.add('is-active');
    requestUpdate();
  }, { passive: true });

  window.addEventListener('scroll', () => {
    if (hasMoved) requestUpdate();
  }, { passive: true });

  root.addEventListener('mouseleave', () => spotlight.classList.remove('is-active'));
}

/* ---------- Start everything ---------- */
initHeaderScroll();
initReveal();
initMobileMenu();
renderProjects();
initImageFallbacks();
initSpotlight();
initTerminal();
