import React from 'react';

function TutorialCard(props) {
	const colors = ['red', 'green', 'yellow', 'blue', 'lime'];

	return (
		<a className="tutorial-card" href={props.tutorial.link} target="_blank" rel="noopener noreferrer">
			<section>
				<header className="tutorial-card__header">
					<h1>{props.tutorial.title}</h1>
				</header>
				<section className="tutorial-card__info">
					<p>
						<span className="bold">Medium:</span> {props.tutorial.medium}
					</p>
					<p>
						<span className="bold">Type:</span> {props.tutorial.type}
					</p>
					<p>
						<span className="bold">Skill Level:</span> {props.tutorial.skillLevel}
					</p>
					<p>
						<span className="bold">Educator:</span> {props.tutorial.educator}
					</p>
				</section>
				<section className="tutorial-card__tags">
					{props.tutorial.tags.map((tag, index) => (
						<span key={tag} className={`tutorial-card__tag tutorial-card__tag--${colors[index % colors.length]}`}>{tag}</span>
					))}
				</section>
			</section>
		</a>
	);
}

export default TutorialCard;
