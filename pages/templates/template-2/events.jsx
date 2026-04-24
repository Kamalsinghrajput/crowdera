import Head from "next/head";
import Navbar from "../../../src/templates/template-2/components/Navbar";
import SiteFooter from "../../../src/templates/template-2/components/SiteFooter";
import Event from "../../../src/templates/template-2/components/Event";

export default function EventsPage() {
  return (
    <>
      <Head>
        <title>Our Events || Chioary</title>
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
            <h1 className="text-[48px] text-t2-dark">All Upcoming Events</h1>
            <p className="text-t2-gray mt-4">
              Join our community in these impactful events.
            </p>
          </div>
          <Event />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
