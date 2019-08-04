import React from 'react';

import GitHub from '../img/github.svg';

function Footer() {
	return (
		<footer className="footer">
			<a
				href="https://github.com/PiyushPawar17/course-catalogue"
				target="_blank"
				rel="noopener noreferrer"
				className="footer__link"
			>
				<img src={GitHub} alt="GitHub Logo" />
			</a>
		</footer>
	);
}

export default Footer;
