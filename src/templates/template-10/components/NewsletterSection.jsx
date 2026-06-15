import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function NewsletterSection() {
  const primaryColor = "var(--primary)";
  const secondaryColor = "#9b59b6";

  const sectionRef = useRef(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".newsletter-content > *", {
        y: 40,
        opacity: 0,
        stagger: 0.14,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
      gsap.from(".newsletter-image", {
        x: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section
      ref={sectionRef}
      id="newsletter"
      className="relative py-20 md:py-28 px-4 sm:px-6 overflow-hidden bg-white"
    >


      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Content */}
          <div className="newsletter-content">
            {/* Label */}
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="block w-10 h-0.5 bg-[var(--primary)]" />
              <span className="text-[var(--primary)] font-extrabold tracking-widest uppercase text-xs">
                Our Newsletter
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-black text-gray-800 text-3xl md:text-4xl lg:text-[44px] mb-6 leading-tight">
              Subscribe to Newsletter and{" "}
              <span className="text-gray-800">Stay Tuned for Our Updates</span>
            </h2>

            {/* Subtitle */}
            <p className="text-gray-500 text-[17px] leading-relaxed mb-8">
              Consequat ac felis donec et odio pellentesque diam. Erat
              pellentesque adipiscing commodo elit at imperdiet dui accumsan
              sit. Suspendisse sed nisi lacus sed viverra tellus massa sapien
              faucibus habitasse.
            </p>

            {/* Form */}
            {submitted ? (
              <div
                className="border border-t10-rose/20 rounded-2xl px-6 py-4 inline-block"
                style={{ background: "#fdf4f6" }}
              >
                <p className="text-[var(--primary)] font-extrabold">
                  ✓ Thank you for subscribing!
                </p>
                <p className="text-t10-rose/70 text-sm">
                  We'll keep you updated with our latest news.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-sm"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  required
                  className="
                    flex-1 bg-gray-100 border border-gray-300 rounded-full px-6 py-4
                    text-gray-800 placeholder-gray-500 text-base font-semibold
                    outline-none focus:border-[var(--primary)] focus:bg-white transition-all duration-300
                  "
                />

                <button
                  type="submit"
                  className="
                    flex items-center justify-center gap-2
                    bg-[var(--primary)] hover:bg-[#511F54] hover:shadow-lg hover:shadow-[var(--primary)]/30
                    text-white font-black text-base uppercase tracking-widest
                    px-8 py-4 rounded-full flex-shrink-0
                    shadow-md
                    transition-all duration-300
                  "
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* Right side - Image */}
          <div className="newsletter-image flex justify-center">
            <img
              src="/assets/template-10-newsletter.svg"
              alt="Newsletter Subscribe"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
