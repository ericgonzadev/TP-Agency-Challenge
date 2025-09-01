import React from 'react';
import './HeroSection.css';

const HeroSection = () => (
  <section className="py-5 position-relative overflow-hidden hero-section">
    {/* Decorative lines left */}
    <div className="hero-section-decor-left">
      <div className="hero-section-decor-line hero-section-decor-line-gray" style={{ height: 12, width: '90%' }} />
      <div className="hero-section-decor-line hero-section-decor-line-green" style={{ height: 8, width: '60%' }} />
      <div className="hero-section-decor-line hero-section-decor-line-gray" style={{ height: 12, width: '80%' }} />
      <div className="hero-section-decor-line hero-section-decor-line-green" style={{ height: 8, width: '50%' }} />
      <div className="hero-section-decor-line hero-section-decor-line-gray" style={{ height: 12, width: '100%' }} />
      <div className="hero-section-decor-line hero-section-decor-line-green" style={{ height: 8, width: '70%' }} />
    </div>
    {/* Decorative lines right */}
    <div className="hero-section-decor-right">
      <div className="hero-section-decor-line hero-section-decor-line-gray" style={{ height: 12, width: '90%' }} />
      <div className="hero-section-decor-line hero-section-decor-line-green" style={{ height: 8, width: '60%' }} />
      <div className="hero-section-decor-line hero-section-decor-line-gray" style={{ height: 12, width: '80%' }} />
      <div className="hero-section-decor-line hero-section-decor-line-green" style={{ height: 8, width: '50%' }} />
      <div className="hero-section-decor-line hero-section-decor-line-gray" style={{ height: 12, width: '100%' }} />
      <div className="hero-section-decor-line hero-section-decor-line-green" style={{ height: 8, width: '70%' }} />
    </div>
    <div className="container text-center position-relative hero-section-content">
      <h1 className="fw-bold mb-3 hero-section-title">
        Horem ipsum dolor sit <span className="hero-section-title-green">amet <br></br>consectetur.</span>
      </h1>
      <div className="mx-auto mb-4 hero-section-underline" />
      <div className="mb-2 hero-section-subtitle">
        Sorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <div className="d-flex justify-content-center gap-3 mb-3">
        <a href="#" className="btn btn-success px-4">Book A Discovery Call</a>
        <a href="#" className="d-inline-flex align-items-center px-0 ms-3 hero-section-cta-link">
          Try for free <span className="ms-2 hero-section-cta-arrow">&#8594;</span>
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
