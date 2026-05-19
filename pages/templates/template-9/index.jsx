import React, { useEffect, useRef } from "react";
import Head from "next/head";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import dynamic from "next/dynamic";
import Navbar from "../../../src/templates/template-9/components/Navbar";
import Hero from "../../../src/templates/template-9/components/Hero";
import FeaturedIn from "../../../src/templates/template-9/components/FeaturedIn";
import Services from "../../../src/templates/template-9/components/Services";
import Partners from "../../../src/templates/template-9/components/Partners";
import About from "../../../src/templates/template-9/components/About";
import CounterOne from "../../../src/templates/template-9/components/CounterOne";
import Causes from "../../../src/templates/template-9/components/Causes";
import Event from "../../../src/templates/template-9/components/Event";
import Team from "../../../src/templates/template-9/components/Team";
import Testimonial from "../../../src/templates/template-9/components/Testimonial";
import Faq from "../../../src/templates/template-9/components/Faq";
import JoinUsVolunteer from "../../../src/templates/template-9/components/JoinUsVolunteer";
import GetInTouch from "../../../src/templates/template-9/components/GetInTouch";
import BLog from "../../../src/templates/template-9/components/Blog";
import ReadyCTA from "../../../src/templates/template-9/components/ReadyCTA";
import NewsLetter from "../../../src/templates/template-9/components/Newsletter";
import SiteFooter from "../../../src/templates/template-9/components/SiteFooter";
import ImpactProfile from "../../../src/templates/template-9/components/ImpactProfile";
import TopDonors from "../../../src/templates/template-9/components/TopDonors";

// ScrollToTop must be client-only to avoid hydration mismatch
const ScrollToTop = dynamic(
  () => import("../../../src/templates/template-2/components/ScrollToTop"),
  { ssr: false },
);

export default function Template2() {
  const mainRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    let ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('main > div');
      
      sections.forEach((section) => {
        if (section.id === "hero") return; // Skip hero to avoid double animation if it has its own
        
        const headings = section.querySelectorAll('h1, h2, h3');
        const structuralElements = section.querySelectorAll('.container .grid > div, .container > .flex > div:not(.absolute), .container > p');

        // Animate headings
        if (headings.length > 0) {
          gsap.fromTo(
            headings,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 85%",
                toggleActions: "play none none reverse",
              }
            }
          );
        }

        // Animate structural content items (cards, grid elements, flex children)
        if (structuralElements.length > 0) {
          gsap.fromTo(
            structuralElements,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3.out",
              delay: 0.2, // slightly after headings
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reverse",
              }
            }
          );
        } else if (headings.length === 0) {
            // Fallback for sections without specific headings/grids
            gsap.fromTo(
              section,
              { y: 30, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: section,
                  start: "top 85%",
                  toggleActions: "play none none reverse",
                }
              }
            );
        }
      });
    }, mainRef);
    
    return () => ctx.revert();
  }, []);

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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@400;600;700;800&family=Nunito:wght@400;600;700;800&family=Caveat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        ref={mainRef}
        style={{
          "--primary": "#E3692A",
          "--secondary": "#F2B740",
          "--bg-color": "#2b1f18",
          "--text-color": "#F9F5EC",
          position: "relative",
          /* NOTE: overflowX:hidden removed — it breaks position:sticky on descendants.
             Individual sections (Hero, Event, etc.) handle their own overflow. */
          background: "#fff",
        }}
      >
        <Navbar />
        <main>
          <div id="hero">
            <Hero />
          </div>
          <div id="featured-in">
            <FeaturedIn />
          </div>

          <div id="about">
            <About />
          </div>
          <div id="partners">
            <Partners />
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
