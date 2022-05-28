const { gql } = require("apollo-server");

exports.typeDefs = gql`
	type Query {
		hello: String
		products(filter: ProductsFilterInput): [Product!]!
		product(id: ID!): Product
		categories: [Category!]!
		category(id: ID!): Category
	}

	type Mutation {
		addCategory(input: AddCategoryInput!): Category!
		addProduct(input: AddProductInput!): Product!
	}

	type Product {
		id: ID!
		name: String!
		description: String!
		image: String!
		quantity: Int!
		price: Float!
		onSale: Boolean!
		category: Category!
		reviews: [Review!]!
	}

	type Category {
		id: ID!
		name: String!
		products(filter: ProductsFilterInput): [Product!]!
	}

	type Review {
		id: ID!
		date: String!
		title: String!
		comment: String
		rating: Int!
	}

	input ProductsFilterInput {
		onSale: Boolean
		avgRating: Int
	}

	input AddCategoryInput {
		name: String!
	}
`;
