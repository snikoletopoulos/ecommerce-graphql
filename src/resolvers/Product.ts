import { type ProductResolvers } from "../types/graphql";

export const Product: ProductResolvers = {
	category: ({ categoryId }, _, { db }) =>
		db.categories.find(category => category.id === categoryId) ?? null,
	reviews: ({ id }, _, { db }) =>
		db.reviews.filter(review => review.productId === id),
};
