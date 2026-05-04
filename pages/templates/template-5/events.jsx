import Head from "next/head";
import Navbar from "../../../src/templates/template-5/components/Navbar";
import SiteFooter from "../../../src/templates/template-5/components/SiteFooter";
import Event from "../../../src/templates/template-5/components/Event";

export default function EventsPage() {
  return (
    <>
      <Head>
        <title>Our Events || Tamun</title>
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
              All Upcoming Events
            </h1>
            <p className="text-white/90 font-['Inter'] mt-4 text-[18px]">
              Join our community in these impactful events.
            </p>
          </div>
          <Event isAllEventsPage={true} />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
