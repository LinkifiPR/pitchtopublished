import UrgencyBar from "@/components/UrgencyBar";
import ScrollToTop from "@/components/ScrollToTop";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogosMarquee from "@/components/LogosMarquee";
import ResultsBanner from "@/components/ResultsBanner";
import Problem from "@/components/Problem";
import Outcomes from "@/components/Outcomes";
import Instructors from "@/components/Instructors";
import Curriculum from "@/components/Curriculum";
import Bonuses from "@/components/Bonuses";
import CaseStudies from "@/components/CaseStudies";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import ForWho from "@/components/ForWho";
import ValueStack from "@/components/ValueStack";
import Pricing from "@/components/Pricing";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative overflow-hidden text-ink">
      <ScrollToTop />
      <UrgencyBar />
      <Nav />
      <Hero />
      <LogosMarquee />
      <ResultsBanner />
      <Problem />
      <Outcomes />
      <Instructors />
      <Curriculum />
      <Bonuses />
      <CaseStudies />
      <Comparison />
      <Testimonials />
      <ForWho />
      <ValueStack />
      <Pricing />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
