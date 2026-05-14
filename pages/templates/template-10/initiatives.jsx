import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../../../src/templates/template-10/components/Navbar";
import FooterSection from "../../../src/templates/template-10/components/FooterSection";
import Initiatives from "../../../src/templates/template-10/components/Initiatives";

export default function InitiativesPage() {
  const router = useRouter();
  const { tab } = router.query;

  return (
    <div className="bg-white min-h-screen font-sans">
      <style>{`:root { --primary: #e8547a; --secondary: #9b59b6; }`}</style>
      <Head>
        <title>Initiatives | BigHearts - Campaigns, Events & Fundraisers</title>
        <meta
          name="description"
          content="Explore our campaigns, events and community fundraisers."
        />
      </Head>

      <Navbar />

      <main className="pt-[72px]">
        <Initiatives initialTab={tab || "campaigns"} />
      </main>

      <FooterSection />
    </div>
  );
}
