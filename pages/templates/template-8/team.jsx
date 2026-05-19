import Head from "next/head";
import Navbar from "../../../src/templates/template-8/components/Navbar";
import SiteFooter from "../../../src/templates/template-8/components/SiteFooter";
import Team from "../../../src/templates/template-8/components/Team";

export default function TeamPage() {
  return (
    <>
      <Head>
        <title>Our Team || Tamun</title>
      </Head>
      <div
        style={{
          "--primary": "#006755",
          "--secondary": "#CAA166",
          "--bg-color": "#1A1A1A",
          "--text-color": "#777777",
          position: "relative",
          overflowX: "hidden",
          background: "#fff",
        }}
      >
        <Navbar />
        <main style={{ paddingTop: "50px" }}>
          <div className="bg-[var(--primary)] py-[80px] text-center border-b-0 mt-[30px]">
            <h1 className="text-[48px] text-white font-['Montserrat'] font-bold">
              Board Members
            </h1>
            <p className="text-white/90 font-['Inter'] mt-4 text-[18px]">
              Meet the dedicated people behind our mission.
            </p>
          </div>
          <Team isAllTeamPage={true} />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
