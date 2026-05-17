document.addEventListener('DOMContentLoaded', () => {
  // ===== NAVBAR SCROLL =====
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    const btn = document.querySelector('.back-to-top');
    if (btn) btn.classList.toggle('visible', window.scrollY > 400);
  });

  // ===== HAMBURGER MENU =====
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  // ===== SCROLL REVEAL =====
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));

  // ===== HERO PARTICLES =====
  const particleContainer = document.querySelector('.hero-particles');
  if (particleContainer) {
    for (let i = 0; i < 25; i++) {
      const p = document.createElement('div');
      p.classList.add('particle');
      const size = Math.random() * 5 + 2;
      p.style.cssText = `width:${size}px;height:${size}px;left:${Math.random() * 100}%;top:${Math.random() * 100}%;animation-delay:${Math.random() * 5}s;animation-duration:${Math.random() * 6 + 5}s;`;
      particleContainer.appendChild(p);
    }
  }

  // ===== SMOOTH SCROLL =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // ===== BACK TO TOP =====
  document.querySelector('.back-to-top')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ===== FORM HANDLING → SEND TO WHATSAPP =====
  const WHATSAPP_NUMBER = '351923320789';
  const form = document.getElementById('booking-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();

      // Collect form data
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const service = document.getElementById('service').value;
      const message = document.getElementById('message').value.trim();

      // Build WhatsApp message
      let waMessage = `🙏 *New Booking Request — Thai Time Massage Lisbon*\n\n`;
      waMessage += `👤 *Name:* ${name}\n`;
      waMessage += `📧 *Email:* ${email}\n`;
      if (phone) waMessage += `📞 *Phone:* ${phone}\n`;
      waMessage += `💆 *Treatment:* ${service}\n`;
      if (message) waMessage += `📝 *Special Requests:* ${message}\n`;
      waMessage += `\nThank you! I would like to book this appointment.`;

      // Open WhatsApp with the composed message
      const waURL = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(waMessage)}`;

      // Use a temporary link to avoid popup blockers
      const link = document.createElement('a');
      link.href = waURL;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Visual feedback on the button
      const btn = form.querySelector('.form-submit');
      btn.textContent = '✓ Opening WhatsApp...';
      btn.style.background = 'linear-gradient(135deg, #25D366, #128C7E)';
      btn.style.color = '#fff';
      setTimeout(() => {
        btn.textContent = 'Book Appointment / Marcar';
        btn.style.background = '';
        btn.style.color = '';
        form.reset();
      }, 3000);
    });
  }

  // ===== SERVICE CARD HOVER GLOW =====
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.borderColor = 'var(--gold-main)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.borderColor = '';
    });
  });
});
