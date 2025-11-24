import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CANON_SERIES = [
  { id: 1, title: "Dragon Ball", year: "1986-1989", eps: "153 eps" },
  { id: 2, title: "Dragon Ball Z", year: "1989-1996", eps: "291 eps" },
  { id: 20, title: "Dragon Ball Daima", year: "2024", eps: "20 eps" },
  { id: 16, title: "Dragon Ball Super", year: "2015-2017", eps: "131 eps" },
];

const NON_CANON_SERIES = [
  { id: 15, title: "Dragon Ball GT", year: "1996-1997", eps: "64 eps" },
  { id: 22, title: "Super Dragon Ball Heroes", year: "2018-Present", eps: "56 eps" },
];

const CANON_MOVIES = [
  { id: 23, title: "Dragon Ball Z: Battle of Gods", year: "2013" },
  { id: 17, title: "Dragon Ball Z: Resurrection 'F'", year: "2015" },
  { id: 18, title: "Dragon Ball Super: Broly", year: "2018" },
  { id: 19, title: "Dragon Ball Super: Super Hero", year: "2022" },
];

const NON_CANON_MOVIES = [
  { id: 3, title: "Dragon Ball Z: Dead Zone", year: "1989" },
  { id: 4, title: "Dragon Ball Z: The World's Strongest", year: "1990" },
  { id: 5, title: "Dragon Ball Z: The Tree of Might", year: "1990" },
  { id: 6, title: "Dragon Ball Z: Lord Slug", year: "1991" },
  { id: 7, title: "Dragon Ball Z: Cooler's Revenge", year: "1991" },
  { id: 8, title: "Dragon Ball Z: Return of Cooler", year: "1992" },
  { id: 9, title: "Dragon Ball Z: Super Android 13", year: "1992" },
  { id: 10, title: "Dragon Ball Z: Broly - The Legendary Super Saiyan", year: "1993" },
  { id: 11, title: "Dragon Ball Z: Bojack Unbound", year: "1993" },
  { id: 12, title: "Dragon Ball Z: Broly - Second Coming", year: "1994" },
  { id: 13, title: "Dragon Ball Z: Fusion Reborn", year: "1995" },
  { id: 14, title: "Dragon Ball Z: Wrath of the Dragon", year: "1995" },
];

const EntryCard = ({ entry, isCanon }: { entry: any; isCanon: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3 }}
    className={`
      p-4 rounded-xl border-2 backdrop-blur-sm transition-all hover:shadow-lg
      ${isCanon 
        ? 'border-energy-yellow/50 bg-energy-yellow/5 hover:border-energy-yellow' 
        : 'border-red-500/30 bg-red-500/5 hover:border-red-500'}
    `}
  >
    {/* Title */}
    <h3 className="font-tech text-sm font-bold truncate mb-2">
      {entry.title}
    </h3>

    {/* Details */}
    <div className="space-y-2 mb-3">
      <div className="flex gap-2 text-xs text-muted-foreground">
        <span className="font-mono">{entry.year}</span>
        {entry.eps && (
          <>
            <span>•</span>
            <span>{entry.eps}</span>
          </>
        )}
      </div>
    </div>

    {/* Canon Badge */}
    <div className="inline-block">
      <span className={`text-xs font-mono font-bold px-2 py-1 rounded uppercase tracking-wider ${
        isCanon 
          ? 'bg-energy-yellow/20 text-energy-yellow' 
          : 'bg-red-500/20 text-red-400'
      }`}>
        {isCanon ? 'Canon' : 'Non-Canon'}
      </span>
    </div>
  </motion.div>
);

export default function SeriesWatchOrder() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-tech uppercase text-transparent bg-clip-text bg-gradient-to-r from-energy-yellow to-goku-orange">
            Series Watch Order
          </h1>
          <p className="text-muted-foreground font-ui">Complete Dragon Ball Timeline</p>
        </div>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
        <div className="p-4 rounded-lg border-2 border-energy-yellow/50 bg-energy-yellow/5">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-energy-yellow" />
            <span className="font-mono text-sm font-bold">Canon - Official Story</span>
          </div>
        </div>
        <div className="p-4 rounded-lg border-2 border-red-500/30 bg-red-500/5">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-500" />
            <span className="font-mono text-sm font-bold">Non-Canon - Side Stories</span>
          </div>
        </div>
      </div>

      {/* Canon Series Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-tech uppercase text-energy-yellow">
          Canon Series
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CANON_SERIES.map((entry) => (
            <EntryCard key={entry.id} entry={entry} isCanon={true} />
          ))}
        </div>
      </div>

      {/* Canon Movies Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-tech uppercase text-energy-yellow">
          Canon Movies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CANON_MOVIES.map((entry) => (
            <EntryCard key={entry.id} entry={entry} isCanon={true} />
          ))}
        </div>
      </div>

      {/* Non-Canon Series Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-tech uppercase text-red-500">
          Non-Canon Series
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {NON_CANON_SERIES.map((entry) => (
            <EntryCard key={entry.id} entry={entry} isCanon={false} />
          ))}
        </div>
      </div>

      {/* Non-Canon Movies Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-tech uppercase text-red-500">
          Non-Canon Movies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {NON_CANON_MOVIES.map((entry) => (
            <EntryCard key={entry.id} entry={entry} isCanon={false} />
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="mt-12 p-6 rounded-xl border-2 border-muted-foreground/20 bg-muted/5 space-y-4">
        <h3 className="font-tech text-lg uppercase text-primary">Recommended Watch Order:</h3>
        <div className="space-y-2 text-sm font-ui text-muted-foreground">
          <p><strong>Canon Path (Official Story):</strong> Dragon Ball → Dragon Ball Z → Dragon Ball Daima → Dragon Ball Super</p>
          <p><strong>Complete Experience:</strong> Follow canon series, watch canon movies between arcs, then explore non-canon side stories</p>
          <p><strong>Bonus Content:</strong> Dragon Ball Heroes and Super Dragon Ball Heroes are web series with alternate storylines</p>
        </div>
      </div>
    </div>
  );
}
