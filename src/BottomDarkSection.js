import React from 'react';


const BottomDarkSection = () => (
  <div style={{ background: '#232120', color: '#fff', padding: '0 0 32px 0', marginTop: 0 }}>
    <div className="container-fluid px-0" style={{ maxWidth: '100vw' }}>
      <div className="row g-0">
        <div className="col-12" style={{ padding: '24px 28px 0 28px' }}>
          <div style={{ fontSize: '1.35rem', fontWeight: 500, marginBottom: 12 }}>
            Torem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
      </div>
      <div className="row g-0 align-items-center" style={{ padding: '0 28px 0 28px' }}>
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <form className="d-flex" style={{ maxWidth: 340 }} onSubmit={e => e.preventDefault()}>
            <input type="email" className="form-control" placeholder="Email" style={{ borderRadius: '6px 0 0 6px', border: 'none', height: 38, fontSize: '1.08rem' }} />
            <button type="submit" className="btn btn-success" style={{ borderRadius: '0 6px 6px 0', fontWeight: 500, fontSize: '1.08rem', height: 38, minWidth: 90 }}>Submit</button>
          </form>
        </div>
        <div className="col-12 col-md-6 d-flex flex-column flex-md-row align-items-md-center justify-content-md-end mt-3 mt-md-0" style={{ fontSize: '1rem', fontWeight: 400 }}>
          <div className="d-flex gap-4 mb-2 mb-md-0">
            <a href="#" className="text-white text-decoration-none" style={{ opacity: 0.85 }}>Privacy Policy</a>
            <a href="#" className="text-white text-decoration-none" style={{ opacity: 0.85 }}>Terms of Use</a>
          </div>
          <div className="ms-md-4 mt-2 mt-md-0" style={{ opacity: 0.85 }}>
            Copyright © 2025 Gorem ipsum dolor sit amet elit.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BottomDarkSection;
