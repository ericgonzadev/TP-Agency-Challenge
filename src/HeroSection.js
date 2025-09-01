import React from 'react';

const HeroSection = () => (
  <section className="py-5 position-relative overflow-hidden" style={{ background: '#fff' }}>
    {/* Decorative lines left */}
    <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '20%', pointerEvents: 'none', zIndex: 0 }}>
      <div style={{ height: 12, width: '90%', margin: '32px 0 0 0', borderRadius: 8, background: '#d3d6db' }} />
      <div style={{ height: 8, width: '60%', margin: '32px 0 0 0', borderRadius: 8, background: 'linear-gradient(90deg, #a8e063 0%, #56ab2f 100%)' }} />
      <div style={{ height: 12, width: '80%', margin: '32px 0 0 0', borderRadius: 8, background: '#d3d6db' }} />
      <div style={{ height: 8, width: '50%', margin: '32px 0 0 0', borderRadius: 8, background: 'linear-gradient(90deg, #a8e063 0%, #56ab2f 100%)' }} />
      <div style={{ height: 12, width: '100%', margin: '32px 0 0 0', borderRadius: 8, background: '#d3d6db' }} />
      <div style={{ height: 8, width: '70%', margin: '32px 0 0 0', borderRadius: 8, background: 'linear-gradient(90deg, #a8e063 0%, #56ab2f 100%)' }} />
    </div>
    {/* Decorative lines right */}
    <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '20%', pointerEvents: 'none', zIndex: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      <div style={{ height: 12, width: '90%', margin: '32px 0 0 0', borderRadius: 8, background: '#d3d6db' }} />
      <div style={{ height: 8, width: '60%', margin: '32px 0 0 0', borderRadius: 8, background: 'linear-gradient(90deg, #a8e063 0%, #56ab2f 100%)' }} />
      <div style={{ height: 12, width: '80%', margin: '32px 0 0 0', borderRadius: 8, background: '#d3d6db' }} />
      <div style={{ height: 8, width: '50%', margin: '32px 0 0 0', borderRadius: 8, background: 'linear-gradient(90deg, #a8e063 0%, #56ab2f 100%)' }} />
      <div style={{ height: 12, width: '100%', margin: '32px 0 0 0', borderRadius: 8, background: '#d3d6db' }} />
      <div style={{ height: 8, width: '70%', margin: '32px 0 0 0', borderRadius: 8, background: 'linear-gradient(90deg, #a8e063 0%, #56ab2f 100%)' }} />
    </div>
    <div className="container text-center position-relative" style={{ zIndex: 1 }}>
      <h1 className="fw-bold mb-3" style={{ color: '#222', fontSize: '4.2rem', lineHeight: 1.08 }}>
        Horem ipsum dolor sit <span style={{ color: '#3ec28f' }}>amet <br></br>consectetur.</span>
      </h1>
      <div className="mx-auto mb-4" style={{ width: 120, height: 6, background: '#3ec28f', borderRadius: 4 }} />
      <div className="mb-2" style={{ fontWeight: 600, fontSize: '1.5rem', color: '#222' }}>
        Sorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <div className="d-flex justify-content-center gap-3 mb-3">
        <a href="#" className="btn btn-success px-4">Book A Discovery Call</a>
        <a href="#" className="d-inline-flex align-items-center px-0 ms-3" style={{ color: '#222', fontWeight: 500, fontSize: '1.2rem', textDecoration: 'none', border: 'none', background: 'none', boxShadow: 'none' }}>
          Try for free <span className="ms-2" style={{ fontSize: '1.5rem', fontWeight: 600, color: '#3ec28f' }}>&#8594;</span>
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
