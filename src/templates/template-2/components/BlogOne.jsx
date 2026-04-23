const BLOGS = [
{
  date: "10 Aug 2024",
  by: "Cane Anderson", comments: "02",
  title: "One such example is our recent food distribution program.",
  img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80"
},
{
  date: "25 June 2024",
  by: "Ronald Richards", comments: "05",
  title: "The impact of our community doesn't stop at food distribution.",
  img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=600&q=80"
},
{
  date: "15 March 2024",
  by: "Courtney Henry", comments: "08",
  title: "These stories are just a few examples of how powerful.",
  img: "https://images.unsplash.com/photo-1593113565214-8cb303387870?auto=format&fit=crop&w=600&q=80"
}];


export default function BlogOne() {
  return (
    <section style={{ background: "#fff", padding: "120px 0", position: "relative" }}>
      <div className="max-w-[1320px] mx-auto px-3">
        {/* Top row: title left, button right */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 60, flexWrap: "wrap", gap: 24 }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#FFA415" }} />
              <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 16, color: "#121D18", fontStyle: "italic" }}>
                Our Blog
              </span>
            </div>
            <h2 style={{
              fontFamily: "Inter, sans-serif", fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.2, color: "#121D18", margin: 0
            }}>
              Latest News &amp; Inspiring<br /> Stories.
            </h2>
          </div>
          <a href="#" style={{
            display: "inline-flex", alignItems: "center", borderRadius: 30,
            overflow: "hidden", textDecoration: "none", flexShrink: 0
          }}>
            <span style={{
              padding: "13px 24px", background: "#121D18", color: "#fff",
              fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 16
            }}>See All Blog</span>
            <span style={{
              width: 52, height: 52, background: "#007B39",
              display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%"
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
            </span>
          </a>
        </div>

        {/* Blog cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 30 }}>
          {BLOGS.map((blog, i) =>
          <div key={i} style={{ borderRadius: 12, overflow: "hidden", background: "#fff", boxShadow: "0 2px 20px rgba(0,0,0,0.06)", transition: "box-shadow 0.3s" }}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 10px 40px rgba(0,0,0,0.12)"}
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0 2px 20px rgba(0,0,0,0.06)"}>
            
              {/* Image with date badge + plus icon */}
              <div style={{ position: "relative", overflow: "hidden", height: 260 }}>
                <img src={blog.img} alt={blog.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s" }}
              onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.06)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"} />
              
                {/* Plus icon on hover */}
                <div style={{
                position: "absolute", top: 16, right: 16,
                width: 44, height: 44, borderRadius: "50%", background: "#FFA415",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer"
              }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M12 5v14M5 12h14" /></svg>
                </div>
                {/* Date badge */}
                <div style={{
                position: "absolute", bottom: 0, left: 0,
                background: "#007B39", color: "#fff",
                padding: "8px 18px", fontFamily: "Inter, sans-serif",
                fontSize: 13, fontWeight: 700
              }}>
                  {blog.date}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "24px 26px 30px" }}>
                {/* Meta */}
                <div style={{ display: "flex", gap: 20, marginBottom: 16 }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "Sora, sans-serif", fontSize: 13, color: "#6C6E76" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFA415" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                    By {blog.by}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "Sora, sans-serif", fontSize: 13, color: "#6C6E76" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFA415" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                    {blog.comments} Comment
                  </span>
                </div>

                <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 20, color: "#121D18", lineHeight: 1.4, marginBottom: 20 }}>
                  <a href="#" style={{ color: "inherit", textDecoration: "none" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#FFA415"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#121D18"}>
                  {blog.title}</a>
                </h3>

                <a href="#" style={{
                display: "inline-flex", alignItems: "center", borderRadius: 30,
                overflow: "hidden", textDecoration: "none"
              }}>
                  <span style={{
                  padding: "10px 20px", background: "#F5F5F5", color: "#121D18",
                  fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 14,
                  transition: "all 0.3s"
                }}
                onMouseEnter={(e) => {e.currentTarget.style.background = "#FFA415";e.currentTarget.style.color = "#fff";}}
                onMouseLeave={(e) => {e.currentTarget.style.background = "#F5F5F5";e.currentTarget.style.color = "#121D18";}}>
                  Read More</span>
                  <span style={{
                  width: 42, height: 42, background: "#121D18",
                  display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%"
                }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                  </span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}