"use client";
import Link from "next/link";
import TeamCard from "./TeamCard";

const TEAM = [
  {
    name: "Leslie Alexander",
    role: "Chairperson",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Leslie leads our board with over 15 years of experience in social development. Her strategic vision has transformed communities across three continents.",
    organization: "Chioary Foundation",
    joinedAt: "January 2015",
    status: "Active",
    socials: { x: "#", linkedin: "#" },
  },
  {
    name: "Dianne Russell",
    role: "Managing Director",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    bio: "Dianne drives our global partnerships and program delivery. She brings deep expertise in sustainable development and international NGO management.",
    organization: "Chioary Foundation",
    joinedAt: "March 2017",
    status: "Active",
    socials: { x: "#", linkedin: "#" },
  },
  {
    name: "Ralph Edwards",
    role: "Finance Head",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
    bio: "Ralph oversees all financial operations and ensures our resources are allocated for maximum social impact. Former investment banker turned philanthropist.",
    organization: "Chioary Foundation",
    joinedAt: "June 2018",
    status: "Active",
    socials: { x: "#", linkedin: "#" },
  },
  {
    name: "Annette Black",
    role: "Operations Chief",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Annette coordinates field teams and logistics across all active campaigns. Her operational excellence keeps our initiatives running seamlessly.",
    organization: "Chioary Foundation",
    joinedAt: "September 2019",
    status: "Active",
    socials: { x: "#", linkedin: "#" },
  },
  {
    name: "Marcus Johnson",
    role: "Head of Technology",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
    bio: "Marcus leads our digital transformation efforts, from donor portals to field reporting tools, ensuring data drives every decision we make.",
    organization: "Chioary Foundation",
    joinedAt: "February 2021",
    status: "Active",
    socials: { x: "#", linkedin: "#" },
  },
  {
    name: "Sarah Lin",
    role: "Legal Advisor",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
    bio: "Sarah ensures our organization meets all international non-profit regulations. Her advocacy work has shaped policy in over 10 countries.",
    organization: "Chioary Foundation",
    joinedAt: "April 2020",
    status: "Active",
    socials: { x: "#", linkedin: "#" },
  },
];

export default function Team({ isAllTeamPage }) {
  const displayTeam = isAllTeamPage ? TEAM : TEAM.slice(0, 4);

  return (
    <section style={{ background: "#f9f9f9", padding: "120px 0 100px" }}>
      <div className="max-w-[1320px] mx-auto px-3">
        {/* Header - Only on Homepage */}
        {!isAllTeamPage && (
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="w-2 h-2 rounded-full bg-[#FFA415]" />
              <span className="text-[17px] text-[#121d18] italic">
                Our Board Members
              </span>
            </div>
            <h2 className="text-[clamp(32px,4vw,48px)] leading-[1.2] text-[#121d18] font-bold">
              Meet Our Dedicated
              <br />
              Board Members.
            </h2>
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {displayTeam.map((member, i) => (
            <TeamCard key={i} member={member} />
          ))}
        </div>

        {/* Button — no arrow */}
        {!isAllTeamPage && (
          <div className="flex justify-center mt-16 relative z-10">
            <Link href="/templates/template-4/team">
              <a className="t2-btn t2-btn-secondary">
                <span>View All Board Members</span>
              </a>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
