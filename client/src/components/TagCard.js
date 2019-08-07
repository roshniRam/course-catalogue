import React from 'react';
import { Link } from 'react-router-dom';

function TagCard(props) {
	const tag = props.tag
		.replace(/-sharp/g, '#')
		.replace(/-plus/g, '+')
		.replace(/-dot-/g, '.')
		.replace(/dot-/g, '.')
		.replace(/-/g, ' ');

	return (
		<Link to={`/tutorials/${props.tag}`} className="tag-card">
			<p className="tag-card__tag">{tag}</p>
		</Link>
	);
}

export default TagCard;
