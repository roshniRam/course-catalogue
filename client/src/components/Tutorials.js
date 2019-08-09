import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getTutorials } from '../actions/tutorial.action';
import convertTagName from '../utils/convertTagName';

import TutorialCard from './TutorialCard';

function Tutorials(props) {
	const tag = convertTagName(props.match.params.tag);

	useEffect(() => {
		props.getTutorials(props.match.params.tag);
		// eslint-disable-next-line
	}, []);

	return (
		<main className="tutorials">
			<div className="container">
				<header className="center">
					<h1 className="heading--primary tutorials__h1">{tag} Tutorials</h1>
				</header>
				<section>
					<p className="tutorials__p">Filters</p>
					<section className="tutorials__filters">
						<div className="tutorials__filter tutorials__filter--red">
							<fieldset>
								<legend>Medium</legend>
								<div className="tutorials__checkboxes">
									<div className="tutorials__checkbox">
										<input type="checkbox" id="video-medium" value="Video" />
										<label htmlFor="video-medium" className="tutorials__checkbox--red">
											Video
										</label>
									</div>
									<div className="tutorials__checkbox">
										<input type="checkbox" id="blog-medium" value="Blog" />
										<label htmlFor="blog-medium" className="tutorials__checkbox--red">
											Blog
										</label>
									</div>
								</div>
							</fieldset>
						</div>
						<div className="tutorials__filter tutorials__filter--blue">
							<fieldset>
								<legend>Type</legend>
								<div className="tutorials__checkboxes">
									<div className="tutorials__checkbox">
										<input type="checkbox" id="type-free" value="Free" />
										<label htmlFor="type-free" className="tutorials__checkbox--blue">
											Free
										</label>
									</div>
									<div className="tutorials__checkbox">
										<input type="checkbox" id="type-paid" value="Paid" />
										<label htmlFor="type-paid" className="tutorials__checkbox--blue">
											Paid
										</label>
									</div>
								</div>
							</fieldset>
						</div>
						<div className="tutorials__filter tutorials__filter--green">
							<fieldset>
								<legend>Skill Level</legend>
								<div className="tutorials__checkboxes">
									<div className="tutorials__checkbox">
										<input type="checkbox" id="skill-level-beginner" value="Beginner" />
										<label htmlFor="skill-level-beginner" className="tutorials__checkbox--green">
											Beginner
										</label>
									</div>
									<div className="tutorials__checkbox">
										<input type="checkbox" id="skill-level-intermediate" value="Intermediate" />
										<label
											htmlFor="skill-level-intermediate"
											className="tutorials__checkbox--green"
										>
											Intermediate
										</label>
									</div>
									<div className="tutorials__checkbox">
										<input type="checkbox" id="skill-level-advanced" value="Advanced" />
										<label htmlFor="skill-level-advanced" className="tutorials__checkbox--green">
											Advanced
										</label>
									</div>
								</div>
							</fieldset>
						</div>
					</section>
				</section>
				<section className="tutorials__list">
					{props.tutorial.tutorials.map(tutorial => (
						<TutorialCard key={tutorial._id} tutorial={tutorial} />
					))}
				</section>
			</div>
		</main>
	);
}

const mapStateToProps = ({ tutorial }) => ({ tutorial });

export default connect(
	mapStateToProps,
	{ getTutorials }
)(Tutorials);
