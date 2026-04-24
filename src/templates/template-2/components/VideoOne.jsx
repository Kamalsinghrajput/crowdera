export default function VideoOne() {
  return (
    <section style={{ position: "relative", overflow: "hidden", padding: "120px 0" }}>
      {/* Background image */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url(https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1920&q=80)",
        backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed"
      }} />
      {/* Overlay */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(18, 29, 24, 0.88)" }} />

      <div className="max-w-[1320px] mx-auto px-3" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "7fr 5fr", gap: 60, alignItems: "center" }}>
          {/* Left: Video play */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
              {/* Play button */}
              <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" target="_blank" rel="noreferrer" style={{
                width: 100, height: 100, borderRadius: "50%",
                background: "rgba(255,255,255,0.1)", border: "2px solid rgba(255,255,255,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                textDecoration: "none", flexShrink: 0, position: "relative"
              }}>
                <span style={{
                  position: "absolute", inset: -16, border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "50%", animation: "ripple 2s infinite"
                }} />
                <span style={{
                  position: "absolute", inset: -32, border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "50%", animation: "ripple 2s 0.7s infinite"
                }} />
                <svg width="36" height="36" viewBox="0 0 24 24" fill="#fff"><polygon points="5 3 19 12 5 21 5 3" /></svg>
              </a>
              <h3 style={{
                  fontSize: 32, color: "#fff", margin: 0
              }}>Best Volunteer</h3>
            </div>
          </div>

          {/* Right: Support card */}
          <div style={{
            background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 16, padding: "44px 40px"
          }}>
            <h3 style={{
                fontSize: 28, color: "#fff",
              marginBottom: 32, lineHeight: 1.3
            }}>
              Support Us, we need<br /> your help
            </h3>

            {/* Circular progress */}
            <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 28 }}>
              <div style={{ position: "relative", width: 116, height: 116, flexShrink: 0 }}>
                <svg width="116" height="116" viewBox="0 0 116 116">
                  {/* Background circle */}
                  <circle cx="58" cy="58" r="52" fill="none" stroke="var(--t2-primary)" strokeWidth="6" />
                  {/* Progress circle */}
                  <circle
                    cx="58" cy="58" r="52" fill="none" stroke="#fff" strokeWidth="6"
                    strokeDasharray={`${2 * Math.PI * 52}`}
                    strokeDashoffset={`${2 * Math.PI * 52 * 0.3}`}
                    strokeLinecap="square"
                    transform="rotate(-90 58 58)" />
                  
                </svg>
                <span style={{
                  position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 22, color: "#fff"
                }}>70%</span>
              </div>
              <div>
                <h3 style={{   fontSize: 36, color: "var(--t2-secondary)", margin: "0 0 4px" }}>$72,000</h3>
                <p style={{  fontSize: 15, color: "rgba(255,255,255,0.6)", margin: 0 }}>Donation Collected</p>
              </div>
            </div>

            {/* Donate button */}
            <a href="#" className="t2-btn t2-btn-secondary">
              <span>Donate Now</span>
              <i>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
              </i>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ripple {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.3); opacity: 0; }
        }
      `}</style>
    </section>);

}