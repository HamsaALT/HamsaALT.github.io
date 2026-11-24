# Hamsa Hassan · Portfolio

Personal portfolio of Hamsa Hassan, Software Engineering student at Aalborg University Copenhagen.
Plain HTML, CSS and JavaScript, no build step and no framework.

## Run it locally

Pick one:

```bash
# Python (already on most computers)
python -m http.server 8000
# then open http://localhost:8000

# Node.js
npx serve .
```

Or open the folder in VS Code and use the **Live Server** extension ("Go Live").

## Where to edit

| What | File |
|---|---|
| Text on the page | `index.html` |
| Colours, fonts, layout | `css/style.css` (colours are at the top in `:root`) |
| Projects, certificates, tech stack, typing phrases | top of `js/main.js` |
| Photo | `images/photo.jpg` |

### Add a project

In `js/main.js`, add an entry to `PROJECTS`:

```js
const PROJECTS = [
  {
    title: "Volunteer Dispatch",
    summary: "Real-time matching of volunteers and tasks during a crisis.",
    tech: ["C#", "ASP.NET Core", "SignalR"],
    image: "images/projects/volunteer-dispatch.png", // optional
    live: "https://...",                              // optional
    code: "https://github.com/..."                    // optional
  }
];
```

When the list has at least one project, the "coming soon" cards disappear.

## Fonts

Unbounded, DM Sans and JetBrains Mono, self-hosted under the SIL Open Font License (see `fonts/`).
Tech icons from [Devicon](https://devicon.dev) (MIT).
