import { type CategoryResolvers } from "../types/graphql";

export const Category: CategoryResolvers = {
	products: ({ id }, { filter }, { db }) => {
		const categoryProducts = db.products.filter(
			product => product.categoryId === id
		);

		if (!filter) return categoryProducts;

		let filteredProducts = categoryProducts;

		if ("onSale" in filter) {
			filteredProducts = filteredProducts.filter(
				product => product.onSale === filter.onSale
			);
		}

		if (filter.avgRating && [1, 2, 3, 4, 5].includes(filter.avgRating)) {
			filteredProducts = filteredProducts.filter(product => {
				const productReviews = db.reviews.filter(
					review => review.productId === product.id
				);

				const avgRating =
					productReviews.reduce((acc, review) => {
						return acc + review.rating;
					}, 0) / productReviews.length;

				return avgRating >= (filter.avgRating ?? 0);
			});
		}

		return filteredProducts;
	},
};
