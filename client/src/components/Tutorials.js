import React from 'react';

import TutorialCard from './TutorialCard';

function Tutorials() {
	return (
		<main className="tutorials">
			<div className="container">
				<header className="center">
					<h1 className="heading--primary tutorials__h1">React Tutorials</h1>
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
					<TutorialCard />
					<TutorialCard />
					<TutorialCard />
					<TutorialCard />
					<TutorialCard />
					<TutorialCard />
					<TutorialCard />
				</section>
			</div>
		</main>
	);
}

export default Tutorials;
