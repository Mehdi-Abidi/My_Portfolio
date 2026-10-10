import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Work />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
