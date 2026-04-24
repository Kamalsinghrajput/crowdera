import FloatingBird from "./FloatingBird";
const STATS = [
  { num: "20", suffix: " billion", label: "People Helped", color: "#FBD9D7" },
  { num: "200", suffix: "+", label: "Country Impacted", color: "#C6F3EE" },
  { num: "50", suffix: "K+", label: "Volunteer", color: "#FCE9C6" },
  { num: "1000", suffix: "+", label: "Successful Project", color: "#E3D7F6" },
];

export default function CounterOne() {
  return (
    <section className="bg-white py-[60px] pb-[80px] border-t border-[#F0F0F0]">
      <FloatingBird position="right" />
      <div className="max-w-[1320px] mx-auto px-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className={`text-center py-10 px-6 relative ${
                i < STATS.length - 1 ? "sm:border-r border-[#F0F0F0]" : ""
              }`}
            >
              {/* SVG Shape behind number */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-60 rotate-30"
                style={{
                  maskImage: "url(/assets/template-2-stats.svg)",
                  WebkitMaskImage: "url(/assets/template-2-stats.svg)",
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                  backgroundColor: stat.color,
                }}
              />

              <div className="relative z-10">
                <div className="flex items-baseline justify-center gap-0.5 mb-2">
                  <span className="font-['Sora',sans-serif] text-[clamp(40px,5vw,60px)] text-t2-dark leading-none">
                    {stat.num}
                  </span>
                  <span
                    className={`font-['Sora',sans-serif]  ${
                      stat.suffix.includes("billion")
                        ? "text-lg text-t2-gray ml-1"
                        : "text-[clamp(24px,3vw,40px)] text-t2-secondary"
                    }`}
                  >
                    {stat.suffix}
                  </span>
                </div>
                <p className="font-['Inter',sans-serif] text-base text-t2-gray m-0 capitalize">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
