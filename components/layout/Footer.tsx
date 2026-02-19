import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="py-6">
      <Separator className="mb-4" />
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} Ralph Hutter – lab.pixelfreund</span>
        <div className="flex gap-4">
          <a
            href="https://github.com/pixelfreund-labs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://bsky.app/profile/pixelfreund.ch"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Bluesky
          </a>
        </div>
      </div>
    </footer>
  );
}
