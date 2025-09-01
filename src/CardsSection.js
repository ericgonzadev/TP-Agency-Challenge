import React from 'react';

const CardsSection = () => (
  <section className="py-5 bg-light">
    <div className="container">
      <h5 className="text-success mb-2">Sorem ipsum</h5>
      <h2 className="fw-bold mb-4">Dorem ipsum dolor sit</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0 rounded-4">
            <div className="card-body d-flex flex-column align-items-start">
              <div className="mb-3" style={{ fontSize: 36, color: '#3ec28f' }}>
                <i className="fas fa-chart-line"></i>
              </div>
              <h5 className="card-title fw-bold mb-2">Yorem ipsum dolor</h5>
              <p className="card-text mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.</p>
              <a href="#" className="btn btn-outline-success mt-auto">Learn More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0 rounded-4">
            <div className="card-body d-flex flex-column align-items-start">
              <div className="mb-3" style={{ fontSize: 36, color: '#3ec28f' }}>
                <i className="fas fa-bolt"></i>
              </div>
              <h5 className="card-title fw-bold mb-2">Vorem ipsum dolor</h5>
              <p className="card-text mb-4">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              <a href="#" className="btn btn-outline-success mt-auto">Learn More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0 rounded-4">
            <div className="card-body d-flex flex-column align-items-start">
              <div className="mb-3" style={{ fontSize: 36, color: '#3ec28f' }}>
                <i className="fas fa-cogs"></i>
              </div>
              <h5 className="card-title fw-bold mb-2">Corem ipsum dolor</h5>
              <p className="card-text mb-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
              <a href="#" className="btn btn-outline-success mt-auto">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CardsSection;
