const DIFF = {
  Easy:   "text-green-400 bg-green-900/40 border-green-700/50",
  Medium: "text-yellow-400 bg-yellow-900/40 border-yellow-700/50",
  Hard:   "text-red-400 bg-red-900/40 border-red-700/50",
};

function Checkbox({ checked, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-200 hover-scale focus-ring ${
        checked
          ? "bg-gradient-to-br from-emerald-500 to-green-600 border-emerald-500 shadow-lg shadow-emerald-500/25"
          : "glass border-gray-600 hover:border-emerald-400"
      }`}
    >
      {checked && (
        <svg width="12" height="12" fill="none" stroke="white" viewBox="0 0 24 24" className="animate-fade-in">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M5 13l4 4L19 7"/>
        </svg>
      )}
    </button>
  );
}

export default function QuestionTable({ questions, toggleSolved, toggleBookmark }) {
  if (questions.length === 0) {
    return (
      <div className="text-center py-16 glass rounded-2xl shadow-xl animate-fade-in">
        <div className="max-w-md mx-auto">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-300 mb-2">No problems found</h3>
          <p className="text-gray-500 leading-relaxed">Try adjusting your search terms or filters to discover more DSA problems.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="glass rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-800/60 text-gray-500 text-xs uppercase tracking-wider bg-gray-950/50">
              <th className="px-6 py-4 text-left w-8"></th>
              <th className="px-6 py-4 text-left w-12 text-gray-600">#</th>
              <th className="px-6 py-4 text-left">Problem</th>
              <th className="px-6 py-4 text-left">Topic</th>
              <th className="px-6 py-4 text-left">Difficulty</th>
              <th className="px-6 py-4 text-left">Platform</th>
              <th className="px-6 py-4 text-center w-12">⭐</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((q, idx) => (
              <tr key={q.id}
                className={`border-b border-gray-800/40 last:border-0 transition-all duration-200 hover:bg-gray-800/30 ${
                  q.solved ? "bg-emerald-950/20" : ""
                }`}
              >
                <td className="px-6 py-4">
                  <Checkbox checked={q.solved} onClick={() => toggleSolved(q.id)} />
                </td>
                <td className="px-6 py-4 text-gray-600 text-sm font-mono">{idx + 1}</td>
                <td className="px-6 py-4">
                  <a
                    href={q.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`font-semibold transition-all duration-200 hover:text-indigo-400 group ${
                      q.solved ? "line-through text-gray-500" : "text-white"
                    }`}
                  >
                    <span className="group-hover:underline">{q.title}</span>
                    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      className="inline ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </a>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-indigo-300 bg-indigo-500/10 border border-indigo-500/30 rounded-lg px-3 py-1 whitespace-nowrap font-medium">
                    {q.topic}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-sm border rounded-lg px-3 py-1 font-bold whitespace-nowrap ${DIFF[q.difficulty]}`}>
                    {q.difficulty}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-400 text-sm whitespace-nowrap font-medium">{q.platform}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => toggleBookmark(q.id)}
                    className={`text-xl transition-all duration-200 hover-scale focus-ring p-1 rounded ${
                      q.bookmarked
                        ? "text-yellow-400 drop-shadow-lg"
                        : "text-gray-600 hover:text-yellow-400"
                    }`}
                  >
                    {q.bookmarked ? "⭐" : "☆"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="border-t border-gray-800/60 px-6 py-4 bg-gray-950/30">
        <p className="text-gray-400 text-sm flex items-center gap-2">
          <span className="text-indigo-400">📋</span>
          {questions.length} problem{questions.length !== 1 ? "s" : ""} displayed
        </p>
      </div>
    </div>
  );
}