import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getTags } from '../actions/tag.action';

import TagCard from './TagCard';

function Home(props) {
	useEffect(() => {
		props.getTags();
		// eslint-disable-next-line
	}, []);

	return (
		<div className="container">
			<main className="homepage">
				<header className="center">
					<h1 className="heading--primary">A collection of best Programming Courses & Tutorials</h1>
				</header>
				<section className="homepage__tags">
					{props.tag.tags.map(tag => (
						<TagCard key={tag.tag} tag={tag.tag} />
					))}
				</section>
			</main>
		</div>
	);
}

const mapStateToProps = ({ tag }) => ({ tag });

export default connect(
	mapStateToProps,
	{ getTags }
)(Home);
