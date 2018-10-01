import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

import '../styles/TagCard.css';

class TagCard extends React.Component {
	render() {
		return (
			<Link
				to={`/tutorials/tag/${this.props.tag.tag
					.toLowerCase()
					.split(' ')
					.join('-')}`}
			>
				<Card className="tag-card">
					<div className="tag-card-title">{this.props.tag.tag}</div>
					<div className="tag-card-description">{this.props.tag.description}</div>
					{this.props.tag.website ? (
						<div className="tag-card-website">
							Official Website : <span className="website-link">{this.props.tag.website}</span>
						</div>
					) : null}
				</Card>
			</Link>
		);
	}
}

export default TagCard;
