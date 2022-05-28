const { v4: uuid } = require("uuid");

exports.Mutation = {
	addCategory: (parent, { input }, { categories }) => {
		const newCategory = {
			id: uuid(),
			name: input.name,
		};

		categories.push(newCategory);

		return newCategory;
	},
};
