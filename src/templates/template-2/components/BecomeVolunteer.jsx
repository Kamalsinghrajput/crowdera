export default function BecomeVolunteer() {
  const primaryColor = "#007B39";
  const secondaryColor = "#FFA415";
  const bgColor = "#121d18";
  const secondaryBgColor = "#f9f9f9";

  return (
    <section className="relative p-0 overflow-hidden bg-[var(--bg-color)]">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            :root { --primary: ${primaryColor}; --secondary: ${secondaryColor}; --bg-color: ${bgColor}; --secondary-bg-color: ${secondaryBgColor}; }
            .t2-btn.t2-btn-vol-left span, .t2-btn.t2-btn-vol-left i { background-color: #FFA415 !important; color: white !important; }
            .t2-btn.t2-btn-vol-left span::before, .t2-btn.t2-btn-vol-left i::after { background-color: #007B39 !important; }
            
            .t2-btn.t2-btn-vol-right span, .t2-btn.t2-btn-vol-right i { background-color: #007B39 !important; color: white !important; }
            .t2-btn.t2-btn-vol-right span::before, .t2-btn.t2-btn-vol-right i::after { background-color: #FFA415 !important; }
          `,
        }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Panel 1 — Join Us Volunteer */}
        <div className="relative min-h-[350px] md:min-h-[480px] overflow-hidden group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 grayscale"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80)",
            }}
          />
          <div className="absolute inset-0 bg-[#121D18]/75 transition-colors duration-500 group-hover:bg-[#121D18]/85" />

          <div className="relative z-10 px-6 py-16 md:py-24 h-full flex flex-col items-center justify-center text-center">
            <h3 className="font-['Inter'] font-bold text-[clamp(28px,3vw,36px)] text-white italic mb-4 leading-[1.3]">
              Join Us Volunteer
            </h3>
            <p className="font-['Sora'] text-[15px] text-white/80 leading-[1.8] mb-8 max-w-md">
              Becoming A Volunteer With Chioary Means Joining A Dedicated Team
              Committed To Making A Difference. We Welcome Individuals From All
              Walks Of Life Who Are Passionate
            </p>
            <div className="flex items-center gap-2">
              <a href="#" className="t2-btn t2-btn-vol-left">
                <span>See More</span>
              </a>
            </div>
          </div>
        </div>

        {/* Panel 2 — Become Volunteer */}
        <div className="relative min-h-[350px] md:min-h-[480px] overflow-hidden group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 grayscale"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80)",
            }}
          />
          <div className="absolute inset-0 bg-black/40 z-[1]" />
          <div className="absolute inset-0 bg-[var(--primary)]/90 transition-colors duration-500 group-hover:bg-[var(--primary)]/95 mix-blend-multiply z-[2]" />

          <div className="relative z-10 px-6 py-16 md:py-24 h-full flex flex-col items-center justify-center text-center">
            <h3 className="font-['Inter'] font-bold text-[clamp(28px,3vw,36px)] text-white italic mb-4 leading-[1.3]">
              Become Volunteer
            </h3>
            <p className="font-['Sora'] text-[15px] text-white/80 leading-[1.8] mb-8 max-w-md">
              Becoming A Volunteer With Chioary Means Joining A Dedicated Team
              Committed To Making A Difference. We Welcome Individuals From All
              Walks Of Life Who Are Passionate
            </p>
            <div className="flex items-center gap-2">
              <a href="#" className="t2-btn t2-btn-vol-right">
                <span>See More</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Center overlapping heart icon */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden md:flex items-center justify-center z-20">
        <img
          src="/assets/overlapping heart.svg"
          alt="Heart Icon"
          className="w-28 h-28 object-contain invert mix-blend-screen opacity-90"
        />
      </div>
    </section>
  );
}
