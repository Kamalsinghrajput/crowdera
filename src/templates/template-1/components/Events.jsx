import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export const events = [
  {
    id: "elevate-food-stalls",
    day: "30",
    month: "SEP",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80",
    title: "Elevate Our Food Stalls!",
    subtitle: "About Our Food Stalls",
    desc: "Our local food stalls are a hub of culinary diversity and community spirit. They offer a wide range of cuisine, from homemade pies to Thai street food...",
    venue: "Marine Drive, Mumbai",
    date: "Tue Sep 30 2025",
    time: "08:00 – 20:00",
    category: "Food",
    maxAttendees: 200,
    organizer: { name: "Swapnil Kumbhar", email: "swapnil@crowdera.com" },
    beneficiary: "Joyful Minds",
    raised: 101,
    goal: 50000,
    status: "finished",
    type: "Physical Event",
    about: `Our local food stalls are a hub of culinary diversity and community spirit. They offer a wide range of cuisine, from homemade pies to Thai street food, but they need your help to remain vibrant and competitive.\n\nWhy This Matters\n• Culture: The stalls are a reflection of our diverse community\n• Economy: They support local businesses and create jobs\n• Food Security: They provide affordable, nutritious food options to our community\n\nHow You Can Help\nYour donations will help stall owners upgrade their equipment, improve hygiene standards, and diversify their menus. This will enhance the overall quality of our food stalls and attract more customers.`,
  },
  {
    id: "fight-hunger-together",
    day: "30",
    month: "JAN",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=80",
    title: "Fight Hunger Together",
    subtitle: "Join the Fight Against Hunger",
    desc: "Every day, millions of people across the world struggle to put food on their tables. We have launched a fundraising campaign to help address...",
    venue: "Marine Drive, Mumbai",
    date: "Thu Jan 30 2025",
    time: "10:00 – 18:00",
    category: "Hunger Relief",
    maxAttendees: 500,
    organizer: { name: "Swapnil Kumbhar", email: "swapnil@crowdera.com" },
    beneficiary: "Joyful Minds",
    raised: 28000,
    goal: 100000,
    status: "upcoming",
    type: "Physical Event",
    about: `Every day, millions of people across the world struggle to put food on their tables. We have launched a fundraising campaign to address this critical issue.\n\nAbout This Event\nWe will be hosting a community food drive, cooking demonstrations, and a charity auction. All proceeds go directly to feeding families in need.\n\nHow You Can Help\nJoin us, volunteer, donate, or simply spread the word. Every contribution makes a tangible difference in the lives of those we serve.`,
  },
  {
    id: "rock-music-fest-fund",
    day: "01",
    month: "FEB",
    img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&auto=format&fit=crop&q=80",
    title: "Rock the Music Fest Fund",
    subtitle: "About The Music Fest",
    desc: "The annual music fest is a vibrant celebration of local and international artists, bringing together music lovers from all walks of life...",
    venue: "Marine Drive, Mumbai",
    date: "Sat Feb 01 2025",
    time: "18:00 – 23:00",
    category: "Arts & Music",
    maxAttendees: 1000,
    organizer: { name: "Swapnil Kumbhar", email: "swapnil@crowdera.com" },
    beneficiary: "Joyful Minds",
    raised: 75000,
    goal: 200000,
    status: "upcoming",
    type: "Physical Event",
    about: `The annual music fest is a vibrant celebration of local and international artists, bringing together music lovers from all walks of life. The event raises funds for underprivileged children's music education.\n\nLine-up Highlights\n• 10+ live bands\n• DJ sets through the night\n• Charity auction with signed memorabilia\n\nAll proceeds fund musical instruments and lessons for underprivileged youth.`,
  },
  {
    id: "fundraising-gala-charity-auction",
    day: "01",
    month: "MAY",
    img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&auto=format&fit=crop&q=80",
    title: "Fundraising Gala & Charity Auction Evening",
    subtitle: "A Night of Purpose & Elegance",
    desc: "Join us for a meaningful and memorable evening as we come together to create real change in the lives of underprivileged children and...",
    venue: "Taj Lands End, Mumbai",
    date: "Thu May 01 2025",
    time: "19:00 – 23:30",
    category: "Gala",
    maxAttendees: 300,
    organizer: { name: "Swapnil Kumbhar", email: "swapnil@crowdera.com" },
    beneficiary: "Joyful Minds",
    raised: 142000,
    goal: 500000,
    status: "upcoming",
    type: "Physical Event",
    about: `Join us for a meaningful and memorable evening as we come together to create real change in the lives of underprivileged children and communities across India.\n\nEvent Highlights\n• Black-tie gala dinner\n• Live charity auction\n• Keynote addresses from change-makers\n• Cultural performances\n\nYour attendance and support directly funds our education, healthcare, and livelihood programs.`,
  },
  {
    id: "clean-water-walkathon",
    day: "15",
    month: "MAR",
    img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&auto=format&fit=crop&q=80",
    title: "Clean Water Walkathon",
    subtitle: "Walk for a Cause",
    desc: "Join thousands of participants walking together to raise awareness and funds for clean water access in rural communities...",
    venue: "Juhu Beach, Mumbai",
    date: "Sat Mar 15 2025",
    time: "06:00 – 10:00",
    category: "Sports",
    maxAttendees: 2000,
    organizer: { name: "Swapnil Kumbhar", email: "swapnil@crowdera.com" },
    beneficiary: "Joyful Minds",
    raised: 55000,
    goal: 300000,
    status: "upcoming",
    type: "Physical Event",
    about: `Join thousands of participants walking together to raise awareness and funds for clean water access in rural communities across India.\n\nEvery step counts. Your participation and fundraising help us build wells, pipe networks, and water purification systems for villages still living without safe water.`,
  },
  {
    id: "youth-leadership-summit",
    day: "20",
    month: "APR",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=80",
    title: "Youth Leadership Summit",
    subtitle: "Empowering the Next Generation",
    desc: "A one-day summit bringing together young leaders from across the country to share ideas, build skills, and drive change...",
    venue: "NSCI Dome, Mumbai",
    date: "Sun Apr 20 2025",
    time: "09:00 – 17:00",
    category: "Leadership",
    maxAttendees: 800,
    organizer: { name: "Swapnil Kumbhar", email: "swapnil@crowdera.com" },
    beneficiary: "Joyful Minds",
    raised: 30000,
    goal: 150000,
    status: "upcoming",
    type: "Hybrid Event",
    about: `A one-day summit bringing together young leaders from across the country to share ideas, build skills, and drive lasting change in their communities.\n\nAgenda\n• Morning: Keynotes from industry leaders\n• Afternoon: Workshops, panel discussions\n• Evening: Awards & Networking\n\nScholarships available for outstation attendees.`,
  },
];

export default function Events() {
  const primaryColor = "#2d3748";
  const secondaryColor = "#FEC908";

  const preview = events.slice(0, 4);

  return (
    <section id="events" className="py-20" style={{ background: primaryColor }}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header row */}
        <div className="flex items-start justify-between mb-10 gap-4 flex-wrap">
          <div>
            <span
              className="text-[var(--primary)] font-bold text-md mb-2 block text-[#FEC908]"
              style={{
                fontFamily: "'Caveat', 'Segoe Script', cursive",
                fontWeight: "bolder",
              }}
            >
              Ongoing Events
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Get Involved: Upcoming
              <br />
              Charity Events
            </h2>
          </div>
          <Link href="/templates/template-1/events">
            <a className="inline-flex items-center gap-2 text-[#091F1B] font-bold px-6 py-3 rounded-full hover:bg-[#00715D] hover:text-white transition-all text-sm shrink-0 mt-2 bg-[#FEC908]">
              <ArrowRight size={16} /> Explore More
            </a>
          </Link>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {preview.map((ev) => (
            <div
              key={ev.id}
              className="bg-white rounded-2xl overflow-hidden flex flex-col sm:flex-row gap-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Image with date badge */}
              <div className="relative w-full sm:w-40 md:w-48 shrink-0 h-48 sm:h-auto">
                <img
                  src={ev.img}
                  alt={ev.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[var(--primary)] text-[#091F1B] text-center rounded-lg px-2 py-1 min-w-[44px] shadow">
                  <div className="text-xl font-extrabold leading-none">
                    {ev.day}
                  </div>
                  <div className="text-[9px] font-bold uppercase tracking-wider">
                    {ev.month}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-extrabold text-[#091F1B] text-base mb-1 leading-snug">
                    {ev.title}
                  </h3>
                  <p className="text-[11px] text-gray-400 font-semibold mb-1">
                    {ev.subtitle}
                  </p>
                  <p className="text-xs text-gray-500 line-clamp-3 mb-3 leading-relaxed">
                    {ev.desc}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-[var(--secondary)] font-semibold mb-0.5">
                    <MapPin size={12} /> Venue
                  </div>
                  <p className="text-xs text-gray-500 mb-4">{ev.venue}</p>
                </div>
                <Link href={`/templates/template-1/events/${ev.id}`}>
                  <a className="inline-flex items-center gap-2 bg-[var(--primary)] text-[#091F1B] font-bold text-xs px-4 py-2 rounded-full hover:brightness-110 transition-all self-start">
                    <ArrowRight size={12} /> Event Details
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
