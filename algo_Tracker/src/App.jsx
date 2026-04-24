import { useState, useEffect } from "react";
import { useAuth } from "./context/AuthContext";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import StudentDashboard from "./components/StudentDashboard";
import AdminPanel from "./components/AdminPanel";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { questionsData } from "./data/questions";

export default function App() {
  const { user } = useAuth();
  
  // Load data from localStorage or use default
  const [questions, setQuestions] = useState(() => {
    const saved = localStorage.getItem('dsa-tracker-questions');
    return saved ? JSON.parse(saved) : questionsData;
  });

  // Save to localStorage whenever questions change
  useEffect(() => {
    localStorage.setItem('dsa-tracker-questions', JSON.stringify(questions));
  }, [questions]);

  // Add new question
  const handleAddQuestion = (newQuestion) => {
    setQuestions((prev) => [...prev, newQuestion]);
  };

  // Toggle solved status of a question
  const toggleSolved = (id) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === id ? { ...q, solved: !q.solved, bookmarked: q.bookmarked } : q
      )
    );
  };

  // Toggle bookmarked status of a question
  const toggleBookmark = (id) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === id ? { ...q, bookmarked: !q.bookmarked } : q
      )
    );
  };

  // If not logged in, show login page
  if (!user) {
    return <Login />;
  }

  // If admin is logged in, show admin panel
  if (user.role === "admin") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-gray-100">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <AdminPanel questions={questions} onAddQuestion={handleAddQuestion} />
          
          {/* Admin Dashboard */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-white mb-6">📋 Questions Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {/* Total Questions */}
              <div className="glass rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Total Questions</p>
                    <p className="text-4xl font-bold text-white mt-2">{questions.length}</p>
                  </div>
                  <div className="text-5xl">📚</div>
                </div>
              </div>

              {/* Easy Count */}
              <div className="glass rounded-xl p-6 border border-white/10 hover:border-green-400/50 transition-all">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Easy</p>
                    <p className="text-4xl font-bold text-green-400 mt-2">{questions.filter((q) => q.difficulty === "Easy").length}</p>
                  </div>
                  <div className="text-5xl">✅</div>
                </div>
              </div>

              {/* Medium Count */}
              <div className="glass rounded-xl p-6 border border-white/10 hover:border-yellow-400/50 transition-all">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Medium</p>
                    <p className="text-4xl font-bold text-yellow-400 mt-2">{questions.filter((q) => q.difficulty === "Medium").length}</p>
                  </div>
                  <div className="text-5xl">⚠️</div>
                </div>
              </div>

              {/* Hard Count */}
              <div className="glass rounded-xl p-6 border border-white/10 hover:border-red-400/50 transition-all">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Hard</p>
                    <p className="text-4xl font-bold text-red-400 mt-2">{questions.filter((q) => q.difficulty === "Hard").length}</p>
                  </div>
                  <div className="text-5xl">🔥</div>
                </div>
              </div>
            </div>

            {/* All Questions List */}
            <div className="glass rounded-2xl overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-800/60 text-gray-500 text-xs uppercase tracking-wider bg-gray-950/50">
                      <th className="px-6 py-4 text-left">#</th>
                      <th className="px-6 py-4 text-left">Problem</th>
                      <th className="px-6 py-4 text-left">Topic</th>
                      <th className="px-6 py-4 text-left">Difficulty</th>
                      <th className="px-6 py-4 text-left">Platform</th>
                    </tr>
                  </thead>
                  <tbody>
                    {questions.map((q, idx) => (
                      <tr key={q.id} className="border-b border-gray-800/40 last:border-0 hover:bg-gray-800/30 transition-all">
                        <td className="px-6 py-4 text-gray-600 text-sm font-mono">{idx + 1}</td>
                        <td className="px-6 py-4">
                          <a
                            href={q.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-purple-400 hover:text-purple-300 transition-all"
                          >
                            {q.title}
                          </a>
                        </td>
                        <td className="px-6 py-4 text-gray-400">{q.topic}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            q.difficulty === "Easy" ? "bg-green-500/20 text-green-300" :
                            q.difficulty === "Medium" ? "bg-yellow-500/20 text-yellow-300" :
                            "bg-red-500/20 text-red-300"
                          }`}>
                            {q.difficulty}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-400">{q.platform}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    );
  }

  // If student is logged in, show student dashboard
  return (
    <div>
      <Navbar />
      <StudentDashboard
        questions={questions}
        toggleSolved={toggleSolved}
        toggleBookmark={toggleBookmark}
      />
    </div>
  );
}