import React from 'react';
import './GreenCtaSection.css';

const GreenCtaSection = () => (
  <section className="py-5 green-cta-section">
    <div className="container text-center text-white">
      <h2 className="fw-bold mb-2">Green Section</h2>
  <h5 className="mb-4 green-cta-title">Rorem ipsum dolor sit amet consectetur</h5>
  <p className="mb-4 green-cta-text">
        Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
      </p>
      <div className="d-flex justify-content-center gap-3 mb-3">
        <a href="#" className="btn btn-success px-4">Book A Discovery Call</a>
        <a href="#" className="btn btn-outline-light px-4">Try for free</a>
      </div>
    </div>
  </section>
);

export default GreenCtaSection;
