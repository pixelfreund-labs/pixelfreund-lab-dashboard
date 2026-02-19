import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "About – lab.pixelfreund",
  description: "Über Ralph Hutter und das lab.pixelfreund Ökosystem.",
};

export default function AboutPage() {
  return (
    <div className="space-y-10 pb-12">
      {/* Intro */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">About</h2>
        <p className="text-muted-foreground mt-1">lab.pixelfreund – Learning by Doing.</p>
      </div>

      <Separator />

      {/* About Ralph */}
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Ralph Hutter</h3>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-prose">
          Digitaler Tüftler aus der Schweiz. Ich baue Dinge, die ich selbst brauche – meistens an
          der Schnittstelle von KI, Automatisierung und Web. Alles hier ist Experiment.
        </p>
      </section>

      <Separator />

      {/* About the Lab */}
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Das Lab</h3>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-prose">
          lab.pixelfreund ist mein persönliches Technologie-Labor. Kein Startup, kein Produkt –
          ein Ort zum Lernen, Ausprobieren und Scheitern. Projekte entstehen aus echtem Bedarf oder
          reiner Neugierde.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          {[
            { label: "Fokus", value: "KI & Automatisierung, Web, DevOps" },
            { label: "Stack", value: "Next.js, Supabase, Dify, n8n, Claude" },
            { label: "Hosting", value: "Vercel (Frontend), DigitalOcean (Backend)" },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-lg border bg-card p-4">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                {label}
              </p>
              <p className="text-sm mt-1">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* Links */}
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Links</h3>
        <div className="flex flex-col gap-2">
          {[
            { label: "GitHub", href: "https://github.com/pixelfreund-labs" },
            { label: "Bluesky", href: "https://bsky.app/profile/pixelfreund.ch" },
            { label: "LinkedIn", href: "https://linkedin.com/in/ralphhutter" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
            >
              {label} ↗
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
