exports.Query = {
	hello: () => "Hello world!",
	products: (_, { filter }, { products, reviews }) => {
		if (!filter) return products;

		let filteredProducts = products;

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
	product: (_, { id }, { products }) =>
		products.find(product => product.id === id),
	categories: (_, _2, { categories }) => categories,
	category: (_, { id }, { categories }) =>
		categories.find(category => category.id === id),
};
