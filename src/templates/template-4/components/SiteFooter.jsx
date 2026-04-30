"use client";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

export default function SiteFooter() {
  const quickLinks = [
    "About Us",
    "Our Services",
    "Our Team",
    "Our Blog",
    "Contact Us",
  ];

  const services = [
    "Emergency Relief",
    "Medical Outreach",
    "Educational Support",
    "Mental Health",
    "Community Development",
  ];

  return (
    <footer className="relative text-white overflow-hidden bg-[#121D18]">
      <div className="relative z-10">
        {/* TOP SECTION */}
        <div className="max-w-[1200px] mx-auto px-4 py-[90px] border-b border-white/10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Logo + About */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 tracking-wide">
                <span className="text-orange-400">Chio</span>
                <span className="text-white">ary</span>
              </h2>

              <p className="text-white opacity-70 leading-relaxed mb-6">
                Charity And Donation Is Category That Involves Giving.
              </p>

              {/* Social Icons */}
              <div className="flex gap-3">
                {[FaFacebookF, FaXTwitter, FaInstagram, FaYoutube].map(
                  (Icon, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white opacity-70 hover:opacity-100 hover:bg-orange-400 hover:border-orange-400 transition"
                    >
                      <Icon size={14} />
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">
                Quick Links
              </h3>

              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a className="text-white opacity-70 hover:opacity-100 hover:text-orange-400 transition cursor-pointer">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">
                Services
              </h3>

              <ul className="space-y-3">
                {services.map((item) => (
                  <li key={item}>
                    <a className="text-white opacity-70 hover:opacity-100 hover:text-orange-400 transition cursor-pointer">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CONTACT STRIP */}
        <div className="max-w-[1200px] mx-auto px-4 py-14 border-b border-white/10">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-full border border-dashed border-white/20 flex items-center justify-center">
                <FiMapPin size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">
                  Visit Our Office
                </h4>
                <p className="text-white opacity-70 text-sm leading-relaxed">
                  4517 Washington Ave. Manchester, Kentucky 39495
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-full border border-dashed border-white/20 flex items-center justify-center">
                <FiMail size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">
                  Send Us An Email
                </h4>
                <p className="text-white opacity-70 text-sm">
                  Chioary@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-full border border-dashed border-white/20 flex items-center justify-center">
                <FiPhone size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">
                  Ask Any Questions
                </h4>
                <p className="text-white opacity-70 text-sm">
                  (239) 555-0108 - (239) 555-0108
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="max-w-[1200px] mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white opacity-70 text-sm">
            © 1995–2024 All Rights For{" "}
            <span className="text-orange-400 font-medium">Chioary</span>{" "}
            Exclusive
          </p>

          <div className="flex gap-6 text-sm text-white opacity-70">
            <a className="hover:text-orange-400 hover:opacity-100 transition cursor-pointer">
              Terms Of Service
            </a>
            <a className="hover:text-orange-400 hover:opacity-100 transition cursor-pointer">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
