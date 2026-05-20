import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../../../src/templates/template-6/components/Navbar";
import SiteFooter from "../../../src/templates/template-6/components/SiteFooter";
import Initiatives from "../../../src/templates/template-6/components/Initiatives";

export default function InitiativesPage() {
  const router = useRouter();
  const { tab } = router.query;

  return (
    <div className="min-h-screen font-sans" style={{ background: "#F9F5EC" }}>
      <style>{`:root { --primary: #E3692A; --secondary: #F2B740; --bg-color: #2b1f18; --text-color: #F9F5EC; }`}</style>
      <Head>
        <title>Initiatives | Givico - Campaigns, Events & Fundraisers</title>
        <meta
          name="description"
          content="Explore our campaigns, events and community fundraisers."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat&family=Inter:wght@400;500;600;700;800&family=Sora:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />

      <main>
        {/* Subpage Header Banner */}
        <div className="bg-[#2b1f18] pt-[180px] pb-[100px] text-center relative overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-6 relative z-10">
            <span
              className="text-[var(--secondary)] text-3xl font-normal block mb-2"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              Our initiatives
            </span>
            <h1 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter m-0">
              EXPLORE INITIATIVES
            </h1>
          </div>
          {/* Ragged Torn-Paper Vector Edge */}
        </div>

        <Initiatives initialTab={tab || "campaigns"} />
      </main>

      <SiteFooter />
    </div>
  );
}
