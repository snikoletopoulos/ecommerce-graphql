const { v4: uuid } = require("uuid");

exports.Mutation = {
	addCategory: (_, { input }, { db }) => {
		const newCategory = {
			id: uuid(),
			name: input.name,
		};

		db.categories.push(newCategory);

		return newCategory;
	},

	addProduct: (_, { input }, { db }) => {
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

	deleteCategory: (_, { id }, { db }) => {
		db.categories = db.categories.filter(category => category.id !== id);

		db.products = db.products.map(product => {
			if (product.categoryId === id) {
				product.categoryId = null;
			}

			return product;
		});

		return true;
	},

	deleteProduct: (_, { id }, { db }) => {
		db.products = db.products.filter(product => product.id !== id);

		db.reviews = db.reviews.filter(review => review.productId !== id);

		return true;
	},

	deleteReview: (_, { id }, { db }) => {
		db.reviews = db.reviews.filter(review => review.id !== id);

		return true;
	},
};
