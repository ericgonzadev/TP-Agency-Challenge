
import React, { useState } from 'react';
let cardImage = process.env.PUBLIC_URL + '/CardImage.jpg'; // Keep this line for backward compatibility

const cards = [
  {
  img: cardImage,
    title: 'Corem ipsum dolor',
    desc: 'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
  },
  {
    img: cardImage,
    title: 'Jorem ipsum dolor',
    desc: 'Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
  },
  {
    img: cardImage,
    title: 'Yorem ipsum dolor',
    desc: 'Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
  },
  {
    img: cardImage,
    title: 'Morem ipsum dolor',
    desc: 'Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
  },
  {
    img: cardImage,
    title: 'Dorem ipsum dolor',
    desc: 'Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
  },
];

const CardsSection = () => {
  const [index, setIndex] = useState(0);
  const visibleCards = 3;
  const maxIndex = cards.length - visibleCards;

  const handlePrev = () => setIndex((i) => Math.max(i - 1, 0));
  const handleNext = () => setIndex((i) => Math.min(i + 1, maxIndex));

  return (
    <section className="py-5 bg-light cards-carousel-section">
      <div className="container">
        <h5 className="text-center mb-2" style={{ color: '#3ec28f', fontWeight: 500 }}>Sorem ipsum</h5>
        <div className="d-flex flex-column align-items-center mb-4">
          <h2 className="fw-bold text-center mb-2" style={{ fontSize: '3rem' }}>Dorem ipsum dolor sit</h2>
          <div style={{ width: 120, height: 4, background: '#3ec28f', borderRadius: 2, marginTop: 8 }} />
        </div>
        <div className="position-relative">
          <div className="d-flex gap-4 justify-content-center cards-carousel-track" style={{ overflow: 'hidden' }}>
            {cards.slice(index, index + visibleCards).map((card, i) => (
              <div key={i} className="card shadow-sm border-0 rounded-4 flex-shrink-0" style={{ width: 320, minHeight: 420, background: 'linear-gradient(180deg, #f8fafc 80%, #fff 100%)', boxShadow: '0 2px 16px #0001', marginRight: i < visibleCards - 1 ? 24 : 0 }}>
                <img src={card.img} alt={card.title} className="w-100 rounded-4" style={{ height: 160, objectFit: 'cover', marginBottom: 16 }} />
                <div className="px-4 pb-4 pt-2 d-flex flex-column h-100">
                  <h5 className="fw-bold mb-2" style={{ fontSize: '1.2rem' }}>{card.title}</h5>
                  <p className="mb-4" style={{ color: '#6c757d', fontSize: '1rem' }}>{card.desc}</p>
                  <a href="#" className="d-flex align-items-center mt-auto fw-medium" style={{ color: '#222', textDecoration: 'none' }}>
                    Read Case Study <span style={{ marginLeft: 8, color: '#3ec28f', fontSize: 22 }}>&rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-end gap-3 mt-4" style={{ position: 'absolute', right: 0, bottom: -56 }}>
            <button onClick={handlePrev} className="btn btn-light shadow-sm rounded-circle p-2" disabled={index === 0} aria-label="Previous" style={{ opacity: index === 0 ? 0.5 : 1 }}>
              <span style={{ fontSize: 28 }}>&#8592;</span>
            </button>
            <button onClick={handleNext} className="btn btn-light shadow-sm rounded-circle p-2" disabled={index === maxIndex} aria-label="Next" style={{ opacity: index === maxIndex ? 0.5 : 1 }}>
              <span style={{ fontSize: 28 }}>&#8594;</span>
            </button>
          </div>
        </div>
      </div>
  {/* All styles moved to CardsSection.css */}
    </section>
  );
};

export default CardsSection;


