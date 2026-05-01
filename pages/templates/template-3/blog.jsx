import Head from "next/head";
import Navbar from "../../../src/templates/template-3/components/Navbar";
import SiteFooter from "../../../src/templates/template-3/components/SiteFooter";
import BLog from "../../../src/templates/template-3/components/Blog";

export default function BlogPage() {
  return (
    <>
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
          <BLog isAllBlogsPage={true} />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
