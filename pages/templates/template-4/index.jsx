import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from "../../../src/templates/template-4/components/Navbar";
import Hero from "../../../src/templates/template-4/components/Hero";
import Services from "../../../src/templates/template-4/components/Services";
import About from "../../../src/templates/template-4/components/About";
import Causes from "../../../src/templates/template-4/components/Causes";
import Event from "../../../src/templates/template-4/components/Event";
import RecentProjects from "../../../src/templates/template-4/components/RecentProjects";
import WorkingProcess from "../../../src/templates/template-4/components/WorkingProcess";
import HelpUs from "../../../src/templates/template-4/components/HelpUs";
import Team from "../../../src/templates/template-4/components/Team";
import Testimonial from "../../../src/templates/template-4/components/Testimonial";
import Faq from "../../../src/templates/template-4/components/Faq";
import BLog from "../../../src/templates/template-4/components/Blog";
import NewsLetter from "../../../src/templates/template-4/components/Newsletter";
import SiteFooter from "../../../src/templates/template-4/components/SiteFooter";
import TopDonors from "../../../src/templates/template-4/components/TopDonors";
import Partners from "../../../src/templates/template-4/components/Partners";
import FeaturedIn from "../../../src/templates/template-4/components/FeaturedIn";

import ImpactProfile from "../../../src/templates/template-4/components/ImpactProfile";
import CounterOne from "../../../src/templates/template-4/components/CounterOne";
import ReadyCTA from "../../../src/templates/template-4/components/ReadyCTA";

// ScrollToTop must be client-only to avoid hydration mismatch
const ScrollToTop = dynamic(
  () => import("../../../src/templates/template-4/components/ScrollToTop"),
  { ssr: false },
);

export default function Template2() {
  return (
    <>
      <style>{`:root { --primary: #007B39; --secondary: #FFA415; --bg-color: #121d18; --secondary-bg-color: #f9f9f9; }`}</style>
      <Head>
        <title>Home One || Chioary - Crowdfunding & Charity</title>
        <meta
          name="description"
          content="Chioary - A crowdfunding and charity agency empowering communities through compassionate action."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Load fonts via standard link — moved to _document ideally but works here too */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        style={{
          position: "relative",
          overflowX: "hidden",
          background: "#fff",
        }}
      >
        <Navbar />
        <main>
          <div id="hero">
            <Hero />
          </div>
          <div id="services">
            <Services />
          </div>
          <div id="partners">
            <Partners />
          </div>
          <div id="working-process">
            <WorkingProcess />
          </div>
          <div id="featured-in">
            <FeaturedIn />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="impact">
            <ImpactProfile />
          </div>
          <div id="counter">
            <CounterOne />
          </div>
          <div id="events">
            <Event />
          </div>
          <div id="causes">
            <Causes />
          </div>
          <div id="testimonials">
            <Testimonial />
          </div>
          <div id="recent-projects">
            <RecentProjects />
          </div>
          <div id="help-us">
            <HelpUs />
          </div>
          <div id="team">
            <Team />
          </div>
          <div id="faq">
            <Faq />
          </div>

          <div id="top-donors">
            <TopDonors />
          </div>
          <div id="blog">
            <BLog />
          </div>
          <div id="ready-cta">
            <ReadyCTA />
          </div>
          <div id="newsletter">
            <NewsLetter />
          </div>
        </main>
        <SiteFooter />
        <ScrollToTop />
      </div>
    </>
  );
}
