import { useState } from "react";
import NewsCard from "./NewsCard";

export default function News() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 6;

  const news = [
    {
      title: "Breaking: Major Tech Breakthrough Announced",
      description: "Scientists unveil revolutionary technology that could change the world forever. This discovery promises to impact every industry from healthcare to transportation.",
      urlToImage: "https://via.placeholder.com/400x250/FF6B6B/FFFFFF?text=Tech+News",
      source: { name: "Tech Daily" },
      publishedAt: "2026-03-30T10:00:00Z",
      url: "#"
    },
    {
      title: "Breaking: Major Tech Breakthrough Announced",
      description: "Scientists unveil revolutionary technology that could change the world forever. This discovery promises to impact every industry from healthcare to transportation.",
      urlToImage: "https://via.placeholder.com/400x250/FF6B6B/FFFFFF?text=Tech+News",
      source: { name: "Tech Daily" },
      publishedAt: "2026-03-30T10:00:00Z",
      url: "#"
    },
    {
      title: "Breaking: Major Tech Breakthrough Announced",
      description: "Scientists unveil revolutionary technology that could change the world forever. This discovery promises to impact every industry from healthcare to transportation.",
      urlToImage: "https://via.placeholder.com/400x250/FF6B6B/FFFFFF?text=Tech+News",
      source: { name: "Tech Daily" },
      publishedAt: "2026-03-30T10:00:00Z",
      url: "#"
    },
    {
      title: "Breaking: Major Tech Breakthrough Announced",
      description: "Scientists unveil revolutionary technology that could change the world forever. This discovery promises to impact every industry from healthcare to transportation.",
      urlToImage: "https://via.placeholder.com/400x250/FF6B6B/FFFFFF?text=Tech+News",
      source: { name: "Tech Daily" },
      publishedAt: "2026-03-30T10:00:00Z",
      url: "#"
    },
    {
      title: "Breaking: Major Tech Breakthrough Announced",
      description: "Scientists unveil revolutionary technology that could change the world forever. This discovery promises to impact every industry from healthcare to transportation.",
      urlToImage: "https://via.placeholder.com/400x250/FF6B6B/FFFFFF?text=Tech+News",
      source: { name: "Tech Daily" },
      publishedAt: "2026-03-30T10:00:00Z",
      url: "#"
    },
    {
      title: "Breaking: Major Tech Breakthrough Announced",
      description: "Scientists unveil revolutionary technology that could change the world forever. This discovery promises to impact every industry from healthcare to transportation.",
      urlToImage: "https://via.placeholder.com/400x250/FF6B6B/FFFFFF?text=Tech+News",
      source: { name: "Tech Daily" },
      publishedAt: "2026-03-30T10:00:00Z",
      url: "#"
    },
    {
      title: "Breaking: Major Tech Breakthrough Announced",
      description: "Scientists unveil revolutionary technology that could change the world forever. This discovery promises to impact every industry from healthcare to transportation.",
      urlToImage: "https://via.placeholder.com/400x250/FF6B6B/FFFFFF?text=Tech+News",
      source: { name: "Tech Daily" },
      publishedAt: "2026-03-30T10:00:00Z",
      url: "#"
    },
    {
      title: "Breaking: Major Tech Breakthrough Announced",
      description: "Scientists unveil revolutionary technology that could change the world forever. This discovery promises to impact every industry from healthcare to transportation.",
      urlToImage: "https://via.placeholder.com/400x250/FF6B6B/FFFFFF?text=Tech+News",
      source: { name: "Tech Daily" },
      publishedAt: "2026-03-30T10:00:00Z",
      url: "#"
    },
    {
      title: "Global Climate Summit Reaches Historic Agreement",
      description: "World leaders unite on ambitious climate goals, pledging to reduce carbon emissions by 50% within the next decade. Environmental experts call it a turning point.",
      urlToImage: "https://via.placeholder.com/400x250/4ECDC4/FFFFFF?text=Climate+News",
      source: { name: "Green World" },
      publishedAt: "2026-03-29T14:30:00Z",
      url: "#"
    },
    {
      title: "Space Exploration Milestone: Mars Mission Success",
      description: "NASA's latest mission to Mars successfully lands, marking a new era in human space exploration. The rover begins collecting crucial data about the red planet.",
      urlToImage: "https://via.placeholder.com/400x250/45B7D1/FFFFFF?text=Space+News",
      source: { name: "Space News" },
      publishedAt: "2026-03-28T09:15:00Z",
      url: "#"
    },
    {
      title: "Economic Boom: Stock Markets Hit Record Highs",
      description: "Global stock markets surge to new all-time highs as investor confidence grows. Analysts predict continued growth in the coming quarters.",
      urlToImage: "https://via.placeholder.com/400x250/F9CA24/FFFFFF?text=Economy+News",
      source: { name: "Finance Today" },
      publishedAt: "2026-03-27T16:45:00Z",
      url: "#"
    },
    {
      title: "Medical Breakthrough: New Treatment for Rare Disease",
      description: "Researchers develop groundbreaking treatment for a previously incurable disease, offering hope to millions of patients worldwide.",
      urlToImage: "https://via.placeholder.com/400x250/6C5CE7/FFFFFF?text=Health+News",
      source: { name: "Medical Journal" },
      publishedAt: "2026-03-26T11:20:00Z",
      url: "#"
    },
    {
      title: "Sports Championship: Underdog Team Wins Title",
      description: "In a stunning upset, the underdog team clinches the championship title in a thrilling final match that went into overtime.",
      urlToImage: "https://via.placeholder.com/400x250/E17055/FFFFFF?text=Sports+News",
      source: { name: "Sports Central" },
      publishedAt: "2026-03-25T20:00:00Z",
      url: "#"
    },
    {
      title: "AI Revolution: New Language Model Released",
      description: "Tech giant releases advanced AI language model capable of understanding and generating human-like text with unprecedented accuracy.",
      urlToImage: "https://via.placeholder.com/400x250/A29BFE/FFFFFF?text=AI+News",
      source: { name: "AI Weekly" },
      publishedAt: "2026-03-24T08:30:00Z",
      url: "#"
    },
    {
      title: "Renewable Energy Milestone: Solar Power Breakthrough",
      description: "Scientists achieve record efficiency in solar panel technology, making renewable energy more accessible and cost-effective than ever before.",
      urlToImage: "https://via.placeholder.com/400x250/00B894/FFFFFF?text=Energy+News",
      source: { name: "Energy Report" },
      publishedAt: "2026-03-23T13:10:00Z",
      url: "#"
    },
    {
      title: "Entertainment: Blockbuster Movie Breaks Box Office Records",
      description: "The latest superhero film shatters opening weekend records, becoming the highest-grossing movie of all time in just three days.",
      urlToImage: "https://via.placeholder.com/400x250/FD79A8/FFFFFF?text=Movie+News",
      source: { name: "Entertainment Buzz" },
      publishedAt: "2026-03-22T18:45:00Z",
      url: "#"
    },
    {
      title: "Education Reform: New Learning Methods Introduced",
      description: "Educational institutions adopt innovative teaching methods that combine technology and traditional learning for better student outcomes.",
      urlToImage: "https://via.placeholder.com/400x250/E84393/FFFFFF?text=Education+News",
      source: { name: "Education Today" },
      publishedAt: "2026-03-21T12:00:00Z",
      url: "#"
    },
    {
      title: "Transportation: Electric Vehicle Sales Surge",
      description: "Electric vehicle market explodes with record sales, as consumers increasingly choose sustainable transportation options.",
      urlToImage: "https://via.placeholder.com/400x250/00CEC9/FFFFFF?text=Auto+News",
      source: { name: "Auto News" },
      publishedAt: "2026-03-20T15:25:00Z",
      url: "#"
    },
    {
      title: "Food Industry: Plant-Based Revolution Continues",
      description: "Plant-based food alternatives dominate the market as consumers prioritize health and environmental sustainability in their diets.",
      urlToImage: "https://via.placeholder.com/400x250/55EFC4/FFFFFF?text=Food+News",
      source: { name: "Food Gazette" },
      publishedAt: "2026-03-19T10:50:00Z",
      url: "#"
    }
  ];

  const lastIndex = itemPerPage * currentPage;
  const firstIndex = lastIndex - itemPerPage;
  const currentNews = news.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(news.length / itemPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="news-container">
      <div className="news-header">
        <h1>News Hub</h1>
        <p>Explore our collection of news article templates</p>
      </div>

      <div className="news-grid">
        {currentNews.map((item, index) => (
          <NewsCard key={index} news={item} />
        ))}
      </div>

      <div className="pagination">
        <button onClick={handlePrevious} disabled={currentPage === 1}>
          ← Previous
        </button>
        <span className="pagination-info">
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next →
        </button>
      </div>
    </div>
  );
}