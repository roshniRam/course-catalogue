import React from 'react';
import { Link } from 'react-router-dom';

import convertTagName from '../utils/convertTagName';

function TagCard(props) {
	const tag = convertTagName(props.tag);

	return (
		<Link to={`/tutorials/${props.tag}`} className="tag-card">
			<p className="tag-card__tag">{tag}</p>
		</Link>
	);
}

export default TagCard;
