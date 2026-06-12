import UrgencyBar from "@/components/UrgencyBar";
import ScrollToTop from "@/components/ScrollToTop";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogosMarquee from "@/components/LogosMarquee";
import ResultsBanner from "@/components/ResultsBanner";
import Problem from "@/components/Problem";
import WhyNow from "@/components/WhyNow";
import Outcomes from "@/components/Outcomes";
import MidCTA from "@/components/MidCTA";
import Instructors from "@/components/Instructors";
import FounderLetter from "@/components/FounderLetter";
import Curriculum from "@/components/Curriculum";
import Journey from "@/components/Journey";
import Bonuses from "@/components/Bonuses";
import CaseStudies from "@/components/CaseStudies";
import Comparison from "@/components/Comparison";
import ROIMath from "@/components/ROIMath";
import Testimonials from "@/components/Testimonials";
import ForWho from "@/components/ForWho";
import ValueStack from "@/components/ValueStack";
import Pricing from "@/components/Pricing";
import Guarantee from "@/components/Guarantee";
import Objections from "@/components/Objections";
import FAQ from "@/components/FAQ";
import TwoPaths from "@/components/TwoPaths";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

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
      <WhyNow />
      <Outcomes />
      <MidCTA
        headline="Stop renting attention. Start owning the system."
        sub="47 founders have already taken their seat in Cohort 01. Launch pricing and all three bonuses disappear when the timer hits zero."
      />
      <Instructors />
      <FounderLetter />
      <Curriculum />
      <Journey />
      <Bonuses />
      <CaseStudies />
      <Comparison />
      <ROIMath />
      <Testimonials />
      <MidCTA
        headline="Every founder on this page started exactly where you are."
        sub="The difference is 90 days and one decision. The 30-day 10× guarantee means the risk is on us, not you."
        cta="Claim my seat — $499"
      />
      <ForWho />
      <ValueStack />
      <Pricing />
      <Guarantee />
      <Objections />
      <FAQ />
      <TwoPaths />
      <FinalCTA />
      <Footer />
      <StickyCTA />
    </main>
  );
}
