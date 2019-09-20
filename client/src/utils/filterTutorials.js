export default (tutorials, filters) =>
	tutorials.filter(tutorial => {
		if (
			filters.medium.length !== 0 &&
			filters.medium.includes(tutorial.medium) &&
			filters.type.length !== 0 &&
			filters.type.includes(tutorial.type) &&
			filters.skillLevel.length !== 0 &&
			filters.skillLevel.includes(tutorial.skillLevel)
		)
			return true;
		if (
			filters.medium.length === 0 &&
			filters.type.length !== 0 &&
			filters.type.includes(tutorial.type) &&
			filters.skillLevel.length !== 0 &&
			filters.skillLevel.includes(tutorial.skillLevel)
		)
			return true;
		if (
			filters.type.length === 0 &&
			filters.medium.length !== 0 &&
			filters.medium.includes(tutorial.medium) &&
			filters.skillLevel.length !== 0 &&
			filters.skillLevel.includes(tutorial.skillLevel)
		)
			return true;
		if (
			filters.skillLevel.length === 0 &&
			filters.medium.length !== 0 &&
			filters.medium.includes(tutorial.medium) &&
			filters.type.length !== 0 &&
			filters.type.includes(tutorial.type)
		)
			return true;
		if (
			filters.medium.length === 0 &&
			filters.type.length === 0 &&
			filters.skillLevel.length !== 0 &&
			filters.skillLevel.includes(tutorial.skillLevel)
		)
			return true;
		if (
			filters.skillLevel.length === 0 &&
			filters.type.length === 0 &&
			filters.medium.length !== 0 &&
			filters.medium.includes(tutorial.medium)
		)
			return true;
		if (
			filters.skillLevel.length === 0 &&
			filters.medium.length === 0 &&
			filters.type.length !== 0 &&
			filters.type.includes(tutorial.type)
		)
			return true;
		if (filters.skillLevel.length === 0 && filters.medium.length === 0 && filters.type.length === 0) return true;
		return false;
	});
