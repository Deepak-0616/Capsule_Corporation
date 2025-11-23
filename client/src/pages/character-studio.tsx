import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Zap, Shield, Activity, Swords, FileText, Play } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import gokuImg from '@assets/generated_images/goku_ultra_instinct_portrait.png';
import vegetaImg from '@assets/generated_images/vegeta_ultra_ego_portrait.png';
import gohanImg from '@assets/generated_images/gohan_beast_portrait.png';
import piccoloImg from '@assets/generated_images/piccolo_orange_portrait.png';
import brolyImg from '@assets/generated_images/broly_ssj_portrait.png';
import trunksImg from '@assets/generated_images/trunks_ssj_rage_portrait.png';
import friezaImg from '@assets/generated_images/frieza_black_portrait.png';
import cellImg from '@assets/generated_images/cell_max_portrait.png';
import jirenImg from '@assets/generated_images/jiren_full_power_portrait.png';
import moroImg from '@assets/generated_images/moro_angel_portrait.png';
import gasImg from '@assets/generated_images/gas_powered_portrait.png';
import buuImg from '@assets/generated_images/kid_buu_portrait.png';

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
    image: gokuImg,
    log: "Training Log #921: Mastered Emotional Control in UI state. Can now utilize Saiyan emotions alongside divine technique."
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
    image: vegetaImg,
    log: "Combat Log #440: Damage absorption rate increased by 15%. Hakai energy output stable. Pride absolute."
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
    image: gohanImg,
    log: "Research Log #001: The 'Beast' form appears to be an evolution of the Ultimate state, triggered by extreme emotional stress similar to SSJ2."
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
    image: piccoloImg,
    log: "Meditation Log: The Pride of the Namekians has been restored. Physical strength now matches strategic intellect."
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
    image: brolyImg,
    log: "Observation: Power output rises infinitely during combat. Mental stability is the primary limiting factor."
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
    image: trunksImg,
    log: "Time Patroller Report: Timeline stabilized. Sword skills enhanced with Ki channeling."
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
    image: friezaImg,
    log: "Conquest Log: Saiyans neutralized with single blow. Universe 7 conquest resuming shortly."
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
    image: cellImg,
    log: "Error: Mind control chip failed. Subject is berserk. Evacuate immediately."
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
    image: jirenImg,
    log: "Meditation: Trust is unnecessary. Strength is the only truth."
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
    image: moroImg,
    log: "Grimoire: Angelic capabilities copied. Stability decreasing. Body cannot contain divine power."
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
    image: gasImg,
    log: "Heeter Intel: Subject is aging rapidly. Combat effectiveness maximum, but duration limited."
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
    image: buuImg,
    log: "Warning: Unpredictable behavior. Do not engage without erasure techniques."
  }
];

export default function CharacterStudio() {
  const [selected, setSelected] = useState(CHARACTERS[0]);
  const [showLog, setShowLog] = useState(false);
  const [showSim, setShowSim] = useState(false);

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
              className="bg-card rounded-3xl border-2 border-border shadow-2xl relative overflow-hidden h-full flex flex-col"
            >
              {/* Character Image Container */}
              <div className="relative w-full h-64 overflow-hidden bg-gradient-to-b from-muted/50 to-card flex items-center justify-center border-b border-border">
                <img 
                  src={selected.image} 
                  alt={selected.name}
                  className="h-full w-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <span className="absolute -right-10 -top-10 text-6xl font-tech font-black text-muted/5 pointer-events-none select-none uppercase">
                  {selected.id}
                </span>
              </div>

              {/* Info Section */}
              <div className="flex-1 p-8 flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <h2 className={`text-4xl font-action mb-2 ${selected.color} text-stroke-sm text-transparent bg-clip-text bg-gradient-to-br from-current to-foreground`}>
                      {selected.name}
                    </h2>
                    <span className="inline-block px-3 py-1 rounded-full bg-muted text-xs font-mono uppercase tracking-wider border border-white/10">
                      {selected.form}
                    </span>
                  </div>
                  
                  <p className="font-ui text-sm leading-relaxed text-muted-foreground">
                    {selected.desc}
                  </p>
                </div>

                {/* Stats Section */}
                <div className="space-y-6 pt-6 border-t border-border/50">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold uppercase">
                        <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-energy-yellow" /> Power</span>
                        <span className="font-mono">{selected.power}</span>
                      </div>
                      <Progress value={selected.power} className="h-1" indicatorClassName="bg-energy-yellow" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold uppercase">
                        <span className="flex items-center gap-1"><Activity className="w-3 h-3 text-blue-500" /> Speed</span>
                        <span className="font-mono">{selected.speed}</span>
                      </div>
                      <Progress value={selected.speed} className="h-1" indicatorClassName="bg-blue-500" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold uppercase">
                        <span className="flex items-center gap-1"><Shield className="w-3 h-3 text-green-500" /> Technique</span>
                        <span className="font-mono">{selected.technique}</span>
                      </div>
                      <Progress value={selected.technique} className="h-1" indicatorClassName="bg-green-500" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <Button className="w-full font-tech text-xs" variant="default" onClick={() => setShowSim(true)}>
                      <Swords className="mr-2 h-3 w-3" />
                      VS Simulation
                    </Button>
                    <Button variant="outline" className="w-full font-tech text-xs" onClick={() => setShowLog(true)}>
                      <FileText className="mr-2 h-3 w-3" />
                      Data Log
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Data Log Dialog */}
      <Dialog open={showLog} onOpenChange={setShowLog}>
        <DialogContent className="bg-card border-2 border-border font-ui">
            <DialogHeader>
                <DialogTitle className="font-tech text-primary uppercase">Encrypted Data Log</DialogTitle>
                <DialogDescription>Accessing {selected.name} private records...</DialogDescription>
            </DialogHeader>
            <div className="p-4 bg-black/20 rounded border border-white/10 font-mono text-sm text-green-400">
                {">"} {selected.log}
                <span className="animate-pulse inline-block w-2 h-4 bg-green-400 ml-1 align-middle"></span>
            </div>
        </DialogContent>
      </Dialog>

       {/* VS Simulation Dialog */}
       <Dialog open={showSim} onOpenChange={setShowSim}>
        <DialogContent className="bg-card border-2 border-border font-ui max-w-2xl">
            <DialogHeader>
                <DialogTitle className="font-tech text-red-500 uppercase">Battle Simulation</DialogTitle>
                <DialogDescription>Running combat scenario against Black Frieza (Baseline)...</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <div className="text-center">
                        <div className={`w-16 h-16 rounded-full border-2 ${selected.border} flex items-center justify-center text-2xl mb-2 mx-auto`}>
                            {selected.name[0]}
                        </div>
                        <p className="font-bold">{selected.name}</p>
                    </div>
                    <div className="text-2xl font-black text-red-500 animate-pulse">VS</div>
                    <div className="text-center">
                        <div className="w-16 h-16 rounded-full border-2 border-purple-700 bg-purple-900/20 flex items-center justify-center text-2xl mb-2 mx-auto">
                            F
                        </div>
                        <p className="font-bold">Black Frieza</p>
                    </div>
                </div>
                
                <div className="p-4 bg-black/40 rounded border border-red-500/30">
                    <div className="space-y-2 font-mono text-xs">
                        <p className="text-gray-400">Calculating power vectors...</p>
                        <div className="h-1 bg-gray-700 rounded overflow-hidden">
                            <div className="h-full bg-red-500 animate-[progress_2s_ease-in-out_infinite] w-full origin-left scale-x-0" />
                        </div>
                        <p className="text-white">Result Prediction: {selected.power >= 100 ? "UNCERTAIN - CLASH IMMINENT" : "DEFEAT LIKELY - POWER GAP DETECTED"}</p>
                    </div>
                </div>
            </div>
        </DialogContent>
      </Dialog>

    </div>
  );
}
