import Head from "next/head";
import Navbar from "../../../src/templates/template-10/components/Navbar";
import HeroSection from "../../../src/templates/template-10/components/HeroSection";
import AboutSection from "../../../src/templates/template-10/components/AboutSection";
import ImpactSection from "../../../src/templates/template-10/components/ImpactSection";
import DonationsSection from "../../../src/templates/template-10/components/DonationsSection";
import CausesSection from "../../../src/templates/template-10/components/CausesSection";
import EventsSection from "../../../src/templates/template-10/components/EventsSection";
import TopDonorsSection from "../../../src/templates/template-10/components/TopDonorsSection";
import TestimonialsSection from "../../../src/templates/template-10/components/TestimonialsSection";
import NewsletterSection from "../../../src/templates/template-10/components/NewsletterSection";
import FooterSection from "../../../src/templates/template-10/components/FooterSection";

export default function Template10() {
  return (
    <>
      <Head>
        <title>BigHearts – Fairy | Template 10</title>
        <meta
          name="description"
          content="BigHearts – the largest global crowdfunding community connecting nonprofits, donors, and companies worldwide."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="font-sans antialiased overflow-x-hidden">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ImpactSection />
          <DonationsSection />
          <CausesSection />
          <EventsSection />
          <TopDonorsSection />
          <TestimonialsSection />
          <NewsletterSection />
        </main>
        <FooterSection />
      </div>
    </>
  );
}
