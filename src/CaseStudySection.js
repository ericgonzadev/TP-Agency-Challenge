
import React, { useState } from 'react';
import './CaseStudySection.css';

const caseStudies = [
	{
		logo: 'LOGO',
		title: 'Porem ipsum',
		subtitle: 'Vorem ipsum dolor sit amet, consectetur adipiscing elit.',
		content:
			'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.',
	},
	{
		logo: 'LOGO',
		title: 'Korem ipsum',
		subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		cta: 'Case Study',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.',
	},
	{
		logo: 'LOGO',
		title: 'Worem ipsum',
		subtitle: 'Vorem ipsum dolor sit amet, consectetur adipiscing elit.',
		content:
			'Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.',
	},
	{
		logo: 'LOGO',
		title: 'Dorem ipsum',
		subtitle: 'Dorem ipsum dolor sit amet, consectetur adipiscing elit.',
		content:
			'Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Etiam facilisis, sapien eu cursus dictum, enim urna facilisis sem, nec cursus enim urna euismod sem.',
	},
	{
		logo: 'LOGO',
		title: 'Morem ipsum',
		subtitle: 'Morem ipsum dolor sit amet, consectetur adipiscing elit.',
		content:
			'Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
	},
];

const CaseStudySection = () => {
	const [index, setIndex] = useState(0);
	const [isMobile, setIsMobile] = useState(false);

	React.useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < 768);
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	const visibleCards = isMobile ? 1 : 3;
	const maxIndex = caseStudies.length - visibleCards;

	const handlePrev = () => setIndex((i) => Math.max(i - 1, 0));
	const handleNext = () => setIndex((i) => Math.min(i + 1, maxIndex));

		return (
			<section className="py-5 bg-white">
				<div className="container">
					<h1 className="text-center fw-bold mb-5 case-study-section-title">
						Horem ipsum dolor sit amet,<br />
						<span className="case-study-section-title-green">consectetur<br />adipiscing elit.</span>
					</h1>
					<div className="d-flex align-items-center justify-content-center position-relative case-study-carousel">
						{isMobile && (
							<button
								onClick={handlePrev}
								className="btn btn-link p-0 d-flex align-items-center justify-content-center case-arrow-mobile case-arrow-mobile-left case-study-arrow"
								disabled={index === 0}
								aria-label="Previous"
							>
								<span>&#8592;</span>
							</button>
						)}
						{!isMobile && (
							<button
								onClick={handlePrev}
								className="btn btn-link p-0 me-3 d-flex align-items-center justify-content-center case-study-arrow"
								disabled={index === 0}
								aria-label="Previous"
							>
								<span>&#8592;</span>
							</button>
						)}
						<div className="d-flex flex-row justify-content-center w-100 gap-4 case-study-carousel-track" style={{ maxWidth: 1400 }}>
							{caseStudies.slice(index, index + visibleCards).map((card, i) => (
								<div
									key={i}
									className={`case-study-card`}
								>
									<div className="case-study-logo">
										{card.logo}
									</div>
									<div className="case-study-title">
										{card.title}
									</div>
									<div className="case-study-subtitle">{card.subtitle}</div>
									{card.cta && (
										<div className="case-study-cta">
											{card.cta}
											<span className="case-study-cta-arrow">&#8594;</span>
										</div>
									)}
									<div className="case-study-content">{card.content}</div>
								</div>
							))}
						</div>
						{isMobile && (
							<button
								onClick={handleNext}
								className="btn btn-link p-0 d-flex align-items-center justify-content-center case-arrow-mobile case-arrow-mobile-right case-study-arrow"
								disabled={index === maxIndex}
								aria-label="Next"
							>
								<span>&#8594;</span>
							</button>
						)}
						{!isMobile && (
							<button
								onClick={handleNext}
								className="btn btn-link p-0 ms-3 d-flex align-items-center justify-content-center case-study-arrow"
								disabled={index === maxIndex}
								aria-label="Next"
							>
								<span>&#8594;</span>
							</button>
						)}
					</div>
				</div>
			</section>
		);
// ...existing code...
};

export default CaseStudySection;

