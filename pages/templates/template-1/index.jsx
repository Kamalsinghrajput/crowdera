import Head from "next/head";
import Navbar from "../../../src/templates/template-1/components/Navbar";
import Footer from "../../../src/templates/template-1/components/Footer";
import Hero from "../../../src/templates/template-1/components/Hero";
import ServicesMission from "../../../src/templates/template-1/components/ServicesMission";
import FeaturedIn from "../../../src/templates/template-1/components/FeaturedIn";
import AboutUs from "../../../src/templates/template-1/components/AboutUs";
import ImpactCounters from "../../../src/templates/template-1/components/ImpactCounters";
import ImpactProfile from "../../../src/templates/template-1/components/ImpactProfile";

import CampaignsFocus from "../../../src/templates/template-1/components/CampaignsFocus";
import BoardMembers from "../../../src/templates/template-1/components/BoardMembers";
import TopDonors from "../../../src/templates/template-1/components/TopDonors";
import Testimonials from "../../../src/templates/template-1/components/Testimonials";
import Events from "../../../src/templates/template-1/components/Events";

export default function Template1() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Head>
        <title>Charifund | Template 1 - Charity &amp; Donation</title>
        <meta
          name="description"
          content="Template 1 - Next.js charity template using GSAP and Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <Navbar />

      <main>
        {/* Sections */}
        <Hero />
        <ServicesMission />
        <FeaturedIn />
        <AboutUs />
        <ImpactCounters />
        <ImpactProfile />
        <CampaignsFocus />
        <BoardMembers />
        <TopDonors />
        <Testimonials />
        <Events />

        {/* Gallery Carousel */}
        {/* <GalleryCarousel /> */}

        {/* Become a Volunteer CTA */}
        <section className="bg-brand-yellow py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-6">
              Become a Volunteer To Help Them
            </h2>
            <p className="text-brand-dark/80 max-w-2xl mx-auto mb-8 text-lg font-medium">
              Join our global community of volunteers today and make a real
              difference in the lives of those who need it most.
            </p>
            <button className="bg-[#FEC908] text-black font-bold py-4 px-10 rounded-full hover:text-white hover:bg-[#00715D] transition-all transform shadow-xl">
              Join With Us
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
