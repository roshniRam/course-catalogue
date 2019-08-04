import React from 'react';
import { Link } from 'react-router-dom';

function TagCard() {
	return (
		<Link to="/tutorials/tag" className="tag-card">
			<p className="tag-card__tag">Android</p>
		</Link>
	);
}

export default TagCard;
