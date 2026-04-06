function StatCard({ label, value, color, bg, icon, delay = 0 }) {
  return (
    <div className={`glass rounded-2xl p-6 flex flex-col gap-2 hover-lift transition-all duration-300 shadow-xl animate-fade-in`}
         style={{ animationDelay: `${delay}ms` }}>
      <div className="flex items-center gap-2">
        <span className="text-2xl">{icon}</span>
        <span className="text-gray-400 text-sm uppercase tracking-widest font-medium">{label}</span>
      </div>
      <span className={`text-3xl font-bold ${color}`}>{value}</span>
    </div>
  );
}

export default function StatsBar({ total, solved, easy, medium, hard }) {
  const pct = total > 0 ? Math.round((solved / total) * 100) : 0;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <StatCard
          label="Total"
          value={total}
          color="text-indigo-400"
          icon="📊"
          delay={0}
        />
        <StatCard
          label="Solved"
          value={solved}
          color="text-emerald-400"
          icon="✅"
          delay={100}
        />
        <StatCard
          label="Easy ✓"
          value={easy}
          color="text-green-400"
          icon="🟢"
          delay={200}
        />
        <StatCard
          label="Medium ✓"
          value={medium}
          color="text-yellow-400"
          icon="🟡"
          delay={300}
        />
        <StatCard
          label="Hard ✓"
          value={hard}
          color="text-red-400"
          icon="🔴"
          delay={400}
        />
      </div>

      <div className="glass rounded-2xl p-6 shadow-xl animate-fade-in" style={{ animationDelay: '500ms' }}>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📈</span>
            <span className="text-gray-300 text-lg font-semibold">Overall Progress</span>
          </div>
          <span className="gradient-text font-bold text-2xl">{pct}%</span>
        </div>
        <div className="h-3 bg-gray-800/50 rounded-full overflow-hidden shadow-inner">
          <div
            className="h-full rounded-full transition-all duration-1000 ease-out shadow-lg"
            style={{
              width: pct + "%",
              background: "linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)"
            }}
          />
        </div>
        <p className="text-gray-400 text-sm mt-3 flex items-center gap-2">
          <span className="text-emerald-400">●</span>
          {solved} of {total} questions conquered
        </p>
      </div>
    </div>
  );
}