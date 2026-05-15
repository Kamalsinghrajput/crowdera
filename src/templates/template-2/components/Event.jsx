import Link from "next/link";


const EVENTS = [
  {
    date: "10 August",
    img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=600&q=80",
    title: "Annual Food & Nutrition Drive",
    by: "Brooklyn Simmons",
    time: "09:00 AM - 01:00 PM",
  },
  {
    date: "23 April",
    img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=600&q=80",
    title: "Community Health Awareness Day",
    by: "Courtney Henry",
    time: "10:00 AM - 03:00 PM",
  },
  {
    date: "03 June",
    img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=600&q=80",
    title: "Environmental Clean-Up & Green Walk",
    by: "Ronald Richards",
    time: "07:30 AM - 12:00 PM",
  },
  {
    date: "10 March",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80",
    title: "Children's Education Fundraising Gala",
    by: "Wade Warren",
    time: "06:00 PM - 09:30 PM",
  },
];

export default function Event() {
  const primaryColor = "#007B39";
  const secondaryColor = "#FFA415";
  const bgColor = "#121d18";
  const secondaryBgColor = "#f9f9f9";


  return (
    <section className="bg-white py-[120px] pb-[80px] relative overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `:root { --primary: ${primaryColor}; --secondary: ${secondaryColor}; --bg-color: ${bgColor}; --secondary-bg-color: ${secondaryBgColor}; }` }} />
      {/* Decorative SVG Blob (Left Side) */}
      <div
        className="absolute top-0 left-[-100px] w-96 h-96 opacity-10 pointer-events-none rotate-12"
        style={{
          maskImage: "url(/assets/template-2-stats.svg)",
          WebkitMaskImage: "url(/assets/template-2-stats.svg)",
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
          backgroundColor: "var(--t2-secondary)",
        }}
      />
      {/* Decorative SVG Blob (Right Side) */}
      <div
        className="absolute bottom-0 right-[-100px] w-96 h-96 opacity-[0.07] pointer-events-none -rotate-45"
        style={{
          maskImage: "url(/assets/template-2-stats.svg)",
          WebkitMaskImage: "url(/assets/template-2-stats.svg)",
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
          backgroundColor: "var(--t2-dark)",
        }}
      />

      <div className="max-w-[1320px] mx-auto px-3 relative z-10">
        {/* Section title */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-3 mb-4 relative z-10">
            <div className="w-2 h-2 rounded-full bg-[var(--secondary)]" />
            <span className="text-[16px] text-[var(--bg-color)] italic">Our Events</span>
          </div>
          <h2 className="text-[clamp(32px,4vw,48px)] leading-[1.2] text-[var(--bg-color)] relative z-10">
            Events Schedule Upcoming
            <br /> Events.
          </h2>

          {/* Centered SVG Blob behind title */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 opacity-[0.06] pointer-events-none"
            style={{
              maskImage: "url(/assets/template-2-stats.svg)",
              WebkitMaskImage: "url(/assets/template-2-stats.svg)",
              maskSize: "contain",
              WebkitMaskSize: "contain",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
              maskPosition: "center",
              WebkitMaskPosition: "center",
              backgroundColor: "var(--t2-dark)",
            }}
          />
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EVENTS.map((ev, i) => (
            <div
              key={i}
              className="group flex flex-col sm:flex-row bg-[var(--secondary-bg-color)] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
            >
              {/* Image + date badge */}
              <div className="relative w-full sm:w-[260px] h-[260px] sm:h-auto shrink-0 overflow-hidden">
                <img
                  src={ev.img}
                  alt={ev.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />

                {/* Date badge */}
                <div className="absolute bottom-0 left-0 bg-[var(--primary)] text-white px-5 py-2.5 text-[14px]">
                  {ev.date}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-center gap-4 flex-grow">
                <h3 className="text-[22px] text-[var(--bg-color)] leading-[1.4] transition-colors duration-300 group-hover:text-t2-secondary">
                  <a href="#" className="block">
                    {ev.title}
                  </a>
                </h3>

                <p className="text-[15px] text-[#6c6e76]">
                  By {ev.by}{" "}
                  <span className="ml-3 text-[var(--secondary)]">{ev.time}</span>
                </p>

                {/* Read More Link */}
                <a href="#" className="t2-text-btn mt-2">
                  <span />
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* See All button */}
        <div className="text-center mt-16 relative z-10">
          <Link href="/templates/template-2/initiatives?tab=events">
            <a className="t2-btn">
              <span>See All</span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
