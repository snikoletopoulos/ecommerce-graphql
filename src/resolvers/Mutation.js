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

	addProduct: (parent, { input }, { products }) => {
		const newProduct = {
			id: uuid(),
			name: input.name,
			description: input.description,
			image: input.image,
			quantity: input.quantity,
			price: input.price,
			onSale: input.onSale,
			categoryId: input.categoryId,
		};

		products.push(newProduct);

		return newProduct;
	},
};
