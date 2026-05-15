import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useRouter } from "next/router";
import { Search, ChevronDown, Filter, RefreshCw, Globe, Tag, Zap, SlidersHorizontal, Loader2 } from "lucide-react";
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
        gsap.fromTo(gridRef.current.children, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.2)", overwrite: true });
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
    <section className="bg-slate-50 min-h-screen">
      {/* Template 7 Specific Header - Modern Indigo Gradient */}
      <div className="bg-[#0f172a] py-24 lg:py-36 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full -translate-y-1/2 blur-[150px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full translate-y-1/2 blur-[150px]"></div>
        
        <div className="container mx-auto px-4 max-w-[1200px] relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-full mb-8">
                <Zap size={14} className="text-indigo-400" />
                <span className="text-indigo-300 text-[10px] font-black uppercase tracking-[0.2em]">Discover New Causes</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tight leading-[0.9]">
                Fuel the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">Future.</span>
            </h1>
            <div className="max-w-2xl mx-auto relative group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                <input type="text" placeholder="Search initiatives..." className="w-full pl-16 pr-8 py-6 rounded-3xl bg-slate-800/50 border border-slate-700 text-white text-lg focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all backdrop-blur-md" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-[1200px] -mt-12 relative z-20 pb-32">
        <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-4 md:p-6 mb-16 shadow-[0_40px_80px_rgba(15,23,42,0.05)] border border-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-2 p-2 bg-slate-100 rounded-2xl overflow-x-auto no-scrollbar">
              {["campaigns", "events", "fundraisers"].map((tabName) => (
                <button key={tabName} onClick={() => handleTabChange(tabName)} className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === tabName ? "bg-white text-indigo-600 shadow-md" : "text-slate-400 hover:text-slate-600"}`}>
                  {tabName}
                </button>
              ))}
            </div>
            
            <div className="flex flex-wrap items-center gap-3 px-2">
              <div className="relative">
                <button onClick={() => setIsFilterOpen(!isFilterOpen)} className={`flex items-center gap-3 bg-white border-2 px-6 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${isFilterOpen ? "border-indigo-600 text-indigo-600" : "border-slate-100 text-slate-900 hover:border-slate-200"}`}>
                    <Filter size={14} />
                    <span>Options</span>
                </button>
                {isFilterOpen && (
                  <><div className="fixed inset-0 z-40" onClick={() => setIsFilterOpen(false)}></div><div className="absolute top-full right-0 mt-3 w-64 bg-white rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.1)] border border-slate-100 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">{activeTab === "events" ? ( <div className="space-y-1"><div className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-4">Event Filtering</div><button onClick={() => { setEventFilter("All Events"); setIsFilterOpen(false); }} className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all ${eventFilter === "All Events" ? "bg-indigo-600 text-white shadow-lg" : "text-slate-700 hover:bg-slate-50"}`}>All Events</button>{eventFilterOptions.map((opt) => ( <button key={opt.value} onClick={() => { setEventFilter(opt.value); setIsFilterOpen(false); }} className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all ${eventFilter === opt.value ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100" : "text-slate-700 hover:bg-slate-50"}`}>{opt.label}</button> ))}</div> ) : ( <div className="space-y-5"><label className="flex items-center gap-3 cursor-pointer group"><input type="checkbox" checked={isVerified} onChange={(e) => setIsVerified(e.target.checked)} className="w-5 h-5 rounded-lg border-slate-200 text-indigo-600 focus:ring-indigo-500" /><span className="text-xs font-bold text-slate-700 group-hover:text-indigo-600">Verified Only</span></label><label className="flex items-center gap-3 cursor-pointer group"><input type="checkbox" checked={isTaxExempt} onChange={(e) => setIsTaxExempt(e.target.checked)} className="w-5 h-5 rounded-lg border-slate-200 text-indigo-600 focus:ring-indigo-500" /><span className="text-xs font-bold text-slate-700 group-hover:text-indigo-600">Tax Exempt</span></label></div> )}</div></>
                )}
              </div>
              <div className="relative"><Tag size={12} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" /><select className="bg-white border-2 border-slate-100 pl-10 pr-6 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest text-slate-900 focus:outline-none focus:border-indigo-600 transition-all cursor-pointer min-w-[160px] appearance-none" value={category} onChange={(e) => setCategory(e.target.value)}>{categories.map((c) => ( <option key={c} value={c}>{c}</option> ))}</select><ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" /></div>
              <div className="relative"><Globe size={12} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" /><select className="bg-white border-2 border-slate-100 pl-10 pr-6 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest text-slate-900 focus:outline-none focus:border-indigo-600 transition-all cursor-pointer min-w-[160px] appearance-none" value={country} onChange={(e) => setCountry(e.target.value)}>{countries.map((c) => ( <option key={c} value={c}>{c}</option> ))}</select><ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" /></div>
              {activeTab === "fundraisers" && ( <div className="relative"><SlidersHorizontal size={12} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" /><select className="bg-white border-2 border-slate-100 pl-10 pr-6 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest text-slate-900 focus:outline-none focus:border-indigo-600 transition-all cursor-pointer min-w-[160px] appearance-none" value={fundraiserType} onChange={(e) => setFundraiserType(e.target.value)}>{fundraiserOptions.map((c) => ( <option key={c} value={c}>{c}</option> ))}</select><ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" /></div> )}
              <div className="relative"><div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[9px] font-black">AZ</div><select className="bg-white border-2 border-slate-100 pl-10 pr-6 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest text-slate-900 focus:outline-none focus:border-indigo-600 transition-all cursor-pointer min-w-[160px] appearance-none" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>{sortOptions.map((c) => ( <option key={c} value={c}>{c}</option> ))}</select><ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" /></div>
              <button onClick={handleReset} className="p-3 rounded-xl bg-slate-50 border-2 border-slate-100 hover:bg-slate-100 text-slate-400 transition-all"><RefreshCw size={14} /></button>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-40 gap-4 text-indigo-600">
            <Loader2 className="animate-spin" size={48} />
            <span className="font-bold text-lg uppercase tracking-widest">Loading Initiatives...</span>
          </div>
        ) : (
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {activeTab === "campaigns" && (filteredCampaigns.length > 0 ? <InitiativesCampaigns data={filteredCampaigns} primaryColor="#4f46e5" /> : <div className="col-span-full py-20 text-center font-bold text-slate-400">No campaigns found.</div>)}
            {activeTab === "events" && (filteredEvents.length > 0 ? <InitiativesEvents data={filteredEvents} primaryColor="#4f46e5" /> : <div className="col-span-full py-20 text-center font-bold text-slate-400">No events found.</div>)}
            {activeTab === "fundraisers" && (filteredFundraisers.length > 0 ? <InitiativesFundraisers data={filteredFundraisers} primaryColor="#4f46e5" /> : <div className="col-span-full py-20 text-center font-bold text-slate-400">No fundraisers found.</div>)}
          </div>
        )}
      </div>
    </section>
  );
};

export default Initiatives;
