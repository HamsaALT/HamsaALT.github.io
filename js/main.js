/* =========================================================
   CONTENT: edit here
   ========================================================= */

// Projects: one object each. Everything a visitor reads is in TEXT further down
// (under projects.<slug>), so a project works the same in every language.
//   slug    used in the link to the project view: #project=<slug>
//   status  "finished" or "inProgress"
//   tech    4-7 tags (names of tech stay the same in every language)
//   cover   image at the top of the card
//   images  screenshots in the project view (alt text and captions are in TEXT);
//           credit: "osm" adds the OpenStreetMap credit line under a map screenshot
//   demo    optional interactive demo at the bottom of the project view
const PROJECTS = [
  {
    slug: "barrierefri",
    title: "Barrierefri",
    status: "finished",
    tech: ["C#", ".NET", "React", "TypeScript", "PostgreSQL", "Keycloak", "xUnit"],
    code: "https://github.com/HamsaALT/barrierefri",
    cover: { src: "images/projects/barrierefri/card.jpg", width: 800, height: 500 },
    images: [
      { src: "images/projects/barrierefri/map.jpg", width: 1280, height: 800, credit: "osm" },
      { src: "images/projects/barrierefri/cases.jpg", width: 1280, height: 800 },
      { src: "images/projects/barrierefri/report-form.jpg", width: 1280, height: 900 }
    ],
    demo: "barrierefri"
  },
  {
    slug: "leakwatch",
    title: "leakwatch",
    status: "finished",
    tech: ["Python", "pytest", "Git", "GitHub Actions"],
    code: "https://github.com/HamsaALT/leakwatch",
    cover: { src: "images/projects/leakwatch/card.jpg", width: 640, height: 400 },
    images: [
      { src: "images/projects/leakwatch/output.jpg", width: 1042, height: 739 }
    ],
    demo: "leakwatch"
  }
];
const PROJECT_PLACEHOLDERS = 3;

// Add certificates here later, e.g. { title: "Azure Fundamentals (AZ-900)", issuer: "Microsoft", year: 2027 }
const CERTIFICATES = [];

// "What I work with": one card per group. Names of tech are written here; items that
// need translating are written as { t: "key" } and their text is in TEXT (skills.items).
const SKILLS = [
  { group: "code", items: ["Java", "Spring Boot", "C#", ".NET", "ASP.NET Core", "Python", "TypeScript", "JavaScript", "React", "Angular", "Node.js", "Express", "HTML", "CSS", "C"] },
  { group: "data", items: ["SQL", "PostgreSQL", "MongoDB", "Supabase", "Power BI"] },
  { group: "testing", items: [{ t: "automatedTests" }, "JUnit 5", "xUnit", "pytest", "Vitest", "Playwright", "Testcontainers", { t: "a11yTesting" }] },
  { group: "devops", items: ["Docker", "Docker Compose", "Git", "GitHub", "GitHub Actions", "Azure DevOps"] },
  { group: "security", items: ["Keycloak", { t: "secretScanning" }, { t: "rbac" }] },
  { group: "ai", items: ["Claude", "Claude Code", "ChatGPT", "GitHub Copilot"] },
  { group: "users", items: [{ t: "usabilityTesting" }, { t: "userInterviews" }, { t: "figmaPrototypes" }, { t: "userCentredDesign" }, { t: "accessibleDesign" }] },
  { group: "languages", items: [{ t: "danish" }, { t: "english" }] }
];

// "Where I have worked", oldest first. Dates are "YYYY-MM"; end: null means "now".
// Titles and places are keys; their text is in TEXT (work). Employers stay as written.
const JOBS = [
  { title: "patientSitter", employer: "DOUS", place: "zealand", start: "2024-07", end: "2026-10" },
  { title: "serviceLogistics", employer: "Gentofte Hospital", place: "gentofte", start: "2024-10", end: "2026-01" },
  { title: "securityGuard", employer: "NYX Security", place: "zealand", start: "2025-09", end: null },
  { title: "securityGuard", employer: "Protego Security", place: "copenhagen", start: "2026-03", end: null }
];
const EDUCATION = [
  { title: "bsc", school: "aau", start: "2025-09", end: null },
  { title: "htx", school: "hco", start: "2022-08", end: "2025-06" }
];

const EMAIL = "hamsahassan2950@gmail.com";

// All text a visitor reads. `backticks` in project texts are shown as code.
const TEXT = {
  en: {
    // Text in index.html. Keys match data-i18n (text), data-i18n-html (text with markup) and data-i18n-attr.
    page: {
      metaDescription: "Portfolio of Hamsa Hassan, Software Engineering student in Copenhagen.",
      switchTo: "Switch to Danish",
      themeToLight: "Switch to light theme",
      themeToDark: "Switch to dark theme",
      introTitle: 'Welcome to my<br><span class="accent">Portfolio Website</span>',
      navLabel: "Main",
      navMenu: "Menu",
      navHome: "Home",
      navAbout: "About",
      navPortfolio: "Portfolio",
      navSkills: "Skills",
      navWork: "Work",
      navContact: "Contact",
      heroLabel: '<span class="accent">✦</span> Open to student jobs &amp; internships',
      heroTitle: '<span>Software</span><span class="dim">Engineer</span>',
      typedLabel: "Software engineering student, C# and Java developer, UX-minded builder, based in Copenhagen",
      heroDesc: "I build modern, user-friendly software, from research and Figma prototypes to solid backends. Currently studying Software Engineering at Aalborg University Copenhagen.",
      hintWork: '<span class="accent">↓</span> explore my work below',
      hintOpen: '<span class="accent">↗</span> open to student jobs &amp; internships',
      lanyardLabel: "ID card for Hamsa Hassan. You can drag it.",
      photoAlt: "Photo of Hamsa Hassan",
      cardRole: "SOFTWARE ENGINEERING · AAU CPH",
      dragTip: "drag the card ↔",
      scrollHint: "SCROLL",
      aboutLabel: "About me",
      aboutP1: "I study Software Engineering at Aalborg University Copenhagen, and I like building things that solve real problems for real people. I enjoy the whole journey from idea to working software: finding out what users actually need, designing a solution in Figma, and building it with a solid backend.",
      aboutP2: "Alongside my studies, I work as a security guard. Before that, I worked in healthcare as a patient sitter at DOUS and in service and logistics at Gentofte Hospital. Those jobs have taught me responsibility and calm under pressure, and many of my project ideas start there.",
      quote: "“Turning real problems into clean, useful software.”",
      cvButton: "Ask for my CV",
      viewProjects: "View Projects",
      statProjects: "Projects",
      statSkills: "Skills",
      statYearValue: "2nd",
      statYear: "Year of study",
      portfolioTitle: 'Portfolio <span class="accent">Showcase</span>',
      portfolioSub: "Explore my journey through projects, certifications and the technologies I work with.",
      tabsLabel: "Portfolio sections",
      tabProjects: "Projects",
      tabCertificates: "Certificates",
      skillsTitle: 'What I <span class="accent">work with</span>',
      workTitle: 'Where I have <span class="accent">worked</span>',
      workNote: "Part-time, alongside my studies",
      eduTitle: "Education",
      contactTitle: 'Contact <span class="accent">Me</span>',
      contactSub: "Have a role, a project or a question? Send me a message and let's connect.",
      getInTouch: "Get in touch",
      getInTouchText: "Write me a few lines and I'll get back to you as soon as I can.",
      formName: "Your name",
      formEmail: "Your email",
      formMessage: "Your message",
      formSubmit: "Write the email",
      formMissing: "Please fill in your name, email and message.",
      formBadEmail: "Please check your email address.",
      formOpening: "Your email app should open with the message ready to send. If it doesn't, write to",
      mailSubject: name => `Hello from ${name}`,
      cvMessage: "Hi Hamsa, could you send me your CV?",
      connectTitle: "Connect with me",
      githubSmall: "My code",
      emailLabel: "Email",
      nowTitle: "Right now",
      nowText: "What I'm busy with this semester.",
      nowStudyingLabel: "Studying",
      nowStudying: "BSc in Software Engineering, Aalborg University Copenhagen",
      nowBuildingLabel: "Project",
      nowBuilding: "Working on my third semester project at AAU, a student presenter coordination system.",
      nowLearningLabel: "Learning",
      nowLearning: "C#, .NET, Azure and Python",
      nowAvailableLabel: "Available",
      nowAvailable: "10–15 hours a week, flexible around exams",
      nowLanguagesLabel: "Languages",
      nowLanguages: "Danish and English, both fluent",
      rights: "All rights reserved.",
      overlayLabel: "Project",
      overlayClose: "Close",
      overlayCloseHint: " project"
    },
    typed: ["software engineering student", "c# & java developer", "ux-minded builder", "based in copenhagen"],
    ui: {
      pageTitle: "Hamsa Hassan Portfolio",
      status: { finished: "Finished", inProgress: "In progress" },
      seeProject: "See the project",
      seeCode: "See the code",
      seeCodeHint: " (GitHub, opens in a new tab)",
      osmCredit: ["Map data ©", "OpenStreetMap contributors"],
      newTab: " (opens in a new tab)",
      screenshots: "Screenshots",
      whatItDoes: "What it does",
      howItRuns: "How it runs",
      comingSoon: "// coming soon",
      projectSoon: "Project coming soon",
      projectSoonText: "I'm working on this one right now. Check back soon.",
      certSoon: "Certificate coming soon",
      certSoonText: "I'm working towards my first certification.",
      soon: "Soon",
      details: "Details →",
      tryIt: "Try it",
      demoNote: "A small example coded for this page. Made-up data, and nothing is sent anywhere."
    },
    demos: {
      barrierefri: {
        title: "Report a barrier and follow it through the case queue",
        step1: "1. What is the problem?",
        step2: "2. Where is it?",
        // Labels and hints from Barrierefri's own en.json.
        categories: {
          BrokenElevator: ["Broken lift", "Lift or platform lift out of order"],
          BlockedSidewalk: ["Blocked pavement", "Bikes, signs, roadworks or tables in the way"],
          SteepCurb: ["High kerb", "No dropped kerb at a crossing"],
          MissingRamp: ["No ramp", "Steps with no step-free alternative"],
          MissingAudioSignal: ["No audio signal", "Crossing without sound or vibration"],
          InaccessibleEntrance: ["Inaccessible entrance", "Shop, office or public building"],
          Other: ["Something else", "Anything that blocks access"]
        },
        statuses: { Open: "Open", InProgress: "Being fixed", Resolved: "Fixed", Rejected: "Closed" },
        mapLabel: "Demo map with a railway, a river with a bridge, a square and a library. Click the map to place the pin, or use the buttons below it.",
        mapHint: "Click the map, or choose a spot:",
        spots: { station: "Station entrance", library: "Library steps", square: "Crossing by the square", bridge: "Bridge over the river" },
        mapNames: { station: "Station", library: "Library", square: "Square", bridge: "Bridge" },
        pickedOnMap: "a spot you picked on the map",
        pinPlaced: place => `Pin placed: ${place}.`,
        send: "Send report",
        needCategory: "Choose what the problem is (step 1).",
        needPlace: "Place the pin on the map (step 2).",
        sent: (cat, place) => `Report sent: ${cat}, ${place}. Status: Open.`,
        queue: "Case queue",
        place: "Place",
        deadline: "Deadline",
        days: n => `${n} ${n === 1 ? "day" : "days"} (Barrierefri's own target for this category)`,
        status: "Status",
        history: "History",
        reported: "Reported",
        actions: { InProgress: "Start fixing", Resolved: "Mark fixed", Rejected: "Close with a note", Open: "Reopen" },
        noteLabel: "Note to the public (required)",
        noteConfirm: "Close the report",
        noteCancel: "Cancel",
        noteMissing: "Write a short note to the public before closing.",
        changed: s => `Status changed to ${s}.`,
        reopened: n => `Reopened. The deadline starts again: ${n} ${n === 1 ? "day" : "days"}.`,
        startOver: "Start over",
        reset: "The demo has been reset."
      },
      leakwatch: {
        title: "Paste some code and see what leaks",
        label: "Code to scan",
        scan: "Scan",
        sampleTop: "// Every value here is made up.",
        sampleSkip: "// Skipped on purpose: an example key, a placeholder and a file name",
        found: (n, summary) => `Found ${n} possible ${n === 1 ? "secret" : "secrets"} (${summary}).`,
        none: "No secrets found.",
        stale: "You changed the code. Press Scan again to update the results.",
        highlighted: "The code with findings marked",
        findings: "Findings",
        severity: { critical: "critical", high: "high", medium: "medium" },
        count: (sev, n) => `${n} ${sev}`,
        lineCol: (l, c) => `line ${l}, column ${c}`,
        value: "value",
        rules: {
          "aws-access-key-id": "AWS access key ID",
          "github-token": "GitHub personal access or app token",
          "stripe-secret-key": "Stripe live secret key",
          "database-url-password": "Password inside a database connection URL",
          "generic-secret-assignment": "Hard-coded password or secret"
        }
      }
    },
    skills: {
      groups: {
        code: "Languages and frameworks",
        data: "Data",
        testing: "Testing and quality",
        devops: "DevOps and Git",
        security: "Security",
        ai: "AI tools",
        users: "Design and testing with users",
        languages: "Languages"
      },
      items: {
        automatedTests: "Automated tests",
        usabilityTesting: "Usability testing",
        userInterviews: "User interviews",
        figmaPrototypes: "Figma prototypes",
        userCentredDesign: "User-centred design",
        a11yTesting: "Accessibility testing (WCAG 2.2 AA)",
        secretScanning: "Secret scanning",
        rbac: "Role-based access",
        accessibleDesign: "Accessible design",
        danish: "Danish (native)",
        english: "English (fluent)"
      }
    },
    work: {
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      now: "now",
      titles: { patientSitter: "Patient Sitter", serviceLogistics: "Service and Logistics", securityGuard: "Security Guard" },
      places: { zealand: "Zealand", gentofte: "Gentofte", copenhagen: "Copenhagen" },
      education: { bsc: "BSc Software Engineering", htx: "HTX (Mathematics A, Chemistry A, English A)" },
      schools: { aau: "Aalborg University Copenhagen", hco: "H.C. Ørsted Gymnasium" }
    },
    projects: {
      barrierefri: {
        summary: "A public map of broken lifts, blocked pavements and missing ramps, so people can check a route before they leave home.",
        kind: "Accessibility reporting app, own project",
        intro: [
          "Barrierefri lets anyone report accessibility barriers on a map, such as a broken lift or a crossing without an audio signal, and other people confirm whether they are still there.",
          "It is for people who need to check a route before they leave home, and for the municipalities and transport operators who fix the barriers. It is my own project."
        ],
        coverAlt: "Barrierefri's map of central Copenhagen, with round markers for open reports and diamond-shaped markers for repairs under way.",
        images: [
          {
            alt: "A map of central Copenhagen with round red markers for open reports and diamond-shaped markers for repairs under way, a legend in the corner, and a list of reports beside the map with three statistics on top: 25 open reports, 11 overdue and 16 days typical time to fix.",
            caption: "The public map. Each status has its own marker shape, and every report on the map is also in the list."
          },
          {
            alt: "A table of cases with the columns report, status, deadline, responsible, confirmations and actions. Each row shows a badge such as \"30 dage over fristen\" and buttons to start the repair or mark it as fixed.",
            caption: "The case queue for staff, sorted so the most overdue cases come first."
          },
          {
            alt: "Step 1 of the report form, \"Hvad er problemet?\", with seven large radio cards such as \"Elevator i stykker\" and \"Ingen rampe\", and the start of step 2 with a map below.",
            caption: "Step 1 of 3 in the report form. The interface is in Danish, with English one click away."
          }
        ],
        features: [
          { title: "Report in three steps", text: "A report has three steps: what, where and details. The location is picked by moving the map under a fixed crosshair, which also works with the arrow keys." },
          { title: "Duplicate detection", text: "While you fill in the form, existing reports of the same kind within 30 metres are suggested. The server checks again when the report is sent." },
          { title: "Crowd confirmation", text: "People mark a barrier as \"still there\" or \"fixed\" with two large buttons. A confidence score and a \"probably fixed\" flag show staff where to look first." },
          { title: "Case queue with deadlines", text: "Each category has its own deadline, from 2 days for a broken lift to 90 for a missing ramp. Overdue cases come first, with the number of days they are late." }
        ],
        runs: [
          { label: "Services", text: "Five in Docker Compose: PostgreSQL 16, Keycloak, Azurite (local Azure Blob Storage), the .NET 10 API and the React app behind nginx." },
          { label: "Pipeline", text: "Azure DevOps builds and tests the backend and frontend in parallel, then builds the Docker images when everything passes." },
          { label: "Tests", text: "161 automated tests: 31 unit and 15 integration tests in xUnit (against real PostgreSQL and Azurite through Testcontainers), and 115 frontend tests in Vitest." },
          { label: "Accessibility", text: "Targets WCAG 2.2 AA. Every page test runs axe-core and fails on any violation, and a separate test checks colour contrast from the CSS tokens." }
        ]
      },
      leakwatch: {
        summary: "Deleted passwords and API keys stay readable in git history. This finds them before someone else does.",
        kind: "Secret scanner for git repositories, own project",
        intro: [
          "leakwatch finds API keys, passwords and other secrets in your code and in your whole git history. It runs as a command line tool, a git pre-commit hook and a GitHub Action, with no dependencies outside the Python standard library.",
          "It is for developers and student teams who want to stop a secret before it is committed, or find one that was committed and later deleted. It is my own project, started after I found a database key in a university group repository."
        ],
        coverAlt: "Terminal output from leakwatch scan: a Stripe live secret key and a GitHub token marked critical, a committed .env file marked high, each value hidden after the first four characters.",
        images: [
          {
            alt: "Terminal output of the command leakwatch scan dot. It lists six findings: a Stripe live secret key and a GitHub token marked critical; a committed .env file, an AWS access key ID and a password in a database URL marked high; and a hard-coded password marked medium. Each shows the file, line and column, and a value with everything after the first four characters replaced by stars. It ends with: Found 6 possible secrets (2 critical, 3 high, 1 medium).",
            caption: "The real output of `leakwatch scan .` on a demo folder of made-up keys. Values are redacted by default, so the report itself is safe to share. The AWS documentation's example key and a password called `example-password` are in the folder too, and correctly skipped."
          }
        ],
        features: [
          { title: "Scans the whole history", text: "With `--history` it reads every commit on every branch and scans only the lines each commit added. Each finding points to the commit that introduced the secret, because deleting it later does not remove it from git." },
          { title: "Stops the commit", text: "`leakwatch install-hook` adds a pre-commit hook that scans what is staged. A secret you fixed on disk but did not stage again is still caught." },
          { title: "Keeps false positives down", text: "An entropy check, a placeholder filter and decoding of tokens separate real keys from values like `password123` or `<YOUR_API_KEY>`. Decoding is also how it tells a harmless Supabase anon key from a service_role key." }
        ],
        runs: [
          { label: "Install", text: "pip install straight from GitHub. Needs Python 3.10 or newer, and git for the `--staged` and `--history` modes." },
          { label: "Modes", text: "Command line tool, git pre-commit hook and GitHub Action. Output as text, JSON, or SARIF for GitHub code scanning." },
          { label: "Rules", text: "19 detection rules, from GitHub, AWS and Stripe keys to private key files and committed `.env` files." },
          { label: "Tests", text: "76 pytest tests. CI runs them on Python 3.10 to 3.13 with Ruff linting, fails below 90% coverage, then scans the repository's own history with the action." }
        ]
      }
    }
  },
  da: {
    page: {
      metaDescription: "Portfolio for Hamsa Hassan, softwarestuderende i København.",
      switchTo: "Skift til engelsk",
      themeToLight: "Skift til lyst tema",
      themeToDark: "Skift til mørkt tema",
      introTitle: 'Velkommen til min<br><span class="accent">portfolio</span>',
      navLabel: "Hovedmenu",
      navMenu: "Menu",
      navHome: "Hjem",
      navAbout: "Om mig",
      navPortfolio: "Portfolio",
      navSkills: "Kompetencer",
      navWork: "Arbejde",
      navContact: "Kontakt",
      heroLabel: '<span class="accent">✦</span> Søger studiejob og praktik',
      heroTitle: '<span>Software-</span><span class="dim">udvikler</span>',
      typedLabel: "Softwarestuderende, C#- og Java-udvikler, tænker i brugeroplevelse, når jeg bygger, bor i København",
      heroDesc: "Jeg bygger moderne og brugervenlig software, fra research og prototyper i Figma til solide backends. Jeg læser software på Aalborg Universitet København.",
      hintWork: '<span class="accent">↓</span> se mit arbejde længere nede',
      hintOpen: '<span class="accent">↗</span> søger studiejob og praktik',
      lanyardLabel: "ID-kort for Hamsa Hassan. Du kan trække i det.",
      photoAlt: "Foto af Hamsa Hassan",
      cardRole: "SOFTWARE · AAU CPH",
      dragTip: "træk i kortet ↔",
      scrollHint: "SCROLL",
      aboutLabel: "Om mig",
      aboutP1: "Jeg læser software på Aalborg Universitet København, og jeg kan godt lide at bygge ting, der løser rigtige problemer for rigtige mennesker. Jeg kan lide hele vejen fra idé til software, der virker: at finde ud af, hvad brugerne faktisk har brug for, designe en løsning i Figma og bygge den med en solid backend.",
      aboutP2: "Ved siden af studiet arbejder jeg som sikkerhedsvagt. Før det arbejdede jeg i sundhedsvæsenet, som tilkaldevagt hos DOUS og med service og logistik på Gentofte Hospital. De job har lært mig at tage ansvar og bevare roen under pres, og mange af mine projektidéer starter dér.",
      quote: "„Jeg gør rigtige problemer til enkel og brugbar software.“",
      cvButton: "Bed om mit CV",
      viewProjects: "Se projekter",
      statProjects: "Projekter",
      statSkills: "Kompetencer",
      statYearValue: "2.",
      statYear: "Studieår",
      portfolioTitle: 'Mine <span class="accent">projekter</span>',
      portfolioSub: "Se mine projekter, certificeringer og de teknologier, jeg arbejder med.",
      tabsLabel: "Dele af portfolioen",
      tabProjects: "Projekter",
      tabCertificates: "Certifikater",
      skillsTitle: 'Det <span class="accent">arbejder jeg med</span>',
      workTitle: 'Hvor jeg har <span class="accent">arbejdet</span>',
      workNote: "Deltid, ved siden af studiet",
      eduTitle: "Uddannelse",
      contactTitle: 'Kontakt <span class="accent">mig</span>',
      contactSub: "Har du en stilling, et projekt eller et spørgsmål? Skriv til mig, så tager vi en snak.",
      getInTouch: "Skriv til mig",
      getInTouchText: "Skriv et par linjer, så vender jeg tilbage hurtigst muligt.",
      formName: "Dit navn",
      formEmail: "Din e-mail",
      formMessage: "Din besked",
      formSubmit: "Skriv e-mailen",
      formMissing: "Udfyld dit navn, din e-mail og din besked.",
      formBadEmail: "Tjek din e-mailadresse.",
      formOpening: "Dit mailprogram burde åbne med beskeden klar til at sende. Hvis det ikke sker, så skriv til",
      mailSubject: name => `Hej fra ${name}`,
      cvMessage: "Hej Hamsa, vil du sende mig dit CV?",
      connectTitle: "Find mig her",
      githubSmall: "Min kode",
      emailLabel: "E-mail",
      nowTitle: "Lige nu",
      nowText: "Det har jeg gang i dette semester.",
      nowStudyingLabel: "Studerer",
      nowStudying: "Bachelor i software, Aalborg Universitet København",
      nowBuildingLabel: "Projekt",
      nowBuilding: "Arbejder på mit projekt på 3. semester på AAU: et system til at koordinere studerende, der holder oplæg.",
      nowLearningLabel: "Lærer",
      nowLearning: "C#, .NET, Azure og Python",
      nowAvailableLabel: "Søger studiejob",
      nowAvailable: "10–15 timer om ugen, fleksibelt omkring eksamener",
      nowLanguagesLabel: "Sprog",
      nowLanguages: "Dansk og engelsk, begge flydende",
      rights: "Alle rettigheder forbeholdes.",
      overlayLabel: "Projekt",
      overlayClose: "Luk",
      overlayCloseHint: " projektet"
    },
    typed: ["softwarestuderende", "c#- og java-udvikler", "tænker i brugeroplevelse, når jeg bygger", "bor i københavn"],
    ui: {
      pageTitle: "Hamsa Hassan – portfolio",
      status: { finished: "Færdig", inProgress: "I gang" },
      seeProject: "Se projektet",
      seeCode: "Se koden",
      seeCodeHint: " (GitHub, åbner i en ny fane)",
      osmCredit: ["Kortdata ©", "OpenStreetMap-bidragydere"],
      newTab: " (åbner i en ny fane)",
      screenshots: "Skærmbilleder",
      whatItDoes: "Det kan den",
      howItRuns: "Sådan kører den",
      comingSoon: "// kommer snart",
      projectSoon: "Projekt på vej",
      projectSoonText: "Jeg arbejder på det lige nu. Kig forbi igen snart.",
      certSoon: "Certifikat på vej",
      certSoonText: "Jeg arbejder hen imod min første certificering.",
      soon: "Snart",
      details: "Detaljer →",
      tryIt: "Prøv selv",
      demoNote: "Et lille eksempel lavet til denne side. Data er opdigtede, og intet bliver sendt nogen steder hen."
    },
    demos: {
      barrierefri: {
        title: "Meld en barriere, og følg sagen hele vejen",
        step1: "1. Hvad er problemet?",
        step2: "2. Hvor er det?",
        // Labels and hints from Barrierefri's own da.json.
        categories: {
          BrokenElevator: ["Elevator i stykker", "Elevator eller trappelift virker ikke"],
          BlockedSidewalk: ["Spærret fortov", "Cykler, skilte, vejarbejde eller borde i vejen"],
          SteepCurb: ["Høj kantsten", "Ingen nedsænket kantsten ved et overgangssted"],
          MissingRamp: ["Ingen rampe", "Trapper uden et trinfrit alternativ"],
          MissingAudioSignal: ["Intet lydsignal", "Fodgængerovergang uden lyd eller vibration"],
          InaccessibleEntrance: ["Utilgængelig indgang", "Butik, kontor eller offentlig bygning"],
          Other: ["Noget andet", "Alt, der spærrer for adgangen"]
        },
        statuses: { Open: "Åben", InProgress: "Under udbedring", Resolved: "Udbedret", Rejected: "Lukket" },
        mapLabel: "Demokort med en jernbane, en å med en bro, et torv og et bibliotek. Klik på kortet for at sætte nålen, eller brug knapperne under det.",
        mapHint: "Klik på kortet, eller vælg et sted:",
        spots: { station: "Indgangen til stationen", library: "Trappen ved biblioteket", square: "Overgangen ved torvet", bridge: "Broen over åen" },
        mapNames: { station: "Station", library: "Bibliotek", square: "Torv", bridge: "Bro" },
        pickedOnMap: "et sted, du valgte på kortet",
        pinPlaced: place => `Nålen er sat: ${place}.`,
        send: "Send melding",
        needCategory: "Vælg, hvad problemet er (trin 1).",
        needPlace: "Sæt nålen på kortet (trin 2).",
        sent: (cat, place) => `Meldingen er sendt: ${cat}, ${place}. Status: Åben.`,
        queue: "Sagsoversigt",
        place: "Sted",
        deadline: "Frist",
        days: n => `${n} ${n === 1 ? "dag" : "dage"} (Barrierefris eget mål for denne kategori)`,
        status: "Status",
        history: "Historik",
        reported: "Meldt",
        actions: { InProgress: "Start udbedring", Resolved: "Markér udbedret", Rejected: "Luk med en besked", Open: "Genåbn" },
        noteLabel: "Besked til offentligheden (skal udfyldes)",
        noteConfirm: "Luk meldingen",
        noteCancel: "Annullér",
        noteMissing: "Skriv en kort besked til offentligheden, før du lukker meldingen.",
        changed: s => `Status er ændret til ${s}.`,
        reopened: n => `Genåbnet. Fristen starter forfra: ${n} ${n === 1 ? "dag" : "dage"}.`,
        startOver: "Start forfra",
        reset: "Demoen er nulstillet."
      },
      leakwatch: {
        title: "Indsæt noget kode, og se, hvad der lækker",
        label: "Kode, der skal scannes",
        scan: "Scan",
        sampleTop: "// Alle værdier her er opdigtede.",
        sampleSkip: "// Springes over med vilje: en eksempelnøgle, en pladsholder og et filnavn",
        found: (n, summary) => n === 1 ? `Fandt 1 mulig hemmelighed (${summary}).` : `Fandt ${n} mulige hemmeligheder (${summary}).`,
        none: "Ingen hemmeligheder fundet.",
        stale: "Du har ændret koden. Tryk på Scan igen for at opdatere resultatet.",
        highlighted: "Koden med fundene markeret",
        findings: "Fund",
        severity: { critical: "kritisk", high: "høj", medium: "mellem" },
        count: (sev, n) => `${n} ${n === 1 ? { critical: "kritisk", high: "høj", medium: "mellem" }[sev] : { critical: "kritiske", high: "høje", medium: "mellem" }[sev]}`,
        lineCol: (l, c) => `linje ${l}, kolonne ${c}`,
        value: "værdi",
        rules: {
          "aws-access-key-id": "AWS access key ID",
          "github-token": "GitHub personal access token eller app-token",
          "stripe-secret-key": "Stripe live secret key",
          "database-url-password": "Adgangskode i en URL til en database",
          "generic-secret-assignment": "Hardkodet adgangskode eller hemmelighed"
        }
      }
    },
    skills: {
      groups: {
        code: "Programmeringssprog og frameworks",
        data: "Data",
        testing: "Test og kvalitet",
        devops: "DevOps og Git",
        security: "Sikkerhed",
        ai: "AI-værktøjer",
        users: "Design og test med brugere",
        languages: "Sprog"
      },
      items: {
        automatedTests: "Automatiserede tests",
        usabilityTesting: "Brugertest",
        userInterviews: "Brugerinterviews",
        figmaPrototypes: "Prototyper i Figma",
        userCentredDesign: "Brugercentreret design",
        a11yTesting: "Tilgængelighedstest (WCAG 2.2 AA)",
        secretScanning: "Find nøgler og adgangskoder i koden",
        rbac: "Rollebaseret adgang",
        accessibleDesign: "Tilgængeligt design",
        danish: "Dansk (modersmål)",
        english: "Engelsk (flydende)"
      }
    },
    work: {
      months: ["jan.", "feb.", "mar.", "apr.", "maj", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "dec."],
      now: "nu",
      titles: { patientSitter: "Tilkaldevagt", serviceLogistics: "Service og logistik", securityGuard: "Sikkerhedsvagt" },
      places: { zealand: "Sjælland", gentofte: "Gentofte", copenhagen: "København" },
      education: { bsc: "Bachelor i software", htx: "HTX (Matematik A, Kemi A, Engelsk A)" },
      schools: { aau: "Aalborg Universitet København", hco: "H.C. Ørsted Gymnasium" }
    },
    projects: {
      barrierefri: {
        summary: "Et offentligt kort over elevatorer i stykker, spærrede fortove og manglende ramper, så man kan tjekke sin rute, før man tager af sted.",
        kind: "App til at melde barrierer for tilgængelighed, eget projekt",
        intro: [
          "Med Barrierefri kan alle melde barrierer for tilgængelighed på et kort, fx en elevator i stykker eller en fodgængerovergang uden lydsignal, og andre kan bekræfte, om de stadig er der.",
          "Barrierefri er til folk, der har brug for at tjekke en rute, før de tager af sted, og til de kommuner og trafikselskaber, der udbedrer barriererne. Det er mit eget projekt."
        ],
        coverAlt: "Barrierefris kort over det centrale København med runde markører for åbne meldinger og ruderformede markører for barrierer under udbedring.",
        images: [
          {
            alt: "Et kort over det centrale København med runde røde markører for åbne meldinger og ruderformede markører for barrierer under udbedring, en forklaring i hjørnet og en liste over meldinger ved siden af kortet med tre tal øverst: 25 åbne meldinger, 11 over fristen og 16 dage som typisk tid til udbedring.",
            caption: "Det offentlige kort. Hver status har sin egen markørform, og alle meldinger på kortet står også i listen."
          },
          {
            alt: "En tabel over sager med kolonnerne melding, status, frist, ansvarlig, bekræftelser og handlinger. Hver række viser et mærke som \"30 dage over fristen\" og knapper til at starte udbedringen eller markere sagen som udbedret.",
            caption: "Sagsoversigten for medarbejdere, sorteret så de sager, der er længst over fristen, står øverst."
          },
          {
            alt: "Trin 1 i meldeformularen, \"Hvad er problemet?\", med syv store valgkort som \"Elevator i stykker\" og \"Ingen rampe\", og starten på trin 2 med et kort nedenunder.",
            caption: "Trin 1 af 3 i meldeformularen. Brugerfladen er på dansk, og engelsk er ét klik væk."
          }
        ],
        features: [
          { title: "Meld i tre trin", text: "En melding har tre trin: hvad, hvor og detaljer. Stedet vælges ved at flytte kortet under et fast trådkors, og det virker også med piletasterne." },
          { title: "Fanger dubletter", text: "Mens du udfylder formularen, foreslår appen eksisterende meldinger af samme type inden for 30 meter. Serveren tjekker igen, når meldingen bliver sendt." },
          { title: "Bekræftelser fra andre", text: "Folk markerer en barriere som \"stadig der\" eller \"udbedret\" med to store knapper. En sikkerhedsscore og et \"sandsynligvis udbedret\"-flag viser medarbejderne, hvor de skal kigge først." },
          { title: "Sagsoversigt med frister", text: "Hver kategori har sin egen frist, fra 2 dage for en elevator i stykker til 90 for en manglende rampe. Sager over fristen kommer først, med det antal dage, de er forsinket." }
        ],
        runs: [
          { label: "Tjenester", text: "Fem i Docker Compose: PostgreSQL 16, Keycloak, Azurite (lokal Azure Blob Storage), .NET 10-API'et og React-appen bag nginx." },
          { label: "Pipeline", text: "Azure DevOps bygger og tester backend og frontend parallelt og bygger derefter Docker-images, når alt er grønt." },
          { label: "Tests", text: "161 automatiske tests: 31 unit- og 15 integrationstests i xUnit (mod rigtig PostgreSQL og Azurite via Testcontainers) og 115 frontendtests i Vitest." },
          { label: "Tilgængelighed", text: "Målet er WCAG 2.2 AA. Hver sidetest kører axe-core og fejler ved enhver overtrædelse, og en separat test tjekker farvekontrasten ud fra CSS-tokens." }
        ]
      },
      leakwatch: {
        summary: "Slettede adgangskoder og API-nøgler kan stadig læses i git-historikken. Værktøjet finder dem, før andre gør.",
        kind: "Scanner til hemmeligheder i git-repositories, eget projekt",
        intro: [
          "leakwatch finder API-nøgler, adgangskoder og andre hemmeligheder i din kode og i hele din git-historik. Den kører som kommandolinjeværktøj, som git pre-commit hook og som GitHub Action, uden afhængigheder ud over Pythons standardbibliotek.",
          "leakwatch er til udviklere og studiegrupper, der vil stoppe en hemmelighed, før den bliver committet, eller finde en, der blev committet og senere slettet. Det er mit eget projekt, og jeg startede det, efter at jeg fandt en databasenøgle i en gruppes repository på universitetet."
        ],
        coverAlt: "Terminaloutput fra leakwatch scan: en Stripe live secret key og et GitHub-token markeret critical og en committet .env-fil markeret high. Hver værdi er skjult efter de første fire tegn.",
        images: [
          {
            alt: "Terminaloutput fra kommandoen leakwatch scan punktum. Det viser seks fund: en Stripe live secret key og et GitHub-token markeret critical; en committet .env-fil, et AWS access key ID og en adgangskode i en database-URL markeret high; og en hardkodet adgangskode markeret medium. Hvert fund viser fil, linje og kolonne og en værdi, hvor alt efter de første fire tegn er erstattet af stjerner. Til sidst står der: Found 6 possible secrets (2 critical, 3 high, 1 medium).",
            caption: "Det rigtige output fra `leakwatch scan .` på en demomappe med opdigtede nøgler. Værdierne er skjult som standard, så selve rapporten er sikker at dele. AWS-dokumentationens eksempelnøgle og en adgangskode, der hedder `example-password`, ligger også i mappen og bliver korrekt sprunget over."
          }
        ],
        features: [
          { title: "Scanner hele historikken", text: "Med `--history` læser den alle commits på alle branches og scanner kun de linjer, hver commit tilføjede. Hvert fund peger på den commit, der tilføjede hemmeligheden, for den forsvinder ikke fra git, bare fordi den bliver slettet senere." },
          { title: "Blokerer commit'et", text: "`leakwatch install-hook` tilføjer et pre-commit hook, der scanner det, der er staged. Har du slettet en hemmelighed i filen, men ikke kørt git add igen, ligger den stadig i det, der bliver committet, og den bliver fanget." },
          { title: "Giver få falske alarmer", text: "Et entropitjek, et filter for pladsholdere og afkodning af tokens skelner rigtige nøgler fra værdier som `password123` eller `<YOUR_API_KEY>`. Det er også afkodningen, der skelner en harmløs Supabase anon-nøgle fra en service_role-nøgle." }
        ],
        runs: [
          { label: "Installation", text: "pip install direkte fra GitHub. Kræver Python 3.10 eller nyere og git til `--staged` og `--history`." },
          { label: "Tilstande", text: "Kommandolinjeværktøj, git pre-commit hook og GitHub Action. Output som tekst, JSON eller SARIF til GitHub code scanning." },
          { label: "Regler", text: "19 regler, der finder alt fra GitHub-, AWS- og Stripe-nøgler til private nøglefiler og committede `.env`-filer." },
          { label: "Tests", text: "76 pytest-tests. CI kører dem på Python 3.10 til 3.13 med Ruff-linting, fejler under 90 % dækning og scanner derefter repositoryets egen historik med actionen." }
        ]
      }
    }
  }
};

// First visit: Danish if the browser's preferred language is Danish, otherwise English.
// After that, the visitor's own choice (saved when they use the EN/DA switch).
const LANGS = ["en", "da"];
let lang = (() => {
  try { const saved = localStorage.getItem("lang"); if (LANGS.includes(saved)) return saved; } catch (e) {}
  const browser = (navigator.languages && navigator.languages[0]) || navigator.language || "";
  return browser.toLowerCase().startsWith("da") ? "da" : "en";
})();
const t = () => TEXT[lang];

/* ========================================================= */

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Intro screen (once per visit) ---------- */
(function intro() {
  const el = document.getElementById("intro");
  let seen = false;
  try { seen = sessionStorage.getItem("introSeen") === "1"; } catch (e) {}
  // Skip it when a link opens a project directly.
  if (seen || reduceMotion || location.hash.startsWith("#project=")) { el.remove(); return; }
  const close = () => {
    el.classList.add("hide");
    try { sessionStorage.setItem("introSeen", "1"); } catch (e) {}
    setTimeout(() => el.remove(), 800);
  };
  el.addEventListener("click", close);
  setTimeout(close, 2200);
})();

/* ---------- Typewriter ---------- */
const typewriter = (function () {
  const el = document.getElementById("typed");
  let phrase = 0, chars = 0, deleting = true, timer = null;
  function tick() {
    const list = t().typed;
    if (deleting) {
      chars--;
      if (chars <= 0) { deleting = false; phrase = (phrase + 1) % list.length; }
    } else {
      chars++;
      if (chars >= list[phrase].length) { deleting = true; el.textContent = list[phrase]; timer = setTimeout(tick, 2200); return; }
    }
    el.textContent = list[phrase].slice(0, Math.max(chars, 0));
    timer = setTimeout(tick, deleting ? 35 : 75);
  }
  // Called on load and when the language changes: show the first phrase, then start typing.
  return function restart() {
    clearTimeout(timer);
    phrase = 0; deleting = true; chars = t().typed[0].length;
    el.textContent = t().typed[0];
    if (!reduceMotion) timer = setTimeout(tick, 3200);
  };
})();

/* ---------- Lanyard: a swinging ID card you can drag ---------- */
(function lanyard() {
  const stage = document.getElementById("lanyard");
  const badge = document.getElementById("badge");
  const strapEdge = document.getElementById("strapPath");
  const strapBody = document.getElementById("strapBody");

  let width = 0, anchorX = 0, anchorY = -120, length = 380;
  let angle = reduceMotion ? 0 : 0.55, velocity = 0;
  let dragging = false, lastT = 0, lastAngle = 0, grabOffset = 0;

  function measure() {
    width = stage.clientWidth;
    anchorX = width / 2;
    // On wide screens the strap comes down from above the section; on phones it starts at the top of the card area.
    anchorY = window.innerWidth > 880 ? -120 : -10;
    // Leave room under the card for the "drag the card" hint.
    length = Math.max(120, stage.clientHeight - badge.offsetHeight - 44 - anchorY);
  }

  function render() {
    const x = anchorX + Math.sin(angle) * length;
    const y = anchorY + Math.cos(angle) * length;
    badge.style.transform = `translate(${x - badge.offsetWidth / 2}px, ${y}px) rotate(${-angle * 0.85}rad)`;
    // Strap: from the anchor, curving slightly, to the clip on the card
    const midX = (anchorX + x) / 2 + Math.sin(angle) * 18;
    const midY = (anchorY + y) / 2;
    const d = `M ${anchorX} ${anchorY} Q ${midX} ${midY} ${x} ${y + 8}`;
    strapEdge.setAttribute("d", d);
    strapBody.setAttribute("d", d);
  }

  function step(t) {
    const dt = Math.min(0.032, (t - lastT) / 1000 || 0.016);
    lastT = t;
    if (!dragging) {
      const gravity = 2200;
      const acc = -(gravity / length) * Math.sin(angle) - 1.6 * velocity;
      velocity += acc * dt;
      angle += velocity * dt;
    }
    render();
    requestAnimationFrame(step);
  }

  function angleFromPointer(e) {
    const r = stage.getBoundingClientRect();
    const dx = e.clientX - r.left - anchorX;
    const dy = e.clientY - r.top - anchorY;
    return Math.atan2(dx, Math.max(dy, 40));
  }

  badge.addEventListener("pointerdown", e => {
    dragging = true;
    badge.setPointerCapture(e.pointerId);
    grabOffset = angleFromPointer(e) - angle;
    lastAngle = angle; lastT = performance.now();
  });
  badge.addEventListener("pointermove", e => {
    if (!dragging) return;
    const now = performance.now();
    const next = Math.max(-1.2, Math.min(1.2, angleFromPointer(e) - grabOffset));
    velocity = (next - lastAngle) / Math.max(0.008, (now - lastT) / 1000);
    lastAngle = next; angle = next;
  });
  const release = () => { dragging = false; velocity = Math.max(-8, Math.min(8, velocity)); };
  badge.addEventListener("pointerup", release);
  badge.addEventListener("pointercancel", release);

  measure();
  window.addEventListener("resize", () => { measure(); render(); });
  if (reduceMotion) { render(); } else { requestAnimationFrame(t => { lastT = t; step(t); }); }
})();

/* ---------- Portfolio content ---------- */
function esc(s) { return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }

function placeholderCard(i, kind) {
  const ui = t().ui, isProject = kind === "project";
  const widths = [[52, 64, 44], [60, 40, 56], [46, 58, 50]][i % 3];
  return `
    <article class="p-card">
      <div class="p-preview"><span>${esc(ui.comingSoon)}</span></div>
      <div class="p-body">
        <h3>${esc(isProject ? ui.projectSoon : ui.certSoon)}</h3>
        <p>${esc(isProject ? ui.projectSoonText : ui.certSoonText)}</p>
        <div class="skeleton" aria-hidden="true">${widths.map(w => `<i style="width:${w}px"></i>`).join("")}</div>
        <div class="p-foot"><span class="soon">${esc(ui.soon)}</span><span class="details" aria-hidden="true">${esc(ui.details)}</span></div>
      </div>
    </article>`;
}

const STATUS_ICONS = {
  // A check for finished, a half-filled circle for in progress, so the status never depends on colour.
  finished: `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="m3.5 8.5 3 3 6-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  inProgress: `<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="5.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M8 2.5a5.5 5.5 0 0 1 0 11z" fill="currentColor"/></svg>`
};
const pills = tech => `<ul class="pills">${(tech || []).map(x => `<li>${esc(x)}</li>`).join("")}</ul>`;
const statusLabel = s => s ? `<span class="status">${STATUS_ICONS[s] || ""}${esc(t().ui.status[s])}</span>` : "";
// Escapes text, then shows `backticks` as code (for commands and flags in project texts).
const rich = s => esc(s).replace(/`([^`]+)`/g, "<code>$1</code>");
const projectText = p => t().projects[p.slug];

function projectCard(p) {
  const tx = projectText(p), c = p.cover;
  return `
    <article class="p-card">
      <div class="p-preview">${c ? `<img src="${esc(c.src)}" width="${c.width}" height="${c.height}" alt="${esc(tx.coverAlt)}" loading="lazy" decoding="async"${c.position ? ` style="object-position:${esc(c.position)}"` : ""}>` : ""}</div>
      <div class="p-body">
        <h3>${esc(p.title)}</h3>
        <p>${esc(tx.summary)}</p>
        ${pills(p.tech)}
        <div class="p-foot">
          <button class="btn" type="button" data-project="${esc(p.slug)}" aria-haspopup="dialog">${esc(t().ui.seeProject)}<span class="sr-only">: ${esc(p.title)}</span></button>
        </div>
      </div>
    </article>`;
}

function projectView(p) {
  const ui = t().ui, tx = projectText(p);
  const section = (title, body, extra = "") => `<section class="ov-section"${extra}><h3>${esc(title)}</h3>${body}</section>`;
  return `
    <header class="ov-head">
      ${statusLabel(p.status)}
      <h2 class="display ov-title" id="overlayTitle">${esc(p.title)}</h2>
      <p class="ov-kind">${esc(tx.kind)}</p>
    </header>
    <div class="ov-intro">${tx.intro.map(s => `<p>${rich(s)}</p>`).join("")}</div>
    ${pills(p.tech)}
    <a class="btn btn-light" href="${esc(p.code)}" target="_blank" rel="noopener noreferrer">${esc(ui.seeCode)}<span class="sr-only">${esc(ui.seeCodeHint)}</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg></a>
    ${p.images && p.images.length ? section(ui.screenshots, `<div class="ov-shots">${p.images.map((img, i) => `
      <figure>
        <img src="${esc(img.src)}" width="${img.width}" height="${img.height}" alt="${esc(tx.images[i].alt)}" loading="lazy" decoding="async">
        <figcaption>${rich(tx.images[i].caption)}${img.credit === "osm" ? `<small class="ov-credit">${esc(ui.osmCredit[0])} <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">${esc(ui.osmCredit[1])}<span class="sr-only">${esc(ui.newTab)}</span></a></small>` : ""}</figcaption>
      </figure>`).join("")}</div>`) : ""}
    ${section(ui.whatItDoes, `<div class="ov-features">${tx.features.map(f => `
      <div class="ov-feature"><h4>${esc(f.title)}</h4><p>${rich(f.text)}</p></div>`).join("")}</div>`)}
    ${section(ui.howItRuns, `<dl class="ov-runs">${tx.runs.map(r => `
      <div><dt>${esc(r.label)}</dt><dd>${rich(r.text)}</dd></div>`).join("")}</dl>`)}
    ${p.demo ? demoSection(p.demo) : ""}`;
}

function certCard(c) {
  return `
    <article class="p-card">
      <div class="p-preview"><span>// certificate</span></div>
      <div class="p-body"><h3>${esc(c.title)}</h3><p>${esc(c.issuer || "")} ${c.year ? "· " + esc(c.year) : ""}</p></div>
    </article>`;
}

/* ---------- Where I have worked: timeline + education ---------- */
const ym = v => { const [y, m] = v.split("-").map(Number); return y * 12 + m - 1; };  // months since year 0
function renderWork() {
  const w = t().work, today = new Date(), nowIndex = today.getFullYear() * 12 + today.getMonth();
  const fmt = v => `${w.months[ym(v) % 12]} ${Math.floor(ym(v) / 12)}`;
  const dates = r => `<time datetime="${r.start}">${esc(fmt(r.start))}</time> – ${r.end ? `<time datetime="${r.end}">${esc(fmt(r.end))}</time>` : esc(w.now)}`;
  // The axis runs from January of the first year to December of this year (at least 2026).
  const firstYear = Math.min(...JOBS.map(j => Math.floor(ym(j.start) / 12)));
  const lastYear = Math.max(2026, today.getFullYear());
  const years = lastYear - firstYear + 1, total = years * 12, base = firstYear * 12;
  const timeline = document.querySelector(".timeline");
  timeline.style.setProperty("--years", years);
  document.getElementById("tlAxis").innerHTML = Array.from({ length: years }, (_, i) => `<span style="left:${(i / years) * 100}%">${firstYear + i}</span>`).join("");
  document.getElementById("jobList").innerHTML = JOBS.map(j => {
    const from = ym(j.start) - base, to = (j.end ? ym(j.end) : nowIndex) - base + 1;
    return `
      <li class="tl-item${j.end ? "" : " is-current"}">
        <p class="tl-role"><strong>${esc(w.titles[j.title])}</strong><span>${esc(j.employer)}, ${esc(w.places[j.place])}</span></p>
        <div class="tl-track"><span class="tl-bar" style="--from:${(from / total) * 100}%;--to:${100 - (to / total) * 100}%"><span>${dates(j)}</span></span></div>
      </li>`;
  }).join("");
  document.getElementById("eduList").innerHTML = EDUCATION.map(e => `
    <li><p><strong>${esc(w.education[e.title])}</strong><span>${esc(w.schools[e.school])}</span></p><span class="edu-dates">${dates(e)}</span></li>`).join("");
}

// Everything built from data. Runs on load and again when the language changes.
function renderContent() {
  document.getElementById("projectGrid").innerHTML = PROJECTS.length
    ? PROJECTS.map(projectCard).join("")
    : Array.from({ length: PROJECT_PLACEHOLDERS }, (_, i) => placeholderCard(i, "project")).join("");

  document.getElementById("certGrid").innerHTML = CERTIFICATES.length
    ? CERTIFICATES.map(certCard).join("")
    : placeholderCard(1, "certificate");

  const skillName = item => typeof item === "string" ? item : t().skills.items[item.t];
  document.getElementById("skillGrid").innerHTML = SKILLS.map(g => `
    <article class="skill-card reveal">
      <h3>${esc(t().skills.groups[g.group])}</h3>
      ${pills(g.items.map(skillName))}
    </article>`).join("");

  document.getElementById("statProjects").textContent = PROJECTS.length ? PROJECTS.length : t().ui.soon;
  // Skills count: every item except the spoken languages.
  document.getElementById("statSkills").textContent = SKILLS.filter(g => g.group !== "languages").reduce((n, g) => n + g.items.length, 0);
  renderWork();
}

/* ---------- Theme (dark/light) ---------- */
// The script in <head> has already set data-theme. This only handles the button.
const themeSwitch = document.getElementById("themeSwitch");
const currentTheme = () => document.documentElement.dataset.theme === "light" ? "light" : "dark";
function updateThemeSwitch() {
  const light = currentTheme() === "light";
  themeSwitch.setAttribute("aria-pressed", String(light));
  themeSwitch.setAttribute("aria-label", light ? t().page.themeToDark : t().page.themeToLight);
  // The browser bar follows the page background.
  const bg = getComputedStyle(document.documentElement).getPropertyValue("--bg").trim();
  if (bg) document.querySelector('meta[name="theme-color"]').content = bg;
}
themeSwitch.addEventListener("click", () => {
  const next = currentTheme() === "light" ? "dark" : "light";
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) {}
  updateThemeSwitch();
});

/* ---------- Language (EN/DA) ---------- */
const langSwitch = document.getElementById("langSwitch");
function applyLanguage(next) {
  lang = next;
  const page = t().page;
  document.documentElement.lang = lang;
  document.title = t().ui.pageTitle;
  document.querySelector('meta[name="description"]').content = page.metaDescription;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = page[el.dataset.i18n]; });
  // Only our own strings from TEXT are inserted as HTML (for the orange word in headings).
  document.querySelectorAll("[data-i18n-html]").forEach(el => { el.innerHTML = page[el.dataset.i18nHtml]; });
  document.querySelectorAll("[data-i18n-attr]").forEach(el => {
    el.dataset.i18nAttr.split(",").forEach(pair => { const [attr, key] = pair.split(":"); el.setAttribute(attr, page[key]); });
  });
  // The active language is bold. The accessible name starts with the visible "EN/DA".
  langSwitch.querySelectorAll("[lang]").forEach(s => s.classList.toggle("is-active", s.lang === lang));
  langSwitch.setAttribute("aria-label", `EN/DA: ${page.switchTo}`);
  updateThemeSwitch();
  renderContent();
  typewriter();
}
langSwitch.addEventListener("click", () => {
  const next = lang === "en" ? "da" : "en";
  try { localStorage.setItem("lang", next); } catch (e) {}
  applyLanguage(next);
  document.getElementById("formStatus").textContent = "";
});
applyLanguage(lang);

/* ---------- Tabs ---------- */
const tabs = [...document.querySelectorAll(".tab")];
const indicator = document.getElementById("tabIndicator");
function openTab(name, focus) {
  tabs.forEach((tab, i) => {
    const on = tab.dataset.tab === name;
    tab.setAttribute("aria-selected", on);
    tab.tabIndex = on ? 0 : -1;
    document.getElementById(tab.getAttribute("aria-controls")).hidden = !on;
    if (on) { indicator.style.transform = `translateX(${i * 100}%)`; if (focus) tab.focus(); }
  });
}
tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => openTab(tab.dataset.tab));
  tab.addEventListener("keydown", e => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next = tabs[(i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
    openTab(next.dataset.tab, true);
  });
});
document.querySelectorAll("[data-open-tab]").forEach(a => a.addEventListener("click", () => openTab(a.dataset.openTab)));

/* ---------- Demo: Barrierefri report and case queue ----------
   Rules copied from the Barrierefri repo:
   categories and deadlines from SlaPolicy.cs, statuses and allowed changes from
   Report.cs, "closing needs a public note" from CasesController.cs, marker shapes
   from statusShapes.ts. */
const BF_CATEGORIES = { BrokenElevator: 2, BlockedSidewalk: 3, SteepCurb: 90, MissingRamp: 90, MissingAudioSignal: 7, InaccessibleEntrance: 60, Other: 30 };
const BF_TRANSITIONS = { Open: ["InProgress", "Resolved", "Rejected"], InProgress: ["Open", "Resolved", "Rejected"], Resolved: ["Open"], Rejected: ["Open"] };
const BF_SHAPES = {
  Open: '<circle cx="8" cy="8" r="6.5"/>',
  InProgress: '<path d="M8 1.5 14.5 8 8 14.5 1.5 8Z"/>',
  Resolved: '<path d="M3 8.5 6.5 12 13 4.5" fill="none" stroke-width="2.5"/>',
  Rejected: '<rect x="2.5" y="2.5" width="11" height="11"/>'
};
const BF_SPOTS = { station: [150, 62], library: [140, 226], square: [255, 150], bridge: [392, 150] };

// The status shape on a white disc with a ring in the status colour, like the markers in the app.
// Before the report is sent the pin is a plain ring with a dot.
function bfMarker(status, x, y) {
  const shape = status ? `<g class="pin-shape" transform="translate(8 8)" fill="currentColor" stroke="currentColor">${BF_SHAPES[status]}</g>` : `<circle cx="16" cy="16" r="4" class="pin-dot"/>`;
  return `<g class="pin ${status ? "pin-" + status : "pin-draft"}" transform="translate(${x - 16} ${y - 16})">
    <circle cx="16" cy="16" r="14" class="pin-disc"/>${shape}</g>`;
}
const bfBadge = (status, d) => `<span class="bf-badge bf-${status}"><svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" stroke="currentColor">${BF_SHAPES[status]}</svg>${esc(d.statuses[status])}</span>`;

function bfMap(d) {
  const names = Object.entries(d.mapNames).map(([k, n]) => { const [x, y] = BF_SPOTS[k]; return `<text x="${x}" y="${y + (k === "station" ? -28 : 30)}" text-anchor="middle">${esc(n)}</text>`; }).join("");
  return `
    <svg class="bf-map" id="bfMap" viewBox="0 0 480 300" role="img" aria-label="${esc(d.mapLabel)}">
      <rect width="480" height="300" class="m-bg"/>
      <rect x="20" y="95" width="55" height="45" rx="6" class="m-park"/>
      <polygon points="350,0 410,0 430,300 370,300" class="m-water"/>
      <g class="m-street"><path d="M0 80H350M0 230H365M90 0V300M210 0V300M300 0V300"/></g>
      <path d="M0 150H480" class="m-street m-main"/>
      <path d="M0 40H350" class="m-rail"/>
      <rect x="125" y="30" width="50" height="20" rx="3" class="m-building"/>
      <rect x="105" y="172" width="70" height="40" rx="3" class="m-building"/>
      <rect x="225" y="165" width="60" height="45" rx="4" class="m-square"/>
      <path d="M244 144v12M250 144v12M256 144v12M262 144v12M268 144v12" class="m-zebra"/>
      <g class="m-label">${names}</g>
      <g id="bfPin"></g>
    </svg>`;
}

function demoBarrierefri(root) {
  const d = t().demos.barrierefri;
  const state = { category: null, spot: null, xy: null, status: null, history: [], days: 0 };
  const msg = root.querySelector(".demo-msg");
  const say = text => { msg.textContent = ""; requestAnimationFrame(() => { msg.textContent = text; }); };
  const placeName = () => state.spot ? d.spots[state.spot] : d.pickedOnMap;
  const drawPin = () => { root.querySelector("#bfPin").innerHTML = state.xy ? bfMarker(state.status, ...state.xy) : ""; };

  function renderForm() {
    root.querySelector(".bf-side").innerHTML = `
      <fieldset class="bf-cats">
        <legend>${esc(d.step1)}</legend>
        ${Object.keys(BF_CATEGORIES).map(k => `
          <label class="bf-cat"><input type="radio" name="bfCat" value="${k}"${state.category === k ? " checked" : ""}>
            <span><strong>${esc(d.categories[k][0])}</strong><small>${esc(d.categories[k][1])}</small></span></label>`).join("")}
      </fieldset>
      <fieldset class="bf-where">
        <legend>${esc(d.step2)}</legend>
        <p>${esc(d.mapHint)}</p>
        <div class="bf-spots">${Object.keys(BF_SPOTS).map(k => `<button type="button" class="btn bf-spot" data-spot="${k}" aria-pressed="${state.spot === k}">${esc(d.spots[k])}</button>`).join("")}</div>
      </fieldset>
      <button type="button" class="btn btn-light bf-send">${esc(d.send)}</button>`;
  }

  function renderQueue(focusSelector) {
    const s = state.status;
    root.querySelector(".bf-side").innerHTML = `
      <div class="bf-queue">
        <h5 tabindex="-1">${esc(d.queue)}</h5>
        <dl class="bf-case">
          <div><dt>${esc(d.categories[state.category][0])}</dt></div>
          <div><dt>${esc(d.place)}</dt><dd>${esc(placeName())}</dd></div>
          <div><dt>${esc(d.deadline)}</dt><dd>${esc(d.days(state.days))}</dd></div>
          <div><dt>${esc(d.status)}</dt><dd>${bfBadge(s, d)}</dd></div>
        </dl>
        <div class="bf-actions">${BF_TRANSITIONS[s].map(next => `<button type="button" class="btn" data-next="${next}">${esc(d.actions[next])}</button>`).join("")}</div>
        <div class="bf-note" hidden>
          <label for="bfNote">${esc(d.noteLabel)}</label>
          <input id="bfNote" aria-describedby="bfNoteError">
          <p class="bf-error" id="bfNoteError"></p>
          <div class="bf-actions"><button type="button" class="btn btn-light" data-confirm>${esc(d.noteConfirm)}</button><button type="button" class="btn" data-cancel>${esc(d.noteCancel)}</button></div>
        </div>
        <h6>${esc(d.history)}</h6>
        <ol class="bf-history">${state.history.map(h => `<li>${h}</li>`).join("")}</ol>
        <button type="button" class="btn bf-reset">${esc(d.startOver)}</button>
      </div>`;
    const target = root.querySelector(focusSelector || ".bf-actions button");
    if (target) target.focus();
  }

  function setStatus(next) {
    const prev = state.status;
    state.status = next;
    state.history.push(`${bfBadge(prev, d)} → ${bfBadge(next, d)}`);
    if (next === "Open") state.days = BF_CATEGORIES[state.category];  // reopening restarts the deadline
    drawPin();
    renderQueue(".bf-queue h5");  // not straight onto a button, so a double Enter can't change the status twice
    say(next === "Open" ? d.reopened(state.days) : d.changed(d.statuses[next]));
  }

  root.addEventListener("change", e => { if (e.target.name === "bfCat") state.category = e.target.value; });
  root.addEventListener("click", e => {
    const el = e.target.closest("button");
    if (!el || !root.contains(el)) return;
    if (el.dataset.spot) {
      state.spot = el.dataset.spot; state.xy = BF_SPOTS[state.spot];
      root.querySelectorAll(".bf-spot").forEach(b => b.setAttribute("aria-pressed", b === el));
      drawPin(); say(d.pinPlaced(d.spots[state.spot]));
    } else if (el.classList.contains("bf-send")) {
      const missing = [!state.category && d.needCategory, !state.xy && d.needPlace].filter(Boolean);
      if (missing.length) { say(missing.join(" ")); return; }
      state.status = "Open"; state.days = BF_CATEGORIES[state.category];
      state.history = [`${esc(d.reported)}: ${bfBadge("Open", d)}`];
      drawPin(); renderQueue(".bf-queue h5");
      say(d.sent(d.categories[state.category][0], placeName()));
    } else if (el.dataset.next) {
      if (el.dataset.next === "Rejected") {
        const note = root.querySelector(".bf-note");
        note.hidden = false; note.querySelector("input").focus();
      } else setStatus(el.dataset.next);
    } else if (el.hasAttribute("data-confirm")) {
      const input = root.querySelector("#bfNote");
      if (!input.value.trim()) {
        input.setAttribute("aria-invalid", "true");
        root.querySelector("#bfNoteError").textContent = d.noteMissing;
        say(d.noteMissing); input.focus(); return;
      }
      setStatus("Rejected");
    } else if (el.hasAttribute("data-cancel")) {
      root.querySelector(".bf-note").hidden = true;
      root.querySelector('[data-next="Rejected"]').focus();
    } else if (el.classList.contains("bf-reset")) {
      Object.assign(state, { category: null, spot: null, xy: null, status: null, history: [], days: 0 });
      drawPin(); renderForm();
      root.querySelector('input[name="bfCat"]').focus();
      say(d.reset);
    }
  });
  // A click on the map moves the pin there (before the report is sent).
  root.querySelector("#bfMap").addEventListener("click", e => {
    if (state.status) return;
    const svg = e.currentTarget, pt = svg.createSVGPoint();
    pt.x = e.clientX; pt.y = e.clientY;
    const p = pt.matrixTransform(svg.getScreenCTM().inverse());
    state.xy = [Math.max(18, Math.min(462, Math.round(p.x))), Math.max(18, Math.min(282, Math.round(p.y)))];
    state.spot = null;
    root.querySelectorAll(".bf-spot").forEach(b => b.setAttribute("aria-pressed", "false"));
    drawPin(); say(d.pinPlaced(d.pickedOnMap));
  });
  renderForm();
}

/* ---------- Demo: leakwatch in the browser ----------
   Five rules ported from leakwatch's rules.py, in the same order and with the
   same false-positive filters (entropy, placeholders, identifiers, local URLs). */
const LW_PLACEHOLDER_HINTS = ["example", "placeholder", "changeme", "change_me", "your", "xxxx", "dummy", "sample", "redacted", "<", ">", "${", "{{", "%s", "****", "todo", "fake", "insert", "replace", "secret_here", "password_here"];
const LW_DUMMY_VALUES = ["password", "passwd", "secret", "pass", "admin", "root", "test", "user", "username", "token", "apikey", "api_key", "default", "letmein", "none", "null"];
const LW_KEYWORDS_IN_VALUE = ["password", "passwd", "pwd", "secret", "token", "apikey", "api_key", "api-key"];
const LW_IDENTIFIER = /^(?:[a-z]+(?:[A-Z][a-z]+)+|[a-z]+(?:[_.-][a-z]+)+|[A-Z]+(?:_[A-Z]+)+)$/;
const LW_LOCAL_HOSTS = ["localhost", "127.0.0.1", "0.0.0.0", "host.docker.internal", "::1"];

function lwEntropy(s) {
  const counts = {};
  for (const c of s) counts[c] = (counts[c] || 0) + 1;
  return -Object.values(counts).reduce((sum, n) => sum + (n / s.length) * Math.log2(n / s.length), 0);
}
function lwPlaceholder(v) {
  const low = v.toLowerCase();
  return LW_DUMMY_VALUES.includes(low) || LW_PLACEHOLDER_HINTS.some(h => low.includes(h)) || new Set(low).size <= 2;
}
const lwIdentifier = v => LW_KEYWORDS_IN_VALUE.some(k => v.toLowerCase().includes(k)) || LW_IDENTIFIER.test(v);
const lwRedact = v => v.length <= 4 ? "*".repeat(v.length) : v.slice(0, 4) + "*".repeat(Math.min(v.length - 4, 12));

const LW_RULES = [
  { id: "aws-access-key-id", severity: "high", re: /\b((?:AKIA|ASIA)[0-9A-Z]{16})\b/dg, group: 1, placeholders: true },
  { id: "github-token", severity: "critical", re: /\b((?:ghp|gho|ghu|ghs|ghr)_[A-Za-z0-9]{36})\b/dg, group: 1 },
  { id: "stripe-secret-key", severity: "critical", re: /\b((?:sk|rk)_live_[A-Za-z0-9]{24,})\b/dg, group: 1 },
  { id: "database-url-password", severity: "high", group: "password", placeholders: true,
    re: /\b(?:postgres(?:ql)?|mysql|mariadb|mongodb(?:\+srv)?|redis|rediss|amqp|mssql):\/\/(?<user>[^\s:\/@'"]+):(?<password>[^\s@'"]+)@(?<host>[^\s'"\/:]+)/dg,
    // Skip local development URLs and ones where the password equals the user.
    filter: m => m.groups.password !== m.groups.user && !LW_LOCAL_HOSTS.some(h => m.groups.host.toLowerCase().startsWith(h)) },
  { id: "generic-secret-assignment", severity: "medium", group: 1, minEntropy: 3.0, placeholders: true, identifiers: true,
    re: /\b[\w.-]*(?:password|passwd|pwd|secret|api[_-]?key|access[_-]?token|auth[_-]?token)[\w.-]*["']?[ \t]*(?::=|=>|[:=])[ \t]*["']([^"'\s]{8,})["']/dgi }
];
const LW_ORDER = { critical: 3, high: 2, medium: 1 };

function lwScan(text) {
  const findings = [], taken = [];
  for (const rule of LW_RULES) {
    for (const m of text.matchAll(rule.re)) {
      const secret = typeof rule.group === "string" ? m.groups[rule.group] : m[rule.group];
      const [start, end] = typeof rule.group === "string" ? m.indices.groups[rule.group] : m.indices[rule.group];
      if (taken.some(([s, e]) => start < e && s < end)) continue;  // the first rule to claim the characters wins
      if (rule.minEntropy && lwEntropy(secret) < rule.minEntropy) continue;
      if (rule.placeholders && lwPlaceholder(secret)) continue;
      if (rule.identifiers && lwIdentifier(secret)) continue;
      if (rule.filter && !rule.filter(m)) continue;
      taken.push([start, end]);
      const before = text.slice(0, start);
      findings.push({ rule, start, end, secret, line: before.split("\n").length, col: start - before.lastIndexOf("\n") });
    }
  }
  return findings.sort((a, b) => a.start - b.start);
}

// The sample is put together at runtime, so these made-up keys never appear whole in
// the site's source (GitHub's push protection would flag them, as leakwatch's own tests note).
function lwSample(d) {
  return [
    d.sampleTop,
    `const db = "postgres://shop:Demo-Only-7f3k9q@db.demo.invalid/shop";`,
    `const awsKeyId = "${"AKIA" + "DEMO0000DEMO0000"}";`,
    `const githubToken = "${"gh" + "p_" + "DEMOdemoDEMOdemoDEMOdemoDEMOdemo1234"}";`,
    `const stripeKey = "${"sk" + "_live_" + "DEMO0000DEMO0000DEMO0000"}";`,
    `const smtpPassword = "Demo-Only-x8Rv2Lm";`,
    ``,
    d.sampleSkip,
    `const docsKey = "${"AKIA" + "IOSFODNN7EXAMPLE"}";`,
    `const password = "<YOUR_PASSWORD>";`,
    `const passwordFile = "secrets/db.txt";`
  ].join("\n");
}

function demoLeakwatch(root) {
  const d = t().demos.leakwatch;
  const area = root.querySelector("#lwCode"), msg = root.querySelector(".demo-msg"), out = root.querySelector(".lw-results");
  area.value = lwSample(d);
  let scanned = false;
  root.querySelector(".lw-scan").addEventListener("click", () => {
    const text = area.value, found = lwScan(text);
    scanned = true;
    // Marked copy of the code: each finding gets a number that matches the list.
    let html = "", pos = 0;
    found.forEach((f, i) => { html += esc(text.slice(pos, f.start)) + `<mark>${esc(f.secret)}</mark><sup>${i + 1}</sup>`; pos = f.end; });
    html += esc(text.slice(pos));
    const counts = ["critical", "high", "medium"].filter(s => found.some(f => f.rule.severity === s)).map(s => d.count(s, found.filter(f => f.rule.severity === s).length)).join(", ");
    out.hidden = false;
    out.innerHTML = found.length ? `
      <h5>${esc(d.highlighted)}</h5>
      <pre class="lw-pre">${html}</pre>
      <h5>${esc(d.findings)}</h5>
      <ol class="lw-list">${found.map(f => `
        <li><span class="lw-sev lw-${f.rule.severity}">${esc(d.severity[f.rule.severity])}</span>
          <strong>${esc(d.rules[f.rule.id])}</strong> <code>${f.rule.id}</code>
          <span>${esc(d.lineCol(f.line, f.col))} · ${esc(d.value)}: <code>${esc(lwRedact(f.secret))}</code></span></li>`).join("")}
      </ol>` : "";
    msg.textContent = "";
    requestAnimationFrame(() => { msg.textContent = found.length ? d.found(found.length, counts) : d.none; });
  });
  area.addEventListener("input", () => { if (scanned) msg.textContent = d.stale; });
}

function demoSection(kind) {
  const ui = t().ui, d = t().demos[kind];
  const body = kind === "barrierefri"
    ? `<div class="bf-demo"><div class="bf-side"></div><div class="bf-mapwrap">${bfMap(d)}</div></div>`
    : `<div class="lw-demo">
        <label for="lwCode">${esc(d.label)}</label>
        <textarea id="lwCode" class="lw-code" rows="12" spellcheck="false" autocapitalize="off" autocomplete="off"></textarea>
        <button type="button" class="btn btn-light lw-scan">${esc(d.scan)}</button>
        <div class="lw-results" hidden></div>
      </div>`;
  return `<section class="ov-section demo" data-demo="${kind}">
    <h3>${esc(ui.tryIt)}</h3>
    <h4 class="demo-title">${esc(d.title)}</h4>
    ${body}
    <p class="demo-msg" role="status" aria-live="polite"></p>
    <p class="demo-note">${esc(ui.demoNote)}</p>
  </section>`;
}
const DEMOS = { barrierefri: demoBarrierefri, leakwatch: demoLeakwatch };

/* ---------- Project view (full-screen dialog) ---------- */
(function projectOverlay() {
  const overlay = document.getElementById("projectOverlay");
  const panel = overlay.querySelector(".ov-panel");
  const body = document.getElementById("overlayBody");
  const closeBtn = overlay.querySelector(".ov-close");
  const page = [...document.querySelectorAll("body > header, body > main, body > footer")];
  const FOCUSABLE = "a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex='-1'])";
  let opener = null;

  const slugFromHash = () => (location.hash.match(/^#project=([\w-]+)$/) || [])[1];
  const find = slug => PROJECTS.find(p => p.slug === slug);

  function open(slug, trigger) {
    const p = find(slug);
    if (!p) return false;
    opener = trigger || document.querySelector(`[data-project="${slug}"]`);
    body.innerHTML = projectView(p);
    if (p.demo) DEMOS[p.demo](body.querySelector("[data-demo]"));
    document.title = `${p.title} | ${t().ui.pageTitle}`;
    // Lock the page behind and hide it from keyboard and screen readers.
    document.documentElement.style.setProperty("--scrollbar", `${window.innerWidth - document.documentElement.clientWidth}px`);
    document.documentElement.classList.add("ov-open");
    page.forEach(el => el.inert = true);
    overlay.hidden = false;
    overlay.scrollTop = 0;
    closeBtn.focus();
    return true;
  }

  function close() {
    if (overlay.hidden) return;
    overlay.hidden = true;
    body.innerHTML = "";
    document.title = t().ui.pageTitle;
    document.documentElement.classList.remove("ov-open");
    page.forEach(el => el.inert = false);
    // Remove #project=... from the address: step back if opening added a history entry, otherwise rewrite it.
    if (slugFromHash()) {
      if (history.state && history.state.project) history.back();
      else history.replaceState(null, "", location.pathname + location.search);
    }
    if (opener) opener.focus();
  }

  document.getElementById("projectGrid").addEventListener("click", e => {
    const btn = e.target.closest("[data-project]");
    if (!btn) return;
    if (open(btn.dataset.project, btn)) history.pushState({ project: btn.dataset.project }, "", `#project=${btn.dataset.project}`);
  });
  closeBtn.addEventListener("click", close);
  // A click on the dark area around the panel closes it, a click inside does not.
  // (Checks the backdrop itself: a demo may have removed the clicked button from the page by now.)
  overlay.addEventListener("click", e => { if (e.target === overlay) close(); });
  // Listen on the whole document, so Escape and the focus trap still work if focus ended up outside the panel.
  document.addEventListener("keydown", e => {
    if (overlay.hidden) return;
    if (e.key === "Escape") { e.preventDefault(); close(); return; }
    if (e.key !== "Tab") return;
    const items = [...panel.querySelectorAll(FOCUSABLE)];
    const first = items[0], last = items[items.length - 1];
    const inside = panel.contains(document.activeElement) && document.activeElement !== panel;
    if (!inside) { e.preventDefault(); (e.shiftKey ? last : first).focus(); }
    else if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
  // Back/forward buttons and edited links open or close the view to match the address.
  window.addEventListener("popstate", () => {
    const slug = slugFromHash();
    if (slug) open(slug); else close();
  });

  // Opened from a shared link: show the Projects tab behind it, then the project.
  const initial = slugFromHash();
  if (initial && find(initial)) { openTab("projects"); open(initial); }
})();

/* ---------- Menu button on narrow screens ---------- */
// Below 900 px the links don't fit in one row, so they open as a list under the nav.
const nav = document.querySelector(".nav");
const navToggle = document.getElementById("navToggle");
function setMenu(open) {
  nav.classList.toggle("open", open);
  navToggle.setAttribute("aria-expanded", String(open));
}
navToggle.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
document.getElementById("navLinks").addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
document.addEventListener("click", e => { if (!nav.contains(e.target)) setMenu(false); });
nav.addEventListener("keydown", e => {
  if (e.key === "Escape" && nav.classList.contains("open")) { setMenu(false); navToggle.focus(); }
});
matchMedia("(min-width: 900px)").addEventListener("change", () => setMenu(false));

/* ---------- Active link in the nav ---------- */
const navLinks = [...document.querySelectorAll("[data-nav]")];
function setActive(id) { navLinks.forEach(a => a.classList.toggle("active", a.dataset.nav === id)); }
setActive("home");
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
  }, { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("main section").forEach(s => sectionObserver.observe(s));

  /* ---------- Scroll reveal (only for things below the first screen) ---------- */
  if (!reduceMotion) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.remove("pending"); revealObserver.unobserve(e.target); } });
    }, { threshold: 0.15 });
    document.querySelectorAll(".reveal").forEach(el => {
      if (el.getBoundingClientRect().top > window.innerHeight) { el.classList.add("pending"); revealObserver.observe(el); }
    });
  }
}

/* ---------- Contact form: opens the visitor's email app ---------- */
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const f = e.target, status = document.getElementById("formStatus");
  const name = f.name.value.trim(), email = f.email.value.trim(), message = f.message.value.trim();
  if (!name || !email || !message) { status.textContent = t().page.formMissing; return; }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { status.textContent = t().page.formBadEmail; return; }
  const subject = encodeURIComponent(t().page.mailSubject(name));
  const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
  status.innerHTML = `${esc(t().page.formOpening)} <a href="mailto:${EMAIL}">${EMAIL}</a>.`;
  window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
});

document.getElementById("cvBtn").addEventListener("click", () => {
  setTimeout(() => {
    const m = document.getElementById("f-message");
    if (!m.value) m.value = t().page.cvMessage;
  }, 400);
});
