import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from "../../../src/templates/template-4/components/Navbar";
import Hero from "../../../src/templates/template-4/components/Hero";
import Services from "../../../src/templates/template-4/components/Services";
import About from "../../../src/templates/template-4/components/About";
import CounterOne from "../../../src/templates/template-4/components/CounterOne";
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
import ImpactProfile from "../../../src/templates/template-4/components/ImpactProfile";
import TopDonors from "../../../src/templates/template-4/components/TopDonors";

// ScrollToTop must be client-only to avoid hydration mismatch
const ScrollToTop = dynamic(
  () => import("../../../src/templates/template-2/components/ScrollToTop"),
  { ssr: false },
);

export default function Template2() {
  const buttonStyles = `
    :root {
      --primary: #007B39;
      --secondary: #FFA415;
      --bg-color: #121d18;
      --secondary-bg-color: #f9f9f9;
      --t2-primary: #007B39;
      --t2-secondary: #FFA415;
      --t2-dark: #121d18;
      --t2-gray: #6c6e76;
      --t2-light: #f9f9f9;
    }
    .t2-btn { display: inline-flex; align-items: center; gap: 0; text-decoration: none; border: none; background: none; cursor: pointer; padding: 0; }
    .t2-btn span { position: relative; display: inline-flex; align-items: center; justify-content: center; height: 50px; padding: 0 35px; background-color: var(--bg-color, #121d18); color: white; border-radius: 25px; font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em; z-index: 1; overflow: hidden; transition: all 500ms ease; white-space: nowrap; }
    .t2-btn span::before { content: ""; position: absolute; inset: 0; background-color: var(--secondary, #FFA415); transform-origin: left; transform: scaleX(0); transition: transform 0.8s cubic-bezier(0, 0.96, 0.58, 1.1); z-index: -1; }
    .t2-btn:hover span::before { transform: scaleX(1); transition: transform 1.2s cubic-bezier(0, 0.96, 0.58, 1.1); }
    .t2-btn:hover span { color: white; }
    .t2-btn i { position: relative; display: flex; align-items: center; justify-content: center; width: 50px; height: 50px; background-color: var(--bg-color, #121d18); border-radius: 50%; font-size: 18px; color: white; overflow: hidden; transition: all 500ms ease; z-index: 2; margin-left: -10px; }
    .t2-btn i::after { content: ""; position: absolute; inset: 0; background-color: var(--secondary, #FFA415); transform-origin: right; transform: scaleX(0); transition: transform 0.8s cubic-bezier(0, 0.96, 0.58, 1.1); z-index: -1; }
    .t2-btn:hover i::after { transform: scaleX(1); transition: transform 1.2s cubic-bezier(0, 0.96, 0.58, 1.1); }
    .t2-btn:hover i { color: white; }
    .t2-btn.t2-btn-primary span, .t2-btn.t2-btn-primary i { background-color: var(--primary, #007B39); }
    .t2-btn.t2-btn-secondary span, .t2-btn.t2-btn-secondary i { background-color: var(--secondary, #FFA415); color: var(--bg-color, #121d18); }
    .t2-btn.t2-btn-secondary span::before, .t2-btn.t2-btn-secondary i::after { background-color: var(--bg-color, #121d18); }
    .t2-btn.t2-btn-secondary:hover span, .t2-btn.t2-btn-secondary:hover i { color: white; }
    .t2-text-btn { display: inline-flex; align-items: center; font-size: 13px; color: var(--primary, #007B39); text-decoration: none; text-transform: uppercase; font-weight: 500; letter-spacing: 0.1em; transition: color 0.3s; }
    .t2-text-btn:hover { color: var(--secondary, #FFA415); }
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

          <div id="working-process">
            <WorkingProcess />
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
