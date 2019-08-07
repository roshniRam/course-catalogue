import React, { useState, useEffect } from 'react';
import Creatable from 'react-select/creatable';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getTags } from '../actions/tag.action';
import convertTagName from '../utils/convertTagName';

import Tutorial from '../img/tutorial.svg';

function NewTutorialForm(props) {
	const [options, setOptions] = useState([]);
	const [tags, setTags] = useState([]);
	const [input, setInput] = useState({
		title: '',
		educator: '',
		link: '',
		medium: 'Video',
		type: 'Free',
		skillLevel: 'Beginner'
	});

	const submitTutorial = event => {
		event.preventDefault();

		const allTags = tags.map(tag => tag.value);
		console.log({ ...input, tags: allTags });
	};

	const onChange = event => {
		setInput({
			...input,
			[event.target.name]: event.target.value
		});
	};

	const changeSelect = selectedValues => {
		setTags(selectedValues);
	};

	const createOption = tag => ({
		label: tag,
		value: tag
	});

	useEffect(() => {
		props.getTags();
		const allTags = props.tag.tags.map(tag => createOption(convertTagName(tag.tag)));
		setOptions(allTags);
	}, [props.tag.tags.length]);

	return (
		<main className="new-tutorial">
			<div className="container">
				<header className="center">
					<h1 className="heading--primary">New Tutorial</h1>
				</header>
				<section className="new-tutorial__form">
					<form onSubmit={submitTutorial}>
						<div className="input input--alternate">
							<label htmlFor="new-tutorial-title">Tutorial Title</label>
							<input id="new-tutorial-title" name="title" value={input.title} onChange={onChange} />
						</div>
						<div className="input input--alternate">
							<label htmlFor="new-tutorial-educator">Educator's Name</label>
							<input
								id="new-tutorial-educator"
								name="educator"
								value={input.educator}
								onChange={onChange}
							/>
						</div>
						<div className="input input--alternate">
							<label htmlFor="new-tutorial-link">Link to Original Tutorial</label>
							<input id="new-tutorial-link" name="link" value={input.link} onChange={onChange} />
						</div>
						<div className="input__radio">
							<p className="input__radio-label">Medium</p>
							<div className="input__radio-group" onChange={onChange}>
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
							<div className="input__radio-group" onChange={onChange}>
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
							<div className="input__radio-group" onChange={onChange}>
								<div className="input--radio">
									<input
										id="new-tutorial-beginner"
										name="skillLevel"
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
										name="skillLevel"
										type="radio"
										value="Intermediate"
									/>
									<label htmlFor="new-tutorial-intermediate" className="input--green-radio">
										Intermediate
									</label>
								</div>
								<div className="input--radio">
									<input id="new-tutorial-advanced" name="skillLevel" type="radio" value="Advanced" />
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
									onChange={changeSelect}
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

const mapStateToProps = ({ tag }) => ({ tag });

export default connect(
	mapStateToProps,
	{ getTags }
)(NewTutorialForm);
