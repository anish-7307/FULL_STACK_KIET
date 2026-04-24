import { useState } from "react";

export default function AdminPanel({ questions, onAddQuestion }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    topic: "",
    difficulty: "Easy",
    platform: "LeetCode",
    link: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const topics = [
    "Array",
    "String",
    "Stack",
    "Queue",
    "Linked List",
    "Tree",
    "Graph",
    "Dynamic Programming",
    "Hashing",
    "Binary Search",
    "Two Pointers",
    "Backtracking",
    "Greedy",
    "Math",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.title.trim()) {
      setError("Problem title is required");
      return;
    }
    if (!formData.topic) {
      setError("Topic selection is required");
      return;
    }
    if (!formData.link.trim()) {
      setError("Problem link is required");
      return;
    }

    const newQuestion = {
      id: Math.max(...questions.map((q) => q.id), 0) + 1,
      title: formData.title,
      topic: formData.topic,
      difficulty: formData.difficulty,
      platform: formData.platform,
      link: formData.link,
      solved: false,
      bookmarked: false,
    };

    onAddQuestion(newQuestion);

    setFormData({
      title: "",
      topic: "",
      difficulty: "Easy",
      platform: "LeetCode",
      link: "",
    });

    setSuccess("Question added successfully!");
    setTimeout(() => {
      setIsOpen(false);
      setSuccess("");
    }, 1500);
  };

  return (
    <div className="mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
      >
        <span className="text-lg">➕</span>
        Add New Question
      </button>

      {isOpen && (
        <div className="mt-6 glass rounded-2xl p-8 shadow-2xl animate-fade-in">
          <h2 className="text-2xl font-bold text-white mb-6">Add New DSA Question</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Problem Title */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Problem Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="e.g., Two Sum"
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:bg-gray-800 transition-all"
              />
            </div>

            {/* Topic */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Topic *
              </label>
              <select
                name="topic"
                value={formData.topic}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:bg-gray-800 transition-all"
              >
                <option value="">Select Topic</option>
                {topics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>

            {/* Difficulty & Platform */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Difficulty
                </label>
                <select
                  name="difficulty"
                  value={formData.difficulty}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:bg-gray-800 transition-all"
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Platform
                </label>
                <select
                  name="platform"
                  value={formData.platform}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:bg-gray-800 transition-all"
                >
                  <option value="LeetCode">LeetCode</option>
                  <option value="GFG">GeeksforGeeks</option>
                  <option value="HackerRank">HackerRank</option>
                  <option value="CodeChef">CodeChef</option>
                </select>
              </div>
            </div>

            {/* Problem Link */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Problem Link *
              </label>
              <input
                type="url"
                name="link"
                value={formData.link}
                onChange={handleInputChange}
                placeholder="https://leetcode.com/problems/..."
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:bg-gray-800 transition-all"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
                <p className="text-red-300 text-sm">{error}</p>
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="p-3 bg-green-500/20 border border-green-500/50 rounded-lg">
                <p className="text-green-300 text-sm">{success}</p>
              </div>
            )}

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all"
              >
                Add Question
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex-1 px-6 py-3 bg-gray-700/50 text-gray-300 font-semibold rounded-lg hover:bg-gray-700 transition-all"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Questions Added Count */}
      <div className="mt-4 p-4 glass rounded-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm">Total Questions</p>
            <p className="text-3xl font-bold text-white">{questions.length}</p>
          </div>
          <div className="text-5xl">📚</div>
        </div>
      </div>
    </div>
  );
}
