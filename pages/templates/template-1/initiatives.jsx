import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../../../src/templates/template-1/components/Navbar";
import Footer from "../../../src/templates/template-1/components/Footer";
import Initiatives from "../../../src/templates/template-1/components/Initiatives";

export default function InitiativesPage() {
  const router = useRouter();
  const { tab } = router.query;

  return (
    <div className="bg-white min-h-screen font-sans">
      <style>{`:root { --primary: #FFCA08; --secondary: #00715D; }`}</style>
      <Head>
        <title>Initiatives | Template 1 - Campaigns, Events & Fundraisers</title>
        <meta
          name="description"
          content="Explore our campaigns, events and community fundraisers."
        />
      </Head>

      <Navbar />

      <main className="pt-20">
        <Initiatives initialTab={tab || "campaigns"} />
      </main>

      <Footer />
    </div>
  );
}
