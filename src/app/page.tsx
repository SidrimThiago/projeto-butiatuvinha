import { Header } from '@/components/features/Header'
import { Hero } from '@/components/features/Hero';
import { About } from '@/components/features/About';
import { Methodology } from '@/components/features/Methodology';
import { Structure } from '@/components/features/Structure';
import { News } from '@/components/features/News';
import { Contact } from '@/components/features/Contact';
import { Footer } from '@/components/features/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Methodology />
        <Structure />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}