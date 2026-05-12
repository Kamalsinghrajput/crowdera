import Head from "next/head";
import Navbar from "../../../src/templates/template-8/components/Navbar";
import SiteFooter from "../../../src/templates/template-8/components/SiteFooter";
import BLog from "../../../src/templates/template-8/components/Blog";

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Our Blog || Tamun</title>
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
              All Blog Posts
            </h1>
            <p className="text-white/90 font-['Inter'] mt-4 text-[18px]">
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
