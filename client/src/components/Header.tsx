import { Building2 } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Building2 className="h-8 w-8 text-primary" data-testid="logo-icon" />
          <span className="text-xl font-semibold tracking-tight" data-testid="logo-text">
            Estate Luxury
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a 
            href="#" 
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            data-testid="link-buy"
          >
            Compra
          </a>
          <a 
            href="#" 
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            data-testid="link-rent"
          >
            Affitta
          </a>
          <a 
            href="#" 
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            data-testid="link-contact"
          >
            Contatti
          </a>
        </nav>
      </div>
    </header>
  );
}
