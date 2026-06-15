import { Heart, Twitter, Facebook, Instagram, MapPin } from "lucide-react";

const SERVICES = ["Donation Online", "Donation's Details", "Volunteering", "Charity Funds"];

const SOCIAL = [
{ Icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
{ Icon: Facebook, href: "https://facebook.com/", label: "Facebook" },
{ Icon: MapPin, href: "https://pinterest.com/", label: "Pinterest" },
{ Icon: Instagram, href: "https://instagram.com/", label: "Instagram" }];


export default function FooterSection() {
  const primaryColor = "var(--primary)";
  const secondaryColor = "#9b59b6";

  return (
    <footer
      id="footer"
      className="relative overflow-hidden text-white"
      style={{
        background: "url('/assets/template-10-footer.svg') center bottom / cover no-repeat, #511F54"
      }}>

      


      {/* Top CTA strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-black text-white text-2xl mb-1">We Make Big Changes</h3>
            <p className="text-white/55 text-sm">
              We're curious, passionate, and committed to helping nonprofits learn and grow. Donate now!
            </p>
          </div>
          <button className="flex items-center gap-2 bg-gradient-to-r from-t10-rose to-t10-roseDark text-white font-extrabold text-xs uppercase tracking-widest px-8 py-4 rounded-full shadow-[0_6px_24px_rgba(232,84,122,0.4)] hover:-translate-y-0.5 transition-transform duration-300 flex-shrink-0">
            Donate Now <Heart size={14} fill="currentColor" />
          </button>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand column */}
        <div className="lg:col-span-2">
          <img src="/assets/template-10-logo-footer.svg" alt="Logo" className="h-12 mb-5 brightness-0 invert" />
          <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
            BigHearts is the largest global crowdfunding community connecting nonprofits, donors, and companies in nearly every country.
          </p>
          {/* Socials */}
          <div className="flex gap-3">
            {SOCIAL.map(({ Icon, href, label }) =>
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:border-[var(--primary)] hover:text-[var(--primary)] hover:bg-t10-rose/10 transition-all duration-300">
              
                <Icon size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="text-white font-extrabold text-sm uppercase tracking-widest mb-5">Our Services</h4>
          <ul className="flex flex-col gap-3">
            {SERVICES.map((s) =>
            <li key={s}>
                <a
                href="#"
                className="text-white/50 text-sm hover:text-[var(--primary)] transition-colors duration-300 flex items-center gap-2">
                
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] flex-shrink-0" />
                  {s}
                </a>
              </li>
            )}
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h4 className="text-white font-extrabold text-sm uppercase tracking-widest mb-5">Contacts</h4>
          <address className="not-italic flex flex-col gap-3 text-white/50 text-sm">
            <span>92 Bowery St., NY 10013</span>
            <a href="mailto:info@bighearts.com" className="hover:text-[var(--primary)] transition-colors">
              info@bighearts.com
            </a>
            <a href="tel:+18001234567" className="hover:text-[var(--primary)] transition-colors">
              +1 800 123 456 789
            </a>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/35 text-xs">
          <p>Copyright © {new Date().getFullYear()} BigHearts. All Rights Reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[var(--primary)] transition-colors">Terms of use</a>
            <a href="#" className="hover:text-[var(--primary)] transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>);

}