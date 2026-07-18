import { Navbar } from "@/components/Navbar";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { LogoStrip } from "@/components/LogoStrip";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Process } from "@/components/Process";
import { Portfolio } from "@/components/Portfolio";
import { FeaturedProject } from "@/components/FeaturedProject";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { BackToTop } from "@/components/BackToTop";
import { CookieBanner } from "@/components/CookieBanner";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <Services />
        <WhyChooseUs />
        <Process />
        <Portfolio />
        <FeaturedProject />
        <Stats />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
      <BackToTop />
      <CookieBanner />
    </>
  );
}
