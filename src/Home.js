import React, { useState } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import ProductSuiteSection from './ProductSuiteSection';
import FeaturesSection from './FeaturesSection';
import CardsSection from './CardsSection';
import FAQSection from './FAQSection';
import CaseStudySection from './CaseStudySection';
import GreenCtaSection from './GreenCtaSection';
import FooterSection from './FooterSection';
import BottomDarkSection from './BottomDarkSection';

// FAQAccordion component (must be outside Home)
export function FAQAccordion() {
  const faqs = [
    {
      question: 'Dorem ipsum dolor sit amet, consectetur adipiscing elit?',
      answer: 'Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.'
    },
    { question: 'Vorem ipsum dolor sit amet, consectetur adipiscing elit?', answer: '' },
    { question: 'Dorem ipsum dolor sit amet, consectetur adipiscing elit?', answer: '' },
    { question: 'Dorem ipsum dolor sit amet, consectetur adipiscing elit?', answer: '' },
    { question: 'Dorem ipsum dolor sit amet, consectetur adipiscing elit?', answer: '' },
  ];
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = idx => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div className="accordion mb-4" id="faqAccordion">
      {faqs.map((faq, i) => (
        <div className="accordion-item mb-2" key={i}>
          <h2 className="accordion-header" id={`faqHeading${i}`}>
            <button
              className={`accordion-button${openIndex !== i ? ' collapsed' : ''}`}
              type="button"
              aria-expanded={openIndex === i}
              aria-controls={`faqCollapse${i}`}
              style={{ fontWeight: 500, fontSize: '1rem' }}
              onClick={() => handleToggle(i)}
            >
              {faq.question}
            </button>
          </h2>
          <div
            id={`faqCollapse${i}`}
            className={`accordion-collapse collapse${openIndex === i ? ' show' : ''}`}
            aria-labelledby={`faqHeading${i}`}
          >
            <div className="accordion-body">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const Home = () => {
  return (
    <div className="container-fluid px-0" style={{ background: '#fff' }}>
      <Navbar />
      <HeroSection />
      <ProductSuiteSection />
      <FeaturesSection />
      <CardsSection />
      <FAQSection />
      <CaseStudySection />
      <GreenCtaSection />
      <FooterSection />
      <BottomDarkSection />
    </div>
  );
};

export default Home;