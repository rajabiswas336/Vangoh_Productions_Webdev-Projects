document.addEventListener('DOMContentLoaded', () => {
  const translations = {
    en: {
      "page.title": "Thai Time Massage Lisbon — Premium Thai Massage & Spa",
      "page.description": "Thai Time Massage Lisbon offers authentic Thai traditional massage, sport massage, oil massage, herbal massage, foot reflexology, and more in the heart of Lisbon. Book now: +351 923 320 789",
      "nav.home": "Home",
      "nav.services": "Services",
      "nav.about": "About",
      "nav.contact": "Contact",
      "nav.book": "Book Now",
      "hero.tagline": "Authentic Thai Wellness in the Heart of Lisbon",
      "hero.openEveryday": "Open Everyday",
      "hero.hours": "10AM TO 8PM | 10:00-20:00",
      "hero.book": "Book Now",
      "hero.explore": "Explore Services",
      "services.title": "Our Massage Services",
      "services.subtitle": "Each treatment is crafted by certified Thai therapists using time-honoured techniques.",
      "service.footReflexology": "Foot Reflexology Massage",
      "service.antiStress": "Anti-Stress Massage",
      "service.thaiHerbal": "Thai Herbal Massage",
      "service.backNeck": "Back, Neck & Shoulder",
      "service.thaiTraditional": "Thai Traditional Massage",
      "service.thaiSport": "Thai Sport Massage",
      "service.thaiOilRelax": "Thai Oil Massage / Relax Massage",
      "service.thaiCombo": "Thai Combination / Deep Tissue",
      "about.openEveryday": "Open Everyday",
      "about.hours": "10AM TO 8PM | 10:00-20:00",
      "about.addressTitle": "Address",
      "about.address": "venida 25 de Abril, No-8, 1 DTO<br>2750-511 Cascais",
      "contact.title": "Book Now",
      "contact.subtitle": "Reserve your treatment today. Call us or fill in the form below.",
      "contact.visit": "Visit Our Spa",
      "contact.location": "Location",
      "contact.address": "venida 25 de Abril, No-8, 1 DTO<br>2750-511 Cascais",
      "contact.phone": "Phone",
      "contact.email": "Email",
      "contact.website": "Website",
      "contact.hoursTitle": "Opening Hours",
      "contact.hours": "Open Everyday: 10:00 – 20:00",
      "form.nameLabel": "Full Name",
      "form.namePlaceholder": "Your name",
      "form.emailLabel": "Email",
      "form.emailPlaceholder": "your@email.com",
      "form.phoneLabel": "Phone",
      "form.phonePlaceholder": "+351 ...",
      "form.serviceLabel": "Select Treatment",
      "form.servicePlaceholder": "Choose a treatment...",
      "form.messageLabel": "Special Requests",
      "form.messagePlaceholder": "Any preferences or health notes...",
      "form.submit": "Book Appointment",
      "footer.address": "venida 25 de Abril, No-8, 1 DTO<br>2750-511 Cascais",
      "footer.openEveryday": "Open Everyday: 10:00 – 20:00",
      "footer.rights": "© 2024 Thai Time Massage Lisbon. All rights reserved.",
      "aria.toggleMenu": "Toggle menu",
      "aria.backToTop": "Back to top",
      "aria.chatWhatsapp": "Chat on WhatsApp",
      "aria.languageToggle": "Select language",
      "alt.logoNav": "Thai Time Massage Logo",
      "alt.logoHero": "Thai Time Massage",
      "alt.heroBanner": "Relaxing Thai massage",
      "alt.footReflexology": "Foot Reflexology Massage",
      "alt.antiStress": "Anti-Stress Massage",
      "alt.thaiHerbal": "Thai Herbal Massage",
      "alt.backNeck": "Back, Neck & Shoulder Massage",
      "alt.thaiTraditional": "Thai Traditional Massage",
      "alt.thaiSport": "Thai Sport Massage",
      "alt.thaiOilRelax": "Thai Oil Massage / Relax Massage",
      "alt.thaiCombo": "Thai Combination / Deep Tissue",
      "wa.header": "🙏 *New Booking Request — Thai Time Massage Lisbon*\n\n",
      "wa.name": "👤 *Name:* ",
      "wa.email": "📧 *Email:* ",
      "wa.phone": "📞 *Phone:* ",
      "wa.treatment": "💆 *Treatment:* ",
      "wa.requests": "📝 *Special Requests:* ",
      "wa.thanks": "\nThank you! I would like to book this appointment.",
      "wa.opening": "✓ Opening WhatsApp..."
    },
    pt: {
      "page.title": "Thai Time Massage Lisbon — Massagem Tailandesa Premium",
      "page.description": "Thai Time Massage Lisbon oferece massagem tailandesa tradicional, desportiva, com oleo, herbal, reflexologia podal e muito mais no coracao de Lisboa. Marque ja: +351 923 320 789",
      "nav.home": "Inicio",
      "nav.services": "Servicos",
      "nav.about": "Sobre",
      "nav.contact": "Contacto",
      "nav.book": "Reservar Agora",
      "hero.tagline": "Bem-estar Tailandes Autentico no Coracao de Lisboa",
      "hero.openEveryday": "Aberto todos os dias",
      "hero.hours": "10H AS 20H | 10:00-20:00",
      "hero.book": "Reservar Agora",
      "hero.explore": "Explorar Servicos",
      "services.title": "Os Nossos Servicos de Massagem",
      "services.subtitle": "Cada tratamento e realizado por terapeutas tailandeses certificados com tecnicas tradicionais.",
      "service.footReflexology": "Massagem de Reflexologia Podal",
      "service.antiStress": "Massagem Anti-Stress",
      "service.thaiHerbal": "Massagem Tailandesa com Ervas",
      "service.backNeck": "Costas, Pescoco e Ombros",
      "service.thaiTraditional": "Massagem Tailandesa Tradicional",
      "service.thaiSport": "Massagem Tailandesa Desportiva",
      "service.thaiOilRelax": "Massagem Tailandesa com Oleo / Relaxante",
      "service.thaiCombo": "Tailandesa Combinada / Tecido Profundo",
      "about.openEveryday": "Aberto todos os dias",
      "about.hours": "10H AS 20H | 10:00-20:00",
      "about.addressTitle": "Morada",
      "about.address": "venida 25 de Abril, No-8, 1 DTO<br>2750-511 Cascais",
      "contact.title": "Reservar Agora",
      "contact.subtitle": "Reserve o seu tratamento hoje. Ligue ou preencha o formulario abaixo.",
      "contact.visit": "Visite o Nosso Spa",
      "contact.location": "Localizacao",
      "contact.address": "venida 25 de Abril, No-8, 1 DTO<br>2750-511 Cascais",
      "contact.phone": "Telefone",
      "contact.email": "Email",
      "contact.website": "Website",
      "contact.hoursTitle": "Horario",
      "contact.hours": "Aberto todos os dias: 10:00 – 20:00",
      "form.nameLabel": "Nome Completo",
      "form.namePlaceholder": "O seu nome",
      "form.emailLabel": "Email",
      "form.emailPlaceholder": "seu@email.com",
      "form.phoneLabel": "Telefone",
      "form.phonePlaceholder": "+351 ...",
      "form.serviceLabel": "Escolher Tratamento",
      "form.servicePlaceholder": "Escolha um tratamento...",
      "form.messageLabel": "Pedidos Especiais",
      "form.messagePlaceholder": "Preferencias ou notas de saude...",
      "form.submit": "Marcar",
      "footer.address": "venida 25 de Abril, No-8, 1 DTO<br>2750-511 Cascais",
      "footer.openEveryday": "Aberto todos os dias: 10:00 – 20:00",
      "footer.rights": "© 2024 Thai Time Massage Lisbon. Todos os direitos reservados.",
      "aria.toggleMenu": "Alternar menu",
      "aria.backToTop": "Voltar ao topo",
      "aria.chatWhatsapp": "Conversar no WhatsApp",
      "aria.languageToggle": "Selecionar idioma",
      "alt.logoNav": "Logotipo Thai Time Massage",
      "alt.logoHero": "Thai Time Massage",
      "alt.heroBanner": "Massagem tailandesa relaxante",
      "alt.footReflexology": "Massagem de Reflexologia Podal",
      "alt.antiStress": "Massagem Anti-Stress",
      "alt.thaiHerbal": "Massagem Tailandesa com Ervas",
      "alt.backNeck": "Massagem Costas, Pescoco e Ombros",
      "alt.thaiTraditional": "Massagem Tailandesa Tradicional",
      "alt.thaiSport": "Massagem Tailandesa Desportiva",
      "alt.thaiOilRelax": "Massagem Tailandesa com Oleo / Relaxante",
      "alt.thaiCombo": "Tailandesa Combinada / Tecido Profundo",
      "wa.header": "🙏 *Novo Pedido de Reserva — Thai Time Massage Lisbon*\n\n",
      "wa.name": "👤 *Nome:* ",
      "wa.email": "📧 *Email:* ",
      "wa.phone": "📞 *Telefone:* ",
      "wa.treatment": "💆 *Tratamento:* ",
      "wa.requests": "📝 *Pedidos Especiais:* ",
      "wa.thanks": "\nObrigado! Gostaria de reservar este atendimento.",
      "wa.opening": "✓ A abrir o WhatsApp..."
    },
    it: {
      "page.title": "Thai Time Massage Lisbon — Massaggio Thai Premium",
      "page.description": "Thai Time Massage Lisbon offre massaggio thai tradizionale, sportivo, con olio, alle erbe, riflessologia plantare e altro nel cuore di Lisbona. Prenota ora: +351 923 320 789",
      "nav.home": "Home",
      "nav.services": "Servizi",
      "nav.about": "Chi Siamo",
      "nav.contact": "Contatti",
      "nav.book": "Prenota Ora",
      "hero.tagline": "Benessere Thai Autentico nel Cuore di Lisbona",
      "hero.openEveryday": "Aperto tutti i giorni",
      "hero.hours": "10:00-20:00",
      "hero.book": "Prenota Ora",
      "hero.explore": "Esplora Servizi",
      "services.title": "I Nostri Servizi di Massaggio",
      "services.subtitle": "Ogni trattamento e realizzato da terapisti thai certificati con tecniche tradizionali.",
      "service.footReflexology": "Massaggio di Riflessologia Plantare",
      "service.antiStress": "Massaggio Antistress",
      "service.thaiHerbal": "Massaggio Tailandese alle Erbe",
      "service.backNeck": "Schiena, Collo e Spalle",
      "service.thaiTraditional": "Massaggio Tailandese Tradizionale",
      "service.thaiSport": "Massaggio Tailandese Sportivo",
      "service.thaiOilRelax": "Massaggio Tailandese con Olio / Relax",
      "service.thaiCombo": "Tailandese Combinato / Tessuto Profondo",
      "about.openEveryday": "Aperto tutti i giorni",
      "about.hours": "10:00-20:00",
      "about.addressTitle": "Indirizzo",
      "about.address": "venida 25 de Abril, No-8, 1 DTO<br>2750-511 Cascais",
      "contact.title": "Prenota Ora",
      "contact.subtitle": "Prenota il tuo trattamento oggi. Chiama o compila il modulo qui sotto.",
      "contact.visit": "Visita il Nostro Centro",
      "contact.location": "Posizione",
      "contact.address": "venida 25 de Abril, No-8, 1 DTO<br>2750-511 Cascais",
      "contact.phone": "Telefono",
      "contact.email": "Email",
      "contact.website": "Sito Web",
      "contact.hoursTitle": "Orari",
      "contact.hours": "Aperto tutti i giorni: 10:00 – 20:00",
      "form.nameLabel": "Nome Completo",
      "form.namePlaceholder": "Il tuo nome",
      "form.emailLabel": "Email",
      "form.emailPlaceholder": "tuo@email.com",
      "form.phoneLabel": "Telefono",
      "form.phonePlaceholder": "+351 ...",
      "form.serviceLabel": "Seleziona Trattamento",
      "form.servicePlaceholder": "Scegli un trattamento...",
      "form.messageLabel": "Richieste Speciali",
      "form.messagePlaceholder": "Preferenze o note sulla salute...",
      "form.submit": "Prenota",
      "footer.address": "venida 25 de Abril, No-8, 1 DTO<br>2750-511 Cascais",
      "footer.openEveryday": "Aperto tutti i giorni: 10:00 – 20:00",
      "footer.rights": "© 2024 Thai Time Massage Lisbon. Tutti i diritti riservati.",
      "aria.toggleMenu": "Apri menu",
      "aria.backToTop": "Torna su",
      "aria.chatWhatsapp": "Chat su WhatsApp",
      "aria.languageToggle": "Seleziona lingua",
      "alt.logoNav": "Logo Thai Time Massage",
      "alt.logoHero": "Thai Time Massage",
      "alt.heroBanner": "Massaggio thai rilassante",
      "alt.footReflexology": "Massaggio di Riflessologia Plantare",
      "alt.antiStress": "Massaggio Antistress",
      "alt.thaiHerbal": "Massaggio Tailandese alle Erbe",
      "alt.backNeck": "Massaggio Schiena, Collo e Spalle",
      "alt.thaiTraditional": "Massaggio Tailandese Tradizionale",
      "alt.thaiSport": "Massaggio Tailandese Sportivo",
      "alt.thaiOilRelax": "Massaggio Tailandese con Olio / Relax",
      "alt.thaiCombo": "Tailandese Combinato / Tessuto Profondo",
      "wa.header": "🙏 *Nuova Richiesta di Prenotazione — Thai Time Massage Lisbon*\n\n",
      "wa.name": "👤 *Nome:* ",
      "wa.email": "📧 *Email:* ",
      "wa.phone": "📞 *Telefono:* ",
      "wa.treatment": "💆 *Trattamento:* ",
      "wa.requests": "📝 *Richieste Speciali:* ",
      "wa.thanks": "\nGrazie! Vorrei prenotare questo appuntamento.",
      "wa.opening": "✓ Apro WhatsApp..."
    },
    es: {
      "page.title": "Thai Time Massage Lisbon — Masaje Thai Premium",
      "page.description": "Thai Time Massage Lisbon ofrece masaje thai tradicional, deportivo, con aceite, herbal, reflexologia podal y mas en el corazon de Lisboa. Reserva ahora: +351 923 320 789",
      "nav.home": "Inicio",
      "nav.services": "Servicios",
      "nav.about": "Sobre Nosotros",
      "nav.contact": "Contacto",
      "nav.book": "Reservar Ahora",
      "hero.tagline": "Bienestar Thai Autentico en el Corazon de Lisboa",
      "hero.openEveryday": "Abierto todos los dias",
      "hero.hours": "10:00-20:00",
      "hero.book": "Reservar Ahora",
      "hero.explore": "Explorar Servicios",
      "services.title": "Nuestros Servicios de Masaje",
      "services.subtitle": "Cada tratamiento es realizado por terapeutas thai certificados con tecnicas tradicionales.",
      "service.footReflexology": "Masaje de Reflexologia Podal",
      "service.antiStress": "Masaje Antiestres",
      "service.thaiHerbal": "Masaje Tailandes con Hierbas",
      "service.backNeck": "Espalda, Cuello y Hombros",
      "service.thaiTraditional": "Masaje Tailandes Tradicional",
      "service.thaiSport": "Masaje Tailandes Deportivo",
      "service.thaiOilRelax": "Masaje Tailandes con Aceite / Relax",
      "service.thaiCombo": "Tailandes Combinado / Tejido Profundo",
      "about.openEveryday": "Abierto todos los dias",
      "about.hours": "10:00-20:00",
      "about.addressTitle": "Direccion",
      "about.address": "venida 25 de Abril, No-8, 1 DTO<br>2750-511 Cascais",
      "contact.title": "Reservar Ahora",
      "contact.subtitle": "Reserve su tratamiento hoy. Llame o rellene el formulario a continuacion.",
      "contact.visit": "Visita Nuestro Spa",
      "contact.location": "Ubicacion",
      "contact.address": "venida 25 de Abril, No-8, 1 DTO<br>2750-511 Cascais",
      "contact.phone": "Telefono",
      "contact.email": "Email",
      "contact.website": "Sitio Web",
      "contact.hoursTitle": "Horario",
      "contact.hours": "Abierto todos los dias: 10:00 – 20:00",
      "form.nameLabel": "Nombre Completo",
      "form.namePlaceholder": "Tu nombre",
      "form.emailLabel": "Email",
      "form.emailPlaceholder": "tu@email.com",
      "form.phoneLabel": "Telefono",
      "form.phonePlaceholder": "+351 ...",
      "form.serviceLabel": "Elegir Tratamiento",
      "form.servicePlaceholder": "Elige un tratamiento...",
      "form.messageLabel": "Peticiones Especiales",
      "form.messagePlaceholder": "Preferencias o notas de salud...",
      "form.submit": "Reservar",
      "footer.address": "venida 25 de Abril, No-8, 1 DTO<br>2750-511 Cascais",
      "footer.openEveryday": "Abierto todos los dias: 10:00 – 20:00",
      "footer.rights": "© 2024 Thai Time Massage Lisbon. Todos los derechos reservados.",
      "aria.toggleMenu": "Alternar menu",
      "aria.backToTop": "Volver arriba",
      "aria.chatWhatsapp": "Chatear en WhatsApp",
      "aria.languageToggle": "Seleccionar idioma",
      "alt.logoNav": "Logo Thai Time Massage",
      "alt.logoHero": "Thai Time Massage",
      "alt.heroBanner": "Masaje thai relajante",
      "alt.footReflexology": "Masaje de Reflexologia Podal",
      "alt.antiStress": "Masaje Antiestres",
      "alt.thaiHerbal": "Masaje Tailandes con Hierbas",
      "alt.backNeck": "Masaje Espalda, Cuello y Hombros",
      "alt.thaiTraditional": "Masaje Tailandes Tradicional",
      "alt.thaiSport": "Masaje Tailandes Deportivo",
      "alt.thaiOilRelax": "Masaje Tailandes con Aceite / Relax",
      "alt.thaiCombo": "Tailandes Combinado / Tejido Profundo",
      "wa.header": "🙏 *Nueva Solicitud de Reserva — Thai Time Massage Lisbon*\n\n",
      "wa.name": "👤 *Nombre:* ",
      "wa.email": "📧 *Email:* ",
      "wa.phone": "📞 *Telefono:* ",
      "wa.treatment": "💆 *Tratamiento:* ",
      "wa.requests": "📝 *Peticiones Especiales:* ",
      "wa.thanks": "\nGracias! Me gustaria reservar esta cita.",
      "wa.opening": "✓ Abriendo WhatsApp..."
    }
  };

  const languageMeta = {
    en: { label: "EN", flag: "🇬🇧" },
    pt: { label: "PT", flag: "🇵🇹" },
    it: { label: "IT", flag: "🇮🇹" },
    es: { label: "ES", flag: "🇪🇸" }
  };

  const defaultLang = "en";
  const savedLang = localStorage.getItem("ttm-lang");
  let currentLang = savedLang && translations[savedLang] ? savedLang : defaultLang;

  const langSwitcher = document.getElementById("lang-switcher");
  const langToggle = document.getElementById("lang-toggle");
  const langMenu = document.getElementById("lang-menu");

  const applyTranslations = (lang) => {
    const dict = translations[lang] || translations[defaultLang];

    document.documentElement.lang = lang;
    document.title = dict["page.title"] || document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && dict["page.description"]) {
      metaDescription.setAttribute("content", dict["page.description"]);
    }

    document.querySelectorAll("[data-i18n]").forEach(el => {
      if (el.hasAttribute("data-i18n-attr")) return;
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(el => {
      const key = el.getAttribute("data-i18n-html");
      if (dict[key]) el.innerHTML = dict[key];
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(el => {
      const attrName = el.getAttribute("data-i18n-attr");
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.setAttribute(attrName, dict[key]);
    });

    if (langToggle && languageMeta[lang]) {
      const flag = langToggle.querySelector(".lang-flag");
      const label = langToggle.querySelector(".lang-label");
      if (flag) flag.textContent = languageMeta[lang].flag;
      if (label) label.textContent = languageMeta[lang].label;
    }
  };

  const setLanguage = (lang, persist = true) => {
    if (!translations[lang]) return;
    currentLang = lang;
    applyTranslations(lang);
    if (persist) localStorage.setItem("ttm-lang", lang);
  };

  setLanguage(currentLang, false);

  if (langToggle && langMenu) {
    langToggle.addEventListener("click", () => {
      langMenu.classList.toggle("open");
    });

    langMenu.querySelectorAll(".lang-option").forEach(option => {
      option.addEventListener("click", () => {
        const lang = option.getAttribute("data-lang");
        setLanguage(lang);
        langMenu.classList.remove("open");
      });
    });

    document.addEventListener("click", (event) => {
      if (langSwitcher && !langSwitcher.contains(event.target)) {
        langMenu.classList.remove("open");
      }
    });
  }

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

      const i18n = translations[currentLang] || translations[defaultLang];

      // Collect form data
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const service = document.getElementById('service').value;
      const message = document.getElementById('message').value.trim();

      // Build WhatsApp message
      let waMessage = i18n["wa.header"] || "";
      waMessage += `${i18n["wa.name"] || ""}${name}\n`;
      waMessage += `${i18n["wa.email"] || ""}${email}\n`;
      if (phone) waMessage += `${i18n["wa.phone"] || ""}${phone}\n`;
      waMessage += `${i18n["wa.treatment"] || ""}${service}\n`;
      if (message) waMessage += `${i18n["wa.requests"] || ""}${message}\n`;
      waMessage += i18n["wa.thanks"] || "";

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
      btn.textContent = i18n["wa.opening"] || '✓ Opening WhatsApp...';
      btn.style.background = 'linear-gradient(135deg, #25D366, #128C7E)';
      btn.style.color = '#fff';
      setTimeout(() => {
        btn.textContent = i18n["form.submit"] || 'Book Appointment';
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
