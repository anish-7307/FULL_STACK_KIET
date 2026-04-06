import { useState, useEffect } from "react";
import Header from "./components/Header";
import StatsBar from "./components/StatsBar";
import FilterBar from "./components/FilterBar";
import QuestionTable from "./components/QuestionTable";
import Footer from "./components/Footer";
import { questionsData } from "./data/questions";
 
export default function App() {
  // Load data from localStorage or use default
  const [questions, setQuestions] = useState(() => {
    const saved = localStorage.getItem('dsa-tracker-questions');
    return saved ? JSON.parse(saved) : questionsData;
  });
  const [search, setSearch] = useState("");
  const [filterDifficulty, setFilterDifficulty] = useState("All");
  const [filterTopic, setFilterTopic] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [activeTab, setActiveTab] = useState("All");

  // Save to localStorage whenever questions change
  useEffect(() => {
    localStorage.setItem('dsa-tracker-questions', JSON.stringify(questions));
  }, [questions]);
 
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
 
  // Filtered list based on search + dropdowns + tab
  const filtered = questions.filter((q) => {
    const matchSearch = q.title.toLowerCase().includes(search.toLowerCase());
    const matchDifficulty =
      filterDifficulty === "All" || q.difficulty === filterDifficulty;
    const matchTopic = filterTopic === "All" || q.topic === filterTopic;
    const matchStatus =
      filterStatus === "All" ||
      (filterStatus === "Solved" && q.solved) ||
      (filterStatus === "Unsolved" && !q.solved);
    const matchTab =
      activeTab === "All" ||
      (activeTab === "Bookmarked" && q.bookmarked) ||
      (activeTab === "Solved" && q.solved) ||
      (activeTab === "Unsolved" && !q.solved);
    return matchSearch && matchDifficulty && matchTopic && matchStatus && matchTab;
  });
 
  // Computed stats
  const total = questions.length;
  const solved = questions.filter((q) => q.solved).length;
  const easy = questions.filter((q) => q.difficulty === "Easy" && q.solved).length;
  const medium = questions.filter((q) => q.difficulty === "Medium" && q.solved).length;
  const hard = questions.filter((q) => q.difficulty === "Hard" && q.solved).length;
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white font-mono flex flex-col relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)] pointer-events-none"></div>
      <Header />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8 relative z-10">
        <StatsBar total={total} solved={solved} easy={easy} medium={medium} hard={hard} />
        <FilterBar
          search={search}
          setSearch={setSearch}
          filterDifficulty={filterDifficulty}
          setFilterDifficulty={setFilterDifficulty}
          filterTopic={filterTopic}
          setFilterTopic={setFilterTopic}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <QuestionTable
          questions={filtered}
          toggleSolved={toggleSolved}
          toggleBookmark={toggleBookmark}
        />
      </main>
      <Footer />
    </div>
  );
}