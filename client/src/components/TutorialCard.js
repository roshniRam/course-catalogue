import React from 'react';

function TutorialCard() {
	const colors = ['red', 'green', 'yellow', 'blue', 'lime'];

	return (
		<a className="tutorial-card" href="/tutorials/tag" target="_blank" rel="noopener noreferrer">
			<section>
				<header className="tutorial-card__header">
					<h1>React: The Complete Guide React: The Complete Guide</h1>
				</header>
				<section className="tutorial-card__info">
					<p>
						<span className="bold">Medium:</span> Video
					</p>
					<p>
						<span className="bold">Type:</span> Paid
					</p>
					<p>
						<span className="bold">Skill Level:</span> Beginner
					</p>
					<p>
						<span className="bold">Educator:</span> Academind
					</p>
				</section>
				<section className="tutorial-card__tags">
					<span className={`tutorial-card__tag tutorial-card__tag--${colors[0]}`}>React</span>
					<span className={`tutorial-card__tag tutorial-card__tag--${colors[1]}`}>Redux</span>
					<span className={`tutorial-card__tag tutorial-card__tag--${colors[2]}`}>Redux</span>
					<span className={`tutorial-card__tag tutorial-card__tag--${colors[3]}`}>Redux</span>
					<span className={`tutorial-card__tag tutorial-card__tag--${colors[4]}`}>Redux</span>
				</section>
			</section>
		</a>
	);
}

export default TutorialCard;
