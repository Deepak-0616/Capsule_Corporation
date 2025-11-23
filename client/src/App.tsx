import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { Layout } from "@/components/layout/Layout";
import Dashboard from "@/pages/dashboard";
import CharacterStudio from "@/pages/character-studio";
import NotFound from "@/pages/not-found";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// Generic Placeholder Page for Sections
const SectionPlaceholder = ({ title }: { title: string }) => {
  const [location, setLocation] = useLocation();
  
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => setLocation("/")}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-4xl font-tech uppercase text-primary">{title}</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Content Area */}
        <div className="md:col-span-2 h-96 rounded-xl border-2 border-dashed border-muted-foreground/20 bg-muted/5 flex items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 grid-lines opacity-20" />
          <div className="text-center p-8 relative z-10">
            <p className="font-action text-2xl text-muted-foreground mb-2">Under Construction</p>
            <p className="font-ui text-sm max-w-md mx-auto">
              Capsule Corp engineers are currently assembling this module. 
              Please return to the dashboard or check back later.
            </p>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-card border shadow-sm space-y-4">
            <h3 className="font-tech text-lg border-b pb-2">Status Report</h3>
            <div className="space-y-2 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Integrity:</span>
                <span className="text-green-500">100%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Power:</span>
                <span className="text-energy-yellow">STABLE</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Access:</span>
                <span className="text-primary">GRANTED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Dashboard} />
        <Route path="/chars" component={CharacterStudio} />
        
        <Route path="/tech">
          <SectionPlaceholder title="Legendary Tech Vault" />
        </Route>
        <Route path="/battle">
          <SectionPlaceholder title="Battle History" />
        </Route>
        <Route path="/ki">
          <SectionPlaceholder title="Ki Science Lab" />
        </Route>
        <Route path="/lore">
          <SectionPlaceholder title="Universe Lore" />
        </Route>
        <Route path="/meme">
          <SectionPlaceholder title="Meme Timeline" />
        </Route>
        <Route path="/fun">
          <SectionPlaceholder title="Entertainment Zone" />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
