import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Skull, Swords, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import auraBg from "@assets/generated_images/dragon_ball_style_energy_aura_background.png";

const BATTLES = [
  {
    id: 1,
    arc: "Saiyan Saga",
    title: "Goku vs Vegeta",
    year: "Age 762",
    result: "Draw",
    powerDiff: "Equal",
    desc: "The first fateful encounter between the low-class warrior and the Prince of Saiyans. Kaioken x4 vs Galick Gun.",
    color: "border-red-500"
  },
  {
    id: 2,
    arc: "Frieza Saga",
    title: "Goku vs Frieza",
    year: "Age 762",
    result: "Victory",
    powerDiff: "Massive",
    desc: "On a dying Namek, Goku awakens the legendary Super Saiyan form fueled by rage over Krillin's death.",
    color: "border-energy-yellow"
  },
  {
    id: 3,
    arc: "Cell Saga",
    title: "Gohan vs Cell",
    year: "Age 767",
    result: "Victory",
    powerDiff: "Overwhelming",
    desc: "The torch is passed. Gohan ascends beyond a Super Saiyan to defeat the perfect biological android.",
    color: "border-purple-500"
  },
  {
    id: 4,
    arc: "Buu Saga",
    title: "Vegito vs Buu",
    year: "Age 774",
    result: "Dominating",
    powerDiff: "Godly",
    desc: "The fusion of Goku and Vegeta creates the ultimate warrior, toying with the most dangerous threat in the universe.",
    color: "border-blue-500"
  }
];

export default function BattleHistory() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-20">
       {/* Header */}
       <div className="flex items-center gap-4 relative z-10">
        <Link href="/">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-tech uppercase text-primary">Battle History</h1>
          <p className="text-muted-foreground font-ui">Timeline of the Strongest</p>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto mt-12">
        {/* Center Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary/50 to-transparent -translate-x-1/2" />

        <div className="space-y-12">
          {BATTLES.map((battle, index) => (
            <motion.div
              key={battle.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Content Card */}
              <div className="flex-1 w-full">
                <div className={`
                  bg-card p-6 rounded-2xl border-l-4 shadow-lg relative overflow-hidden group hover:scale-105 transition-transform duration-300
                  ${battle.color}
                `}>
                  {/* Hover Aura Background */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-cover bg-center"
                    style={{ backgroundImage: `url(${auraBg})` }}
                  />

                  <div className="flex justify-between items-start mb-2 relative z-10">
                    <span className="text-xs font-mono uppercase bg-muted px-2 py-1 rounded">{battle.arc}</span>
                    <span className="text-xs font-mono text-muted-foreground">{battle.year}</span>
                  </div>
                  
                  <h3 className="font-tech text-2xl font-bold mb-2 relative z-10">{battle.title}</h3>
                  <p className="font-ui text-muted-foreground text-sm mb-4 relative z-10">{battle.desc}</p>
                  
                  <div className="flex gap-4 text-xs font-bold uppercase relative z-10">
                    <div className="flex items-center gap-1 text-green-500">
                      <Trophy className="w-3 h-3" /> {battle.result}
                    </div>
                    <div className="flex items-center gap-1 text-red-500">
                      <Swords className="w-3 h-3" /> {battle.powerDiff}
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Node */}
              <div className="relative z-10 flex items-center justify-center w-12 h-12 shrink-0">
                <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-[0_0_15px_rgba(248,91,26,0.5)]" />
                <div className="absolute w-full h-full rounded-full border border-primary/30 animate-ping opacity-20" />
              </div>

              {/* Empty Spacer for alternating layout */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
