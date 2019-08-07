export default tag =>
	tag
		.replace(/-sharp/g, '#')
		.replace(/-plus/g, '+')
		.replace(/-dot-/g, '.')
		.replace(/dot-/g, '.')
		.replace(/-/g, ' ');
