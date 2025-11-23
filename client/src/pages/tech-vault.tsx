import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Info, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import dragonRadar from "@assets/0c4a2848-c3c1-4d8b-9359-97cc640f4727_1763924651796.png";
import capsule from "@assets/image_1763924610674.png";
import scouter from "@assets/image_1763924711432.png";

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

      {/* Tech Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ITEMS.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="rounded-3xl border border-border bg-black/80 backdrop-blur-xl p-8 flex flex-col items-center relative overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-shadow"
          >
            {/* Grid Background */}
            <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
            
            {/* Rotating Image Effect */}
            <motion.div 
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 mb-8 w-72 h-72 flex items-center justify-center"
            >
              <div className={`absolute inset-0 blur-3xl opacity-30 ${item.color.replace('text', 'bg')}`} />
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-72 h-72 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              />
            </motion.div>

            {/* Tech Details */}
            <div className="relative z-10 w-full space-y-4">
              <div>
                <h2 className="font-tech text-2xl uppercase tracking-wider mb-2">{item.name}</h2>
                <p className="text-xs font-mono text-muted-foreground mb-4">{item.model}</p>
                <div className="h-1 w-16 bg-primary" />
              </div>
              
              <p className="font-ui text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border/50">
                {Object.entries(item.stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <p className="text-[9px] font-mono uppercase text-muted-foreground mb-1">{key}</p>
                    <p className={`font-bold font-tech text-sm ${item.color}`}>{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative Corners */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-primary/50" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-primary/50" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-primary/50" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-primary/50" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
