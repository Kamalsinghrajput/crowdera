import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from "../../../src/templates/template-8/components/Navbar";
import Hero from "../../../src/templates/template-8/components/Hero";
import Services from "../../../src/templates/template-8/components/Services";
import Partners from "../../../src/templates/template-8/components/Partners";
import About from "../../../src/templates/template-8/components/About";
import CounterOne from "../../../src/templates/template-8/components/CounterOne";
import Causes from "../../../src/templates/template-8/components/Causes";
import Event from "../../../src/templates/template-8/components/Event";
import Team from "../../../src/templates/template-8/components/Team";
import Testimonial from "../../../src/templates/template-8/components/Testimonial";
import Faq from "../../../src/templates/template-8/components/Faq";
import JoinUsVolunteer from "../../../src/templates/template-8/components/JoinUsVolunteer";
import GetInTouch from "../../../src/templates/template-8/components/GetInTouch";
import BLog from "../../../src/templates/template-8/components/Blog";
import NewsLetter from "../../../src/templates/template-8/components/Newsletter";
import SiteFooter from "../../../src/templates/template-8/components/SiteFooter";
import ImpactProfile from "../../../src/templates/template-8/components/ImpactProfile";
import TopDonors from "../../../src/templates/template-8/components/TopDonors";

// ScrollToTop must be client-only to avoid hydration mismatch
const ScrollToTop = dynamic(
  () => import("../../../src/templates/template-2/components/ScrollToTop"),
  { ssr: false },
);

export default function Template2() {
  return (
    <>
      <Head>
        <title>Home One || Tamun - Crowdfunding & Charity</title>
        <meta
          name="description"
          content="Tamun - A crowdfunding and charity agency empowering communities through compassionate action."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Load fonts via standard link Ã¢â‚¬â€ moved to _document ideally but works here too */}
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
          <div id="partners">
            <Partners />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="causes">
            <Causes />
          </div>
          <div id="testimonials">
            <Testimonial />
          </div>
          <div id="services">
            <Services />
          </div>
          <div id="join-us-volunteer">
            <JoinUsVolunteer />
          </div>
          <div id="events">
            <Event />
          </div>
          <div id="counter">
            <CounterOne />
          </div>
          <div id="team">
            <Team />
          </div>
          <div id="faq">
            <Faq />
          </div>

          <div id="impact">
            <ImpactProfile />
          </div>
          <div id="get-in-touch">
            <GetInTouch />
          </div>
          <div id="top-donors">
            <TopDonors />
          </div>
          <div id="blog">
            <BLog />
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
