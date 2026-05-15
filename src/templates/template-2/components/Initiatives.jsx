import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useRouter } from "next/router";
import {
  Search,
  ChevronDown,
  Filter,
  RefreshCw,
  Globe,
  Tag,
  SlidersHorizontal,
  Loader2,
} from "lucide-react";
import InitiativesCampaigns from "./InitiativesCampaigns";
import InitiativesEvents from "./InitiativesEvents";
import InitiativesFundraisers from "./InitiativesFundraisers";
import {
  fetchCampaigns,
  fetchEvents,
  fetchFundraisers,
} from "../../../services/initiativesService";

const Initiatives = ({ initialTab = "campaigns" }) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(initialTab);
  const [campaigns, setCampaigns] = useState([]);
  const [events, setEvents] = useState([]);
  const [fundraisers, setFundraisers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Sync tab with URL after mount to avoid hydration mismatch
  useEffect(() => {
    if (
      router.isReady &&
      router.query.tab &&
      ["campaigns", "events", "fundraisers"].includes(router.query.tab)
    ) {
      setActiveTab(router.query.tab);
    }
  }, [router.isReady, router.query.tab]);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    router.push({ query: { ...router.query, tab: tabName } }, undefined, {
      shallow: true,
    });
  };

  // Fetch data from service
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [campaignsData, eventsData, fundraisersData] = await Promise.all([
          fetchCampaigns(),
          fetchEvents(),
          fetchFundraisers(),
        ]);
        setCampaigns(campaignsData);
        setEvents(eventsData);
        setFundraisers(fundraisersData);
      } catch (error) {
        console.error("Failed to fetch initiatives:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
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
    if (loading) return;
    const gsapContext = gsap.context(() => {
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
            delay: 0.1,
          },
        );
      }
    }, gridRef);
    return () => gsapContext.revert();
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
    loading,
  ]);

  const filterData = (data) => {
    return data
      .filter((initiativeItem) => {
        const matchesSearch =
          initiativeItem.title
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          (initiativeItem.desc &&
            initiativeItem.desc
              .toLowerCase()
              .includes(searchQuery.toLowerCase()));
        const matchesCategory =
          category === "All Categories" ||
          initiativeItem.tag === category ||
          initiativeItem.category === category;
        const matchesCountry =
          country === "All Countries" ||
          (initiativeItem.location &&
            initiativeItem.location.includes(country));
        const matchesVerified = !isVerified || initiativeItem.isVerified;
        const matchesTaxExempt = !isTaxExempt || initiativeItem.isTaxExempt;
        const matchesFundraiserType =
          activeTab !== "fundraisers" ||
          fundraiserType === "All Fundraisers" ||
          initiativeItem.type === fundraiserType;
        const matchesEventFilter =
          activeTab !== "events" ||
          eventFilter === "All Events" ||
          {
            active: initiativeItem.status === "active",
            physical: initiativeItem.eventType === "physical",
            virtual: initiativeItem.eventType === "virtual",
            hybrid: initiativeItem.eventType === "hybrid",
            verified: initiativeItem.isVerified,
            self: initiativeItem.isSelf,
            global: initiativeItem.isGlobal,
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
        if (sortBy === "Most Funded")
          return b.raised / b.goal - a.raised / a.goal;
        return b.id.localeCompare(a.id);
      });
  };

  const filteredCampaigns = filterData(campaigns);
  const filteredEvents = filterData(events);
  const filteredFundraisers = filterData(fundraisers);

  return (
    <section className="bg-white">
      {/* Template 2 Specific Header */}
      <div className="bg-[var(--bg-color)] py-24 lg:py-32 relative overflow-hidden">
        <div
          className="absolute top-0 left-[-100px] w-96 h-96 opacity-[0.03] pointer-events-none rotate-12"
          style={{
            maskImage: "url(/assets/template-2-stats.svg)",
            WebkitMaskImage: "url(/assets/template-2-stats.svg)",
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
            backgroundColor: "var(--secondary)",
          }}
        />
        <div
          className="absolute bottom-0 right-[-100px] w-96 h-96 opacity-[0.02] pointer-events-none -rotate-45"
          style={{
            maskImage: "url(/assets/template-2-stats.svg)",
            WebkitMaskImage: "url(/assets/template-2-stats.svg)",
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
            backgroundColor: "var(--primary)",
          }}
        />

        <div className="container mx-auto px-4 max-w-[1320px] relative z-10 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-[var(--secondary)]" />
            <span className="text-[var(--secondary)] text-[16px] italic">
              Make a Real Impact
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight font-sora">
            Explore Initiatives
          </h1>
          <div className="max-w-2xl mx-auto relative group">
            <Search
              className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[var(--primary)] transition-colors"
              size={20}
            />
            <input
              type="text"
              placeholder="Search initiatives..."
              className="w-full pl-16 pr-8 py-5 md:py-6 rounded-full bg-white text-gray-900 text-base font-medium shadow-2xl focus:outline-none focus:ring-4 focus:ring-[var(--secondary)]/20 transition-all border-none"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-[1320px] -mt-10 relative z-20 pb-24">
        <div className="bg-white rounded-3xl p-6 md:p-8 mb-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
          <div className="flex flex-col gap-10">
            <div className="flex items-center justify-center sm:justify-start gap-10 md:gap-14 border-b border-gray-100">
              {["campaigns", "events", "fundraisers"].map((tabName) => (
                <button
                  key={tabName}
                  onClick={() => handleTabChange(tabName)}
                  className={`pb-5 text-sm font-bold uppercase tracking-widest transition-all relative ${activeTab === tabName ? "text-[var(--bg-color)]" : "text-gray-400 hover:text-[var(--primary)]"}`}
                >
                  {tabName}
                  {activeTab === tabName && (
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-[var(--secondary)] rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4 justify-center sm:justify-start">
              <div className="relative min-w-[140px]">
                <div
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className={`flex items-center justify-between w-full bg-white border px-5 py-3.5 rounded-xl text-sm font-bold text-[var(--bg-color)] transition-all cursor-pointer ${isFilterOpen ? "border-[var(--secondary)] ring-2 ring-[var(--secondary)]/10" : "border-gray-200 hover:border-[var(--primary)]"}`}
                >
                  <div className="flex items-center gap-2">
                    <Filter size={14} className="text-[var(--primary)]" />
                    <span>Filter</span>
                  </div>
                  <ChevronDown
                    size={14}
                    className={`text-gray-400 transition-transform ${isFilterOpen ? "rotate-180" : ""}`}
                  />
                </div>
                {isFilterOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setIsFilterOpen(false)}
                    ></div>
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      {activeTab === "events" ? (
                        <div className="space-y-1">
                          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 px-2">
                            Event Options
                          </div>
                          <button
                            onClick={() => {
                              setEventFilter("All Events");
                              setIsFilterOpen(false);
                            }}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-bold transition-colors ${eventFilter === "All Events" ? "bg-[var(--primary)] text-white" : "text-gray-700 hover:bg-gray-50"}`}
                          >
                            All Events
                          </button>
                          {eventFilterOptions.map((filterOption) => (
                            <button
                              key={filterOption.value}
                              onClick={() => {
                                setEventFilter(filterOption.value);
                                setIsFilterOpen(false);
                              }}
                              className={`w-full text-left px-3 py-2 rounded-lg text-sm font-bold transition-colors ${eventFilter === filterOption.value ? "bg-[var(--primary)] text-white" : "text-gray-700 hover:bg-gray-50"}`}
                            >
                              {filterOption.label}
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
                              className="w-5 h-5 rounded border-gray-300 text-[var(--primary)] focus:ring-[var(--primary)]"
                            />
                            <span className="text-sm font-bold text-gray-700 group-hover/item:text-[var(--primary)]">
                              Verified
                            </span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer group/item">
                            <input
                              type="checkbox"
                              checked={isTaxExempt}
                              onChange={(e) => setIsTaxExempt(e.target.checked)}
                              className="w-5 h-5 rounded border-gray-300 text-[var(--primary)] focus:ring-[var(--primary)]"
                            />
                            <span className="text-sm font-bold text-gray-700 group-hover/item:text-[var(--primary)]">
                              Tax Exempt
                            </span>
                          </label>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
              <div className="relative min-w-[160px]">
                <Tag
                  size={14}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--primary)]"
                />
                <select
                  className="w-full appearance-none bg-white border border-gray-200 pl-10 pr-10 py-3.5 rounded-xl text-sm font-bold text-[var(--bg-color)] focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] cursor-pointer"
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                >
                  {categories.map((categoryItem) => (
                    <option key={categoryItem} value={categoryItem}>
                      {categoryItem}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={16}
                />
              </div>
              <div className="relative min-w-[160px]">
                <Globe
                  size={14}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--primary)]"
                />
                <select
                  className="w-full appearance-none bg-white border border-gray-200 pl-10 pr-10 py-3.5 rounded-xl text-sm font-bold text-[var(--bg-color)] focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] cursor-pointer"
                  value={country}
                  onChange={(event) => setCountry(event.target.value)}
                >
                  {countries.map((countryItem) => (
                    <option key={countryItem} value={countryItem}>
                      {countryItem}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={16}
                />
              </div>
              {activeTab === "fundraisers" && (
                <div className="relative min-w-[160px]">
                  <SlidersHorizontal
                    size={14}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--primary)]"
                  />
                  <select
                    className="w-full appearance-none bg-white border border-gray-200 pl-10 pr-10 py-3.5 rounded-xl text-sm font-bold text-[var(--bg-color)] focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] cursor-pointer"
                    value={fundraiserType}
                    onChange={(event) => setFundraiserType(event.target.value)}
                  >
                    {fundraiserOptions.map((typeOption) => (
                      <option key={typeOption} value={typeOption}>
                        {typeOption}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    size={16}
                  />
                </div>
              )}
              <div className="relative min-w-[160px]">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#007B39] text-xs font-black">
                  AZ
                </div>
                <select
                  className="w-full appearance-none bg-white border border-gray-200 pl-10 pr-10 py-3.5 rounded-xl text-sm font-bold text-[var(--bg-color)] focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] cursor-pointer"
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                >
                  {sortOptions.map((sortOption) => (
                    <option key={sortOption} value={sortOption}>
                      {sortOption}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={16}
                />
              </div>
              <button
                onClick={handleReset}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gray-50 hover:bg-gray-100 text-[var(--bg-color)] font-bold text-sm transition-all"
              >
                <RefreshCw size={14} />
                <span>Reset</span>
              </button>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-40 gap-4 text-[var(--primary)]">
            <Loader2 className="animate-spin" size={48} />
            <span className="font-bold text-lg uppercase tracking-widest">
              Loading Initiatives...
            </span>
          </div>
        ) : (
          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          >
            {activeTab === "campaigns" &&
              (filteredCampaigns.length > 0 ? (
                <InitiativesCampaigns
                  data={filteredCampaigns}
                  primaryColor="var(--primary)"
                  secondaryColor="var(--secondary)"
                />
              ) : (
                <div className="col-span-full py-24 text-center font-bold text-gray-400">
                  No campaigns found matching your search.
                </div>
              ))}
            {activeTab === "events" &&
              (filteredEvents.length > 0 ? (
                <InitiativesEvents data={filteredEvents} />
              ) : (
                <div className="col-span-full py-24 text-center font-bold text-gray-400">
                  No events found matching your search.
                </div>
              ))}
            {activeTab === "fundraisers" &&
              (filteredFundraisers.length > 0 ? (
                <InitiativesFundraisers
                  data={filteredFundraisers}
                  primaryColor="var(--primary)"
                  secondaryColor="var(--secondary)"
                />
              ) : (
                <div className="col-span-full py-24 text-center font-bold text-gray-400">
                  No fundraisers found matching your search.
                </div>
              ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Initiatives;
