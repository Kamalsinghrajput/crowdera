import Head from "next/head";
import Navbar from "../../../src/templates/template-2/components/Navbar";
import SiteFooter from "../../../src/templates/template-2/components/SiteFooter";
import Team from "../../../src/templates/template-2/components/Team";

export default function TeamPage() {
  return (
    <>
      <style>{`:root { --primary: #007B39; --secondary: #FFA415; --bg-color: #121d18; --secondary-bg-color: #f9f9f9; }`}</style>
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
          <Team isAllTeamPage={true} />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
