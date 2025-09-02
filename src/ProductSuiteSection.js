import React from 'react';


import { useState } from 'react';


const tabContent = [
  {
    title: 'Lorem ipsum',
    content: (
      <div style={{ background: 'linear-gradient(180deg, lightgrey 80%, #e9eaec 100%)', borderRadius: 20, padding: 0, marginTop: 24 }}>
        <div className="row align-items-center" style={{ padding: 32 }}>
          <div className="col-md-5 mb-3 mb-md-0">
            <img src="Product1.png" alt="Product 1" className="img-fluid rounded" />
          </div>
          <div className="col-md-7">
            <h4 className="fw-bold mb-2">Jorem ipsum dolor sit amet</h4>
            <p>Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
            <div style={{ margin: '18px 0 18px 0' }}>
              <div style={{ fontWeight: 600, fontSize: '1.1rem', borderBottom: '1.5px solid #bdbdbd', marginBottom: 12, paddingBottom: 4 }}>Rorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              <div style={{ fontWeight: 600, fontSize: '1.1rem', borderBottom: '1.5px solid #bdbdbd', marginBottom: 12, paddingBottom: 4 }}>Porem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              <div style={{ fontWeight: 600, fontSize: '1.1rem', borderBottom: '1.5px solid #bdbdbd', marginBottom: 12, paddingBottom: 4 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
            <div className="d-flex gap-2 mt-3">
              <a href="#" className="btn btn-success px-4" style={{ minWidth: 220, fontSize: '1.15rem' }}>Book A Discovery Call</a>
              <a href="#" className="btn btn-link d-flex align-items-center" style={{ fontSize: '1.15rem', fontWeight: 500, color: '#222' }}>View Case Study <span className="ms-2" style={{ color: '#3ec28f', fontSize: '1.5rem', fontWeight: 600 }}>&#8594;</span></a>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Corem ipsum dolor',
    content: (
      <div style={{ background: 'linear-gradient(180deg, lightgrey 80%, #e9eaec 100%)', borderRadius: 20, padding: 0, marginTop: 24 }}>
        <div className="row align-items-center" style={{ padding: 32 }}>
          <div className="col-md-5 mb-3 mb-md-0">
            <img src="Product2.png" alt="Product 2" className="img-fluid rounded" />
          </div>
          <div className="col-md-7">
            <h4 className="fw-bold mb-2">Corem ipsum dolor sit amet</h4>
            <p>Corem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.</p>
            <div style={{ margin: '18px 0 18px 0' }}>
              <div style={{ fontWeight: 600, fontSize: '1.1rem', borderBottom: '1.5px solid #bdbdbd', marginBottom: 12, paddingBottom: 4 }}>Corem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              <div style={{ fontWeight: 600, fontSize: '1.1rem', borderBottom: '1.5px solid #bdbdbd', marginBottom: 12, paddingBottom: 4 }}>Aliquam erat volutpat.</div>
              <div style={{ fontWeight: 600, fontSize: '1.1rem', borderBottom: '1.5px solid #bdbdbd', marginBottom: 12, paddingBottom: 4 }}>Morbi euismod, nisi eu consectetur.</div>
            </div>
            <div className="d-flex gap-2 mt-3">
              <a href="#" className="btn btn-success px-4" style={{ minWidth: 220, fontSize: '1.15rem' }}>Book A Discovery Call</a>
              <a href="#" className="btn btn-link d-flex align-items-center" style={{ fontSize: '1.15rem', fontWeight: 500, color: '#222' }}>View Case Study <span className="ms-2" style={{ color: '#3ec28f', fontSize: '1.5rem', fontWeight: 600 }}>&#8594;</span></a>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Forem ipsum',
    content: (
      <div style={{ background: 'linear-gradient(180deg, lightgrey 80%, #e9eaec 100%)', borderRadius: 20, padding: 0, marginTop: 24 }}>
        <div className="row align-items-center" style={{ padding: 32 }}>
          <div className="col-md-5 mb-3 mb-md-0">
            <img src="Product3.png" alt="Product 3" className="img-fluid rounded" />
          </div>
          <div className="col-md-7">
            <h4 className="fw-bold mb-2">Forem ipsum dolor sit amet</h4>
            <p>Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.</p>
            <div style={{ margin: '18px 0 18px 0' }}>
              <div style={{ fontWeight: 600, fontSize: '1.1rem', borderBottom: '1.5px solid #bdbdbd', marginBottom: 12, paddingBottom: 4 }}>Forem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              <div style={{ fontWeight: 600, fontSize: '1.1rem', borderBottom: '1.5px solid #bdbdbd', marginBottom: 12, paddingBottom: 4 }}>Donec euismod, nisi eu consectetur.</div>
              <div style={{ fontWeight: 600, fontSize: '1.1rem', borderBottom: '1.5px solid #bdbdbd', marginBottom: 12, paddingBottom: 4 }}>Vestibulum ante ipsum primis.</div>
            </div>
            <div className="d-flex gap-2 mt-3">
              <a href="#" className="btn btn-success px-4" style={{ minWidth: 220, fontSize: '1.15rem' }}>Book A Discovery Call</a>
              <a href="#" className="btn btn-link d-flex align-items-center" style={{ fontSize: '1.15rem', fontWeight: 500, color: '#222' }}>View Case Study <span className="ms-2" style={{ color: '#3ec28f', fontSize: '1.5rem', fontWeight: 600 }}>&#8594;</span></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

const ProductSuiteSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Explore Our Product Suite</h2>
        <h3 className="text-center fw-bold mb-3" style={{ color: '#222' }}>
          Jorem ipsum dolor sit <span style={{ color: '#3ec28f' }}>amet consectetur</span>
        </h3>
        <p className="text-center mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="d-flex justify-content-center gap-2 mb-4">
          {tabContent.map((tab, idx) => (
            <button
              key={tab.title}
              className={`btn ${activeTab === idx ? (idx === 0 ? 'btn-dark' : idx === 1 ? 'btn-success' : 'btn-secondary') : idx === 0 ? 'btn-outline-dark' : idx === 1 ? 'btn-outline-success border-2' : 'btn-outline-secondary'}`}
              onClick={() => setActiveTab(idx)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        {tabContent[activeTab].content}
      </div>
    </section>
  );
};

export default ProductSuiteSection;

