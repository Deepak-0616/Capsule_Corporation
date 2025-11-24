import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const COMPLETE_WATCH_ORDER = [
  // Main Series
  { id: 1, title: "Dragon Ball", canon: true, type: "Series", year: "1986-1989", eps: "153 eps" },
  { id: 2, title: "Dragon Ball Z", canon: true, type: "Series", year: "1989-1996", eps: "291 eps" },
  
  // DBZ Movies (Mixed Canon)
  { id: 3, title: "Dragon Ball Z: Dead Zone", canon: false, type: "Movie", year: "1989" },
  { id: 4, title: "Dragon Ball Z: The World's Strongest", canon: false, type: "Movie", year: "1990" },
  { id: 5, title: "Dragon Ball Z: The Tree of Might", canon: false, type: "Movie", year: "1990" },
  { id: 6, title: "Dragon Ball Z: Lord Slug", canon: false, type: "Movie", year: "1991" },
  { id: 7, title: "Dragon Ball Z: Cooler's Revenge", canon: false, type: "Movie", year: "1991" },
  { id: 8, title: "Dragon Ball Z: Return of Cooler", canon: false, type: "Movie", year: "1992" },
  { id: 9, title: "Dragon Ball Z: Super Android 13", canon: false, type: "Movie", year: "1992" },
  { id: 10, title: "Dragon Ball Z: Broly - The Legendary Super Saiyan", canon: false, type: "Movie", year: "1993" },
  { id: 11, title: "Dragon Ball Z: Bojack Unbound", canon: false, type: "Movie", year: "1993" },
  { id: 12, title: "Dragon Ball Z: Broly - Second Coming", canon: false, type: "Movie", year: "1994" },
  { id: 13, title: "Dragon Ball Z: Fusion Reborn", canon: false, type: "Movie", year: "1995" },
  { id: 14, title: "Dragon Ball Z: Wrath of the Dragon", canon: false, type: "Movie", year: "1995" },
  
  // GT Series
  { id: 15, title: "Dragon Ball GT", canon: false, type: "Series", year: "1996-1997", eps: "64 eps" },
  
  // Super Series
  { id: 16, title: "Dragon Ball Super", canon: true, type: "Series", year: "2015-2017", eps: "131 eps" },
  
  // Super Movies
  { id: 17, title: "Dragon Ball Z: Resurrection 'F'", canon: true, type: "Movie", year: "2015" },
  { id: 18, title: "Dragon Ball Super: Broly", canon: true, type: "Movie", year: "2018" },
  { id: 19, title: "Dragon Ball Super: Super Hero", canon: true, type: "Movie", year: "2022" },
  
  // Daima Series
  { id: 20, title: "Dragon Ball Daima", canon: true, type: "Series", year: "2024-Present", eps: "Ongoing" },
];

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

      {/* Watch Order Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {COMPLETE_WATCH_ORDER.map((entry, index) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
            className={`
              p-4 rounded-xl border-2 backdrop-blur-sm transition-all hover:shadow-lg
              ${entry.canon 
                ? 'border-energy-yellow/50 bg-energy-yellow/5 hover:border-energy-yellow' 
                : 'border-red-500/30 bg-red-500/5 hover:border-red-500'}
            `}
          >
            {/* Order Number */}
            <div className="flex items-start justify-between gap-2 mb-2">
              <span className="text-xs font-mono text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                #{entry.id}
              </span>
              {entry.canon ? (
                <CheckCircle className="w-4 h-4 text-energy-yellow shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
              )}
            </div>

            {/* Title */}
            <h3 className="font-tech text-sm font-bold truncate mb-2">
              {entry.title}
            </h3>

            {/* Details */}
            <div className="space-y-2 mb-3">
              <div className="flex gap-2 text-xs text-muted-foreground">
                <span className="font-mono">{entry.type}</span>
                <span>•</span>
                <span>{entry.year}</span>
              </div>
              <div className="text-xs text-muted-foreground font-mono">
                {entry.eps}
              </div>
            </div>

            {/* Canon Badge */}
            <div className="inline-block">
              <span className={`text-xs font-mono font-bold px-2 py-1 rounded uppercase tracking-wider ${
                entry.canon 
                  ? 'bg-energy-yellow/20 text-energy-yellow' 
                  : 'bg-red-500/20 text-red-400'
              }`}>
                {entry.canon ? 'Canon' : 'Non-Canon'}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Info Section */}
      <div className="mt-12 p-6 rounded-xl border-2 border-muted-foreground/20 bg-muted/5 space-y-4">
        <h3 className="font-tech text-lg uppercase text-primary">Recommended Watch Order:</h3>
        <div className="space-y-2 text-sm font-ui text-muted-foreground">
          <p><strong>Canon Path (Official Story):</strong> Dragon Ball → Dragon Ball Z → Dragon Ball Super → Dragon Ball Daima</p>
          <p><strong>Complete Experience:</strong> Follow canon series, watch non-canon movies between arcs for side stories</p>
          <p><strong>Movies Note:</strong> Most DBZ movies can be watched anytime during that saga. Super movies fit before/after Tournament of Power</p>
        </div>
      </div>
    </div>
  );
}
