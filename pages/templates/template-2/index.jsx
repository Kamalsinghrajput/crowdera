import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from "../../../src/templates/template-2/components/Navbar";
import Hero from "../../../src/templates/template-2/components/Hero";
import ServicesOne from "../../../src/templates/template-2/components/ServicesOne";
import AboutOne from "../../../src/templates/template-2/components/AboutOne";
import CounterOne from "../../../src/templates/template-2/components/CounterOne";
import CoursesOne from "../../../src/templates/template-2/components/CoursesOne";
import EventOne from "../../../src/templates/template-2/components/EventOne";
import VideoOne from "../../../src/templates/template-2/components/VideoOne";
import BecomeVolunteer from "../../../src/templates/template-2/components/BecomeVolunteer";
import TeamOne from "../../../src/templates/template-2/components/TeamOne";
import TestimonialOne from "../../../src/templates/template-2/components/TestimonialOne";
import FaqOne from "../../../src/templates/template-2/components/FaqOne";
import BlogOne from "../../../src/templates/template-2/components/BlogOne";
import NewsletterOne from "../../../src/templates/template-2/components/NewsletterOne";
import SiteFooter from "../../../src/templates/template-2/components/SiteFooter";

// ScrollToTop must be client-only to avoid hydration mismatch
const ScrollToTop = dynamic(
  () => import("../../../src/templates/template-2/components/ScrollToTop"),
  { ssr: false }
);

export default function Template2() {
  return (
    <>
      <Head>
        <title>Home One || Chioary - Crowdfunding & Charity</title>
        <meta name="description" content="Chioary - A crowdfunding and charity agency empowering communities through compassionate action." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Load fonts via standard link — moved to _document ideally but works here too */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ position: "relative", overflowX: "hidden", background: "#fff" }}>
        <Navbar />
        <main>
          <Hero />
          <ServicesOne />
          <AboutOne />
          <CounterOne />
          <CoursesOne />
          <EventOne />
          <VideoOne />
          <BecomeVolunteer />
          <TeamOne />
          <TestimonialOne />
          <FaqOne />
          <BlogOne />
          <NewsletterOne />
        </main>
        <SiteFooter />
        <ScrollToTop />
      </div>
    </>);

}