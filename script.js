'use strict';
// Personalize these values before publishing. An empty email disables the draft action.
const PROFILE = { email: '' };
const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
const storage = { get(key) { try { return localStorage.getItem(key); } catch { return null; } }, set(key, value) { try { localStorage.setItem(key, value); } catch { /* storage can be unavailable */ } } };
function setTheme(theme) {
  root.dataset.theme = theme;
  themeButton.setAttribute('aria-pressed', String(theme === 'light'));
  themeButton.setAttribute('aria-label', theme === 'dark' ? 'Aktivizo temën e çelët' : 'Aktivizo temën e errët');
}
setTheme(storage.get('portfolio-theme') === 'light' ? 'light' : 'dark');
themeButton.addEventListener('click', () => { const next = root.dataset.theme === 'dark' ? 'light' : 'dark'; setTheme(next); storage.set('portfolio-theme', next); });
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#nav-links');
function setMenu(open) { navLinks.classList.toggle('open', open); menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? 'Mbyll menynë' : 'Hap menynë'); }
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') { setMenu(false); menuButton.focus(); } });
window.matchMedia('(max-width: 650px)').addEventListener('change', () => setMenu(false));
const filters = [...document.querySelectorAll('.filter')];
const cards = [...document.querySelectorAll('.project-card')];
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
  let count = 0;
  cards.forEach(card => { card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter; if (!card.hidden) count++; });
  document.querySelector('#filter-status').textContent = `${count} projekte të shfaqura.`;
}));
const projects = {
  portfolio: { tag: 'WEB / PROJEKT AKTUAL', title: 'Portfolio personal', description: 'Kjo faqe është ndërtuar me HTML, CSS dhe JavaScript të pastër. Përfshin navigim responsive, temë dark/light, filtrim të projekteve, dialogë dhe një formular që hap aplikacionin e emailit.' },
  robot: { tag: 'PYTHON / SHEMBULL', title: 'Multi-Robot Simulation', description: 'Ide për një projekt simulimi me Python: modelimi i një harte, planifikimi i rrugëve dhe koordinimi i robotëve. Zëvendësoje këtë përshkrim me rezultatet dhe linkun e projektit tënd.' },
  security: { tag: 'SECURITY / SHEMBULL', title: 'Cybersecurity Lab', description: 'Ide për prezantimin e ushtrimeve laboratorike të autorizuara në siguri informatike, analizë të trafikut dhe integritet të skedarëve. Shto punën tënde reale dhe rezultatet e verifikuara.' }
};
const dialog = document.querySelector('#project-dialog');
let opener = null;
document.querySelectorAll('.project-link').forEach(button => button.addEventListener('click', () => {
  const project = projects[button.dataset.project]; if (!project) return;
  opener = button;
  document.querySelector('#dialog-title').textContent = project.title;
  document.querySelector('#dialog-tag').textContent = project.tag;
  document.querySelector('#dialog-description').textContent = project.description;
  dialog.showModal();
}));
dialog.addEventListener('close', () => { if (opener) opener.focus(); });
const form = document.querySelector('#contact-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const status = document.querySelector('#form-status');
  if (!PROFILE.email) { status.textContent = 'Emaili i pronarit nuk është konfiguruar ende. Vendose te PROFILE.email në script.js.'; return; }
  const data = new FormData(form);
  const subject = encodeURIComponent(`Mesazh nga portfolio: ${data.get('name').trim()}`);
  const body = encodeURIComponent(`Emri: ${data.get('name').trim()}\nEmail: ${data.get('email').trim()}\n\n${data.get('message').trim()}`);
  status.textContent = 'Po kërkohet hapja e aplikacionit të emailit. Mesazhi nuk është dërguar automatikisht.';
  window.location.href = `mailto:${encodeURIComponent(PROFILE.email)}?subject=${subject}&body=${body}`;
});
document.querySelector('#year').textContent = String(new Date().getFullYear());
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }); }, { threshold: .08 });
  document.querySelectorAll('.section').forEach(section => { section.classList.add('reveal'); observer.observe(section); });
}
