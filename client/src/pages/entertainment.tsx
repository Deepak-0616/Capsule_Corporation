import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const FACTS = [
  {
    id: 1,
    title: "Goku's Fear",
    text: "Despite fighting gods and monsters, Goku has a paralyzing fear of needles and hospital injections.",
    icon: "💉"
  },
  {
    id: 2,
    title: "Piccolo's Age",
    text: "Piccolo is technically only 4 years older than Gohan due to Namekian aging mechanics.",
    icon: "🐌"
  },
  {
    id: 3,
    title: "Launch?",
    text: "Akira Toriyama famously forgot about Launch, which is why she disappeared in Dragon Ball Z.",
    icon: "🤧"
  },
  {
    id: 4,
    title: "Vegeta's Height",
    text: "Vegeta was originally much shorter in the Saiyan Saga but was drawn taller over time to match Goku.",
    icon: "📏"
  },
  {
    id: 5,
    title: "The Voice",
    text: "Masako Nozawa has voiced Goku for the entire run of the series and voices Gohan and Goten as well.",
    icon: "🎙️"
  },
  {
    id: 6,
    title: "Frieza's Forms",
    text: "Frieza's 3rd form was based on the Alien Xenomorph design.",
    icon: "👽"
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
          <div key={fact.id} className="bg-card p-6 rounded-2xl border-2 border-dashed border-border hover:border-primary transition-colors group">
            <div className="text-4xl mb-4 transform group-hover:scale-125 transition-transform duration-300">{fact.icon}</div>
            <h3 className="font-tech text-xl font-bold mb-2 text-secondary">{fact.title}</h3>
            <p className="font-ui text-muted-foreground">{fact.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
