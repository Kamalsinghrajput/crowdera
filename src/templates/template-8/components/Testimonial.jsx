"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  FaQuoteLeft,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { gsap } from "gsap";

const TESTIMONIALS = [
  {
    text: "lorem ipsum dolor sit amet consectetur. ut tellus suspendisse nulla aliquam. risus rutrum tellus eget ultrices pretium nisi amet facilisis.",
    name: "Robina smith",
    role: "Marketing Manager",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    text: "The level of commitment here is nothing short of extraordinary. I've Had The Privilege Of Volunteering With Tamun And I'm Continually Inspired.",
    name: "Leslie Alexander",
    role: "General Manager",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "Their dedication to the community and transparent communication made the entire process so easy and trustworthy. Absolutely fantastic work!",
    name: "Johnathan Doe",
    role: "Community Lead",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "An incredible organization that truly understands the meaning of impact. It's rare to see such passion and organizational excellence combined.",
    name: "Sarah Williams",
    role: "Senior Consultant",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    text: "Partnering with them was the best decision we made. We achieved all our goals, and the support provided was absolutely exceptional from start to finish.",
    name: "Michael Chen",
    role: "Operations Director",
    img: "https://randomuser.me/api/portraits/men/84.jpg",
  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const contentRef = useRef(null);

  const changeSlide = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Flip Out
    gsap.to(contentRef.current, {
      rotateY: direction === 1 ? -90 : 90,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        // Update state
        setCurrentIndex((prev) => {
          let next = prev + direction;
          if (next < 0) next = TESTIMONIALS.length - 1;
          if (next >= TESTIMONIALS.length) next = 0;
          return next;
        });

        // Flip In
        gsap.fromTo(
          contentRef.current,
          { rotateY: direction === 1 ? 90 : -90, opacity: 0 },
          {
            rotateY: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
            onComplete: () => setIsAnimating(false),
          },
        );
      },
    });
  };

  React.useEffect(() => {
    if (isAnimating) return;
    const timer = setInterval(() => {
      changeSlide(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAnimating, currentIndex]);

  const testimonial = TESTIMONIALS[currentIndex];

  return (
    <section className="py-[120px] bg-[#f6faf9] overflow-hidden font-sans">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#007b5e] font-bold text-[15px] mb-3 block">
            Supporting Our Cause Together
          </span>
          <h2 className="font-extrabold text-[clamp(32px,4vw,46px)] text-black leading-tight max-w-[800px] mx-auto m-0 mb-4">
            Our Valueable Client's
            <br />
            Awesome Feedback
          </h2>
          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-[2px] bg-[#007b5e] opacity-60"></div>
            <div className="text-[#007b5e] border border-[#007b5e] p-1.5 rounded-md opacity-80">
              <FiHeart size={20} />
            </div>
            <div className="w-12 h-[2px] bg-[#007b5e] opacity-60"></div>
          </div>
        </div>

        {/* Carousel Card */}
        <div
          className="w-full max-w-[1000px] mx-auto relative min-h-[450px]"
          style={{ perspective: "1500px" }}
        >
          {/* The thick Tan curved background edge */}
          <div className="absolute right-0 top-0 bottom-0 w-[100px] bg-[#d9a96e] rounded-r-full hidden md:block shadow-lg z-0"></div>

          {/* Main White Card Container */}
          <div className="absolute inset-0 md:right-8 bg-white rounded-2xl md:rounded-l-2xl md:rounded-r-[100px] shadow-2xl overflow-hidden z-10 flex flex-col justify-center">
            {/* Flipping Content Container */}
            <div
              ref={contentRef}
              className="w-full flex flex-col md:flex-row items-center h-full p-10 pb-20 md:pb-10"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Left Image Side */}
              <div className="w-full md:w-[45%] relative flex justify-center mb-8 md:mb-0">
                {/* Dark green curved decorative line */}
                <div className="absolute top-0 right-[15%] w-[80%] h-[110%] border-t-[8px] border-r-[8px] border-[#005e46] rounded-tr-[50px] z-0 m-[-20px]">
                  {/* Little circle on the line */}
                  <div className="absolute -top-[12px] right-8 w-4 h-4 rounded-full bg-[#83b5a6] border-[3px] border-[#005e46]"></div>
                </div>

                <div className="relative z-10 w-[240px] h-[240px] md:w-[280px] md:h-[280px] rounded-[40px] overflow-hidden bg-gray-200 shadow-md">
                  <Image
                    src={testimonial.img}
                    alt={testimonial.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>

              {/* Right Content Side */}
              <div className="w-full md:w-[55%] md:pl-10 flex flex-col justify-center">
                {/* Stars */}
                <div className="flex items-center gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-[#d9a96e]" size={22} />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-[20px] text-[#666] leading-[1.6] mb-8 font-medium">
                  {testimonial.text}
                </p>

                {/* Bottom Row - Profile Info */}
                <div className="flex items-center gap-4">
                  <div className="w-[50px] h-[50px] rounded-full bg-[#005e46] flex items-center justify-center shadow-md">
                    <FaQuoteLeft size={20} className="text-white" />
                  </div>
                  <div>
                    <span className="text-[#007b5e] text-[13px] font-bold block mb-1">
                      {testimonial.role}
                    </span>
                    <h4 className="text-[#d9a96e] text-[24px] font-bold m-0">
                      {testimonial.name}
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Fixed Navigation Arrows */}
            <div className="absolute bottom-10 right-10 z-20 flex items-center gap-3">
              <button
                onClick={() => changeSlide(-1)}
                className="w-[45px] h-[45px] rounded-full bg-[#122f2a] hover:bg-[#005e46] flex items-center justify-center transition-colors shadow-md"
              >
                <FaChevronLeft size={16} className="text-white mr-1" />
              </button>
              <button
                onClick={() => changeSlide(1)}
                className="w-[45px] h-[45px] rounded-full bg-[#d9a96e] hover:bg-[#c4965d] flex items-center justify-center transition-colors shadow-md"
              >
                <FaChevronRight size={16} className="text-black ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
