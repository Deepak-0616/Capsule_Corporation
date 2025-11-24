import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ssj from "@assets/image_1763927636854.png";
import ssj2 from "@assets/image_1763927651696.png";
import ssj3 from "@assets/image_1763927694868.png";
import legendary from "@assets/image_1763927714548.png";
import legendary2 from "@assets/image_1763927752928.png";
import ssg from "@assets/image_1763927778977.png";
import ssb from "@assets/image_1763927812656.png";
import ueVegeta from "@assets/image_1763927928875.png";
import uiGoku from "@assets/image_1763927957497.png";
import beastGohan from "@assets/image_1763927983360.png";

const TRANSFORMATIONS = [
  {
    id: "ssj",
    name: "Super Saiyan",
    user: "Saiyans",
    desc: "The legendary transformation fueled by rage. Multiplies base power by 50x. Characterized by golden hair and a green-yellow aura.",
    color: "text-yellow-400",
    border: "border-yellow-400",
    image: ssj
  },
  {
    id: "ssj2",
    name: "Super Saiyan 2",
    user: "Goku, Vegeta, Gohan",
    desc: "An enhanced version of the Super Saiyan form. Multiplies power by 100x. Features electricity arcing around the body and enhanced speed.",
    color: "text-yellow-300",
    border: "border-yellow-300",
    image: ssj2
  },
  {
    id: "ssj3",
    name: "Super Saiyan 3",
    user: "Goku, Vegeta",
    desc: "The ultimate Super Saiyan evolution. Multiplies power by 400x. Features long, flowing hair extending down the back and immense drain on energy.",
    color: "text-yellow-200",
    border: "border-yellow-200",
    image: ssj3
  },
  {
    id: "legendary",
    name: "Legendary Super Saiyan",
    user: "Broly",
    desc: "An extraordinarily rare transformation that appears once every 1,000 years. Manifests with green hair and an uncontrollable destructive power.",
    color: "text-green-500",
    border: "border-green-500",
    image: legendary2
  },
  {
    id: "ssj4",
    name: "Super Saiyan 4",
    user: "Goku (GT), Vegeta (GT)",
    desc: "A transformation only achievable through Saiyan-Human hybrid bloodline or unique circumstances. Red-furred appearance with enhanced instincts and power beyond imagination.",
    color: "text-red-600",
    border: "border-red-600",
    image: legendary
  },
  {
    id: "ssg",
    name: "Super Saiyan God",
    user: "Goku, Vegeta",
    desc: "A Saiyan transformation that grants the user God Ki. Requires a ritual of 5 righteous Saiyans or intense divine training. Red hair and flame-like aura.",
    color: "text-red-400",
    border: "border-red-400",
    image: ssg
  },
  {
    id: "ssb",
    name: "Super Saiyan Blue",
    user: "Goku, Vegeta",
    desc: "Super Saiyan God Super Saiyan. Combining the power of Super Saiyan God with the Super Saiyan transformation. Perfect Ki control.",
    color: "text-blue-500",
    border: "border-blue-500",
    image: ssb
  },
  {
    id: "ui",
    name: "Ultra Instinct",
    user: "Goku, Angels",
    desc: "A divine state where the body acts independently of the mind. It separates the consciousness from the body, allowing it to move and fight without thinking.",
    color: "text-gray-200",
    border: "border-gray-200",
    image: uiGoku
  },
  {
    id: "ue",
    name: "Ultra Ego",
    user: "Vegeta, Gods of Destruction",
    desc: "The polar opposite of Ultra Instinct. It is a power derived from the instinct of destruction. The user's power increases as they take damage and burn with battle spirit.",
    color: "text-purple-500",
    border: "border-purple-500",
    image: ueVegeta
  },
  {
    id: "beast",
    name: "Gohan Beast",
    user: "Son Gohan",
    desc: "An evolved form unique to Gohan, awakening the wild beast within. It manifests with red eyes and silver hair, far surpassing his previous limits.",
    color: "text-red-500",
    border: "border-red-500",
    image: beastGohan
  }
];

export default function KiScience() {
  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-700 px-2 sm:px-0">
       <div className="flex items-center gap-2 sm:gap-4 min-w-0">
        <Link href="/">
          <Button variant="outline" size="icon" className="h-9 w-9 sm:h-10 sm:w-10 shrink-0">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div className="min-w-0">
          <h1 className="text-2xl sm:text-3xl font-tech uppercase text-primary truncate">Ki Science & Power Lab</h1>
          <p className="text-xs sm:text-sm text-muted-foreground font-ui">Transformation Analysis</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {TRANSFORMATIONS.map((form) => (
          <motion.div
            key={form.id}
            whileHover={{ y: -5 }}
            className={`
              group relative overflow-hidden rounded-xl sm:rounded-2xl border-2 bg-card p-0.5 sm:p-1 h-72 sm:h-96
              ${form.border}
            `}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
              style={{ 
                backgroundImage: form.image ? `url(${form.image})` : undefined,
                backgroundColor: !form.image ? 'rgba(0,0,0,0.5)' : undefined
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            <div className="relative z-10 h-full flex flex-col justify-end p-4 sm:p-6">
              <h3 className={`font-tech text-lg sm:text-2xl font-bold mb-1 ${form.color} drop-shadow-lg`}>{form.name}</h3>
              <p className="text-xs font-mono text-white/80 mb-2 sm:mb-4 uppercase tracking-wider">User: {form.user}</p>
              <p className="font-ui text-xs sm:text-sm text-gray-200 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                {form.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
