import React from 'react';
import { FAQAccordion } from './Home';
import './FAQSection.css';

const FAQSection = () => (
  <section className="py-5 bg-white">
    <div className="container">
  <h2 className="text-center fw-bold mb-5 faq-section-title">Frequently Asked Questions</h2>
      <FAQAccordion />
      <div className="text-center">
        <a href="#" className="btn btn-success px-4">Book A Discovery Call</a>
      </div>
    </div>
  </section>
);

export default FAQSection;
