import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import gokuEating from "@assets/generated_images/goku_eating_ramen.png";
import roshiHouse from "@assets/generated_images/master_roshi_kame_house.png";
import friezaForms from "@assets/image_1763928552053.png";
import launchChar from "@assets/image_1763928603801.png";
import piccoloGohan from "@assets/image_1763928712992.png";
import gokuFear from "@assets/image_1763928778584.png";
import masako from "@assets/image_1763928844652.png";

const FACTS = [
  {
    id: 1,
    title: "Goku's Fear",
    text: "Despite fighting gods and monsters, Goku has a paralyzing fear of needles and hospital injections.",
    icon: "💉",
    image: gokuFear
  },
  {
    id: 2,
    title: "Piccolo's Age",
    text: "Piccolo is technically only 4 years older than Gohan due to Namekian aging mechanics.",
    icon: "🐌",
    image: piccoloGohan
  },
  {
    id: 3,
    title: "Launch?",
    text: "Akira Toriyama famously forgot about Launch, which is why she disappeared in Dragon Ball Z.",
    icon: "🤧",
    image: launchChar
  },
  {
    id: 4,
    title: "Kame House",
    text: "Master Roshi's house has a different address in almost every appearance in the manga.",
    icon: "🏠",
    image: roshiHouse
  },
  {
    id: 5,
    title: "The Voice",
    text: "Masako Nozawa has voiced Goku for the entire run of the series and voices Gohan and Goten as well.",
    icon: "🎙️",
    image: masako
  },
  {
    id: 6,
    title: "Frieza's Forms",
    text: "Frieza's 3rd form was based on the Alien Xenomorph design.",
    icon: "👽",
    image: friezaForms
  }
];

export default function EntertainmentZone() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
       <div className="flex items-center gap-4">
        <Link href="/">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-tech uppercase text-primary">Entertainment Zone</h1>
          <p className="text-muted-foreground font-ui">Trivia & Fun Facts</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FACTS.map((fact) => (
          <div key={fact.id} className="relative overflow-hidden bg-card rounded-2xl border-2 border-dashed border-border hover:border-primary transition-colors group h-64 flex flex-col">
            {/* Optional Image Background */}
            {fact.image && (
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-40 transition-opacity"
                    style={{ backgroundImage: `url(${fact.image})` }}
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            
            <div className="relative z-10 p-6 flex flex-col h-full justify-end">
                <div className="text-4xl mb-4 transform group-hover:scale-125 transition-transform duration-300">{fact.icon}</div>
                <h3 className="font-tech text-xl font-bold mb-2 text-secondary">{fact.title}</h3>
                <p className="font-ui text-gray-300 group-hover:text-white transition-colors">{fact.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
