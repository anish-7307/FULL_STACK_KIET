function NewsCard({ news }) {
  return (
    <div className="news-card">
      <div className="news-card-image">
        <img 
          src={news.urlToImage || 'https://via.placeholder.com/400x250?text=No+Image'} 
          alt={news.title}
        />
        <div className="news-card-overlay"></div>
      </div>
      <div className="news-card-content">
        <h3 className="news-card-title">{news.title}</h3>
        <p className="news-card-description">{news.description?.substring(0, 100)}...</p>
        <div className="news-card-meta">
          <span className="news-source">{news.source?.name}</span>
          <span className="news-date">
            {new Date(news.publishedAt).toLocaleDateString()}
          </span>
        </div>
        <a 
          href={news.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="read-more-btn"
        >
          Read More →
        </a>
      </div>
    </div>
  );
}

export default NewsCard;