import { v4 as uuid } from "uuid";

import { type MutationResolvers } from "../types/graphql";

export const Mutation: MutationResolvers = {
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

	deleteCategory: (_, { id }, { setDb }) => {
		setDb(db => {
			const newDb = { ...db };
			newDb.categories = db.categories.filter(category => category.id !== id);

			newDb.products = db.products.map(product => {
				if (product.categoryId === id) {
					product.categoryId = null;
				}

				return product;
			});
			return newDb;
		});

		return true;
	},

	deleteProduct: (_, { id }, { setDb }) => {
		setDb(db => {
			const newDb = { ...db };
			newDb.products = db.products.filter(product => product.id !== id);
			newDb.reviews = db.reviews.filter(review => review.productId !== id);
			return newDb;
		});

		return true;
	},

	deleteReview: (_, { id }, { setDb }) => {
		setDb(db => {
			const newDb = { ...db };
			newDb.reviews = db.reviews.filter(review => review.id !== id);
			return newDb;
		});

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

	updateProduct: (_, { id, input }, { db, setDb }) => {
		const productIndex = db.products.findIndex(product => product.id === id);

		setDb(db => {
			const newDb = { ...db };

			newDb.products[productIndex] = {
				...db.products[productIndex],
				...(input.name && { name: input.name }),
				...(input.categoryId && { categoryId: input.categoryId }),
				...(input.onSale && { onSale: input.onSale }),
				...(input.price && { price: input.price }),
				...(input.quantity && { quantity: input.quantity }),
				...(input.description && { description: input.description }),
				...(input.image && { image: input.image }),
			};

			return newDb;
		});

		return db.products[productIndex];
	},

	updateReview: (_, { id, input }, { db, setDb }) => {
		const reviewIndex = db.reviews.findIndex(review => review.id === id);

		setDb(db => {
			const newDb = { ...db };

			newDb.reviews[reviewIndex] = {
				...db.reviews[reviewIndex],
				...(input.title && { title: input.title }),
				...(input.comment && { comment: input.comment }),
				...(input.rating && { rating: input.rating }),
				...(input.productId && { productId: input.productId }),
				...(input.date && { date: input.date }),
			};

			return newDb;
		});

		return db.reviews[reviewIndex];
	},
};
