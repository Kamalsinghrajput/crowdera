import Head from "next/head";
import Navbar from "../../../src/templates/template-6/components/Navbar";
import SiteFooter from "../../../src/templates/template-6/components/SiteFooter";
import Team from "../../../src/templates/template-6/components/Team";

export default function TeamPage() {
  return (
    <>
      <Head>
        <title>Our Team || Givico</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Inter:wght@400;500;600;700;800&family=Sora:wght@400;600;700;800&family=Nunito:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div
        style={{
          "--primary": "#E3692A",
          "--secondary": "#F2B740",
          "--bg-color": "#2b1f18",
          "--text-color": "#F9F5EC",
          position: "relative",
          overflowX: "hidden",
          background: "#F9F5EC",
        }}
      >
        <Navbar />
        <main>
          {/* Subpage Header Banner */}
          <div className="bg-[#2b1f18] pt-[180px] pb-[100px] text-center relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
              <span
                className="text-[var(--secondary)] text-3xl font-normal block mb-2"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                Our team
              </span>
              <h1 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter m-0">
                BOARD MEMBERS
              </h1>
            </div>
            {/* Ragged Torn-Paper Vector Edge */}
          </div>

          <Team isAllTeamPage={true} />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
