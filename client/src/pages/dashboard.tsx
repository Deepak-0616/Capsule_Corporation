import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Cpu, 
  Swords, 
  Zap, 
  ScrollText, 
  Network, 
  Users, 
  Gamepad2 
} from "lucide-react";
import { useUserStore } from "@/lib/store";
import { useEffect } from "react";
import techBg from "@assets/generated_images/futuristic_anime_lab_background_texture.png";
import auraBg from "@assets/generated_images/dragon_ball_style_energy_aura_background.png";

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
    image: techBg
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
    image: auraBg
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
    desc: "Analyze energy readings, transformations, and fusion techniques."
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
    desc: "Map of the 12 Universes, Namekian history, and the Dragon Balls."
  },
  {
    id: "meme",
    title: "Internet Capsule",
    subtitle: "Meme Timeline",
    icon: Network,
    color: "text-pink-500",
    bg: "bg-pink-500/10",
    border: "border-pink-500/30",
    link: "/meme",
    desc: "The lighter side of Z. Trends, memes, and community submissions."
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
    desc: "Deep dive into stats, forms, and power levels."
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
    desc: "Mini-games, quizzes, and interactive fun."
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
  const { user, updatePowerLevel } = useUserStore();

  // Easter egg: Boost power level on visit
  useEffect(() => {
    const timer = setTimeout(() => {
      updatePowerLevel(1);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4 py-8">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-7xl font-tech uppercase tracking-tighter text-stroke-sm text-transparent bg-clip-text bg-gradient-to-br from-foreground to-muted-foreground"
        >
          Capsule Corp
        </motion.h1>
        <p className="font-ui text-xl text-muted-foreground max-w-2xl mx-auto">
          Welcome, <span className="font-bold text-primary">{user.name}</span>. 
          Select a module to begin your research.
        </p>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
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
              {/* Background Image (Optional) */}
              {section.image && (
                <div 
                  className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-cover bg-center mix-blend-overlay"
                  style={{ backgroundImage: `url(${section.image})` }}
                />
              )}

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
                <p className="font-ui text-sm text-muted-foreground line-clamp-2 group-hover:text-foreground transition-colors">
                  {section.desc}
                </p>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              
              {/* Active Indicator */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${section.color.replace('text-', '')} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
            </motion.div>
          </Link>
        ))}
        
        {/* Empty Slot / Coming Soon */}
        <motion.div 
          variants={item}
          className="h-64 rounded-3xl border-2 border-dashed border-muted-foreground/20 p-6 flex flex-col items-center justify-center text-muted-foreground opacity-50"
        >
          <span className="font-tech text-4xl mb-2">?</span>
          <span className="font-ui uppercase tracking-widest text-xs">Module Locked</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
