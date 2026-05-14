import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useRouter } from "next/router";
import { Search, Filter, RefreshCw, X, Globe, Tag, SlidersHorizontal, Loader2, CheckSquare, Square } from "lucide-react";
import InitiativesCampaigns from "./InitiativesCampaigns";
import InitiativesEvents from "./InitiativesEvents";
import InitiativesFundraisers from "./InitiativesFundraisers";
import { fetchCampaigns, fetchEvents, fetchFundraisers } from "../../../services/initiativesService";

const Initiatives = ({ initialTab = "campaigns" }) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(initialTab);
  const [campaigns, setCampaigns] = useState([]);
  const [events, setEvents] = useState([]);
  const [fundraisers, setFundraisers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Sync tab with URL
  useEffect(() => {
    if (router.query.tab && ["campaigns", "events", "fundraisers"].includes(router.query.tab)) {
      setActiveTab(router.query.tab);
    }
  }, [router.query.tab]);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    router.push({ query: { ...router.query, tab: tabName } }, undefined, { shallow: true });
  };

  // Fetch data from service
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [campaignsData, eventsData, fundraisersData] = await Promise.all([
          fetchCampaigns(),
          fetchEvents(),
          fetchFundraisers()
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
  const [isVerified, setIsVerified] = useState(false);
  const [isTaxExempt, setIsTaxExempt] = useState(false);
  const [country, setCountry] = useState("All Countries");
  const [category, setCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("Newest");
  const [fundraiserType, setFundraiserType] = useState("All Fundraisers");
  const [eventFilter, setEventFilter] = useState("All Events");

  const eventFilterOptions = [
    { label: "Active Events", value: "active" }, { label: "Physical Events", value: "physical" }, { label: "Virtual Events", value: "virtual" }, { label: "Hybrid Events", value: "hybrid" }, { label: "Verified", value: "verified" }, { label: "Self Events", value: "self" }, { label: "Global Events", value: "global" },
  ];
  const categories = ["All Categories", "Education", "Healthcare", "Environment", "Children & Elderly", "Community", "Water"];
  const countries = ["All Countries", "India", "United States", "United Kingdom", "Canada", "Australia", "Singapore"];
  const sortOptions = ["Newest", "Most Funded"];
  const fundraiserOptions = ["All Fundraisers", "Campaigns", "Events"];

  const handleReset = () => {
    setSearchQuery(""); setIsVerified(false); setIsTaxExempt(false); setCountry("All Countries"); setCategory("All Categories"); setSortBy("Newest"); setFundraiserType("All Fundraisers"); setEventFilter("All Events");
  };

  const gridRef = useRef(null);
  useEffect(() => {
    if (loading) return;
    const gsapContext = gsap.context(() => {
      if (gridRef.current && gridRef.current.children.length > 0) {
        gsap.fromTo(gridRef.current.children, { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: "power1.out", overwrite: true });
      }
    }, gridRef);
    return () => gsapContext.revert();
  }, [activeTab, category, country, sortBy, isVerified, isTaxExempt, fundraiserType, eventFilter, searchQuery, loading]);

  const filterData = (data) => {
    return data.filter((initiativeItem) => {
        const matchesSearch = initiativeItem.title.toLowerCase().includes(searchQuery.toLowerCase()) || (initiativeItem.desc && initiativeItem.desc.toLowerCase().includes(searchQuery.toLowerCase()));
        const matchesCategory = category === "All Categories" || initiativeItem.tag === category || initiativeItem.category === category;
        const matchesCountry = country === "All Countries" || (initiativeItem.location && initiativeItem.location.includes(country));
        const matchesVerified = !isVerified || initiativeItem.isVerified;
        const matchesTaxExempt = !isTaxExempt || initiativeItem.isTaxExempt;
        const matchesFundraiserType = activeTab !== "fundraisers" || fundraiserType === "All Fundraisers" || initiativeItem.type === fundraiserType;
        const matchesEventFilter = activeTab !== "events" || eventFilter === "All Events" || { active: initiativeItem.status === "active", physical: initiativeItem.eventType === "physical", virtual: initiativeItem.eventType === "virtual", hybrid: initiativeItem.eventType === "hybrid", verified: initiativeItem.isVerified, self: initiativeItem.isSelf, global: initiativeItem.isGlobal }[eventFilter];
        return matchesSearch && matchesCategory && matchesCountry && matchesVerified && matchesTaxExempt && matchesFundraiserType && matchesEventFilter;
      }).sort((a, b) => {
        if (sortBy === "Most Funded") return b.raised / b.goal - a.raised / a.goal;
        return b.id.localeCompare(a.id);
      });
  };

  const filteredCampaigns = filterData(campaigns);
  const filteredEvents = filterData(events);
  const filteredFundraisers = filterData(fundraisers);

  return (
    <section className="bg-white min-h-screen font-sans">
      {/* Template 9 Specific Header - Brutalist Red/Black */}
      <div className="bg-red-600 py-32 lg:py-48 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
            <h1 className="text-6xl md:text-[10vw] font-black text-black mb-12 tracking-tighter leading-[0.8] uppercase">
                Urgent<br /><span className="text-white">Action.</span>
            </h1>
            <div className="max-w-4xl relative group">
                <input type="text" placeholder="WHAT ARE YOU LOOKING FOR?" className="w-full bg-black text-white text-xl md:text-3xl font-black p-8 md:p-12 focus:outline-none focus:bg-white focus:text-black transition-all placeholder:text-white/20 uppercase tracking-tighter" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:block">
                    <Search size={40} className="text-white group-focus-within:text-black" />
                </div>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-[1400px] relative z-20">
        <div className="flex flex-col lg:flex-row gap-0 border-x-4 border-black border-b-4">
            <div className="lg:w-1/4 border-b-4 lg:border-b-0 lg:border-r-4 border-black p-8 bg-black text-white overflow-y-auto no-scrollbar max-h-screen sticky top-0">
                <div className="space-y-10">
                    <div>
                        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] mb-6 text-red-600">Categories</h3>
                        <div className="flex flex-col gap-3">
                            {categories.map((c) => (
                                <button key={c} onClick={() => setCategory(c)} className={`text-left text-sm font-black uppercase tracking-widest transition-all ${category === c ? "text-red-600 translate-x-2" : "hover:text-red-600"}`}>
                                    {c}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] mb-6 text-red-600">Location</h3>
                        <select className="w-full bg-white text-black font-black uppercase p-3 border-4 border-red-600 focus:outline-none" value={country} onChange={(e) => setCountry(e.target.value)}>
                            {countries.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                    </div>

                    <div>
                        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] mb-6 text-red-600">Sort By</h3>
                        <select className="w-full bg-white text-black font-black uppercase p-3 border-4 border-red-600 focus:outline-none" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                            {sortOptions.map(o => <option key={o} value={o}>{o}</option>)}
                        </select>
                    </div>

                    {activeTab === "fundraisers" && (
                        <div>
                            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] mb-6 text-red-600">Type</h3>
                            <select className="w-full bg-white text-black font-black uppercase p-3 border-4 border-red-600 focus:outline-none" value={fundraiserType} onChange={(e) => setFundraiserType(e.target.value)}>
                                {fundraiserOptions.map(o => <option key={o} value={o}>{o}</option>)}
                            </select>
                        </div>
                    )}

                    {activeTab === "events" ? (
                        <div>
                            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] mb-6 text-red-600">Event Type</h3>
                            <select className="w-full bg-white text-black font-black uppercase p-3 border-4 border-red-600 focus:outline-none" value={eventFilter} onChange={(e) => setEventFilter(e.target.value)}>
                                <option value="All Events">ALL EVENTS</option>
                                {eventFilterOptions.map(o => <option key={o.value} value={o.value}>{o.label.toUpperCase()}</option>)}
                            </select>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-red-600">Badges</h3>
                            <button onClick={() => setIsVerified(!isVerified)} className="flex items-center gap-3 w-full text-left">
                                {isVerified ? <CheckSquare className="text-red-600" size={20} /> : <Square size={20} />}
                                <span className="text-sm font-black uppercase tracking-widest">Verified</span>
                            </button>
                            <button onClick={() => setIsTaxExempt(!isTaxExempt)} className="flex items-center gap-3 w-full text-left">
                                {isTaxExempt ? <CheckSquare className="text-red-600" size={20} /> : <Square size={20} />}
                                <span className="text-sm font-black uppercase tracking-widest">Tax Exempt</span>
                            </button>
                        </div>
                    )}

                    <button onClick={handleReset} className="flex items-center gap-3 text-sm font-black uppercase tracking-widest hover:text-red-600 transition-all border-t-4 border-red-600 pt-6 w-full">
                        <RefreshCw size={16} />
                        <span>Reset All</span>
                    </button>
                </div>
            </div>

            <div className="lg:w-3/4 bg-white">
                <div className="flex border-b-4 border-black overflow-x-auto no-scrollbar">
                    {["campaigns", "events", "fundraisers"].map((tabName) => (
                        <button key={tabName} onClick={() => handleTabChange(tabName)} className={`px-12 py-8 text-xs font-black uppercase tracking-[0.3em] transition-all relative border-r-4 border-black last:border-r-0 whitespace-nowrap ${activeTab === tabName ? "bg-black text-white" : "hover:bg-red-600 hover:text-white"}`}>
                            {tabName}
                        </button>
                    ))}
                </div>

                <div className="p-8 md:p-12 min-h-screen">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-40 gap-4 text-black">
                            <Loader2 className="animate-spin" size={64} strokeWidth={4} />
                            <span className="font-black text-2xl uppercase tracking-[0.3em]">Processing...</span>
                        </div>
                    ) : (
                        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {activeTab === "campaigns" && (filteredCampaigns.length > 0 ? <InitiativesCampaigns data={filteredCampaigns} primaryColor="#dc2626" /> : <div className="col-span-full py-20 text-center font-black text-black uppercase tracking-widest italic text-2xl">0 Results Found.</div>)}
                            {activeTab === "events" && (filteredEvents.length > 0 ? <InitiativesEvents data={filteredEvents} primaryColor="#dc2626" /> : <div className="col-span-full py-20 text-center font-black text-black uppercase tracking-widest italic text-2xl">0 Results Found.</div>)}
                            {activeTab === "fundraisers" && (filteredFundraisers.length > 0 ? <InitiativesFundraisers data={filteredFundraisers} primaryColor="#dc2626" /> : <div className="col-span-full py-20 text-center font-black text-black uppercase tracking-widest italic text-2xl">0 Results Found.</div>)}
                        </div>
                    )}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
