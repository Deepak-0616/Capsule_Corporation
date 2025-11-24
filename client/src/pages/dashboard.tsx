import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Cpu, 
  Swords, 
  Zap, 
  ScrollText, 
  Users, 
  Gamepad2,
  PenTool,
  Play
} from "lucide-react";
import techBg from "@assets/generated_images/futuristic_anime_lab_background_texture.png";
import auraBg from "@assets/generated_images/dragon_ball_style_energy_aura_background.png";
import toriyamaArt from "@assets/generated_images/akira_toriyama_tribute_art.png";
import radarImg from "@assets/image_1763926730038.png";
import gokuVsVegeta from "@assets/image_1763930622835.png";
import uiGoku from "@assets/image_1763926381541.png";
import zeno from "@assets/image_1763926470664.png";
import gokuEating from "@assets/generated_images/goku_eating_ramen.png";
import characterGroup from "@assets/image_1763930758545.png";
import timelineImg from "../assets/dragon_ball_chronological_timeline.png";

const SECTIONS = [
  {
    id: "tech",
    title: "Tech Vault",
    subtitle: "Legendary Devices",
    icon: Cpu,
    color: "text-vegeta-blue",
    bg: "bg-blue-500/10",
    border: "border-vegeta-blue/30",
    link: "/tech",
    desc: "Explore Dragon Radars, Hoi-Poi Capsules, and Saiyan Space Pods.",
    image: radarImg
  },
  {
    id: "battle",
    title: "Battle History",
    subtitle: "Timeline Explorer",
    icon: Swords,
    color: "text-goku-orange",
    bg: "bg-orange-500/10",
    border: "border-goku-orange/30",
    link: "/battle",
    desc: "Relive the most iconic fights from the Saiyan Saga to the Tournament of Power.",
    image: gokuVsVegeta
  },
  {
    id: "ki",
    title: "Ki Science",
    subtitle: "Power Lab",
    icon: Zap,
    color: "text-energy-yellow",
    bg: "bg-yellow-500/10",
    border: "border-energy-yellow/30",
    link: "/ki",
    desc: "Analyze energy readings, transformations, and fusion techniques.",
    image: uiGoku
  },
  {
    id: "lore",
    title: "Universe Lore",
    subtitle: "Mythology",
    icon: ScrollText,
    color: "text-piccolo-green",
    bg: "bg-green-500/10",
    border: "border-piccolo-green/30",
    link: "/lore",
    desc: "Map of the 12 Universes, Namekian history, and the Dragon Balls.",
    image: zeno
  },
  {
    id: "chars",
    title: "Character Studio",
    subtitle: "Analyzer",
    icon: Users,
    color: "text-red-600",
    bg: "bg-red-600/10",
    border: "border-red-600/30",
    link: "/chars",
    desc: "Deep dive into stats, forms, and power levels.",
    image: characterGroup
  },
  {
    id: "fun",
    title: "Entertainment",
    subtitle: "Zone",
    icon: Gamepad2,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    link: "/fun",
    desc: "Mini-games, quizzes, and interactive fun.",
    image: gokuEating
  },
  {
    id: "tribute",
    title: "Toriyama Tribute",
    subtitle: "Thank You Sensei",
    icon: PenTool,
    color: "text-white",
    bg: "bg-white/10",
    border: "border-white/30",
    link: "/tribute",
    desc: "A dedication to the legendary creator, Akira Toriyama.",
    image: toriyamaArt
  },
  {
    id: "series",
    title: "Series Watch Order",
    subtitle: "Timeline Guide",
    icon: Play,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-400/30",
    link: "/series-order",
    desc: "Complete Dragon Ball timeline with canon and non-canon series + all movies.",
    image: timelineImg
  }
];


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4 py-8">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-3xl sm:text-5xl md:text-7xl font-tech uppercase tracking-tighter text-stroke-sm text-transparent bg-clip-text bg-gradient-to-br from-foreground to-muted-foreground"
        >
          Capsule Corp
        </motion.h1>
        <p className="font-ui text-xl text-muted-foreground max-w-2xl mx-auto">
          Welcome to the ultimate database.
        </p>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {SECTIONS.map((section) => (
          <Link key={section.id} href={section.link}>
            <motion.div
              variants={item}
              whileHover={{ scale: 1.02, translateY: -5 }}
              whileTap={{ scale: 0.98 }}
              className={`
                group relative h-64 cursor-pointer overflow-hidden rounded-3xl border-2 
                bg-card p-6 transition-colors hover:shadow-xl capsule-shadow
                flex flex-col justify-between
                ${section.border}
              `}
            >
              {/* Background Image */}
              {section.image && (
                <div 
                  className="absolute inset-0 z-0 opacity-20 group-hover:opacity-60 transition-opacity duration-500 bg-cover bg-center grayscale group-hover:grayscale-0"
                  style={{ backgroundImage: `url(${section.image})` }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              {/* Background decorative icon */}
              <section.icon 
                className={`absolute -right-8 -bottom-8 h-48 w-48 opacity-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 ${section.color}`} 
              />

              {/* Header */}
              <div className="flex items-start justify-between relative z-10">
                <div className={`rounded-full p-3 ${section.bg} backdrop-blur-sm`}>
                  <section.icon className={`h-6 w-6 ${section.color}`} />
                </div>
                <div className="bg-muted/80 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-mono uppercase tracking-widest border border-white/10">
                  MOD-{section.id.toUpperCase()}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-2">
                <h3 className="font-tech text-2xl font-bold leading-none drop-shadow-md">
                  {section.title}
                </h3>
                <div className="h-1 w-12 bg-gradient-to-r from-current to-transparent opacity-50" />
                <p className="font-ui text-sm text-gray-300 line-clamp-2 group-hover:text-white transition-colors">
                  {section.desc}
                </p>
              </div>

              {/* Active Indicator */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${section.color.replace('text-', '')} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
            </motion.div>
          </Link>
        ))}
      </motion.div>

    </div>
  );
}
