// ── Mobile Nav ──
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// ── FAQ Accordion ─
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer  = btn.nextElementSibling;
    const isOpen  = btn.classList.contains('open');
    // Close all
    document.querySelectorAll('.faq-question').forEach(b => {
      b.classList.remove('open');
      b.nextElementSibling.classList.remove('open');
    });
    // Toggle clicked
    if (!isOpen) {
      btn.classList.add('open');
      answer.classList.add('open');
    }
  });
});

// ── Active nav link ──
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav__links a').forEach(link => {
  const href = link.getAttribute('href').split('/').pop();
  if (href === currentPath || (currentPath === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ── Scroll reveal (lightweight) ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .feature, .testimonial-card, .blog-card, .industry-tag').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// ── Contact form (EmailJS) ──
// Replace the three placeholder values below with your credentials from emailjs.com
const EMAILJS_PUBLIC_KEY  = 'bMePVKBzytA-ocUv3';
const EMAILJS_SERVICE_ID  = 'service_5leqyib';
const EMAILJS_TEMPLATE_ID = 'template_xubdg7b';
const form = document.getElementById('contactForm');
if (form && typeof emailjs !== 'undefined') {
  emailjs.init(EMAILJS_PUBLIC_KEY);

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending…';
    btn.disabled = true;

    const params = {
      from_name:  form.querySelector('#name').value,
      from_email: form.querySelector('#email').value,
      service:    form.querySelector('#service').value,
      budget:     form.querySelector('#budget').value,
      message:    form.querySelector('#message').value,
    };

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params)
      .then(function() {
        form.innerHTML = '<div style="text-align:center;padding:2rem;"><h3 style="color:var(--primary);">Message sent! ✓</h3><p>We\'ll get back to you within 1–2 business days.</p></div>';
      })
      .catch(function() {
        btn.textContent = 'Send Message';
        btn.disabled = false;
        alert('Something went wrong. Please email info@ralewaystudio.com directly.');
      });
  });
}
