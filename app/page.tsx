import Hero from "@/components/Hero";
import Superpowers from "@/components/Superpowers";
import GrammarPumpkins from "@/components/GrammarPumpkins";
import WishesSection from "@/components/WishesSection";
import Closing from "@/components/Closing";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)] selection:bg-orange-500/30 selection:text-orange-200 relative overflow-hidden">
      <Hero />
      <Superpowers />
      <GrammarPumpkins />
      <WishesSection />
      <Closing />
    </main>
  );
}
