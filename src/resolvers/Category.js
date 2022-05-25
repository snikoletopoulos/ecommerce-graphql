exports.Category = {
	products: (_, { filter }, { products, reviews }) => {
		const categoryProducts = products.filter(
			product => product.categoryId === id
		);

		if (!filter) return categoryProducts;

		let filteredProducts = categoryProducts;

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
};
