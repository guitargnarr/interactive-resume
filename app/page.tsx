import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Achievements from '@/components/Achievements';
import Timeline from '@/components/Timeline';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import AITools from '@/components/AITools';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-6 py-12">
        <Hero />
        <Achievements />
        <Timeline />
        <Skills />
        <Projects />
        <AITools />
      </main>
      <Footer />
    </>
  );
}