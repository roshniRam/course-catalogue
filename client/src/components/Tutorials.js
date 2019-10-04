import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getTutorials } from '../actions/tutorial.action';
import convertTagName from '../utils/convertTagName';
import filterTutorials from '../utils/filterTutorials';

import TutorialCard from './TutorialCard';

function Tutorials(props) {
	const [filters, setFilters] = useState({
		medium: [],
		type: [],
		skillLevel: []
	});

	const onChange = event => {
		const { name, checked } = event.target;

		let newFilters = {
			medium: [...filters.medium],
			type: [...filters.type],
			skillLevel: [...filters.skillLevel]
		};

		if (checked) {
			if (['Video', 'Blog'].includes(name)) {
				newFilters.medium.push(name);
			} else if (['Free', 'Paid'].includes(name)) {
				newFilters.type.push(name);
			} else if (['Beginner', 'Intermediate', 'Advanced'].includes(name)) {
				newFilters.skillLevel.push(name);
			}
		} else {
			if (['Video', 'Blog'].includes(name)) {
				newFilters.medium = newFilters.medium.filter(uncheckedFilter => uncheckedFilter !== name);
			} else if (['Free', 'Paid'].includes(name)) {
				newFilters.type = newFilters.type.filter(uncheckedFilter => uncheckedFilter !== name);
			} else if (['Beginner', 'Intermediate', 'Advanced'].includes(name)) {
				newFilters.skillLevel = newFilters.skillLevel.filter(uncheckedFilter => uncheckedFilter !== name);
			}
		}

		console.log(newFilters);

		setFilters({
			...filters,
			...newFilters
		});
	};

	useEffect(() => {
		props.getTutorials(props.match.params.tag);
		// eslint-disable-next-line
	}, []);

	const filteredTutorials = filterTutorials(props.tutorial.tutorials, filters);
	const tag = convertTagName(props.match.params.tag);
	const tutorials =
		filteredTutorials.length === 0 ? (
			<p className="info">No tutorials found with the following filters</p>
		) : (
			filteredTutorials.map(tutorial => <TutorialCard key={tutorial._id} tutorial={tutorial} />)
		);

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
										<input type="checkbox" id="video-medium" name="Video" onChange={onChange} />
										<label htmlFor="video-medium" className="tutorials__checkbox--red">
											Video
										</label>
									</div>
									<div className="tutorials__checkbox">
										<input type="checkbox" id="blog-medium" name="Blog" onChange={onChange} />
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
										<input type="checkbox" id="type-free" name="Free" onChange={onChange} />
										<label htmlFor="type-free" className="tutorials__checkbox--blue">
											Free
										</label>
									</div>
									<div className="tutorials__checkbox">
										<input type="checkbox" id="type-paid" name="Paid" onChange={onChange} />
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
										<input
											type="checkbox"
											id="skill-level-beginner"
											name="Beginner"
											onChange={onChange}
										/>
										<label htmlFor="skill-level-beginner" className="tutorials__checkbox--green">
											Beginner
										</label>
									</div>
									<div className="tutorials__checkbox">
										<input
											type="checkbox"
											id="skill-level-intermediate"
											name="Intermediate"
											onChange={onChange}
										/>
										<label
											htmlFor="skill-level-intermediate"
											className="tutorials__checkbox--green"
										>
											Intermediate
										</label>
									</div>
									<div className="tutorials__checkbox">
										<input
											type="checkbox"
											id="skill-level-advanced"
											name="Advanced"
											onChange={onChange}
										/>
										<label htmlFor="skill-level-advanced" className="tutorials__checkbox--green">
											Advanced
										</label>
									</div>
								</div>
							</fieldset>
						</div>
					</section>
				</section>
				<section className="tutorials__list">{tutorials}</section>
			</div>
		</main>
	);
}

const mapStateToProps = ({ tutorial }) => ({ tutorial });

export default connect(
	mapStateToProps,
	{ getTutorials }
)(Tutorials);
