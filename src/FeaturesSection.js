import React from 'react';

const FeaturesSection = () => (
  <section className="py-5">
    <div
      className="container position-relative"
      style={{ background: "url('/map4.png') center/cover no-repeat", minHeight: 380 }}
    >
      <div className="row justify-content-center text-center mb-4">
        <div className="col-12">
          <h2 className="fw-bold mb-2 features-section-title">Rorem ipsum dolor</h2>
          <div className="mx-auto mb-4 features-section-underline" />
        </div>
      </div>
  <div className="row justify-content-center text-center align-items-end features-section-row">
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <i className="fas fa-chart-line features-section-icon"></i>
          <h3 className="fw-bold features-section-card-title">Vorem ipsum dolor</h3>
          <div className="features-section-card-desc">Yorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <i className="fas fa-bookmark features-section-icon"></i>
          <h3 className="fw-bold features-section-card-title">Jorem ipsum dolor sit</h3>
          <div className="features-section-card-desc">Korem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <i className="fas fa-project-diagram features-section-icon"></i>
          <h3 className="fw-bold features-section-card-title">Gorem ipsum</h3>
          <div className="features-section-card-desc">Gorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
      </div>
      {/* ...carousel code omitted for brevity... */}
    </div>
  </section>
);

export default FeaturesSection;
