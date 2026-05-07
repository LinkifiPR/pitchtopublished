import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogosMarquee from "@/components/LogosMarquee";
import Problem from "@/components/Problem";
import Instructors from "@/components/Instructors";
import Curriculum from "@/components/Curriculum";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";
import Bonuses from "@/components/Bonuses";
import Pricing from "@/components/Pricing";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative overflow-hidden bg-ink-950 text-paper">
      <Nav />
      <Hero />
      <LogosMarquee />
      <Problem />
      <Instructors />
      <Curriculum />
      <CaseStudies />
      <Testimonials />
      <Bonuses />
      <Pricing />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
