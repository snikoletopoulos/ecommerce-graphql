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

	updateCategory: (_, { id, input }, { db }) => {
		const categoryIndex = db.categories.findIndex(
			category => category.id === id
		);

		db.categories[categoryIndex] = {
			...db.categories[categoryIndex],
			...input,
		};

		return db.categories[categoryIndex];
	},

	updateProduct: (_, { id, input }, { db }) => {
		const productIndex = db.products.findIndex(product => product.id === id);

		db.products[productIndex] = {
			...db.products[productIndex],
			...input,
		};

		return db.products[productIndex];
	},

	updateReview: (_, { id, input }, { db }) => {
		const reviewIndex = db.reviews.findIndex(review => review.id === id);

		db.reviews[reviewIndex] = {
			...db.reviews[reviewIndex],
			...input,
		};

		return db.reviews[reviewIndex];
	},
};
