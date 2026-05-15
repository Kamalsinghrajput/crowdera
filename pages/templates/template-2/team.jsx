import Head from "next/head";
import Navbar from "../../../src/templates/template-2/components/Navbar";
import SiteFooter from "../../../src/templates/template-2/components/SiteFooter";
import Team from "../../../src/templates/template-2/components/Team";

export default function TeamPage() {
  const primaryColor = "#007B39";
  const secondaryColor = "#FFA415";
  const bgColor = "#121d18";
  const secondaryBgColor = "#f9f9f9";

  return (
    <>
      <style>{`
        :root { --primary: ${primaryColor}; --secondary: ${secondaryColor}; --bg-color: ${bgColor}; --secondary-bg-color: ${secondaryBgColor}; }
        .t2-btn { display: inline-flex; align-items: center; text-decoration: none; border: none; background: none; cursor: pointer; padding: 0; }
        .t2-btn span { position: relative; display: inline-flex; align-items: center; justify-content: center; height: 50px; padding: 0 35px; background-color: var(--bg-color, #121d18); color: white; border-radius: 25px; font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em; z-index: 1; overflow: hidden; transition: all 500ms ease; white-space: nowrap; }
        .t2-btn span::before { content: ''; position: absolute; inset: 0; background-color: var(--secondary, #FFA415); transform-origin: left; transform: scaleX(0); transition: transform 0.8s cubic-bezier(0, 0.96, 0.58, 1.1); z-index: -1; }
        .t2-btn:hover span::before { transform: scaleX(1); }
        .t2-btn:hover span { color: white; }
        .t2-btn i { display: none; }
        .t2-btn.t2-btn-primary span { background-color: var(--primary, #007B39); }
        .t2-btn.t2-btn-secondary span { background-color: var(--secondary, #FFA415); color: var(--bg-color, #121d18); }
        .t2-btn.t2-btn-secondary span::before { background-color: var(--bg-color, #121d18); }
        .t2-btn.t2-btn-secondary:hover span { color: white; }
        .t2-text-btn { display: inline-flex; align-items: center; font-size: 13px; color: var(--primary, #007B39); text-decoration: none; text-transform: uppercase; font-weight: 500; letter-spacing: 0.1em; transition: color 0.3s; }
        .t2-text-btn:hover { color: var(--secondary, #FFA415); }
      `}</style>
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
