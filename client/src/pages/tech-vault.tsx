import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Info, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import dragonRadar from "@assets/generated_images/dragon_radar_anime_style.png";
import capsule from "@assets/generated_images/hoi_poi_capsule_schematic.png"; // Keeping schematic for this one as it looks techy
import scouter from "@assets/generated_images/saiyan_scouter_anime_style.png";

const ITEMS = [
  {
    id: "radar",
    name: "Dragon Radar",
    model: "TYPE-2",
    desc: "A handheld tracking device designed by Bulma Briefs to locate the electromagnetic pulse emitted by Dragon Balls.",
    stats: { range: "Global", accuracy: "99.9%", battery: "Rechargeable" },
    image: dragonRadar,
    color: "text-green-500",
    border: "border-green-500"
  },
  {
    id: "capsule",
    name: "Hoi-Poi Capsule",
    model: "C-001",
    desc: "Revolutionary compression technology capable of shrinking inanimate objects into pocket-sized capsules.",
    stats: { capacity: "Variable", weight: "15g", type: "Utility" },
    image: capsule,
    color: "text-blue-500",
    border: "border-blue-500"
  },
  {
    id: "scouter",
    name: "Saiyan Scouter",
    model: "MARK-V",
    desc: "Alien technology used to measure power levels and communicate across galactic distances. Prone to exploding at high levels.",
    stats: { range: "Interstellar", limit: "21,000 BP", feature: "Comm-Link" },
    image: scouter,
    color: "text-red-500",
    border: "border-red-500"
  }
];

export default function TechVault() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = ITEMS[activeIndex];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-tech uppercase text-primary">Tech Vault</h1>
          <p className="text-muted-foreground font-ui">Capsule Corporation R&D</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[600px]">
        
        {/* Item Selector */}
        <div className="lg:col-span-4 space-y-4 flex flex-col overflow-y-auto pr-2">
          {ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              whileHover={{ scale: 1.02 }}
              className={`
                cursor-pointer p-4 rounded-xl border-2 transition-all relative overflow-hidden
                ${activeIndex === idx 
                  ? `${item.border} bg-muted/50` 
                  : 'border-muted/20 hover:border-muted-foreground/50'}
              `}
            >
              <div className="flex items-center gap-4 relative z-10">
                <div className={`w-12 h-12 rounded-lg border ${item.border} bg-black/50 flex items-center justify-center overflow-hidden`}>
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-tech font-bold text-lg">{item.name}</h3>
                  <p className="text-xs font-mono text-muted-foreground">{item.model}</p>
                </div>
              </div>
              {/* Active Glow */}
              {activeIndex === idx && (
                <motion.div 
                  layoutId="activeGlow"
                  className={`absolute inset-0 ${item.color.replace('text', 'bg')}/5 z-0`}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* 3D/Schematic Viewer */}
        <div className="lg:col-span-8 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full rounded-3xl border border-border bg-black/80 backdrop-blur-xl p-8 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl"
            >
              {/* Grid Background */}
              <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
              
              {/* Rotating Image Effect */}
              <motion.div 
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 mb-8"
              >
                <div className={`absolute inset-0 blur-3xl opacity-30 ${activeItem.color.replace('text', 'bg')}`} />
                <img 
                  src={activeItem.image} 
                  alt={activeItem.name} 
                  className="w-64 h-64 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                />
              </motion.div>

              {/* Tech Details */}
              <div className="relative z-10 w-full max-w-lg space-y-6 bg-card/90 backdrop-blur p-6 rounded-xl border border-border">
                <div>
                  <h2 className="font-tech text-3xl uppercase tracking-wider mb-1">{activeItem.name}</h2>
                  <div className="h-1 w-20 bg-primary" />
                </div>
                
                <p className="font-ui text-lg text-muted-foreground">
                  {activeItem.desc}
                </p>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
                  {Object.entries(activeItem.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <p className="text-[10px] font-mono uppercase text-muted-foreground mb-1">{key}</p>
                      <p className={`font-bold font-tech ${activeItem.color}`}>{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Corners */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/50" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/50" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/50" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/50" />

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
