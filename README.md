# Portfolio personal

Website statik në gjuhën shqipe, me HTML5, CSS3 dhe Vanilla JavaScript. Nuk kërkon npm, framework ose internet.

## Hapja
1. Ekstrakto ZIP-in.
2. Hape folderin në VS Code me File → Open Folder.
3. Hape `index.html` në shfletues ose përdor Live Server (opsional).

## Personalizimi
- `index.html`: zëvendëso Emri Mbiemri, biografinë, aftësitë dhe shembujt e projekteve me të dhënat e tua reale.
- `style.css`: ndrysho ngjyrat dhe dizajnin përmes CSS variables te `:root`.
- `script.js`: vendos emailin tënd te `PROFILE.email`, p.sh. `const PROFILE = { email: 'emri@example.com' };`. Ndrysho edhe objektin `projects` me përshkrimet reale.
- Formulari krijon draft emaili në aplikacionin lokal. Nuk dërgon, nuk regjistron dhe nuk ruan të dhëna personale në server. Pa email të konfiguruar shfaq udhëzim.

## Arkitektura dhe skills
- architect: ndarje e përmbajtjes, stilit dhe logjikës; pa varësi të jashtme.
- senior-front-end: tipografi, design tokens, responsive layout, ndërveprime, qasshmëri, animacione me reduced-motion.
- senior-backend-engineer: kufij të qartë të frontend-it; validim HTML dhe kodim i parametrave mailto. Nuk ka backend real në këtë version.
- senior-database-engineer: nuk ka nevojë për SQLite në këtë portfolio statike; tema ruhet lokalisht në localStorage, jo të dhëna personale.
- senior-tester: shih TESTS.md për kontrollet e kryera.

## GitHub
Krijo repository, ngarko index.html, style.css, script.js dhe dokumentacionin. Mund ta publikosh me GitHub Pages nga Settings → Pages → Deploy from a branch → main / root.
