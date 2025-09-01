import React from 'react';


const FooterSection = () => {
  return (

    <footer className="footer-section" style={{ background: '#f7f8fa', color: '#222', padding: '56px 0 40px 0' }}>
      <div className="container">
        <div className="row">
          {/* Logo and description */}
          <div className="col-12 col-md-3 d-flex flex-column align-items-start mb-4 mb-md-0">
            <img src="logo-uploaded.jpg" alt="Logo" width="64" height="64" className="mb-3" />
            <div style={{ color: '#222', fontSize: '1.1rem', fontWeight: 400, marginBottom: 12, maxWidth: 180 }}>
              Yorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="d-flex gap-3 mt-2">
              <a href="#" className="text-secondary fs-3"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-secondary fs-3"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-secondary fs-3"><i className="fab fa-x-twitter"></i></a>
            </div>
          </div>
          {/* Four columns */}
          <div className="col-6 col-md-2">
            <div className="fw-bold mb-2" style={{ color: '#3ec28f', fontSize: '2rem', fontFamily: 'inherit' }}>Solutions</div>
            <ul className="list-unstyled" style={{ fontSize: '1.15rem' }}>
              <li>Yorem</li>
              <li>Vorem</li>
              <li>Corem</li>
              <li>Sorem</li>
              <li>Norem</li>
            </ul>
          </div>
          <div className="col-6 col-md-2">
            <div className="fw-bold mb-2" style={{ color: '#3ec28f', fontSize: '2rem', fontFamily: 'inherit' }}>Company</div>
            <ul className="list-unstyled" style={{ fontSize: '1.15rem' }}>
              <li>Jorem</li>
              <li>Lorem</li>
            </ul>
          </div>
          <div className="col-6 col-md-2">
            <div className="fw-bold mb-2" style={{ color: '#3ec28f', fontSize: '2rem', fontFamily: 'inherit' }}>Resources</div>
            <ul className="list-unstyled" style={{ fontSize: '1.15rem' }}>
              <li>Vorem</li>
              <li>Borem</li>
              <li>Yorem</li>
              <li>Horem</li>
              <li>Norem</li>
            </ul>
          </div>
          <div className="col-6 col-md-2">
            <div className="fw-bold mb-2" style={{ color: '#3ec28f', fontSize: '2rem', fontFamily: 'inherit' }}>Insight</div>
            <ul className="list-unstyled" style={{ fontSize: '1.15rem' }}>
              <li>Jorem</li>
              <li>Morem</li>
              <li>Forem</li>
              <li>Jorem</li>
              <li>Corem</li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;
