import Head from "next/head";
import Navbar from "../../../src/templates/template-4/components/Navbar";
import SiteFooter from "../../../src/templates/template-4/components/SiteFooter";
import BLog from "../../../src/templates/template-4/components/Blog";

export default function BlogPage() {
  return (
    <>
      <style>{`:root { --primary: #007B39; --secondary: #FFA415; --bg-color: #121d18; --secondary-bg-color: #f9f9f9; }`}</style>
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
          <div className="bg-[#f9f9f9] pt-[80px] text-center border-b border-[#E5E5E5]">
            <h1 className="text-[48px] text-[var(--bg-color)]">
              All Blog Posts
            </h1>
            <p className="text-[#6c6e76] mt-4">
              Read our latest news and inspiring stories.
            </p>
          </div>
          <BLog isAllBlogsPage={true} />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
