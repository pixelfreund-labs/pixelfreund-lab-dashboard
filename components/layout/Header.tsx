import { Separator } from "@/components/ui/separator";

export function Header() {
  return (
    <header className="py-6">
      <div className="flex items-baseline gap-3">
        <h1 className="text-xl font-semibold tracking-tight">lab.pixelfreund</h1>
        <span className="text-muted-foreground text-sm">by Ralph Hutter</span>
      </div>
      <p className="text-sm text-muted-foreground mt-1">Learning by Doing.</p>
      <Separator className="mt-4" />
    </header>
  );
}
