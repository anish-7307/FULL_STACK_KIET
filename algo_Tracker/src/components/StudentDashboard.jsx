import { useState, useEffect } from "react";
import Header from "./Header";
import StatsBar from "./StatsBar";
import FilterBar from "./FilterBar";
import QuestionTable from "./QuestionTable";
import Footer from "./Footer";

export default function StudentDashboard({ questions, toggleSolved, toggleBookmark }) {
  const [search, setSearch] = useState("");
  const [filterDifficulty, setFilterDifficulty] = useState("All");
  const [filterTopic, setFilterTopic] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [activeTab, setActiveTab] = useState("All");

  // Filtered list based on search + dropdowns + tab
  const filtered = questions.filter((q) => {
    const matchSearch = q.title.toLowerCase().includes(search.toLowerCase());
    const matchDifficulty =
      filterDifficulty === "All" || q.difficulty === filterDifficulty;
    const matchTopic = filterTopic === "All" || q.topic === filterTopic;
    const matchStatus =
      filterStatus === "All"
        ? true
        : filterStatus === "Solved"
        ? q.solved
        : !q.solved;
    const matchTab =
      activeTab === "All"
        ? true
        : activeTab === "Bookmarked"
        ? q.bookmarked
        : true;

    return (
      matchSearch &&
      matchDifficulty &&
      matchTopic &&
      matchStatus &&
      matchTab
    );
  });

  // Calculate stats
  const totalCount = questions.length;
  const solvedCount = questions.filter((q) => q.solved).length;
  const easyCount = questions.filter((q) => q.difficulty === "Easy").length;
  const mediumCount = questions.filter((q) => q.difficulty === "Medium").length;
  const hardCount = questions.filter((q) => q.difficulty === "Hard").length;
  const easyDone = questions.filter(
    (q) => q.difficulty === "Easy" && q.solved
  ).length;
  const mediumDone = questions.filter(
    (q) => q.difficulty === "Medium" && q.solved
  ).length;
  const hardDone = questions.filter(
    (q) => q.difficulty === "Hard" && q.solved
  ).length;
  const bookmarkedCount = questions.filter((q) => q.bookmarked).length;
  const completionPercentage =
    totalCount > 0 ? Math.round((solvedCount / totalCount) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <Header />

        {/* Stats Section */}
        <StatsBar
          total={totalCount}
          solved={solvedCount}
          easyCount={easyCount}
          mediumCount={mediumCount}
          hardCount={hardCount}
          easyDone={easyDone}
          mediumDone={mediumDone}
          hardDone={hardDone}
          bookmarkedCount={bookmarkedCount}
          completionPercentage={completionPercentage}
        />

        {/* Filter Section */}
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

        {/* Questions Table */}
        <QuestionTable
          questions={filtered}
          toggleSolved={toggleSolved}
          toggleBookmark={toggleBookmark}
        />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
