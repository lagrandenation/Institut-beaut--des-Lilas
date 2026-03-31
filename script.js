/* ===================================================
   Institut de Beauté 2 Rue des Lilas — Script
   =================================================== */

// ─── DATA ───────────────────────────────────────────
const BOOKING_URL = 'https://booking.localsearch.ch/bookings/institut-de-beaute-2rue-des-lilas/services?locale=fr&origin=searchch';

const SERVICE_CATEGORIES = [
  { name: 'Maquillage Semi-Permanent', note: 'Un acompte de 50% vous sera demandé', services: [
    { name: 'Ras de cils', duration: '2h30', price: 'CHF 250.–', desc: 'Pigmentation fine au ras des cils pour intensifier subtilement le regard sans effet maquillé.' },
    { name: 'Eyeliner poudrée', duration: '3h00', price: 'CHF 350.–', desc: 'Trait de liner sur mesure pour structurer et agrandir le regard.' },
    { name: 'Lèvres', duration: '3h00', price: 'CHF 490.–', desc: 'Pigmentation pour redessiner le contour et raviver la couleur naturelle.' },
    { name: 'Sourcils — Shading', duration: '3h30', price: 'CHF 490.–', desc: 'Technique d\'ombrage créant un effet poudré et structuré.' },
    { name: 'Microblading poil à poil', duration: '2h15', price: 'CHF 450.–', desc: 'Fines lignes imitant les poils naturels pour un résultat harmonieux.' },
    { name: 'Retouche annuelle Microblading', duration: '1h30', price: 'CHF 150.–' },
  ]},
  { name: 'Épilation Cire à Bandes', services: [
    { name: '1/2 jambes', duration: '30 min', price: 'CHF 50.–' },
    { name: '1/2 jambes + bikini classique OU aisselles', duration: '30 min', price: 'CHF 70.–' },
    { name: '1/2 jambes + bikini classique + aisselles', duration: '45 min', price: 'CHF 75.–' },
    { name: 'Jambes complètes bikini classique inclu', duration: '45 min', price: 'CHF 80.–' },
    { name: 'Jambes complètes + bikini classique + aisselles', duration: '1h00', price: 'CHF 90.–' },
    { name: 'Aisselles OU bikini classique', duration: '15 min', price: 'CHF 25.–' },
    { name: 'Bikini brésilien', duration: '30 min', price: 'CHF 35.–' },
    { name: 'Bikini intégral', duration: '30 min', price: 'CHF 40.–' },
    { name: 'Lèvre supérieure', duration: '15 min', price: 'CHF 15.–' },
    { name: 'Sourcils', duration: '15 min', price: 'CHF 18.–' },
    { name: 'Lèvre supérieure ET sourcils', duration: '30 min', price: 'CHF 27.–' },
    { name: 'Visage', duration: '30 min', price: 'CHF 30.–' },
    { name: 'Bras', duration: '30 min', price: 'CHF 30.–' },
    { name: 'Bras complets', duration: '30 min', price: 'CHF 40.–' },
    { name: 'Dos', duration: '30 min', price: 'CHF 45.–' },
  ]},
  { name: 'Épilation Cire Pelable', services: [
    { name: 'Bikini classique ou aisselles', duration: '30 min', price: 'CHF 25.–' },
    { name: 'Bikini brésilien', duration: '30 min', price: 'CHF 35.–' },
    { name: 'Bikini intégral', duration: '30 min', price: 'CHF 40.–' },
  ]},
  { name: 'Épilation au Fil', services: [
    { name: 'Sourcils au fil', duration: '25 min', price: 'CHF 25.–' },
    { name: 'Lèvre sup. au fil', duration: '15 min', price: 'CHF 15.–' },
    { name: 'Sourcils et lèvre sup. au fil', duration: '30 min', price: 'CHF 35.–' },
    { name: 'Visage au fil', duration: '30 min', price: 'CHF 40.–' },
  ]},
  { name: 'Extensions de Cils', services: [
    { name: 'Pose complète volume russe', duration: '2h00', price: 'CHF 159.–' },
    { name: 'Remplissage volume russe', duration: '1h30', price: 'CHF 87.–' },
    { name: 'Pose complète cils à cils', duration: '1h30', price: 'CHF 139.–' },
    { name: 'Remplissage cils à cils', duration: '1h00', price: 'CHF 75.–' },
    { name: 'Pose clin d\'œil', duration: '1h00', price: 'CHF 85.–', desc: 'Pose cils à cils sur la partie extérieure de l\'œil pour ouvrir le regard.' },
    { name: 'Retrait d\'extension de cils', duration: '15 min', price: 'CHF 25.–' },
  ]},
  { name: 'Rehaussement Cils & Brow Lift', services: [
    { name: 'Rehaussement cils + teinture', duration: '1h15', price: 'CHF 95.–', desc: 'Rehaussement de cils naturels avec botox et teinture.' },
    { name: 'Rehaussement cils sans teinture', duration: '1h00', price: 'CHF 79.–' },
    { name: 'Brow Lift avec teinture', duration: '45 min', price: 'CHF 79.–', desc: 'Fixez et restructurez vos sourcils pour un aspect soigné.' },
    { name: 'Brow Lift', duration: '45 min', price: 'CHF 59.–' },
    { name: 'Rehaussement de cils + Brow Lift', duration: '1h15', price: 'CHF 125.–' },
    { name: 'Rehaussement + Brow Lift (avec teintures)', duration: '1h30', price: 'CHF 155.–' },
  ]},
  { name: 'Gel', services: [
    { name: 'Pose Gel (couleur ou french)', duration: '1h15', price: 'CHF 100.–' },
    { name: 'RM (dépose + remplissage gel)', duration: '1h15', price: 'CHF 85.–' },
    { name: 'Renforcement', duration: '1h00', price: 'CHF 65.–' },
    { name: 'Mini ABO 5x remplissage gel', duration: '1h15', price: 'CHF 383.–', desc: 'Au lieu de 425.–' },
  ]},
  { name: 'Semi-Permanent', services: [
    { name: 'Pose mains', duration: '45 min', price: 'CHF 60.–' },
    { name: 'Pose pieds', duration: '45 min', price: 'CHF 60.–' },
    { name: 'Remplissage mains (dépose + pose)', duration: '1h00', price: 'CHF 65.–' },
    { name: 'Remplissage pieds (dépose + pose)', duration: '1h00', price: 'CHF 65.–' },
    { name: 'Dépose', duration: '30 min', price: 'CHF 25.–' },
    { name: 'Abonnement 10x', duration: '1h00', price: 'CHF 589.–' },
    { name: 'Mini abonnement 5x', duration: '1h00', price: 'CHF 293.–', desc: 'Au lieu de 325.–' },
  ]},
  { name: 'Soins des Mains', services: [
    { name: 'Pose de vernis', duration: '30 min', price: 'CHF 25.–' },
    { name: 'Manucure', duration: '45 min', price: 'CHF 49.–' },
    { name: 'Soin paraffine', duration: '30 min', price: 'CHF 40.–', desc: '+ Beauté des mains : 69.– CHF' },
    { name: 'Abonnement manucure 10x', duration: '45 min', price: 'CHF 439.–' },
  ]},
  { name: 'Soins des Pieds', services: [
    { name: 'Massage des pieds', duration: '30 min', price: 'CHF 55.–' },
    { name: 'Pose de vernis', duration: '30 min', price: 'CHF 25.–' },
    { name: 'Beauté des pieds + vernis', duration: '1h00', price: 'CHF 75.–' },
    { name: 'SPA des pieds', duration: '1h15', price: 'CHF 100.–', desc: 'Cuticules, callosités, gommage, masque, massage et vernis.' },
    { name: 'BP semi (beauté des pieds + semi)', duration: '1h15', price: 'CHF 105.–' },
    { name: 'Remplissage pieds semi-permanent', duration: '1h00', price: 'CHF 65.–' },
  ]},
  { name: 'Soins Visage — Skin Regimen & senShâ', services: [
    { name: 'Soin visage classique', duration: '1h00', price: 'CHF 120.–', desc: 'Double nettoyage, exfoliation, massage technique et masque adapté.' },
    { name: 'Soin visage classique avec extraction', duration: '1h30', price: 'CHF 150.–', desc: 'Nettoyage, exfoliation, bain de vapeur, massage et masque.' },
  ]},
  { name: 'Soins Visage Guinot', services: [
    { name: 'Age Summum', duration: '1h00', price: 'CHF 145.–', desc: 'Soin traitant des signes de l\'âge.' },
    { name: 'Age Summum + extraction', duration: '1h30', price: 'CHF 165.–' },
  ]},
  { name: 'Soins Visage Bio & Naturels', services: [
    { name: 'Soins by Sam 60mn', duration: '1h00', price: 'CHF 120.–' },
    { name: 'Soins by Sam 90mn', duration: '1h30', price: 'CHF 150.–' },
  ]},
  { name: 'Soin Ado (12-18 ans)', services: [
    { name: 'Soin ado', duration: '1h00', price: 'CHF 79.–', desc: 'Démaquillage, nettoyage, exfoliation, vapeur, extraction, haute fréquence, masque.' },
  ]},
  { name: 'Massages Visage', services: [
    { name: 'Kobido Gua Sha — Découverte', duration: '30 min', price: 'CHF 59.–', desc: 'Soin sur mesure : kobido, stretching, gua sha, acupression.' },
    { name: 'Kobido Gua Sha 75mn', duration: '1h15', price: 'CHF 140.–', desc: 'Détente profonde et visage lumineux.' },
    { name: 'Deep Facelift Ritual', duration: '50 min', price: 'CHF 120.–', desc: 'Massage intra-buccal pour détendre les muscles du visage.' },
    { name: 'Soin LHL', duration: '1h20', price: 'CHF 150.–', desc: 'Massage des 5 Continents — craniosacral, shiatsu, yoga du visage.' },
  ]},
  { name: 'Massages Corps', services: [
    { name: 'Massage signature 30 min', duration: '30 min', price: 'CHF 60.–' },
    { name: 'Massage signature 75 min', duration: '1h15', price: 'CHF 125.–', desc: 'Entièrement personnalisable pour répondre à vos besoins.' },
    { name: 'Massage des 5 Continents', duration: '1h20', price: 'CHF 150.–', desc: 'Technique unique combinant Shiatsu, Lomi-Lomi, Ayurveda et massage suédois.' },
    { name: 'Massage amincissant', duration: '1h00', price: 'CHF 120.–', desc: 'Combat la peau d\'orange, modèle, lisse, raffermit et tonifie.' },
    { name: 'Massage amincissant 30 min', duration: '30 min', price: 'CHF 60.–' },
    { name: 'Expanse Therapy', duration: '1h15', price: 'CHF 125.–', desc: 'Soin global crâne-cœur-ventre avec sonothérapie et huiles essentielles.' },
    { name: 'Massage à la bougie', duration: '1h00', price: 'CHF 120.–', desc: 'Laissez-vous envahir par cette douce chaleur.' },
  ]},
  { name: 'Soins du Corps', services: [
    { name: 'Soin corps (gommage + massage)', duration: '1h00', price: 'CHF 120.–' },
  ]},
  { name: 'Soin Énergétique', services: [
    { name: 'Soin Sungate', duration: '30 min', price: 'CHF 65.–', desc: 'Aide à la prise de décisions, libère les blocages et restructure l\'énergie vitale.' },
  ]},
  { name: 'Microneedling', services: [
    { name: 'Microneedling — séance', duration: '1h00', price: 'CHF 140.–', desc: 'Teint uniforme, hydratation immédiate, coup d\'éclat instantané.' },
    { name: 'Microneedling — pack 3 séances', duration: '1h00', price: 'CHF 379.–' },
  ]},
  { name: 'LPG / Endermolift Anti-Âge', services: [
    { name: 'Anti-âge repulpant', duration: '35 min', price: 'CHF 120.–' },
    { name: 'Anti-âge fermeté', duration: '35 min', price: 'CHF 120.–' },
    { name: 'Anti-âge affinant', duration: '35 min', price: 'CHF 120.–' },
    { name: 'Zone frontale', duration: '15 min', price: 'CHF 40.–' },
    { name: 'Détox', duration: '25 min', price: 'Sur devis' },
    { name: 'Éclat', duration: '20 min', price: 'Sur devis' },
    { name: 'Total regard', duration: '25 min', price: 'Sur devis' },
  ]},
  { name: 'Teintures', services: [
    { name: 'Teinture des cils', duration: '30 min', price: 'CHF 35.–' },
    { name: 'Teinture des sourcils', duration: '20 min', price: 'CHF 25.–' },
    { name: 'Teinture cils + sourcils', duration: '45 min', price: 'CHF 45.–' },
  ]},
  { name: 'Épilation Électrique', note: 'Abonnement 10h = 990.–', services: [
    { name: 'EE 15 minutes', duration: '15 min', price: 'CHF 28.–' },
    { name: 'EE 30 minutes', duration: '30 min', price: 'CHF 55.–' },
    { name: 'EE 1 heure', duration: '1h00', price: 'CHF 110.–' },
  ]},
  { name: 'Suppléments', services: [
    { name: 'Ongle cassé', duration: '15 min', price: 'CHF 10.–' },
    { name: 'Dépose', duration: '30 min', price: 'CHF 40.–' },
  ]},
  { name: 'Petite Princesse (- 12 ans)', services: [
    { name: 'Beauté des mains pour les moins de 12 ans', duration: '30 min', price: 'CHF 40.–' },
  ]},
];

const TEAM = [
  { name: 'Samantha L', initials: 'SL', role: 'Kobido · Gua Sha · Soins visage' },
  { name: 'Maëva M', initials: 'MM', role: 'Massages · Épilation · Soins corps' },
  { name: 'Tania T', initials: 'TT', role: 'Onglerie · Gel · Extensions cils' },
  { name: 'Clara P', initials: 'CP', role: 'Semi-permanent · Microblading' },
  { name: 'Orianne F', initials: 'OF', role: 'Soins visage · Massages · Épilation' },
];

const REVIEWS = [
  { text: 'Excellent !! Comfort and relaxation extra bonus', author: 'Amani S.', date: 'Décembre 2025' },
  { text: 'Je suis très satisfaite, accueil chaleureux, soins soignés', author: 'Rose H.', date: 'Novembre 2025' },
  { text: 'Samantha a des mains en or. Je recommande le soin du visage Kobido pour une détente profonde et de nombreux bienfaits !', author: 'Daniel B.', date: 'Août 2025' },
  { text: 'Top comme d\'habitude', author: 'Nadia G.', date: 'Août 2025' },
  { text: 'Mon rdv était top top top. Maeva était très agréable et souriante. C\'est vraiment ce que j\'avais besoin, d\'un excellent massage. Un grand merci !', author: 'Silvia S.', date: 'Juillet 2025' },
  { text: 'Très bien, merci Clara 😊', author: 'Luisa C.', date: 'Septembre 2025' },
  { text: 'Parfait !', author: 'Marie-Isabelle P.', date: 'Août 2025' },
  { text: 'Super merci beaucoup !', author: 'Ana S.', date: 'Août 2025' },
];

const GALLERY_IMAGES = [
  { src: 'assets/images/hero-facial.png', alt: 'Soin du visage' },
  { src: 'https://shore-fss-production.s3-eu-west-1.amazonaws.com/uploads/487d6ad0-77c7-4b15-a439-b2e7900bff98/675deb0e622d0f0007fb6172/istockphoto-1175433234-612x612.jpg', alt: 'Soins esthétiques' },
  { src: 'assets/images/massage-body.png', alt: 'Massage corps' },
  { src: 'https://shore-fss-production.s3-eu-west-1.amazonaws.com/uploads/487d6ad0-77c7-4b15-a439-b2e7900bff98/675dea9f3f09d7000a9bb25d/istockphoto-1337659476-612x612.jpg', alt: 'Beauté et bien-être' },
  { src: 'https://shore-fss-production.s3-eu-west-1.amazonaws.com/uploads/487d6ad0-77c7-4b15-a439-b2e7900bff98/675deadfe82e57000c2d6019/istockphoto-2159361983-612x612.jpg', alt: 'Produits de soin' },
  { src: 'assets/images/products-beauty.png', alt: 'Nos produits premium' },
  { src: 'https://shore-fss-production.s3-eu-west-1.amazonaws.com/uploads/487d6ad0-77c7-4b15-a439-b2e7900bff98/675deaf3e82e57000c2d601a/istockphoto-845708412-612x612.jpg', alt: 'Ambiance spa' },
  { src: 'https://shore-fss-production.s3-eu-west-1.amazonaws.com/uploads/487d6ad0-77c7-4b15-a439-b2e7900bff98/675deabae82e5700072d5ffe/microneedling.jpg', alt: 'Microneedling' },
];

// ─── RENDER FUNCTIONS ────────────────────────────────

function renderServices() {
  const container = document.getElementById('servicesAccordion');
  container.innerHTML = SERVICE_CATEGORIES.map((cat, i) => `
    <div class="service-category fade-in" style="transition-delay:${Math.min(i * 0.05, 0.5)}s">
      <div class="service-category__header" onclick="toggleCategory(this)">
        <h3 class="service-category__title">${cat.name}${cat.note ? ` <small style="font-weight:400;font-size:0.75rem;color:var(--color-text-light)">(${cat.note})</small>` : ''}</h3>
        <span class="service-category__count">${cat.services.length} soin${cat.services.length > 1 ? 's' : ''}</span>
        <svg class="service-category__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
      <div class="service-category__content">
        <div class="service-category__list">
          ${cat.services.map(s => `
            <div class="service-item">
              <div class="service-item__info">
                <div class="service-item__name">${s.name}</div>
                ${s.desc ? `<div class="service-item__desc">${s.desc}</div>` : ''}
              </div>
              <div class="service-item__meta">
                <span class="service-item__duration">${s.duration}</span>
                <span class="service-item__price">${s.price}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function renderTeam() {
  const container = document.getElementById('teamGrid');
  container.innerHTML = TEAM.map(t => `
    <div class="team-card fade-in">
      <div class="team-card__avatar">${t.initials}</div>
      <h3 class="team-card__name">${t.name}</h3>
      <p class="team-card__role">${t.role}</p>
    </div>
  `).join('');
}

function renderReviews() {
  const track = document.getElementById('reviewsTrack');
  const starSVG = '<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
  track.innerHTML = REVIEWS.map(r => `
    <div class="review-card">
      <div class="review-card__stars">${starSVG.repeat(5)}</div>
      <p class="review-card__text">"${r.text}"</p>
      <div class="review-card__author">
        <div class="review-card__author-avatar">${r.author.charAt(0)}</div>
        <div>
          <div class="review-card__author-name">${r.author}</div>
          <div class="review-card__author-date">${r.date}</div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderGallery() {
  const container = document.getElementById('galleryGrid');
  container.innerHTML = GALLERY_IMAGES.map((img, i) => `
    <div class="gallery__item" onclick="openLightbox('${img.src}', '${img.alt}')">
      <img src="${img.src}" alt="${img.alt}" loading="${i < 2 ? 'eager' : 'lazy'}" width="400" height="400">
      <div class="gallery__item-overlay">${img.alt}</div>
    </div>
  `).join('');
}

// ─── INTERACTIONS ────────────────────────────────────

// Toggle service category accordion
function toggleCategory(header) {
  const category = header.closest('.service-category');
  const wasOpen = category.classList.contains('open');
  // Close all
  document.querySelectorAll('.service-category.open').forEach(el => el.classList.remove('open'));
  // Toggle
  if (!wasOpen) category.classList.add('open');
}

// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const headerNav = document.getElementById('headerNav');
const overlay = document.getElementById('mobileOverlay');

function toggleMobileMenu() {
  menuToggle.classList.toggle('active');
  headerNav.classList.toggle('open');
  overlay.classList.toggle('active');
  document.body.style.overflow = headerNav.classList.contains('open') ? 'hidden' : '';
}

menuToggle.addEventListener('click', toggleMobileMenu);
overlay.addEventListener('click', toggleMobileMenu);

// Close mobile menu on link click
headerNav.querySelectorAll('.header__nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (headerNav.classList.contains('open')) toggleMobileMenu();
  });
});

// Header scroll effect
const header = document.getElementById('header');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  header.classList.toggle('header--scrolled', y > 50);
  lastScroll = y;
});

// Back to top
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 500);
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.header__nav-link');

function setActiveNav() {
  const y = window.scrollY + 150;
  sections.forEach(section => {
    const top = section.offsetTop;
    const h = section.offsetHeight;
    if (y >= top && y < top + h) {
      navLinks.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.header__nav-link[href="#${section.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}
window.addEventListener('scroll', setActiveNav);

// Lightbox
function openLightbox(src, alt) {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  img.src = src;
  img.alt = alt;
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
}

document.getElementById('lightboxClose').addEventListener('click', () => {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
});
document.getElementById('lightbox').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    e.currentTarget.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Reviews carousel
let reviewIdx = 0;
function scrollReviews(dir) {
  const track = document.getElementById('reviewsTrack');
  const cards = track.querySelectorAll('.review-card');
  if (!cards.length) return;
  const cardW = cards[0].offsetWidth + 24; // gap
  const visible = Math.floor(track.parentElement.offsetWidth / cardW);
  const max = cards.length - visible;
  reviewIdx = Math.max(0, Math.min(reviewIdx + dir, max));
  track.style.transform = `translateX(-${reviewIdx * cardW}px)`;
}
document.getElementById('reviewPrev').addEventListener('click', () => scrollReviews(-1));
document.getElementById('reviewNext').addEventListener('click', () => scrollReviews(1));

// Counter animation
function animateCounters() {
  document.querySelectorAll('.stat__number[data-target]').forEach(el => {
    if (el.dataset.animated) return;
    const target = parseInt(el.dataset.target);
    const duration = 2000;
    const start = performance.now();
    el.dataset.animated = '1';
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target) + '+';
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Animate counters when stats bar is visible
      if (entry.target.classList.contains('stats-bar') || entry.target.querySelector('.stat__number')) {
        animateCounters();
      }
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

function initObserver() {
  document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in, .stats-bar').forEach(el => {
    observer.observe(el);
  });
}

// ─── CHATBOT ─────────────────────────────────────────

const CHAT_QUESTIONS = {
  start: {
    msg: "Bonjour ! 😊 Bienvenue à l'Institut de Beauté 2 Rue des Lilas. Comment puis-je vous aider aujourd'hui ?",
    options: [
      { text: "Prendre RDV", next: "booking" },
      { text: "Tarifs & Soins", next: "pricing" },
      { text: "Horaires & Accès", next: "info" }
    ]
  },
  booking: {
    msg: "Super ! Vous pouvez réserver tous nos soins en ligne sur notre plateforme sécurisée.<br><br><a href='" + BOOKING_URL + "' target='_blank'>Cliquez ici pour réserver</a>",
    options: [
      { text: "Retour menu", next: "start" }
    ]
  },
  pricing: {
    msg: "Nos tarifs varient selon les soins. Que recherchez-vous ?",
    options: [
      { text: "Massages", next: "price_massages" },
      { text: "Soins Visage", next: "price_visage" },
      { text: "Beauté (Cils/Ongles)", next: "price_beaute" },
      { text: "Retour", next: "start" }
    ]
  },
  price_massages: {
    msg: "Nos massages corps (Signature, 5 Continents, Amincissant) varient entre 60 CHF (30min) et 150 CHF (1h20).",
    options: [
      { text: "Prendre RDV", next: "booking" },
      { text: "Autre tarif", next: "pricing" }
    ]
  },
  price_visage: {
    msg: "Nos soins visage classiques et anti-âge (Guinot, senShâ) vont de 120 CHF à 165 CHF. Les massages visages (Kobido) débutent à 59 CHF.",
    options: [
      { text: "Prendre RDV", next: "booking" },
      { text: "Autre tarif", next: "pricing" }
    ]
  },
  price_beaute: {
    msg: "Pose de vernis semi-permanent dès 60 CHF. Extensions de cils dès 85 CHF. Épilation dès 15 CHF.",
    options: [
      { text: "Prendre RDV", next: "booking" },
      { text: "Catalogue complet", next: "catalog" }
    ]
  },
  catalog: {
    msg: "Découvrez notre catalogue complet de +90 soins dans la section 'Nos Soins' !",
    options: [
      { text: "Menu principal", next: "start" }
    ]
  },
  info: {
    msg: "📍 <b>Adresse</b> : Rue des Lilas 2, 1202 Genève<br>🕐 <b>Horaires</b> : Lun-Sam 9h à 19h.<br>📞 <b>Tél</b> : 022 340 20 60",
    options: [
      { text: "Prendre RDV", next: "booking" },
      { text: "Menu principal", next: "start" }
    ]
  }
};

const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotClose = document.getElementById('chatbotClose');
const chatbotContainer = document.getElementById('chatbot');
const chatbotMessages = document.getElementById('chatbotMessages');
const chatbotSuggestions = document.getElementById('chatbotSuggestions');

let chatbotOpen = false;

function toggleChatbot() {
  chatbotOpen = !chatbotOpen;
  if(chatbotOpen) {
    chatbotContainer.classList.add('active');
    if(chatbotMessages.children.length === 0) {
      renderChatNode('start');
    }
  } else {
    chatbotContainer.classList.remove('active');
  }
}

chatbotToggle.addEventListener('click', toggleChatbot);
chatbotClose.addEventListener('click', toggleChatbot);

function addChatMessage(text, sender) {
  const msgDiv = document.createElement('div');
  msgDiv.className = `chatbot__msg chatbot__msg--${sender}`;
  msgDiv.innerHTML = text;
  chatbotMessages.appendChild(msgDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function renderChatNode(nodeKey) {
  const node = CHAT_QUESTIONS[nodeKey];
  if(!node) return;
  chatbotSuggestions.innerHTML = '';
  chatbotSuggestions.style.opacity = '0';
  
  setTimeout(() => {
    addChatMessage(node.msg, 'bot');
    node.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'chatbot__suggestion-btn';
      btn.textContent = opt.text;
      btn.onclick = () => {
        addChatMessage(opt.text, 'user');
        renderChatNode(opt.next);
      };
      chatbotSuggestions.appendChild(btn);
    });
    chatbotSuggestions.style.opacity = '1';
  }, 400);
}

// ─── INIT ────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  renderTeam();
  renderReviews();
  renderGallery();
  initObserver();
  // Trigger header check
  header.classList.toggle('header--scrolled', window.scrollY > 50);
});
