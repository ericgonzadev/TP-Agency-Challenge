import React from 'react';

const FeaturesSection = () => (
  <section className="py-5">
    <div className="container position-relative" style={{ background: 'url(/map.svg) center/cover no-repeat', minHeight: 380 }}>
      <div className="row justify-content-center text-center mb-4">
        <div className="col-12">
          <h2 className="fw-bold mb-2" style={{ fontSize: '2rem', color: '#222' }}>Rorem ipsum dolor</h2>
          <div className="mx-auto mb-4" style={{ width: 120, height: 6, background: '#d3d6db', borderRadius: 4 }} />
        </div>
      </div>
      <div className="row justify-content-center text-center align-items-end" style={{ minHeight: 220 }}>
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <i className="fas fa-chart-line" style={{ fontSize: '3rem', color: '#3ec28f', marginBottom: 18 }}></i>
          <h3 className="fw-bold" style={{ color: '#222', marginBottom: 8, fontSize: '1.25rem' }}>Vorem ipsum dolor</h3>
          <div style={{ color: '#444', fontSize: '0.98rem' }}>Yorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <i className="fas fa-bookmark" style={{ fontSize: '3rem', color: '#3ec28f', marginBottom: 18 }}></i>
          <h3 className="fw-bold" style={{ color: '#222', marginBottom: 8, fontSize: '1.25rem' }}>Jorem ipsum dolor sit</h3>
          <div style={{ color: '#444', fontSize: '0.98rem' }}>Korem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <i className="fas fa-project-diagram" style={{ fontSize: '3rem', color: '#3ec28f', marginBottom: 18 }}></i>
          <h3 className="fw-bold" style={{ color: '#222', marginBottom: 8, fontSize: '1.25rem' }}>Gorem ipsum</h3>
          <div style={{ color: '#444', fontSize: '0.98rem' }}>Gorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
      </div>
      {/* ...carousel code omitted for brevity... */}
    </div>
  </section>
);

export default FeaturesSection;
