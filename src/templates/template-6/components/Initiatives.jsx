import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useRouter } from "next/router";
import { Search, ChevronDown, Filter, RefreshCw, Globe, Tag, SlidersHorizontal, Loader2 } from "lucide-react";
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
  const [isFilterOpen, setIsFilterOpen] = useState(false);
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
        gsap.fromTo(gridRef.current.children, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power2.out", overwrite: true });
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
    <section className="bg-white min-h-screen">
      {/* Template 6 Specific Header - Clean & Minimal Orange */}
      <div className="bg-[#0a0a0a] py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px]"></div>
        <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
            <div className="max-w-3xl">
                <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Crowdfunding Platform</span>
                <h1 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
                    Change starts <br />with <span className="text-orange-500 underline decoration-orange-500/30 underline-offset-8">you.</span>
                </h1>
                <div className="max-w-xl relative group">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input type="text" placeholder="Find a cause to support..." className="w-full pl-16 pr-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white text-base focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:bg-white/10 transition-all" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                </div>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-[1200px] -mt-10 relative z-20 pb-32">
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-[0_30px_100px_rgba(0,0,0,0.08)] border border-gray-50">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-8 md:gap-12 overflow-x-auto no-scrollbar border-b border-gray-100">
              {["campaigns", "events", "fundraisers"].map((tabName) => (
                <button key={tabName} onClick={() => handleTabChange(tabName)} className={`pb-6 text-xs font-black uppercase tracking-[0.15em] transition-all relative whitespace-nowrap ${activeTab === tabName ? "text-orange-500" : "text-gray-300 hover:text-gray-500"}`}>
                  {tabName}{activeTab === tabName && <div className="absolute bottom-0 left-0 w-full h-[3px] bg-orange-500 rounded-full"></div>}
                </button>
              ))}
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <button onClick={() => setIsFilterOpen(!isFilterOpen)} className={`flex items-center gap-3 bg-gray-50 border px-6 py-3.5 rounded-xl text-[11px] font-black uppercase tracking-widest text-gray-900 transition-all ${isFilterOpen ? "border-orange-500 bg-orange-50" : "border-gray-100 hover:border-gray-200"}`}>
                    <Filter size={14} className={isFilterOpen ? "text-orange-500" : "text-gray-400"} />
                    <span>Filter</span>
                </button>
                {isFilterOpen && (
                  <><div className="fixed inset-0 z-40" onClick={() => setIsFilterOpen(false)}></div><div className="absolute top-full left-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">{activeTab === "events" ? ( <div className="space-y-1"><div className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-3">Event Type</div>{eventFilterOptions.map((opt) => ( <button key={opt.value} onClick={() => { setEventFilter(opt.value); setIsFilterOpen(false); }} className={`w-full text-left px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${eventFilter === opt.value ? "bg-orange-500 text-white" : "text-gray-700 hover:bg-gray-50"}`}>{opt.label}</button> ))}</div> ) : ( <div className="space-y-4"><label className="flex items-center gap-3 cursor-pointer group"><input type="checkbox" checked={isVerified} onChange={(e) => setIsVerified(e.target.checked)} className="w-5 h-5 rounded border-gray-300 text-orange-500 focus:ring-orange-500" /><span className="text-xs font-bold text-gray-700 group-hover:text-orange-500">Verified Only</span></label><label className="flex items-center gap-3 cursor-pointer group"><input type="checkbox" checked={isTaxExempt} onChange={(e) => setIsTaxExempt(e.target.checked)} className="w-5 h-5 rounded border-gray-300 text-orange-500 focus:ring-orange-500" /><span className="text-xs font-bold text-gray-700 group-hover:text-orange-500">Tax Exempt</span></label></div> )}</div></>
                )}
              </div>
              <select className="bg-gray-50 border border-gray-100 px-6 py-3.5 rounded-xl text-[11px] font-black uppercase tracking-widest text-gray-900 focus:outline-none focus:border-orange-500 transition-all cursor-pointer min-w-[160px]" value={category} onChange={(e) => setCategory(e.target.value)}>{categories.map((c) => ( <option key={c} value={c}>{c}</option> ))}</select>
              <select className="bg-gray-50 border border-gray-100 px-6 py-3.5 rounded-xl text-[11px] font-black uppercase tracking-widest text-gray-900 focus:outline-none focus:border-orange-500 transition-all cursor-pointer min-w-[160px]" value={country} onChange={(e) => setCountry(e.target.value)}>{countries.map((c) => ( <option key={c} value={c}>{c}</option> ))}</select>
              {activeTab === "fundraisers" && ( <select className="bg-gray-50 border border-gray-100 px-6 py-3.5 rounded-xl text-[11px] font-black uppercase tracking-widest text-gray-900 focus:outline-none focus:border-orange-500 transition-all cursor-pointer min-w-[160px]" value={fundraiserType} onChange={(e) => setFundraiserType(e.target.value)}>{fundraiserOptions.map((c) => ( <option key={c} value={c}>{c}</option> ))}</select> )}
              <select className="bg-gray-50 border border-gray-100 px-6 py-3.5 rounded-xl text-[11px] font-black uppercase tracking-widest text-gray-900 focus:outline-none focus:border-orange-500 transition-all cursor-pointer min-w-[160px]" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>{sortOptions.map((c) => ( <option key={c} value={c}>{c}</option> ))}</select>
              <button onClick={handleReset} className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 hover:bg-gray-100 text-gray-400 transition-all"><RefreshCw size={14} /></button>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-40 gap-4 text-orange-500">
            <Loader2 className="animate-spin" size={48} />
            <span className="font-bold text-lg uppercase tracking-widest">Loading Initiatives...</span>
          </div>
        ) : (
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {activeTab === "campaigns" && (filteredCampaigns.length > 0 ? <InitiativesCampaigns data={filteredCampaigns} primaryColor="#f59e0b" /> : <div className="col-span-full py-20 text-center font-bold text-gray-400">No campaigns found.</div>)}
            {activeTab === "events" && (filteredEvents.length > 0 ? <InitiativesEvents data={filteredEvents} primaryColor="#f59e0b" /> : <div className="col-span-full py-20 text-center font-bold text-gray-400">No events found.</div>)}
            {activeTab === "fundraisers" && (filteredFundraisers.length > 0 ? <InitiativesFundraisers data={filteredFundraisers} primaryColor="#f59e0b" /> : <div className="col-span-full py-20 text-center font-bold text-gray-400">No fundraisers found.</div>)}
          </div>
        )}
      </div>
    </section>
  );
};

export default Initiatives;
