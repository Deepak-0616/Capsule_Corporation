import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import zeno from "@assets/image_1763926561461.png";

const UNIVERSES = [
  { id: 1, name: "Universe 1", god: "Iwan", angel: "Awamo", rank: "High" },
  { id: 2, name: "Universe 2", god: "Helles", angel: "Sour", rank: "High" },
  { id: 3, name: "Universe 3", god: "Mosco", angel: "Campari", rank: "Medium" },
  { id: 4, name: "Universe 4", god: "Quitela", angel: "Cognac", rank: "Medium" },
  { id: 5, name: "Universe 5", god: "Arak", angel: "Cukatail", rank: "Top" },
  { id: 6, name: "Universe 6", god: "Champa", angel: "Vados", rank: "Low" },
  { id: 7, name: "Universe 7", god: "Beerus", angel: "Whis", rank: "Low (Rising)" },
  { id: 8, name: "Universe 8", god: "Liquiir", angel: "Korn", rank: "Top" },
  { id: 9, name: "Universe 9", god: "Sidra", angel: "Mojito", rank: "Bottom" },
  { id: 10, name: "Universe 10", god: "Rumsshi", angel: "Cus", rank: "Medium" },
  { id: 11, name: "Universe 11", god: "Belmod", angel: "Marcarita", rank: "High" },
  { id: 12, name: "Universe 12", god: "Geene", angel: "Martinu", rank: "Top" },
];

export default function UniverseLore() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
       <div className="flex items-center gap-4">
        <Link href="/">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-tech uppercase text-transparent bg-clip-text bg-gradient-to-r from-energy-yellow to-goku-orange">Universe Lore</h1>
          <p className="text-muted-foreground font-ui">Cosmology & Deities</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Visual Chart */}
        <div className="bg-card rounded-3xl p-8 border-2 border-purple-500/30 flex items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-purple-900/10 animate-pulse" />
          <img src={zeno} alt="Omni-King Zeno and Grand Priest" className="relative z-10 max-w-full h-auto drop-shadow-[0_0_25px_rgba(168,85,247,0.5)] rounded-lg transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute bottom-4 left-0 right-0 text-center z-20">
            <span className="bg-black/80 text-white px-4 py-1 rounded-full text-xs font-mono uppercase">Omni-King Zeno & Grand Priest</span>
          </div>
        </div>

        {/* Data Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full content-start">
          {UNIVERSES.map((u) => (
            <div key={u.id} className="bg-card/50 p-4 rounded-xl border border-border hover:border-primary transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-tech font-bold text-lg">{u.name}</h3>
                <span className={`text-[10px] px-2 py-0.5 rounded font-mono uppercase ${u.rank.includes('Top') ? 'bg-green-500/20 text-green-400' : u.rank.includes('Low') ? 'bg-red-500/20 text-red-400' : 'bg-blue-500/20 text-blue-400'}`}>
                  Rank: {u.rank}
                </span>
              </div>
              <div className="space-y-1 text-sm font-ui">
                <p className="text-muted-foreground">Hakaishin: <span className="text-purple-400">{u.god}</span></p>
                <p className="text-muted-foreground">Angel: <span className="text-blue-300">{u.angel}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
