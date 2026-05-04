import Head from "next/head";
import Navbar from "../../../src/templates/template-5/components/Navbar";
import SiteFooter from "../../../src/templates/template-5/components/SiteFooter";
import Team from "../../../src/templates/template-5/components/Team";

export default function TeamPage() {
  return (
    <>
      <Head>
        <title>Our Team || Tamun</title>
      </Head>
      <div
        style={{
          position: "relative",
          overflowX: "hidden",
          background: "#fff",
        }}
      >
        <Navbar />
        <main style={{ paddingTop: "50px" }}>
          <div className="bg-[#00b86b] py-[80px] text-center border-b-0">
            <h1 className="text-[48px] text-white font-['Montserrat'] font-bold">
              All Team Members
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
