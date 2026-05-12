import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import {
  Search,
  ChevronDown,
  Filter,
  RefreshCw,
  Globe,
  Tag,
  SlidersHorizontal,
} from "lucide-react";
import InitiativesCampaigns, { campaigns } from "./InitiativesCampaigns";
import InitiativesEvents from "./InitiativesEvents";
import { events } from "./Events";
import InitiativesFundraisers, { fundraisers } from "./InitiativesFundraisers";

const Initiatives = ({ initialTab = "campaigns" }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [searchQuery, setSearchQuery] = useState("");

  // Advanced filters state
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isTaxExempt, setIsTaxExempt] = useState(false);
  const [country, setCountry] = useState("All Countries");
  const [category, setCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("Newest");
  const [fundraiserType, setFundraiserType] = useState("All Fundraisers");
  const [eventFilter, setEventFilter] = useState("All Events");

  const eventFilterOptions = [
    { label: "Active Events", value: "active" },
    { label: "Physical Events", value: "physical" },
    { label: "Virtual Events", value: "virtual" },
    { label: "Hybrid Events", value: "hybrid" },
    { label: "Verified", value: "verified" },
    { label: "Self Events", value: "self" },
    { label: "Global Events", value: "global" },
  ];

  const categories = [
    "All Categories",
    "Education",
    "Healthcare",
    "Environment",
    "Children & Elderly",
    "Community",
    "Water",
  ];
  const countries = [
    "All Countries",
    "India",
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Singapore",
  ];
  const sortOptions = ["Newest", "Most Funded"];
  const fundraiserOptions = ["All Fundraisers", "Campaigns", "Events"];

  const handleReset = () => {
    setSearchQuery("");
    setIsVerified(false);
    setIsTaxExempt(false);
    setCountry("All Countries");
    setCategory("All Categories");
    setSortBy("Newest");
    setFundraiserType("All Fundraisers");
    setEventFilter("All Events");
  };

  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (gridRef.current && gridRef.current.children.length > 0) {
        gsap.fromTo(
          gridRef.current.children,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
            overwrite: true,
            delay: 0.1, // Small delay to ensure React rendering is stable
          },
        );
      }
    }, gridRef);

    return () => ctx.revert();
  }, [
    activeTab,
    category,
    country,
    sortBy,
    isVerified,
    isTaxExempt,
    fundraiserType,
    eventFilter,
    searchQuery,
  ]);

  // Filtering Logic
  const filterData = (data) => {
    return data
      .filter((item) => {
        // Search filter
        const matchesSearch =
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (item.desc &&
            item.desc.toLowerCase().includes(searchQuery.toLowerCase()));

        // Category filter
        const matchesCategory =
          category === "All Categories" ||
          item.tag === category ||
          item.category === category;

        // Country filter
        const matchesCountry =
          country === "All Countries" ||
          (item.location && item.location.includes(country));

        // Verified filter
        const matchesVerified = !isVerified || item.isVerified;

        // Tax Exempt filter
        const matchesTaxExempt = !isTaxExempt || item.isTaxExempt;

        // Fundraiser Type filter (only for fundraisers tab)
        const matchesFundraiserType =
          activeTab !== "fundraisers" ||
          fundraiserType === "All Fundraisers" ||
          item.type === fundraiserType;

        // Event-specific filters
        const matchesEventFilter = activeTab !== "events" || eventFilter === "All Events" || {
          active: item.status === "active",
          physical: item.eventType === "physical",
          virtual: item.eventType === "virtual",
          hybrid: item.eventType === "hybrid",
          verified: item.isVerified,
          self: item.isSelf,
          global: item.isGlobal
        }[eventFilter];

        return (
          matchesSearch &&
          matchesCategory &&
          matchesCountry &&
          matchesVerified &&
          matchesTaxExempt &&
          matchesFundraiserType &&
          matchesEventFilter
        );
      })
      .sort((a, b) => {
        if (sortBy === "Most Funded") {
          return b.raised / b.goal - a.raised / a.goal;
        }
        // Default: Newest (assuming ID or order represents novelty in dummy data)
        return b.id.localeCompare(a.id);
      });
  };

  const filteredCampaigns = filterData(campaigns);
  const filteredEvents = filterData(events);
  const filteredFundraisers = filterData(fundraisers);

  return (
    <section className="bg-white">
      {/* High Fidelity Header Section */}
      <div className="bg-[#091F1B] py-20 lg:py-28 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[80%] rounded-full bg-[#00715D] blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[80%] rounded-full bg-[#FFCA08] blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <span className="text-[#FFCA08] text-xs md:text-sm font-black uppercase tracking-[0.3em] mb-4 block">
            Make a Difference
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
            All Initiatives
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
            Search campaigns, initiatives and projects that align with your
            values
          </p>

          {/* Centered Search Bar */}
          <div className="max-w-2xl mx-auto relative group">
            <Search
              className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#00715D] transition-colors"
              size={20}
            />
            <input
              type="text"
              placeholder="Search campaigns..."
              className="w-full pl-16 pr-8 py-5 md:py-6 rounded-full bg-[#FAFAFA] text-gray-900 text-base font-bold shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#FFCA08]/20 transition-all border-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl -mt-10 relative z-20 pb-20">
        {/* Tabs and Filters Container */}
        <div className="bg-white rounded-[2.5rem] p-6 md:p-8 mb-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
          <div className="flex flex-col gap-8">
            {/* Tab Switching */}
            <div className="flex items-center justify-center sm:justify-start gap-8 md:gap-12 border-b border-gray-100">
              {["campaigns", "events", "fundraisers"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-xs md:text-sm font-black uppercase tracking-widest transition-all relative ${
                    activeTab === tab
                      ? "text-[#091F1B]"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#FFCA08] rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Filter Bar */}
            <div className="flex flex-wrap items-center gap-4 justify-center sm:justify-start">
              {/* Filter Dropdown */}
              <div className="relative min-w-[140px]">
                <div
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className={`flex items-center justify-between w-full bg-white border px-5 py-3.5 rounded-xl text-sm font-bold text-[#091F1B] transition-all cursor-pointer ${isFilterOpen ? "border-[#FFCA08] ring-2 ring-[#FFCA08]/10" : "border-gray-200 hover:border-[#FFCA08]"}`}
                >
                  <div className="flex items-center gap-2">
                    <Filter size={14} className="text-[#00715D]" />
                    <span>Filter</span>
                  </div>
                  <ChevronDown
                    size={14}
                    className={`text-gray-400 transition-transform ${isFilterOpen ? "rotate-180" : ""}`}
                  />
                </div>

                {/* Custom Dropdown Content */}
                {isFilterOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setIsFilterOpen(false)}
                    ></div>
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      {activeTab === "events" ? (
                        <div className="space-y-1">
                          <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-2">
                            Event Options
                          </div>
                          <button
                            onClick={() => {
                              setEventFilter("All Events");
                              setIsFilterOpen(false);
                            }}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-bold transition-colors ${eventFilter === "All Events" ? "bg-[#00715D] text-white" : "text-gray-700 hover:bg-gray-50"}`}
                          >
                            All Events
                          </button>
                          {eventFilterOptions.map((opt) => (
                            <button
                              key={opt.value}
                              onClick={() => {
                                setEventFilter(opt.value);
                                setIsFilterOpen(false);
                              }}
                              className={`w-full text-left px-3 py-2 rounded-lg text-sm font-bold transition-colors ${eventFilter === opt.value ? "bg-[#00715D] text-white" : "text-gray-700 hover:bg-gray-50"}`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <label className="flex items-center gap-3 cursor-pointer group/item">
                            <input
                              type="checkbox"
                              checked={isVerified}
                              onChange={(e) => setIsVerified(e.target.checked)}
                              className="w-5 h-5 rounded border-gray-300 text-[#00715D] focus:ring-[#00715D]"
                            />
                            <span className="text-sm font-bold text-gray-700 group-hover/item:text-[#00715D]">
                              Verified
                            </span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer group/item">
                            <input
                              type="checkbox"
                              checked={isTaxExempt}
                              onChange={(e) => setIsTaxExempt(e.target.checked)}
                              className="w-5 h-5 rounded border-gray-300 text-[#00715D] focus:ring-[#00715D]"
                            />
                            <span className="text-sm font-bold text-gray-700 group-hover/item:text-[#00715D]">
                              Tax Exempt
                            </span>
                          </label>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>

              {/* Category Filter */}
              <div className="relative min-w-[160px]">
                <Tag
                  size={14}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00715D]"
                />
                <select
                  className="w-full appearance-none bg-white border border-gray-200 pl-10 pr-10 py-3.5 rounded-xl text-sm font-bold text-[#091F1B] focus:outline-none focus:ring-2 focus:ring-[#FFCA08] cursor-pointer"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={16}
                />
              </div>

              {/* Country Filter */}
              <div className="relative min-w-[160px]">
                <Globe
                  size={14}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00715D]"
                />
                <select
                  className="w-full appearance-none bg-white border border-gray-200 pl-10 pr-10 py-3.5 rounded-xl text-sm font-bold text-[#091F1B] focus:outline-none focus:ring-2 focus:ring-[#FFCA08] cursor-pointer"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  {countries.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={16}
                />
              </div>

              {/* Fundraisers Specific Filter */}
              {activeTab === "fundraisers" && (
                <div className="relative min-w-[160px]">
                  <SlidersHorizontal
                    size={14}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00715D]"
                  />
                  <select
                    className="w-full appearance-none bg-white border border-gray-200 pl-10 pr-10 py-3.5 rounded-xl text-sm font-bold text-[#091F1B] focus:outline-none focus:ring-2 focus:ring-[#FFCA08] cursor-pointer"
                    value={fundraiserType}
                    onChange={(e) => setFundraiserType(e.target.value)}
                  >
                    {fundraiserOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    size={16}
                  />
                </div>
              )}

              {/* Sort Filter */}
              <div className="relative min-w-[160px]">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00715D] text-xs font-black">
                  AZ
                </div>
                <select
                  className="w-full appearance-none bg-white border border-gray-200 pl-10 pr-10 py-3.5 rounded-xl text-sm font-bold text-[#091F1B] focus:outline-none focus:ring-2 focus:ring-[#FFCA08] cursor-pointer"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  {sortOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={16}
                />
              </div>

              {/* Reset Button */}
              <button
                onClick={handleReset}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#091F1B] font-bold text-sm transition-all"
              >
                <RefreshCw size={14} />
                <span>Reset</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {activeTab === "campaigns" &&
            (filteredCampaigns.length > 0 ? (
              <InitiativesCampaigns
                data={filteredCampaigns}
                primaryColor="#FFCA08"
                secondaryColor="#00715D"
              />
            ) : (
              <div className="col-span-full py-20 text-center font-bold text-gray-400">
                No campaigns found matching your filters.
              </div>
            ))}
          {activeTab === "events" &&
            (filteredEvents.length > 0 ? (
              <InitiativesEvents data={filteredEvents} />
            ) : (
              <div className="col-span-full py-20 text-center font-bold text-gray-400">
                No events found matching your filters.
              </div>
            ))}
          {activeTab === "fundraisers" &&
            (filteredFundraisers.length > 0 ? (
              <InitiativesFundraisers
                data={filteredFundraisers}
                primaryColor="#FFCA08"
                secondaryColor="#00715D"
              />
            ) : (
              <div className="col-span-full py-20 text-center font-bold text-gray-400">
                No fundraisers found matching your filters.
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
