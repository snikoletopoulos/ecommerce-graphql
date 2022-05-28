exports.Product = {
	category: ({ categoryId }, _, { db }) =>
		db.categories.find(category => category.id === categoryId),
	reviews: ({ id }, _, { db }) =>
		db.reviews.filter(review => review.productId === id),
};
