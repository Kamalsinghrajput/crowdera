import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../../../src/templates/template-8/components/Navbar";
import SiteFooter from "../../../src/templates/template-8/components/SiteFooter";
import Initiatives from "../../../src/templates/template-8/components/Initiatives";

export default function InitiativesPage() {
  const router = useRouter();
  const { tab } = router.query;

  return (
    <div className="bg-white min-h-screen font-sans">
      <style>{`:root { --primary: #00715D; --secondary: #D9A86A; }`}</style>
      <Head>
        <title>Initiatives | Charitia - Campaigns, Events & Fundraisers</title>
        <meta
          name="description"
          content="Explore our campaigns, events and community fundraisers."
        />
      </Head>

      <Navbar />

      <main className="pt-[130px]">
        <Initiatives initialTab={tab || "campaigns"} />
      </main>

      <SiteFooter />
    </div>
  );
}
