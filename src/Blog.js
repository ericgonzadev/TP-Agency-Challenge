import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const BLOG_API = 'https://futureoffounders.com/wp-json/wp/v2/posts';


const POSTS_PER_PAGE = 8;


function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('date-desc'); // 'date-desc', 'date-asc', 'name-asc', 'name-desc'

  useEffect(() => {
    fetch(BLOG_API)
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load blog posts.');
        setLoading(false);
      });
  }, []);


  // Sort posts
  const sortedPosts = [...posts].sort((a, b) => {
    if (sort === 'date-desc') {
      return new Date(b.date) - new Date(a.date);
    } else if (sort === 'date-asc') {
      return new Date(a.date) - new Date(b.date);
    } else if (sort === 'name-asc') {
      return a.title.rendered.localeCompare(b.title.rendered);
    } else if (sort === 'name-desc') {
      return b.title.rendered.localeCompare(a.title.rendered);
    }
    return 0;
  });

  // Filter posts by search
  const filteredPosts = sortedPosts.filter(post =>
    post.title.rendered.toLowerCase().includes(search.toLowerCase()) ||
    post.excerpt.rendered.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  // Featured: first 4 posts from filtered posts (search applies)
  const featuredPosts = filteredPosts.slice(0, 4);

  const handleSearch = e => {
    setSearch(e.target.value);
    setPage(1);
  };


  const handlePageChange = newPage => {
    if (newPage >= 1 && newPage <= totalPages) setPage(newPage);
  };

  const handleSort = e => {
    setSort(e.target.value);
    setPage(1);
  };

  return (
    <div className="container-fluid px-0 blog-container">
      {/* Header */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 border-bottom">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="/logo192.png" alt="Logo" width="40" height="40" />
          </a>
          {/* ...existing nav code... */}
        </div>
      </nav>
      <div className="container py-4">
        <div className="text-center mb-4">
          <h2 className="fw-bold mb-2 blog-header-title">Gorem ipsum dolor sit amet</h2>
          <div className="mb-2 blog-header-underline"></div>
          <h1 className="fw-bold blog-header-main">Blog</h1>
        </div>
        {/* Search and Sort */}
        <div className="row mb-4 align-items-center">
          <div className="col-md-10 mb-2 mb-md-0">
            <input
              className="form-control blog-search-input"
              placeholder="Search..."
              value={search}
              onChange={handleSearch}
            />
          </div>
          <div className="col-md-2 text-md-end">
            <select
              className="form-select blog-sort-select"
              value={sort}
              onChange={handleSort}
            >
              <option value="date-desc">Newest</option>
              <option value="date-asc">Oldest</option>
              <option value="name-asc">A-Z</option>
              <option value="name-desc">Z-A</option>
            </select>
          </div>
        </div>
        {/* Featured Press Releases */}
        <h5 className="fw-bold mb-3">Featured Press Releases</h5>
        <div className="row mb-5">
          {loading ? (
            <div className="text-center py-5">Loading...</div>
          ) : error ? (
            <div className="text-danger text-center py-5">{error}</div>
          ) : (
            featuredPosts.map(post => (
              <div className="col-md-3 mb-4" key={post.id}>
                <BlogCard post={post} />
              </div>
            ))
          )}
        </div>
        {/* All Press Releases */}
        <h5 className="fw-bold mb-3">All Press Releases</h5>
        <div className="row">
          {loading ? (
            <div className="text-center py-5">Loading...</div>
          ) : error ? (
            <div className="text-danger text-center py-5">{error}</div>
          ) : (
            paginatedPosts.map(post => (
              <div className="col-md-3 mb-4" key={post.id}>
                <BlogCard post={post} />
              </div>
            ))
          )}
        </div>
        {/* Pagination (always show if at least 1 page) */}
        <nav className="d-flex justify-content-center mt-4">
          <ul className="pagination">
            <li className={`page-item${page === 1 ? ' disabled' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(page - 1)}>&lt;</button>
            </li>
            {Array.from({ length: totalPages || 1 }, (_, i) => (
              <li className={`page-item${page === i + 1 ? ' active' : ''}`} key={i}>
                <button className="page-link" onClick={() => handlePageChange(i + 1)}>{i + 1}</button>
              </li>
            ))}
            <li className={`page-item${page === totalPages ? ' disabled' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(page + 1)}>&gt;</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}


function BlogCard({ post }) {
  // Use post.featured_media for image if available, else fallback
  const img = 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80';
  // Format date
  const date = new Date(post.date);
  const dateStr = date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  return (
    <Link to={`/blog/${post.id}`} className="blog-card-link">
      <div className="card shadow-sm px-3 py-3 h-100 blog-card">
        <img src={img} alt={post.title.rendered} className="blog-card-img" />
        <div className="fw-bold mb-1 blog-card-title">{post.title.rendered}</div>
        <div className="mb-1 text-muted blog-card-date">{dateStr}</div>
        <div className="mb-3 blog-card-content">
          {post.excerpt.rendered.replace(/<[^>]+>/g, '').slice(0, 120)}
        </div>
        <div className="fw-bold d-flex align-items-center" style={{ fontSize: '1.08rem', color: '#222' }}>
          Read Case Study
          <span className="ms-2" style={{ color: '#07c167', fontSize: '1.5rem', fontWeight: 600 }}>&#8594;</span>
        </div>
      </div>
    </Link>
  );
}

export default Blog;
