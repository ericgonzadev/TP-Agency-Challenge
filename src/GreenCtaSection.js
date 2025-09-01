import React from 'react';

const GreenCtaSection = () => (
  <section className="py-5" style={{ background: 'linear-gradient(90deg, #a8e063 0%, #56ab2f 100%)' }}>
    <div className="container text-center text-white">
      <h2 className="fw-bold mb-2">Green Section</h2>
      <h5 className="mb-4" style={{ color: '#222' }}>Rorem ipsum dolor sit amet consectetur</h5>
      <p className="mb-4" style={{ color: '#222' }}>
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
