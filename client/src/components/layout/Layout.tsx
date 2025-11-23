import { Link, useLocation } from "wouter";
import { useUserStore } from "@/lib/store";
import { useEffect } from "react";
import { Starfield } from "@/components/layout/Background";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

export function Layout({ children }: { children: React.ReactNode }) {
  const { user, setUser } = useUserStore();
  const [location] = useLocation();

  // Force Dark Mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden dark">
      {/* Animated Backgrounds */}
      <Starfield />
      <div className="fixed inset-0 pointer-events-none z-0 grid-lines opacity-40" />
      
      {/* Header */}
      <header className="relative z-50 border-b border-border/40 bg-background/80 backdrop-blur-md sticky top-0">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
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

          {/* Menu Bar Navigation */}
          <Menubar className="border-0 bg-transparent">
            <MenubarMenu>
              <MenubarTrigger className="font-tech uppercase text-sm cursor-pointer hover:text-primary transition-colors">Modules</MenubarTrigger>
              <MenubarContent>
                <Link href="/tech">
                  <MenubarItem className="cursor-pointer">Tech Vault</MenubarItem>
                </Link>
                <Link href="/battle">
                  <MenubarItem className="cursor-pointer">Battle History</MenubarItem>
                </Link>
                <Link href="/ki">
                  <MenubarItem className="cursor-pointer">Ki Science</MenubarItem>
                </Link>
                <Link href="/lore">
                  <MenubarItem className="cursor-pointer">Universe Lore</MenubarItem>
                </Link>
                <MenubarSeparator />
                <Link href="/chars">
                  <MenubarItem className="cursor-pointer">Character Studio</MenubarItem>
                </Link>
                <Link href="/fun">
                  <MenubarItem className="cursor-pointer">Entertainment</MenubarItem>
                </Link>
                <Link href="/tribute">
                  <MenubarItem className="cursor-pointer">Toriyama Tribute</MenubarItem>
                </Link>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger className="font-tech uppercase text-sm cursor-pointer hover:text-primary transition-colors">Info</MenubarTrigger>
              <MenubarContent>
                <MenubarItem className="text-muted-foreground text-xs">Version 1.0</MenubarItem>
                <MenubarItem className="text-muted-foreground text-xs">784 AGE</MenubarItem>
                <MenubarSeparator />
                <MenubarItem className="text-muted-foreground text-xs">Built for Z Fighters</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
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
