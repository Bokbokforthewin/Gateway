# DOH NIR CHD — Digital Systems Gateway

Frontend-only React + Vite gateway that links out to the organization's
digital systems. There is no backend, database, or authentication here —
each linked system handles its own sign-in.

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

The build output goes to `dist/`, which can be deployed to any static file
host (e.g. an internal IIS/Nginx server, or a subpath on the intranet).
Routing uses `HashRouter`, so no server-side rewrite rules are required.

## Add or edit a system

Open `src/data/systems.js` and add an object to the `systems` array:

```js
{
  name: "New System Name",
  acronym: "NSN",
  description: "One short sentence describing the system.",
  category: "Operations",       // reuses an existing category's color
  icon: "FileText",              // any icon name from lucide-react
  url: "https://your-system-url",
}
```

No other file needs to change — the Home preview and Directory grid both
read from this file.

## Project structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Navigation.jsx
│   ├── SystemCard.jsx
│   ├── Footer.jsx
│   └── Logo.jsx
├── data/
│   └── systems.js
├── pages/
│   ├── Home.jsx
│   ├── Directory.jsx
│   └── About.jsx
├── App.jsx
├── main.jsx
└── index.css
```
