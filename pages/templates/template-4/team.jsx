import Head from "next/head";
import Navbar from "../../../src/templates/template-4/components/Navbar";
import SiteFooter from "../../../src/templates/template-4/components/SiteFooter";
import Team from "../../../src/templates/template-4/components/Team";

export default function TeamPage() {
  const primaryColor = "#007B39";
  const secondaryColor = "#FFA415";
  const bgColor = "#121d18";
  const secondaryBgColor = "#f9f9f9";

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
