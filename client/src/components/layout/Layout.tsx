import { Link, useLocation } from "wouter";
import { useUserStore } from "@/lib/store";
import { Zap, User, Shield, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Starfield } from "@/components/layout/Background";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Layout({ children }: { children: React.ReactNode }) {
  const { user, setUser } = useUserStore();
  const [location] = useLocation();

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Animated Backgrounds */}
      <Starfield />
      <div className="fixed inset-0 pointer-events-none z-0 grid-lines opacity-40" />
      
      {/* Header */}
      <header className="relative z-50 border-b border-border/40 bg-background/80 backdrop-blur-md sticky top-0">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="relative w-10 h-10 flex items-center justify-center bg-capsule-dark rounded-full border-2 border-goku-orange group-hover:animate-spin-slow transition-transform">
                <span className="text-capsule-white font-tech font-bold text-xl">C</span>
              </div>
              <div className="flex flex-col">
                <span className="font-tech text-lg leading-none tracking-widest uppercase">Capsule</span>
                <span className="font-ui text-xs tracking-[0.3em] text-muted-foreground uppercase">Corp.</span>
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            {/* Power Level Display */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border scouter-overlay">
              <Zap className="w-4 h-4 text-energy-yellow fill-energy-yellow" />
              <span className="font-mono font-bold text-goku-orange">
                {user.powerLevel.toLocaleString()}
              </span>
              <span className="text-xs text-muted-foreground uppercase">BP</span>
            </div>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full overflow-hidden border-2 border-transparent hover:border-goku-orange transition-colors p-0">
                  <div className="bg-muted w-full h-full flex items-center justify-center">
                    {/* Simple Avatar Placeholder */}
                    <span className="font-action text-lg uppercase">{user.avatar[0]}</span>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 font-ui">
                <DropdownMenuItem className="font-bold text-primary">
                  {user.name}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setUser(u => ({...u, theme: u.theme === 'capsule' ? 'villain' : 'capsule'}))}>
                  Toggle Scouter Mode ({user.theme === 'villain' ? 'Dark' : 'Light'})
                </DropdownMenuItem>
                <DropdownMenuItem>
                  View Badges ({user.badges.length})
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative z-10 container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/40 bg-muted/30 py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="font-ui text-sm text-muted-foreground">
            CAPSULE CORPORATION © 784 AGE. ALL RIGHTS RESERVED.
          </p>
          <p className="text-xs text-muted-foreground/50 mt-2">
            Built for the Z Fighters.
          </p>
        </div>
      </footer>
    </div>
  );
}
