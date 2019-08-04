import React, { useState } from 'react';
import Creatable from 'react-select/creatable';
import { Link } from 'react-router-dom';

import Tutorial from '../img/tutorial.svg';

function NewTutorialForm() {
	const [options, setOptions] = useState([{ label: 'React', value: 'React' }, { label: 'Redux', value: 'Redux' }]);
	const [tags, setTags] = useState([{ label: 'React', value: 'React' }]);

	const onChange = selectedValues => {
		setTags(selectedValues);
	};

	return (
		<main className="new-tutorial">
			<div className="container">
				<header className="center">
					<h1 className="heading--primary">New Tutorial</h1>
				</header>
				<section className="new-tutorial__form">
					<form>
						<div className="input input--alternate">
							<label htmlFor="new-tutorial-title">Tutorial Title</label>
							<input id="new-tutorial-title" />
						</div>
						<div className="input input--alternate">
							<label htmlFor="new-tutorial-educator">Educator's Name</label>
							<input id="new-tutorial-educator" />
						</div>
						<div className="input input--alternate">
							<label htmlFor="new-tutorial-link">Link to Original Tutorial</label>
							<input id="new-tutorial-link" />
						</div>
						<div className="input__radio">
							<p className="input__radio-label">Medium</p>
							<div className="input__radio-group">
								<div className="input--radio">
									<input
										id="new-tutorial-video"
										name="medium"
										type="radio"
										value="Video"
										defaultChecked
									/>
									<label htmlFor="new-tutorial-video" className="input--red-radio">
										Video
									</label>
								</div>
								<div className="input--radio">
									<input id="new-tutorial-blog" name="medium" type="radio" value="Blog" />
									<label htmlFor="new-tutorial-blog" className="input--red-radio">
										Blog
									</label>
								</div>
							</div>
						</div>
						<div className="input__radio">
							<p className="input__radio-label">Type</p>
							<div className="input__radio-group">
								<div className="input--radio">
									<input
										id="new-tutorial-free"
										name="type"
										type="radio"
										value="Free"
										defaultChecked
									/>
									<label htmlFor="new-tutorial-free" className="input--blue-radio">
										Free
									</label>
								</div>
								<div className="input--radio">
									<input id="new-tutorial-paid" name="type" type="radio" value="Blog" />
									<label htmlFor="new-tutorial-paid" className="input--blue-radio">
										Paid
									</label>
								</div>
							</div>
						</div>
						<div className="input__radio">
							<p className="input__radio-label">Skill Level</p>
							<div className="input__radio-group">
								<div className="input--radio">
									<input
										id="new-tutorial-beginner"
										name="skill-level"
										type="radio"
										value="Beginner"
										defaultChecked
									/>
									<label htmlFor="new-tutorial-beginner" className="input--green-radio">
										Beginner
									</label>
								</div>
								<div className="input--radio">
									<input
										id="new-tutorial-intermediate"
										name="skill-level"
										type="radio"
										value="Intermediate"
									/>
									<label htmlFor="new-tutorial-intermediate" className="input--green-radio">
										Intermediate
									</label>
								</div>
								<div className="input--radio">
									<input
										id="new-tutorial-advanced"
										name="skill-level"
										type="radio"
										value="Advanced"
									/>
									<label htmlFor="new-tutorial-advanced" className="input--green-radio">
										Advanced
									</label>
								</div>
							</div>
							<div className="input__select">
								<label htmlFor="new-tutorial-tags">Tags</label>
								<Creatable
									id="new-tutorial-tags"
									isClearable
									isMulti
									placeholder="Add Tags..."
									options={options}
									value={tags}
									className="select-box-container"
									classNamePrefix="select-box"
									onChange={onChange}
								/>
							</div>
						</div>
						<section className="new-tutorial__form-buttons">
							<button type="submit" className="btn btn--primary new-tutorial__form-btn">
								Submit Tutorial
							</button>
							<Link to="/" className="btn">
								Cancel
							</Link>
						</section>
					</form>
					<div className="new-tutorial__form-img">
						<img src={Tutorial} alt="Tutorial Illustration" />
					</div>
				</section>
			</div>
		</main>
	);
}

export default NewTutorialForm;
