const { v4: uuid } = require("uuid");

exports.Mutation = {
	addCategory: (parent, { input }, { db }) => {
		const newCategory = {
			id: uuid(),
			name: input.name,
		};

		db.categories.push(newCategory);

		return newCategory;
	},

	addProduct: (parent, { input }, { db }) => {
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

		db.products.push(newProduct);

		return newProduct;
	},

	addReview: (_, { input }, { db }) => {
		const newReview = {
			id: uuid(),
			date: input.date,
			title: input.title,
			comment: input.comment,
			rating: input.rating,
			productId: input.productId,
		};

		db.reviews.push(newReview);

		return newReview;
	},
};
