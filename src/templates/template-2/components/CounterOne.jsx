const STATS = [
{ num: "20", suffix: " billion", label: "People Helped", img: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=120&q=80" },
{ num: "200", suffix: "+", label: "Country Impacted", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=120&q=80" },
{ num: "50", suffix: "K+", label: "Volunteer", img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=120&q=80" },
{ num: "1000", suffix: "+", label: "Successful Project", img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=120&q=80" }];


export default function CounterOne() {
  return (
    <section style={{ background: "#fff", padding: "60px 0 80px", borderTop: "1px solid #F0F0F0" }}>
      <div className="max-w-[1320px] mx-auto px-3">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }}>
          {STATS.map((stat, i) =>
          <div key={i} style={{
            textAlign: "center", padding: "40px 24px",
            borderRight: i < STATS.length - 1 ? "1px solid #F0F0F0" : "none",
            position: "relative"
          }}>
              {/* Shape image behind number */}
              <div style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: 80, height: 80, opacity: 0.06,
              overflow: "hidden", borderRadius: "50%"
            }}>
                <img src={stat.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>

              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: 2, marginBottom: 8 }}>
                  <span style={{
                  fontFamily: "Sora, sans-serif", fontWeight: 800,
                  fontSize: "clamp(40px, 5vw, 60px)", color: "#121D18", lineHeight: 1
                }}>{stat.num}</span>
                  <span style={{
                  fontFamily: "Sora, sans-serif", fontWeight: 800,
                  fontSize: stat.suffix.includes("billion") ? 18 : "clamp(24px, 3vw, 40px)",
                  color: stat.suffix.includes("billion") ? "#6C6E76" : "#FFA415",
                  marginLeft: stat.suffix.includes("billion") ? 4 : 0
                }}>{stat.suffix}</span>
                </div>
                <p style={{
                fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 600,
                color: "#6C6E76", margin: 0, textTransform: "capitalize"
              }}>{stat.label}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}