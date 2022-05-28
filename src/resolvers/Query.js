exports.Query = {
	hello: () => "Hello world!",
	products: (_, { filter }, { db }) => {
		if (!filter) return db.products;

		let filteredProducts = db.products;

		if ("onSale" in filter) {
			filteredProducts = filteredProducts.filter(
				product => product.onSale === filter.onSale
			);
		}

		if ([1, 2, 3, 4, 5].includes(filter?.avgRating)) {
			filteredProducts = filteredProducts.filter(product => {
				const productReviews = reviews.filter(
					review => review.productId === product.id
				);

				const avgRating =
					productReviews.reduce((acc, review) => {
						return acc + review.rating;
					}, 0) / productReviews.length;

				return avgRating >= filter.avgRating;
			});
		}

		return filteredProducts;
	},
	product: (_, { id }, { db }) =>
		db.products.find(product => product.id === id),
	categories: (_, _2, { db }) => db.categories,
	category: (_, { id }, { db }) =>
		db.categories.find(category => category.id === id),
};
