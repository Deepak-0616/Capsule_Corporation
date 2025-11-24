import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Skull, Swords, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import auraBg from "@assets/generated_images/dragon_ball_style_energy_aura_background.png";
import blackFrieza from "@assets/generated_images/black_frieza_silhouette.png";
import brolyPower from "@assets/generated_images/broly_legendary_power.png";

// Authentic Anime/Manga Battle Images
import saiyanClash from "@assets/image_1763925498950.png";
import namekClash from "@assets/generated_images/goku_vs_frieza_namek_manga.png";
import cellClash from "@assets/generated_images/gohan_vs_cell_kamehameha_manga.png";
import buuClash from "@assets/image_1763925555063.png";
import trunksZamasu from "@assets/image_1763928173028.png";
import jirenClash from "@assets/image_1763925714803.png";
import moroMagic from "@assets/image_1763925784868.png";
import gasWeapon from "@assets/image_1763925883258.png";
import gohanCellMax from "@assets/image_1763928344917.png";
import gokuBeerus from "@assets/image_1763929394863.png";
import gokuHit from "@assets/image_1763929447390.png";

const BATTLES = [
  {
    id: 1,
    arc: "Saiyan Saga",
    title: "Goku vs Vegeta",
    year: "Age 762",
    result: "Draw",
    powerDiff: "Equal",
    desc: "The first fateful encounter between the low-class warrior and the Prince of Saiyans. Kaioken x4 vs Galick Gun.",
    color: "border-red-500",
    image: saiyanClash
  },
  {
    id: 2,
    arc: "Frieza Saga",
    title: "Goku vs Frieza",
    year: "Age 762",
    result: "Victory",
    powerDiff: "Massive",
    desc: "On a dying Namek, Goku awakens the legendary Super Saiyan form fueled by rage over Krillin's death.",
    color: "border-energy-yellow",
    image: namekClash
  },
  {
    id: 3,
    arc: "Cell Saga",
    title: "Gohan vs Cell",
    year: "Age 767",
    result: "Victory",
    powerDiff: "Overwhelming",
    desc: "The torch is passed. Gohan ascends beyond a Super Saiyan to defeat the perfect biological android.",
    color: "border-purple-500",
    image: cellClash
  },
  {
    id: 4,
    arc: "Buu Saga",
    title: "Vegito vs Buu",
    year: "Age 774",
    result: "Dominating",
    powerDiff: "Godly",
    desc: "The fusion of Goku and Vegeta creates the ultimate warrior, toying with the most dangerous threat in the universe.",
    color: "border-blue-500",
    image: buuClash
  },
  {
    id: 5,
    arc: "Battle of Gods Saga",
    title: "Goku vs Beerus",
    year: "Age 778",
    result: "Draw",
    powerDiff: "Godly",
    desc: "Goku faces the God of Destruction himself. A clash that shook the universe and awakened Goku to the existence of god-level power.",
    color: "border-blue-600",
    image: gokuBeerus
  },
  {
    id: 6,
    arc: "Tournament of Power",
    title: "Goku vs Hit",
    year: "Age 780",
    result: "Draw",
    powerDiff: "Close",
    desc: "An intense battle against the strongest assassin in the multiverse. Goku adapts to Hit's time-skip technique in an epic display of martial arts mastery.",
    color: "border-pink-600",
    image: gokuHit
  },
  {
    id: 7,
    arc: "Goku Black Saga",
    title: "Future Trunks vs Zamasu",
    year: "Age 796",
    result: "Pyrrhic",
    powerDiff: "Divine",
    desc: "The strongest warrior of the future battles an immortal god. Super Saiyan Rage Trunks unleashes the Spirit Bomb to end the multiverse threat.",
    color: "border-pink-500",
    image: trunksZamasu
  },
  {
    id: 8,
    arc: "ToP Saga",
    title: "Goku vs Jiren",
    year: "Age 780",
    result: "Victory (Team)",
    powerDiff: "Limit Broken",
    desc: "A clash that shook the World of Void. Goku taps into the state of the Gods: Ultra Instinct.",
    color: "border-gray-200",
    image: jirenClash
  },
  {
    id: 9,
    arc: "Broly Saga",
    title: "Gogeta vs Broly",
    year: "Age 780",
    result: "Victory",
    powerDiff: "Unmatched",
    desc: "The Legendary Super Saiyan vs the ultimate fusion. Reality shattered under their colliding power.",
    color: "border-green-500",
    image: brolyPower
  },
  {
    id: 10,
    arc: "Moro Saga",
    title: "Goku vs Moro",
    year: "Age 781",
    result: "Victory",
    powerDiff: "Divine",
    desc: "Mastered Ultra Instinct vs the Planet Eater's dark magic. Goku fights as an Earthling to protect the galaxy.",
    color: "border-indigo-500",
    image: moroMagic
  },
  {
    id: 11,
    arc: "Granolah Saga",
    title: "Goku & Vegeta vs Gas",
    year: "Age 781",
    result: "Victory",
    powerDiff: "Desperate",
    desc: "True Ultra Instinct and Ultra Ego team up against the strongest warrior in the universe.",
    color: "border-orange-500",
    image: gasWeapon
  },
  {
    id: 12,
    arc: "Dragon Ball Super: Super Hero",
    title: "Gohan vs Cell Max",
    year: "Age 782",
    result: "Victory",
    powerDiff: "Overwhelming",
    desc: "The strongest Gohan from the future faces the ultimate bio-engineered android. A battle of transformation and overwhelming power.",
    color: "border-cyan-500",
    image: gohanCellMax
  }
];

export default function BattleHistory() {
  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-700 pb-12 sm:pb-20">
       {/* Header */}
       <div className="flex items-center gap-2 sm:gap-4 relative z-10 px-2 sm:px-0">
        <Link href="/">
          <Button variant="outline" size="icon" className="h-9 w-9 sm:h-10 sm:w-10">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div className="min-w-0">
          <h1 className="text-2xl sm:text-3xl font-tech uppercase text-primary truncate">Battle History</h1>
          <p className="text-xs sm:text-sm text-muted-foreground font-ui">Timeline of the Strongest</p>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto mt-8 sm:mt-12 px-2 sm:px-0">
        {/* Center Line */}
        <div className="absolute left-3 sm:left-4 md:left-1/2 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-transparent via-primary/50 to-transparent -translate-x-1/2" />

        <div className="space-y-8 sm:space-y-12">
          {BATTLES.map((battle, index) => (
            <motion.div
              key={battle.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row gap-4 sm:gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Content Card */}
              <div className="flex-1 w-full">
                <div className={`
                  bg-card p-4 sm:p-6 rounded-2xl border-l-4 shadow-lg relative overflow-hidden group hover:scale-105 transition-transform duration-300
                  ${battle.color}
                `}>
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500 bg-cover bg-center"
                    style={{ backgroundImage: `url(${battle.image || auraBg})` }}
                  />
                  {/* Dark overlay for readability */}
                  <div className="absolute inset-0 bg-black/60 z-0" />

                  <div className="flex justify-between items-start mb-2 gap-2 relative z-10 text-xs">
                    <span className="font-mono uppercase bg-muted/80 backdrop-blur px-2 py-0.5 rounded whitespace-nowrap">{battle.arc}</span>
                    <span className="font-mono text-muted-foreground text-[10px]">{battle.year}</span>
                  </div>
                  
                  <h3 className="font-tech text-lg sm:text-2xl font-bold mb-2 relative z-10 drop-shadow-md">{battle.title}</h3>
                  <p className="font-ui text-gray-300 text-xs sm:text-sm mb-4 relative z-10 line-clamp-3">{battle.desc}</p>
                  
                  <div className="flex gap-4 text-xs font-bold uppercase relative z-10">
                    <div className="flex items-center gap-1 text-green-400">
                      <Trophy className="w-3 h-3" /> {battle.result}
                    </div>
                    <div className="flex items-center gap-1 text-red-400">
                      <Swords className="w-3 h-3" /> {battle.powerDiff}
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Node */}
              <div className="relative z-10 flex items-center justify-center w-8 sm:w-12 h-8 sm:h-12 shrink-0">
                <div className={`w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-primary border-3 sm:border-4 border-background shadow-[0_0_15px_rgba(248,91,26,0.5)] ${battle.color.replace('border-', 'bg-')}`} />
                <div className="absolute w-full h-full rounded-full border border-primary/30 animate-ping opacity-20" />
              </div>

              {/* Empty Spacer for alternating layout */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}

          {/* Black Frieza Teaser */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative max-w-2xl mx-auto mt-24 p-8 rounded-3xl border border-purple-900/50 bg-black/80 overflow-hidden text-center"
          >
             <div 
                className="absolute inset-0 opacity-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${blackFrieza})` }}
              />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
             
             <div className="relative z-10 space-y-4">
                <h3 className="font-tech text-4xl text-purple-500 uppercase tracking-widest">Threat Detected</h3>
                <h2 className="font-action text-5xl text-white drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">Black Frieza</h2>
                <p className="font-mono text-red-500 animate-pulse">COMING SOON</p>
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
