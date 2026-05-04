"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMapPin, FiClock } from "react-icons/fi";

const EVENTS = [
  {
    date: "10 August",
    img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=900&q=80",
    title: "Connect, Contribute, And Celebrate",
    by: "admin",
    time: "09:05AM - 01:05 PM",
    org: "School Chermen",
    location: "New York, USA",
  },
  {
    date: "23 April",
    img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=80",
    title: "Community Health Awareness Day",
    by: "admin",
    time: "10:00AM - 03:00 PM",
    org: "School Chermen",
    location: "Texas, USA",
  },
  {
    date: "03 June",
    img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=900&q=80",
    title: "Environmental Clean-Up & Green Walk",
    by: "admin",
    time: "07:30AM - 12:00 PM",
    org: "School Chermen",
    location: "California, USA",
  },
  {
    date: "10 March",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
    title: "Children's Education Fundraising Gala",
    by: "admin",
    time: "06:00PM - 09:30 PM",
    org: "School Chermen",
    location: "London, UK",
  },
];

export default function Event({ isAllEventsPage }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, EVENTS.length - visibleCount);

  useEffect(() => {
    if (isAllEventsPage) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [maxIndex, isAllEventsPage]);

  const EventCard = ({ event }) => (
    <div className="bg-white rounded-[20px] pt-16 pb-8 px-8 flex flex-col items-center text-center relative mt-16 shadow-lg h-[calc(100%-64px)]">
      
      {/* Overlapping Circular Image */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[120px] h-[120px] rounded-full border-[8px] border-white shadow-md overflow-hidden z-10 bg-white">
        <Image 
          src={event.img} 
          alt={event.title} 
          layout="fill" 
          objectFit="cover" 
        />
      </div>

      {/* Meta: Time */}
      <div className="flex items-center justify-center gap-2 text-[#777777] font-['Inter'] text-[14px] mb-4">
        <FiClock className="text-[#00b86b]" />
        <span>{event.date} / {event.time}</span>
      </div>

      {/* Title */}
      <Link href="/templates/template-5/events">
        <a className="font-['Montserrat'] font-extrabold text-[22px] text-black leading-[1.3] mb-4 no-underline hover:text-[#00b86b] transition-colors">
          "{event.title}"
        </a>
      </Link>

      {/* Author & Org */}
      <p className="font-['Montserrat'] font-bold text-[14px] mb-6 uppercase tracking-wider">
        BY : <span className="text-[#00b86b]">{event.by}</span> - <span className="text-[#ff5528]">{event.org}</span>
      </p>

      <div className="w-full h-[1px] bg-[#eeeeee] mb-6" />

      {/* Location */}
      <div className="flex items-center justify-center gap-2 text-[#777777] font-['Inter'] text-[14px] mb-6">
        <FiMapPin className="text-[#ff5528]" />
        <span>{event.location}</span>
      </div>

      {/* Details Button */}
      <div className="mt-auto">
        <Link href="/templates/template-5/events">
          <a className="inline-block border-2 border-[#eeeeee] text-black font-['Montserrat'] font-bold text-[13px] uppercase px-8 py-3 rounded-full transition-colors duration-300 hover:bg-[#00b86b] hover:border-[#00b86b] hover:text-white no-underline">
            DETAILS
          </a>
        </Link>
      </div>

    </div>
  );

  return (
    <section className="py-24 relative overflow-hidden">
      
      {/* Background Image with Green Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1920&q=80" 
          alt="Events Background" 
          layout="fill" 
          objectFit="cover" 
        />
        <div className="absolute inset-0 bg-[#00b86b] opacity-90" />
      </div>

      <div className="max-w-[1320px] mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#ff5528] text-white font-['Montserrat'] font-bold text-[13px] uppercase tracking-[1px] px-5 py-2 rounded-full mb-5">
            OUR EVENTS
          </div>
          <h2 className="font-['Montserrat'] font-extrabold text-[clamp(32px,4vw,46px)] text-white leading-tight max-w-[800px] mx-auto m-0">
            Join Our Upcoming Events For The Global Community
          </h2>
        </div>

        {/* Conditional Render: Grid vs Carousel */}
        {isAllEventsPage ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EVENTS.map((event, idx) => (
              <EventCard key={idx} event={event} />
            ))}
          </div>
        ) : (
          <div className="w-full overflow-hidden px-2 pb-8 pt-2">
            <div 
              className="flex transition-transform duration-700 ease-in-out items-stretch"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
            >
              {EVENTS.map((event, idx) => (
                <div 
                  key={idx} 
                  style={{ 
                    width: `${100 / visibleCount}%`, 
                    flexShrink: 0,
                    padding: "0 15px"
                  }}
                >
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* View All Events Button */}
        {!isAllEventsPage && (
          <div className="text-center mt-12">
            <Link href="/templates/template-5/events">
              <a className="inline-block bg-[#121d18] text-white font-['Montserrat'] font-bold text-[14px] uppercase px-10 py-[18px] transition-colors duration-300 hover:bg-[#ff5528] no-underline">
                VIEW ALL EVENTS
              </a>
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
