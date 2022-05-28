const { ApolloServer } = require("apollo-server");
const { products, categories, reviews } = require("./db");

const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutation");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");

const server = new ApolloServer({
	typeDefs,
	resolvers: {
		Query,
		Category,
		Product,
		Mutation,
	},
	context: {
		categories,
		products,
		reviews,
	},
});

server.listen().then(({ url }) => {
	console.log("Server is running at ", url);
});
