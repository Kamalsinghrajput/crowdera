import React from "react";
import Image from "next/image";
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
    location: "Mumbai, India",
    date: "Tue Sep 30 2025",
    time: "08:00 – 20:00",
    category: "Food",
    maxAttendees: 200,
    organizer: { name: "Swapnil Kumbhar", email: "swapnil@crowdera.com" },
    beneficiary: "Joyful Minds",
    raised: 101,
    goal: 50000,
    status: "active",
    eventType: "physical",
    isVerified: true,
    isTaxExempt: true,
    isSelf: false,
    isGlobal: true
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
    location: "Mumbai, India",
    date: "Thu Jan 30 2025",
    time: "10:00 – 18:00",
    category: "Hunger Relief",
    maxAttendees: 500,
    organizer: { name: "Swapnil Kumbhar", email: "swapnil@crowdera.com" },
    beneficiary: "Joyful Minds",
    raised: 28000,
    goal: 100000,
    status: "active",
    eventType: "physical",
    isSelf: true,
    isGlobal: false,
    isVerified: true,
    isTaxExempt: false
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
    location: "Mumbai, India",
    date: "Sat Feb 01 2025",
    time: "18:00 – 23:00",
    category: "Arts & Music",
    maxAttendees: 1000,
    organizer: { name: "Swapnil Kumbhar", email: "swapnil@crowdera.com" },
    beneficiary: "Joyful Minds",
    raised: 75000,
    goal: 200000,
    status: "active",
    eventType: "virtual",
    isVerified: false,
    isTaxExempt: true,
    isSelf: false,
    isGlobal: true
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
    location: "Mumbai, India",
    date: "Sat Mar 15 2025",
    time: "06:00 – 10:00",
    category: "Sports",
    maxAttendees: 2000,
    organizer: { name: "Swapnil Kumbhar", email: "swapnil@crowdera.com" },
    beneficiary: "Joyful Minds",
    raised: 55000,
    goal: 300000,
    status: "active",
    eventType: "physical",
    isSelf: false,
    isGlobal: false,
    isVerified: true,
    isTaxExempt: false
  },
  {
    id: "tech-education-drive",
    day: "12",
    month: "AUG",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=80",
    title: "Tech Education Drive",
    subtitle: "Laptops for Students",
    desc: "Providing refurbished laptops to students in rural schools to bridge the digital divide and enable online learning.",
    venue: "Silicon Hub, Bangalore",
    location: "Bangalore, India",
    date: "Sun Aug 12 2025",
    time: "09:00 – 17:00",
    category: "Education",
    maxAttendees: 300,
    organizer: { name: "Kiran Shah", email: "kiran@example.com" },
    beneficiary: "Tech Bridge NGO",
    raised: 45000,
    goal: 100000,
    status: "active",
    eventType: "hybrid",
    isVerified: true,
    isTaxExempt: true,
    isSelf: true,
    isGlobal: true
  },
  {
    id: "coastal-cleanup-drive",
    day: "05",
    month: "JUN",
    img: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=600&auto=format&fit=crop&q=80",
    title: "Coastal Cleanup Drive",
    subtitle: "Save Our Oceans",
    desc: "A community-led effort to clean up local beaches and raise awareness about plastic pollution in our oceans.",
    venue: "Elliot's Beach, Chennai",
    location: "Chennai, India",
    date: "Sat Jun 05 2025",
    time: "06:00 – 11:00",
    category: "Environment",
    maxAttendees: 500,
    organizer: { name: "Marine Watch", email: "contact@marinewatch.org" },
    beneficiary: "Ocean Care",
    raised: 15000,
    goal: 50000,
    status: "active",
    eventType: "physical",
    isVerified: false,
    isTaxExempt: false,
    isSelf: false,
    isGlobal: false
  }
];

export default function Events() {
  const primaryColor = "#2d3748";
  const secondaryColor = "#FEC908";

  const preview = events.slice(0, 4);

  return (
    <section id="events" className="py-20" style={{ background: primaryColor }}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-start justify-between mb-10 gap-4 flex-wrap">
          <div>
            <span className="text-[#FEC908] font-bold text-md mb-2 block" style={{ fontFamily: "'Caveat', cursive" }}>
              Ongoing Events
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Get Involved: Upcoming Charity Events
            </h2>
          </div>
          <Link href="/templates/template-1/initiatives?tab=events">
            <a className="inline-flex items-center gap-2 text-[#091F1B] font-bold px-6 py-3 rounded-full hover:bg-[#00715D] hover:text-white transition-all text-sm shrink-0 mt-2 bg-[#FEC908]">
              <ArrowRight size={16} /> Explore More
            </a>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {preview.map((ev) => (
            <div key={ev.id} className="bg-white rounded-2xl overflow-hidden flex flex-col sm:flex-row gap-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative w-full sm:w-48 shrink-0 h-48">
                <Image src={ev.img} alt={ev.title} layout="fill" objectFit="cover" />
                <div className="absolute top-3 left-3 bg-[#FEC908] text-[#091F1B] text-center rounded-lg px-2 py-1 min-w-[44px] shadow">
                  <div className="text-xl font-extrabold leading-none">{ev.day}</div>
                  <div className="text-[9px] font-bold uppercase tracking-wider">{ev.month}</div>
                </div>
              </div>
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-extrabold text-[#091F1B] text-base mb-1 leading-snug">{ev.title}</h3>
                  <p className="text-[11px] text-gray-400 font-semibold mb-2">{ev.subtitle}</p>
                  <div className="flex items-center gap-1.5 text-xs text-[#00715D] font-semibold mb-4">
                    <MapPin size={12} /> {ev.venue}
                  </div>
                </div>
                <Link href={`/templates/template-1/events/${ev.id}`}>
                  <a className="inline-flex items-center gap-2 bg-[#FEC908] text-[#091F1B] font-bold text-xs px-4 py-2 rounded-full hover:brightness-110 transition-all self-start">
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
