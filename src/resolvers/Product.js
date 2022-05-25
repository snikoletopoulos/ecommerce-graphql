exports.Product = {
	category: ({ categoryId }, _, { categories }) =>
		categories.find(category => category.id === categoryId),
	reviews: ({ id }, _, { reviews }) =>
		reviews.filter(review => review.productId === id),
};
