import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const navLinks = [
  { label: 'Solutions', dropdown: true },
  { label: 'Company', dropdown: true },
  { label: 'Resources', dropdown: true },
  { label: 'Learn', dropdown: true },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg" style={{ background: '#fcfcfd', borderBottom: '1px solid #e5e5e5', minHeight: 72 }}>
      <div className="container-fluid px-4">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src="/logo-uploaded.jpg" alt="Logo" style={{ height: 38, marginRight: 24 }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse${mobileOpen ? ' show' : ''}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-lg-center" style={{ gap: 16 }}>
            {navLinks.map((link, idx) => (
              <li className="nav-item dropdown" key={link.label}>
                <a
                  className="nav-link d-flex align-items-center"
                  href="#"
                  id={`navbarDropdown${idx}`}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: '#222', fontWeight: 500, fontSize: '0.95rem', gap: 12 }}
                >
                  {link.label}
                  <FontAwesomeIcon icon={faChevronDown} style={{ color: '#3ec28f', fontSize: 16, marginLeft: 8 }} />
                </a>
                <ul className="dropdown-menu" aria-labelledby={`navbarDropdown${idx}`}>
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                </ul>
              </li>
            ))}
          </ul>
          <div className="d-flex align-items-center gap-3 ms-lg-4 mt-3 mt-lg-0">
            <a href="#" className="d-flex align-items-center" style={{ color: '#222', fontWeight: 500, fontSize: '0.98rem', textDecoration: 'none' }}>
              <FontAwesomeIcon icon={faUser} className="me-2" style={{ fontSize: 20 }} />
              Client Login
            </a>
            <a href="#" className="btn btn-success px-4 py-2" style={{ borderRadius: 8, fontWeight: 500, fontSize: '1rem', minWidth: 170 }}>
              Book A Discovery Call
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
