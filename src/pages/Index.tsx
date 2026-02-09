import { BurfordHero } from "@/components/BurfordHero";
import { SteepStory } from "@/components/SteepStory";
import { DailyRitualsMenu } from "@/components/DailyRitualsMenu";

const Index = () => {
  return (
    <main className="min-h-screen w-full bg-background selection:bg-stone-300">
      <BurfordHero />
      <SteepStory />
      <DailyRitualsMenu />
      
      {/* Simple Footer Placeholder */}
      <footer className="bg-stone-900 py-12 text-center text-stone-400">
        <p className="font-serif text-lg">The Cotswold Steep</p>
        <p className="text-sm mt-2">© 2024 Burford Hospitality</p>
      </footer>
    </main>
  );
};

export default Index;
