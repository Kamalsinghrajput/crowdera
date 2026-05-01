import Head from "next/head";
import Navbar from "../../../src/templates/template-3/components/Navbar";
import SiteFooter from "../../../src/templates/template-3/components/SiteFooter";
import Team from "../../../src/templates/template-3/components/Team";

export default function TeamPage() {
  return (
    <>
      <Head>
        <title>Our Team || Chioary</title>
      </Head>
      <div
        style={{
          position: "relative",
          overflowX: "hidden",
          background: "#fff",
        }}
      >
        <Navbar />
        <main style={{ paddingTop: "120px" }}>
          <div className="bg-t2-lightTeal py-[80px] text-center border-b border-[#E5E5E5]">
            <h1 className="text-[48px] text-[var(--bg-color)]">
              All Team Members
            </h1>
            <p className="text-[#6c6e76] mt-4">
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
