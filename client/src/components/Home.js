import React from 'react';

import TagCard from './TagCard';

function Home() {
	return (
		<div className="container">
			<main className="homepage">
				<header className="center">
					<h1 className="heading--primary">A collection of best Programming Courses & Tutorials</h1>
				</header>
				<section className="homepage__tags">
					<TagCard />
					<TagCard />
					<TagCard />
					<TagCard />
					<TagCard />
					<TagCard />
				</section>
			</main>
		</div>
	);
}

export default Home;
