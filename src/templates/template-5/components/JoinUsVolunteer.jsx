import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function JoinUsVolunteer() {
  const cards = [
    {
      title: "Join Us Volunteer",
      text: "Becoming a volunteer with Tamun means joining a dedicated team committed to making a difference. We welcome individuals from all walks of life who are passionate",
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=1000",
      link: "#",
      btnClass:
        "inline-flex items-center gap-2 bg-[var(--primary)] text-white font-['Montserrat'] font-bold text-[15px] uppercase px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:bg-[var(--secondary)] no-underline",
    },
    {
      title: "Become Volunteer",
      text: "Becoming a volunteer with Tamun means joining a dedicated team committed to making a difference. We welcome individuals from all walks of life who are passionate",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000",
      link: "#",
      btnClass:
        "inline-flex items-center gap-2 bg-[var(--secondary)] text-white font-['Montserrat'] font-bold text-[15px] uppercase px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:bg-[var(--primary)] no-underline",
    },
  ];

  return (
    <section className="py-[120px] bg-white">
      <div className="max-w-[1320px] mx-auto px-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="relative rounded-[20px] overflow-hidden min-h-[450px] group flex flex-col justify-end p-8 md:p-12 shadow-xl"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Gradient Overlay for text readability */}
              <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-[32px] md:text-[40px] font-bold text-white mb-4 leading-tight font-['Montserrat']">
                  <Link href={card.link}>
                    <a className="hover:text-[var(--secondary)] transition-colors duration-300">
                      {card.title}
                    </a>
                  </Link>
                </h3>
                <p className="text-white/80 text-[17px] leading-[1.8] mb-8 max-w-[450px]">
                  {card.text}
                </p>

                <Link href={card.link}>
                  <a className={card.btnClass}>
                    <span>See More</span>
                    <i>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="-rotate-45"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </i>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
