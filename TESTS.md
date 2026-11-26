# QA — senior-tester

Testuar në Chromium me Playwright (HTML, CSS dhe JS të integruara në memorien e shfletuesit, sepse navigimi te skedarët u bllokua nga ambienti i testimit) dhe Node.js syntax check.

- PASS: ngarkimi i faqes dhe kontrolli i sintaksës JavaScript.
- PASS: Dark/Light Mode. Ruajtja pas rifreskimit nuk u verifikua në këtë ambient.
- PASS: filtrimi i projekteve dhe rikthimi te të gjitha.
- PASS: hapja dhe mbyllja e dialogut me Escape.
- PASS: paralajmërimi i formularit kur emaili nuk është konfiguruar.
- PASS: pa horizontal overflow në 320, 390, 768 dhe 1440 px.
- PASS: menyja mobile hapet dhe mbyllet pas navigimit.
- PASS: pa përjashtime JavaScript gjatë skenarëve të testuar.

Kufizime: nuk është verifikuar dërgimi i emailit real, sepse mungon adresa e pronarit dhe aplikacioni lokal i emailit. Nuk janë kryer audit formal WCAG, testim në Safari/Firefox ose matje të Lighthouse. Nuk ka backend/SQLite për t'u testuar.
