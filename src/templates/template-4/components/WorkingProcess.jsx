"use client";
import Image from "next/image";

const PROCESSES = [
  {
    title: "Identifying Needs",
    text: "We start by listening to communities and conducting thorough assessments",
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Empowering Lives",
    text: "We provide resources and support that enable individuals to thrive",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Powerful and Inspiring",
    text: "Together we create sustainable change that impacts future generations",
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=700&q=80",
  },
];

export default function WorkingProcess() {
  return (
    <section className="bg-[var(--bg-color)] py-[120px] pb-[90px] relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-3 mb-4 relative z-10">
            <div className="w-2 h-2 rounded-full bg-[var(--secondary)]" />
            <span className="text-[17px] text-white italic">
              Working Process
            </span>
          </div>
          <h2 className="text-[clamp(32px,4vw,48px)] leading-[1.2] text-white relative z-10">
            Our Working Process
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {PROCESSES.map((proc, i) => (
            <div
              key={i}
              className={`group flex flex-col text-center ${i === 1 ? "md:mt-12" : ""}`}
            >
              <div className="relative mb-8 w-full max-w-[370px] mx-auto overflow-hidden rounded-full aspect-square shadow-[0_20px_40px_#FFA41580]">
                <Image
                  src={proc.img}
                  alt={proc.title}
                  layout="fill"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                {/* Count Badge */}
                <div className="absolute top-[10%] right-[10%] w-[60px] h-[60px] rounded-full bg-[var(--secondary)] text-white text-xl font-bold flex items-center justify-center z-10 border-4 border-[var(--bg-color)] transition-all duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                  0{i + 1}
                </div>
              </div>
              <h3 className="text-[24px] font-semibold text-white mb-3 transition-colors duration-300 group-hover:text-[var(--secondary)]">
                {proc.title}
              </h3>
              <p className="text-white/70 px-4 leading-relaxed">{proc.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
