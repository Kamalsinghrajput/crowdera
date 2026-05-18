import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../../../src/templates/template-4/components/Navbar";
import SiteFooter from "../../../src/templates/template-4/components/SiteFooter";
import Initiatives from "../../../src/templates/template-4/components/Initiatives";

export default function InitiativesPage() {
  const router = useRouter();
  const { tab } = router.query;

  return (
    <div className="bg-white min-h-screen font-sans">
      <style>{`:root { --primary: #007B39; --secondary: #FFA415; --bg-color: #121d18; --secondary-bg-color: #f9f9f9; }`}</style>
      <Head>
        <title>Initiatives | Chioary - Campaigns, Events & Fundraisers</title>
        <meta
          name="description"
          content="Explore our campaigns, events and community fundraisers."
        />
      </Head>

      <Navbar />

      <main className="pt-0">
        <Initiatives initialTab={tab || "campaigns"} />
      </main>

      <SiteFooter />
    </div>
  );
}
