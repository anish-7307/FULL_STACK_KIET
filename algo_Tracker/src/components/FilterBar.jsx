const DIFFICULTIES = ["All", "Easy", "Medium", "Hard"];
const TOPICS = ["All","Array","String","Linked List","Tree","Graph","Dynamic Programming","Backtracking","Stack","Queue","Binary Search","Hashing","Two Pointers"];
const STATUSES = ["All", "Solved", "Unsolved"];
const TABS = ["All", "Solved", "Unsolved", "Bookmarked"];

function Select({ value, onChange, options, icon, placeholder }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full glass border border-gray-700/50 text-gray-300 text-sm rounded-xl px-4 py-3 pl-10 focus:outline-none focus-ring transition-all duration-200 hover:border-gray-600/50 appearance-none cursor-pointer shadow-lg"
      >
        {options.map((o) => <option key={o} value={o} className="bg-gray-800">{o}</option>)}
      </select>
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
        {icon}
      </div>
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
        <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
    </div>
  );
}

export default function FilterBar({
  search, setSearch,
  filterDifficulty, setFilterDifficulty,
  filterTopic, setFilterTopic,
  filterStatus, setFilterStatus,
  activeTab, setActiveTab,
}) {
  return (
    <div className="space-y-4 animate-fade-in">
      {/* Tab pills */}
      <div className="flex flex-wrap gap-3">
        {TABS.map((tab, index) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 hover-lift shadow-lg animate-slide-in ${
              activeTab === tab
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 border-indigo-500 text-white shadow-indigo-500/25"
                : "glass border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-600/50"
            }`}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {tab === "Bookmarked" && "⭐"} {tab}
          </button>
        ))}
      </div>

      {/* Search + dropdowns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="relative">
          <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 111 11a6 6 0 0116 0z"/>
          </svg>
          <input
            type="text"
            placeholder="Search problems..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full glass border border-gray-700/50 rounded-xl pl-12 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus-ring transition-all duration-200 shadow-lg"
          />
        </div>
        <Select
          value={filterDifficulty}
          onChange={setFilterDifficulty}
          options={DIFFICULTIES}
          icon="🎯"
          placeholder="Difficulty"
        />
        <Select
          value={filterTopic}
          onChange={setFilterTopic}
          options={TOPICS}
          icon="📚"
          placeholder="Topic"
        />
        <Select
          value={filterStatus}
          onChange={setFilterStatus}
          options={STATUSES}
          icon="📊"
          placeholder="Status"
        />
      </div>
    </div>
  );
}