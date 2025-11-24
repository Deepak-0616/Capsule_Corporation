import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Zap, Shield, Activity, ChevronDown } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import gokuImg from '@assets/image_1763922568064.png';
import vegetaImg from '@assets/image_1763922684293.png';
import gohanImg from '@assets/image_1763922369472.png';
import piccoloImg from '@assets/image_1763922313501.png';
import brolyImg from '@assets/image_1763922890420.png';
import trunksImg from '@assets/image_1763922459188.png';
import friezaImg from '@assets/image_1763922965706.png';
import cellImg from '@assets/image_1763922169800.png';
import jirenImg from '@assets/image_1763922198924.png';
import moroImg from '@assets/image_1763921883315.png';
import gasImg from '@assets/image_1763921774297.png';
import buuImg from '@assets/image_1763922000958.png';
import zamasuImg from '@assets/image_1763923293191.png';

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
    border: 'border-goku-orange',
    image: gokuImg
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
    border: 'border-vegeta-blue',
    image: vegetaImg
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
    border: 'border-purple-500',
    image: gohanImg
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
    border: 'border-piccolo-green',
    image: piccoloImg
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
    border: 'border-green-500',
    image: brolyImg
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
    border: 'border-blue-400',
    image: trunksImg
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
    border: 'border-purple-700',
    image: friezaImg
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
    border: 'border-red-600',
    image: cellImg
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
    border: 'border-pink-500',
    image: buuImg
  },
  {
    id: 'zamasu',
    name: 'Zamasu',
    form: 'Goku Black',
    power: 95,
    speed: 94,
    technique: 99,
    desc: "A rogue Supreme Kai who declared himself the god of a new universe. Fused with Goku's body.",
    color: 'text-green-600',
    border: 'border-green-600',
    image: zamasuImg
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
    border: 'border-red-500',
    image: jirenImg
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
    border: 'border-blue-900',
    image: moroImg
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
    border: 'border-yellow-700',
    image: gasImg
  },
];

export default function CharacterStudio() {
  const [selected, setSelected] = useState<typeof CHARACTERS[0] | null>(null);

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between px-2 sm:px-0">
        <div className="flex items-center gap-2 sm:gap-4 min-w-0">
          <Link href="/">
            <Button variant="outline" size="icon" className="h-9 w-9 sm:h-10 sm:w-10 shrink-0">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div className="min-w-0">
            <h1 className="text-2xl sm:text-3xl font-tech uppercase text-goku-orange truncate">Character Studio</h1>
            <p className="text-xs sm:text-sm text-muted-foreground font-ui truncate">Z Fighters & Villains Database</p>
          </div>
        </div>
      </div>

      <div className="space-y-3 sm:space-y-4 lg:space-y-5">
        {/* Character List with inline detail cards */}
        {CHARACTERS.map((char) => (
          <div key={char.id} className="space-y-1 sm:space-y-2 px-2 sm:px-0">
            <div
              onClick={() => setSelected(selected?.id === char.id ? null : char)}
              className={`
                cursor-pointer p-3 sm:p-4 lg:p-5 rounded-lg sm:rounded-xl lg:rounded-2xl border-2 transition-all hover:scale-105 lg:hover:scale-102
                ${selected?.id === char.id 
                  ? `${char.border} bg-muted` 
                  : 'border-transparent bg-card hover:border-muted-foreground/30'}
              `}
            >
              <div className="flex items-center justify-between gap-2 lg:gap-4">
                <div className="min-w-0">
                  <h3 className="font-tech font-bold text-base sm:text-lg lg:text-xl truncate">{char.name}</h3>
                  <p className="text-xs lg:text-sm font-mono text-muted-foreground uppercase truncate">{char.form}</p>
                </div>
                <ChevronDown className={`w-5 h-5 lg:w-6 lg:h-6 transition-transform shrink-0 ${selected?.id === char.id ? 'rotate-180' : ''}`} />
              </div>
            </div>

            {/* Character Detail Card - Shows directly below when selected */}
            <AnimatePresence>
              {selected?.id === char.id && (
                <motion.div
                  key={`detail-${char.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card rounded-2xl sm:rounded-3xl lg:rounded-4xl border-2 border-border shadow-2xl lg:shadow-3xl relative overflow-hidden"
                >
                  {/* Character Image Container */}
                  <div className="relative w-full h-48 sm:h-64 lg:h-80 overflow-hidden bg-gradient-to-b from-muted/50 to-card flex items-center justify-center border-b border-border">
                    <img 
                      src={char.image} 
                      alt={char.name}
                      className="h-full w-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    <span className="absolute -right-10 -top-10 text-6xl lg:text-8xl font-tech font-black text-muted/5 pointer-events-none select-none uppercase">
                      {char.id}
                    </span>
                  </div>

                  {/* Info Section */}
                  <div className="p-6 sm:p-8 lg:p-10 space-y-5 sm:space-y-6 lg:space-y-8">
                    <div>
                      <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-action mb-2 lg:mb-3 ${char.color} text-stroke-sm text-transparent bg-clip-text bg-gradient-to-br from-current to-foreground`}>
                        {char.name}
                      </h2>
                      <span className="inline-block px-3 py-1 lg:px-4 lg:py-2 rounded-full bg-muted text-xs lg:text-sm font-mono uppercase tracking-wider border border-white/10">
                        {char.form}
                      </span>
                    </div>
                    
                    <p className="font-ui text-sm lg:text-base leading-relaxed text-muted-foreground">
                      {char.desc}
                    </p>

                    {/* Stats Section */}
                    <div className="space-y-6 lg:space-y-8 pt-6 lg:pt-8 border-t border-border/50">
                      <div className="grid grid-cols-3 gap-4 lg:gap-6">
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs font-bold uppercase">
                            <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-energy-yellow" /> Power</span>
                            <span className="font-mono">{char.power}</span>
                          </div>
                          <Progress value={char.power} className="h-1" indicatorClassName="bg-energy-yellow" />
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-xs font-bold uppercase">
                            <span className="flex items-center gap-1"><Activity className="w-3 h-3 text-blue-500" /> Speed</span>
                            <span className="font-mono">{char.speed}</span>
                          </div>
                          <Progress value={char.speed} className="h-1" indicatorClassName="bg-blue-500" />
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-xs font-bold uppercase">
                            <span className="flex items-center gap-1"><Shield className="w-3 h-3 text-green-500" /> Technique</span>
                            <span className="font-mono">{char.technique}</span>
                          </div>
                          <Progress value={char.technique} className="h-1" indicatorClassName="bg-green-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
