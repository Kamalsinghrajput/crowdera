import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from "../../../src/templates/template-2/components/Navbar";
import Hero from "../../../src/templates/template-2/components/Hero";
import Services from "../../../src/templates/template-2/components/Services";
import About from "../../../src/templates/template-2/components/About";
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
import TopDonors from "../../../src/templates/template-2/components/TopDonors";
import ImpactProfile from "../../../src/templates/template-2/components/ImpactProfile";
import CounterOne from "../../../src/templates/template-2/components/CounterOne";
import FeaturedIn from "../../../src/templates/template-2/components/FeaturedIn";
import Partners from "../../../src/templates/template-2/components/Partners";
import ReadyCTA from "../../../src/templates/template-2/components/ReadyCTA";

const ScrollToTop = dynamic(
  () => import("../../../src/templates/template-2/components/ScrollToTop"),
  { ssr: false },
);

export default function Template2() {
  const buttonStyles = `
    :root {
      --primary: #1A3A37;
      --secondary: #FFA415;
      --bg-color: #121D18;
    }
    .t2-btn { display: inline-flex; align-items: center; gap: 0; text-decoration: none; border: none; background: none; cursor: pointer; padding: 0; }
    .t2-btn span { position: relative; display: inline-flex; align-items: center; justify-content: center; height: 50px; padding: 0 35px; background-color: var(--bg-color); color: white; border-radius: 25px; font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em; z-index: 1; overflow: hidden; transition: all 500ms ease; white-space: nowrap; }
    .t2-btn span::before { content: ''; position: absolute; inset: 0; background-color: var(--secondary); transform-origin: left; transform: scaleX(0); transition: transform 0.8s cubic-bezier(0, 0.96, 0.58, 1.1); z-index: -1; }
    .t2-btn:hover span::before { transform: scaleX(1); transition: transform 1.2s cubic-bezier(0, 0.96, 0.58, 1.1); }
    .t2-btn:hover span { color: white; }
    .t2-btn i { display: none; }
    .t2-btn.t2-btn-primary span { background-color: var(--primary); }
    .t2-btn.t2-btn-secondary span { background-color: var(--secondary); color: var(--bg-color); }
    .t2-btn.t2-btn-secondary span::before { background-color: var(--bg-color); }
    .t2-btn.t2-btn-secondary:hover span { color: white; }
    .t2-text-btn { display: inline-flex; align-items: center; font-size: 13px; color: var(--primary); text-decoration: none; text-transform: uppercase; font-weight: 500; letter-spacing: 0.1em; transition: color 0.3s; }
    .t2-text-btn:hover { color: var(--secondary); }
    .t2-text-btn svg { transition: transform 0.3s; }
    .t2-text-btn:hover svg { transform: translateX(5px); }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: buttonStyles }} />
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
          <div id="impact">
            <ImpactProfile />
          </div>
          <div id="counter">
            <CounterOne />
          </div>
          <div id="top-donors">
            <TopDonors />
          </div>
          <div id="causes">
            <Causes />
          </div>
          <div id="events">
            <Event />
          </div>
          <div id="video">
            <VideoOne />
          </div>
          <div id="volunteer">
            <BecomeVolunteer />
          </div>
          <div id="team">
            <Team />
          </div>
          <div id="partners">
            <Partners />
          </div>
          <div id="testimonials">
            <Testimonial />
          </div>
          <div id="featured-in">
            <FeaturedIn />
          </div>
          <div id="faq">
            <Faq />
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
