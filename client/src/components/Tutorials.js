import React from 'react';
import { Row, Col, Icon } from 'antd';
import { connect } from 'react-redux';
import TutorialCard from './TutorialCard';
import { getTag } from '../actions/tagActions';
import { getTutorialsByTag } from '../actions/tutorialActions';

import '../styles/Tutorials.css';

class Tutorials extends React.Component {
	componentDidMount() {
		this.props.getTag(this.props.match.params.tag);
		this.props.getTutorialsByTag(this.props.match.params.tag);
	}

	render() {
		let tutorials;
		if (this.props.tutorial.loading || !this.props.tutorial.tutorials) {
			tutorials = <Icon type="loading" />;
		} else {
			tutorials = this.props.tutorial.tutorials.map((tutorial, i) => (
				<Col span={8} key={i}>
					<TutorialCard tutorial={tutorial} />
				</Col>
			));
		}
		return (
			<div className="tutorials-by-tag">
				<h1 className="tutorial-title">{this.props.tag.tag.tag} Tutorials</h1>
				<Row gutter={8}>{tutorials}</Row>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	tag: state.tag,
	tutorial: state.tutorial
});

export default connect(
	mapStateToProps,
	{ getTag, getTutorialsByTag }
)(Tutorials);
