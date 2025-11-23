import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import portrait from "@assets/generated_images/akira_toriyama_real_photo.png";

export default function Tribute() {
  return (
    <div className="space-y-8 animate-in fade-in duration-1000 max-w-4xl mx-auto">
       <div className="flex items-center gap-4">
        <Link href="/">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-tech uppercase text-primary">Akira Toriyama</h1>
          <p className="text-muted-foreground font-ui">1955 - 2024</p>
        </div>
      </div>

      <div className="relative rounded-3xl overflow-hidden border-4 border-white/10 bg-black shadow-2xl group">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
        {/* Slow zoom effect */}
        <div className="overflow-hidden">
            <img 
                src={portrait} 
                alt="Akira Toriyama Tribute" 
                className="w-full h-auto object-cover opacity-90 transform transition-transform duration-[20s] group-hover:scale-110" 
            />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20">
          <h2 className="font-action text-4xl md:text-6xl text-white mb-4 drop-shadow-lg">Thank You, Sensei.</h2>
          <p className="font-ui text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
            For the adventures, the laughter, and the spirit of never giving up. 
            You taught us that there is always a level beyond our limits. 
            The world of Dragon Ball will live on forever.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 rounded-xl bg-card/50 border border-border">
          <h3 className="font-tech text-2xl text-primary mb-2">40 Years</h3>
          <p className="font-ui text-muted-foreground">Of serialization and legacy.</p>
        </div>
        <div className="p-6 rounded-xl bg-card/50 border border-border">
          <h3 className="font-tech text-2xl text-primary mb-2">519 Chapters</h3>
          <p className="font-ui text-muted-foreground">Of the original manga run.</p>
        </div>
        <div className="p-6 rounded-xl bg-card/50 border border-border">
          <h3 className="font-tech text-2xl text-primary mb-2">Infinite</h3>
          <p className="font-ui text-muted-foreground">Inspiration to creators worldwide.</p>
        </div>
      </div>
    </div>
  );
}
