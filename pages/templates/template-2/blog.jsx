import Head from "next/head";
import Navbar from "../../../src/templates/template-2/components/Navbar";
import SiteFooter from "../../../src/templates/template-2/components/SiteFooter";
import BLog from "../../../src/templates/template-2/components/Blog";

export default function BlogPage() {
  const primaryColor = "#007B39";
  const secondaryColor = "#FFA415";
  const bgColor = "#121d18";
  const secondaryBgColor = "#f9f9f9";

  return (
    <>
      <style>{`:root { --primary: ${primaryColor}; --secondary: ${secondaryColor}; --bg-color: ${bgColor}; --secondary-bg-color: ${secondaryBgColor}; }`}</style>
      <Head>
        <title>Our Blog || Chioary</title>
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
              All Blog Posts
            </h1>
            <p className="text-[#6c6e76] mt-4">
              Read our latest news and inspiring stories.
            </p>
          </div>
          <BLog />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
