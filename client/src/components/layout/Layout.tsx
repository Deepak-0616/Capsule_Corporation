import { Link, useLocation } from "wouter";
import { useUserStore } from "@/lib/store";
import { useState, useEffect } from "react";
import { Menu, Sun, Moon } from "lucide-react";
import { Starfield } from "@/components/layout/Background";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Layout({ children }: { children: React.ReactNode }) {
  const { user, setUser } = useUserStore();
  const [location] = useLocation();
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className={`min-h-screen flex flex-col relative overflow-hidden ${theme}`}>
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

          {/* Right Navigation */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full hover:bg-muted"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>

            {/* Hamburger Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted">
                  <Menu className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <Link href="/tech">
                  <DropdownMenuItem className="cursor-pointer">Tech Vault</DropdownMenuItem>
                </Link>
                <Link href="/battle">
                  <DropdownMenuItem className="cursor-pointer">Battle History</DropdownMenuItem>
                </Link>
                <Link href="/ki">
                  <DropdownMenuItem className="cursor-pointer">Ki Science</DropdownMenuItem>
                </Link>
                <Link href="/lore">
                  <DropdownMenuItem className="cursor-pointer">Universe Lore</DropdownMenuItem>
                </Link>
                <Link href="/chars">
                  <DropdownMenuItem className="cursor-pointer">Character Studio</DropdownMenuItem>
                </Link>
                <Link href="/fun">
                  <DropdownMenuItem className="cursor-pointer">Entertainment</DropdownMenuItem>
                </Link>
                <Link href="/tribute">
                  <DropdownMenuItem className="cursor-pointer">Toriyama Tribute</DropdownMenuItem>
                </Link>
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
