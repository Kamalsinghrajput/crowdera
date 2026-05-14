import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../../../src/templates/template-4/components/Navbar";
import Footer from "../../../src/templates/template-1/components/Footer"; // Assuming template 4 uses template 1 footer or similar
import Initiatives from "../../../src/templates/template-4/components/Initiatives";

export default function InitiativesPage() {
  const router = useRouter();
  const { tab } = router.query;

  return (
    <div className="bg-white min-h-screen font-sans">
      <style>{`:root { --primary: #007B39; --secondary: #FFA415; --bg-color: #121d18; }`}</style>
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

      {/* Footer placeholder if template 4 doesn't have its own SiteFooter */}
      <footer className="bg-[#121D18] py-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Chioary. All rights reserved.
      </footer>
    </div>
  );
}
