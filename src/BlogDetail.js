import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';
import './BlogDetail.css';

function stripHtml(html) {
  const tmp = document.createElement('DIV');

  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
}

export default function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://futureoffounders.com/wp-json/wp/v2/posts/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Not found');
        return res.json();
      })
      .then(data => {
        setPost(data);
        setLoading(false);
      })
      .catch(e => {
        setError(e.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="container py-5 text-center">Loading...</div>;
  if (error) return <div className="container py-5 text-center text-danger">{error}</div>;
  if (!post) return null;

  // Format date
  const date = new Date(post.date);
  const dateStr = date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });

  // Author info (fallback if not available)
  const authorName = post._embedded?.author?.[0]?.name || 'Unknown Author';
  const authorAvatar = post._embedded?.author?.[0]?.avatar_urls?.['96'] || 'https://randomuser.me/api/portraits/men/32.jpg';

  // Featured image (fallback if not available)
  const featuredImg = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80';

  // Example secondary image (static, as in screenshot)
  const secondaryImg = 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80';

  // Example quote (static, as in screenshot)
  const quote = stripHtml(post.excerpt.rendered).slice(0, 120) + '...';

  return (
    <div className="container-fluid px-0" style={{ background: '#fff', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar />
      <div className="container" style={{ maxWidth: 800, marginTop: 32, marginBottom: 64, width: '100%', boxSizing: 'border-box', paddingLeft: 16, paddingRight: 16 }}>
        <div className="mb-3">
          <Link to="/blog" className="text-decoration-none" style={{ color: '#07c167', fontWeight: 500 }}>&larr; Back to Blog</Link>
        </div>
        <div className="mb-2 text-uppercase" style={{ fontSize: '0.95rem', color: '#888' }}>Blog &gt; {stripHtml(post.title.rendered).slice(0, 40)}</div>
        <h1 className="fw-bold mb-3" style={{ fontSize: '2.2rem', color: '#222' }}>{stripHtml(post.title.rendered)}</h1>
        <div className="d-flex align-items-center mb-4">
          <img src={authorAvatar} alt={authorName} style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', marginRight: 14 }} />
          <div>
            <div className="fw-semibold" style={{ fontSize: '1.08rem', color: '#222' }}>{authorName}</div>
            <div className="text-muted" style={{ fontSize: '0.98rem' }}>{dateStr}</div>
          </div>
        </div>
        <img src={featuredImg} alt="Featured" className="mb-4 blog-detail-img" style={{
          width: 'calc(100vw - 100px)',
          maxWidth: '100%',
          borderRadius: 18,
          objectFit: 'cover',
          maxHeight: 320,
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto'
        }} />
        <div
          className="mb-4 blog-detail-content"
          style={{ fontSize: '1.13rem', color: '#222', lineHeight: 1.7 }}
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
        <img src={secondaryImg} alt="Secondary" className="mb-4 blog-detail-img" style={{
          width: 'calc(100vw - 100px)',
          maxWidth: '100%',
          borderRadius: 18,
          objectFit: 'cover',
          maxHeight: 320,
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto'
        }} />
        <h3 className="fw-bold mb-2" style={{ fontSize: '1.3rem', color: '#222' }}>Horem ipsum dolor sit amet consectetur.</h3>
        <div className="mb-4" style={{ fontSize: '1.08rem', color: '#222', lineHeight: 1.7 }}>
          {/* Example extra content, could be more post.content or static */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies egestas velit sed vehicula, eu dictum velit facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur fermentum, lacus id convallis vehicula, leo erat dictum velit, nec fringilla lorem erat nec enim.
        </div>
        <div className="card p-4 mb-5" style={{ borderRadius: 18, background: '#f7f7f7', border: '1.5px solid #e5e5e5' }}>
          <div className="d-flex align-items-center mb-3">
            <img src={authorAvatar} alt={authorName} style={{ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover', marginRight: 18 }} />
            <div>
              <div className="fw-semibold" style={{ fontSize: '1.08rem', color: '#222' }}>{authorName}</div>
              <div className="text-muted" style={{ fontSize: '0.98rem' }}>Press Lead</div>
            </div>
          </div>
          <div style={{ fontSize: '1.13rem', color: '#222', lineHeight: 1.7 }}>
            <span style={{ fontSize: '2.2rem', color: '#07c167', verticalAlign: 'top', marginRight: 8 }}>&ldquo;</span>
            {quote}
          </div>
        </div>
      </div>
    </div>
  );
}
 
