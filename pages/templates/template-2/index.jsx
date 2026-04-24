import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from "../../../src/templates/template-2/components/Navbar";
import Hero from "../../../src/templates/template-2/components/Hero";
import Services from "../../../src/templates/template-2/components/Services";
import About from "../../../src/templates/template-2/components/About";
import CounterOne from "../../../src/templates/template-2/components/CounterOne";
import Causes from "../../../src/templates/template-2/components/Causes";
import Event from "../../../src/templates/template-2/components/Event";
import VideoOne from "../../../src/templates/template-2/components/VideoOne";
import BecomeVolunteer from "../../../src/templates/template-2/components/BecomeVolunteer";
import Team from "../../../src/templates/template-2/components/Team";
import Testimonial from "../../../src/templates/template-2/components/Testimonial";
import Faq from "../../../src/templates/template-2/components/Faq";
import BLog from "../../../src/templates/template-2/components/Blog";
import NewsLetter from "../../../src/templates/template-2/components/Newsletter";
import SiteFooter from "../../../src/templates/template-2/components/SiteFooter";
import ImpactProfile from "../../../src/templates/template-2/components/ImpactProfile";
import TopDonors from "../../../src/templates/template-2/components/TopDonors";

// ScrollToTop must be client-only to avoid hydration mismatch
const ScrollToTop = dynamic(
  () => import("../../../src/templates/template-2/components/ScrollToTop"),
  { ssr: false },
);

export default function Template2() {
  return (
    <>
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
          <div id="about">
            <About />
          </div>
          <ImpactProfile />
          <CounterOne />
          <TopDonors />
          <div id="causes">
            <Causes />
          </div>
          <div id="events">
            <Event />
          </div>
          <VideoOne />
          <BecomeVolunteer />
          <div id="team">
            <Team />
          </div>
          <div id="testimonials">
            <Testimonial />
          </div>
          <div id="faq">
            <Faq />
          </div>
          <div id="blog">
            <BLog />
          </div>
          <NewsLetter />
        </main>
        <SiteFooter />
        <ScrollToTop />
      </div>
    </>
  );
}
