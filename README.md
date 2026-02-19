# pixelfreund Lab Dashboard

> Zentrales Portfolio & Admin Dashboard für das lab.pixelfreund Ökosystem.

## Links

- **Live:** https://pixelfreund-lab-dashboard.vercel.app
- **GitHub:** https://github.com/pixelfreund-labs/pixelfreund-lab-dashboard
- **brain Doku:** https://github.com/pixelfreund-labs/brain/tree/main/LABS/010-INCOMING/pixelfreund-lab-dashboard

## Stack

| Dienst                  | Zweck                     |
| ----------------------- | ------------------------- |
| Next.js 16 (App Router) | Framework                 |
| Shadcn/ui               | UI-Komponenten            |
| Tailwind CSS            | Styling                   |
| next-themes             | Dark Mode                 |
| Vercel                  | Hosting (Free/Hobby Tier) |

## Phasen

- **Phase 1 (aktuell):** Portfolio – Projekt-Showcase (statisch)
- **Phase 2:** Admin – Google Login, Infrastructure Health
- **Phase 3:** Live Integrationen – DigitalOcean, Dify, n8n, Bots

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000).

## Umgebungsvariablen

```bash
cp .env.example .env.local
```

Alle Keys sind in `.env.example` dokumentiert (Phase 2/3).

## Deployment

Vercel ist bereits verknüpft. Jeder Push auf `main` löst ein Deployment aus.

```bash
git push origin main
```

## Next Steps

- Overview über gesamte Brain nach Phasen
