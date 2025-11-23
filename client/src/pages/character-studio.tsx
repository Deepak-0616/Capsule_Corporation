import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Zap, Shield, Activity, Swords } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const CHARACTERS = [
  // Z Fighters
  {
    id: 'goku',
    name: 'Son Goku',
    form: 'True Ultra Instinct',
    power: 99,
    speed: 100,
    technique: 100,
    desc: "A Saiyan raised on Earth. He constantly strives to be stronger than before, achieving the state of the Gods.",
    color: 'text-goku-orange',
    border: 'border-goku-orange'
  },
  {
    id: 'vegeta',
    name: 'Vegeta',
    form: 'Ultra Ego',
    power: 99,
    speed: 95,
    technique: 98,
    desc: "The Prince of all Saiyans. Harnesses the power of Destruction to grow stronger with damage taken.",
    color: 'text-vegeta-blue',
    border: 'border-vegeta-blue'
  },
  {
    id: 'gohan',
    name: 'Son Gohan',
    form: 'Beast',
    power: 100,
    speed: 92,
    technique: 90,
    desc: "Goku's son with hidden potential that surpasses everyone when unleashed. The Beast has awakened.",
    color: 'text-purple-500',
    border: 'border-purple-500'
  },
  {
    id: 'piccolo',
    name: 'Piccolo',
    form: 'Orange Piccolo',
    power: 90,
    speed: 85,
    technique: 100,
    desc: "A Namekian warrior and brilliant strategist. Unlocked his potential with Shenron's help.",
    color: 'text-piccolo-green',
    border: 'border-piccolo-green'
  },
  {
    id: 'broly',
    name: 'Broly',
    form: 'Full Power Super Saiyan',
    power: 100,
    speed: 95,
    technique: 70,
    desc: "The Legendary Super Saiyan. His power is infinite and uncontrollable rage incarnate.",
    color: 'text-green-500',
    border: 'border-green-500'
  },
  {
    id: 'trunks',
    name: 'Future Trunks',
    form: 'Super Saiyan Rage',
    power: 88,
    speed: 88,
    technique: 92,
    desc: "The half-Saiyan from a ruined future. Wields a sword and fights for hope.",
    color: 'text-blue-400',
    border: 'border-blue-400'
  },
  // Villains / Antagonists
  {
    id: 'frieza',
    name: 'Frieza',
    form: 'Black Frieza',
    power: 100,
    speed: 100,
    technique: 100,
    desc: "The galactic tyrant. Trained for 10 years in a Hyperbolic Time Chamber to surpass the Saiyans.",
    color: 'text-purple-700',
    border: 'border-purple-700'
  },
  {
    id: 'cell',
    name: 'Cell Max',
    form: 'Giant Form',
    power: 98,
    speed: 80,
    technique: 10,
    desc: "A mindless kaiju version of the perfect android. Pure destruction without intelligence.",
    color: 'text-red-600',
    border: 'border-red-600'
  },
  {
    id: 'jiren',
    name: 'Jiren',
    form: 'Full Power',
    power: 97,
    speed: 96,
    technique: 95,
    desc: "A mortal stronger than a God of Destruction. Believes strength is absolute.",
    color: 'text-red-500',
    border: 'border-red-500'
  },
  {
    id: 'moro',
    name: 'Moro',
    form: 'Angel Merged',
    power: 96,
    speed: 90,
    technique: 99,
    desc: "The Planet Eater. Uses dark magic to drain life energy from entire worlds.",
    color: 'text-blue-900',
    border: 'border-blue-900'
  },
  {
    id: 'gas',
    name: 'Gas',
    form: 'Wish Granting Power',
    power: 97,
    speed: 97,
    technique: 95,
    desc: "Wished to be the strongest in the universe, trading his lifespan for power.",
    color: 'text-yellow-700',
    border: 'border-yellow-700'
  },
  {
    id: 'buu',
    name: 'Majin Buu',
    form: 'Kid Buu',
    power: 85,
    speed: 90,
    technique: 80,
    desc: "Pure chaotic evil. Can regenerate from almost anything.",
    color: 'text-pink-500',
    border: 'border-pink-500'
  }
];

export default function CharacterStudio() {
  const [selected, setSelected] = useState(CHARACTERS[0]);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-tech uppercase">Character Studio</h1>
            <p className="text-muted-foreground font-ui">Z Fighters & Villains Database</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Character List */}
        <div className="space-y-4 h-[600px] overflow-y-auto pr-2">
          {CHARACTERS.map((char) => (
            <div
              key={char.id}
              onClick={() => setSelected(char)}
              className={`
                cursor-pointer p-4 rounded-xl border-2 transition-all hover:scale-105
                ${selected.id === char.id 
                  ? `${char.border} bg-muted` 
                  : 'border-transparent bg-card hover:border-muted-foreground/30'}
              `}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-tech font-bold text-lg">{char.name}</h3>
                  <p className="text-xs font-mono text-muted-foreground uppercase">{char.form}</p>
                </div>
                <div className={`h-8 w-8 rounded-full ${char.border} border-2 flex items-center justify-center`}>
                  <span className={`font-action text-xs ${char.color}`}>{char.name[0]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Character Detail Card */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-3xl border-2 border-border p-8 shadow-2xl relative overflow-hidden h-full"
            >
              {/* Background decorative text */}
              <span className="absolute -right-10 -top-10 text-9xl font-tech font-black text-muted/10 pointer-events-none select-none uppercase truncate max-w-[150%]">
                {selected.id}
              </span>

              <div className="relative z-10 grid md:grid-cols-2 gap-8 h-full content-start">
                {/* Left: Info */}
                <div className="space-y-6">
                  <div>
                    <h2 className={`text-5xl font-action mb-2 ${selected.color} text-stroke-sm text-transparent bg-clip-text bg-gradient-to-br from-current to-foreground`}>
                      {selected.name}
                    </h2>
                    <span className="inline-block px-3 py-1 rounded-full bg-muted text-xs font-mono uppercase tracking-wider border border-white/10">
                      {selected.form}
                    </span>
                  </div>
                  
                  <p className="font-ui text-lg leading-relaxed text-muted-foreground">
                    {selected.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <Button className="w-full font-tech" variant="default">
                      <Swords className="mr-2 h-4 w-4" />
                      VS Simulation
                    </Button>
                    <Button variant="outline" className="w-full font-tech">
                      Data Log
                    </Button>
                  </div>
                </div>

                {/* Right: Stats */}
                <div className="bg-muted/20 rounded-2xl p-6 space-y-6 border border-border/50 backdrop-blur-sm">
                  <h3 className="font-tech text-xl border-b pb-2 mb-4">Combat Data</h3>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-bold uppercase">
                      <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-energy-yellow" /> Power</span>
                      <span className="font-mono">{selected.power}</span>
                    </div>
                    <Progress value={selected.power} className="h-2" indicatorClassName="bg-energy-yellow" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-bold uppercase">
                      <span className="flex items-center gap-2"><Activity className="w-4 h-4 text-blue-500" /> Speed</span>
                      <span className="font-mono">{selected.speed}</span>
                    </div>
                    <Progress value={selected.speed} className="h-2" indicatorClassName="bg-blue-500" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-bold uppercase">
                      <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-green-500" /> Technique</span>
                      <span className="font-mono">{selected.technique}</span>
                    </div>
                    <Progress value={selected.technique} className="h-2" indicatorClassName="bg-green-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
