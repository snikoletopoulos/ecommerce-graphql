import { ApolloServer } from "apollo-server";
import { readFileSync } from "fs";
import { resolve } from "path";

import * as db from "./db";
import { Query } from "./resolvers/Query";
import { Mutation } from "./resolvers/Mutation";
import { Category } from "./resolvers/Category";
import { Product } from "./resolvers/Product";

export interface Context {
	db: typeof db;
	setDb: (updateCb: (oldDb: typeof db) => typeof db) => void;
}

let database = { ...db };

const typeDefs = readFileSync(resolve(process.cwd(), "src", "schema.graphql"), {
	encoding: "utf-8",
});

const server = new ApolloServer({
	typeDefs,
	resolvers: {
		Query,
		Category,
		Product,
		Mutation,
	},
	context: {
		db: database,
		setDb: updateCb => {
			database = updateCb(db);
		},
	} as Context,
});

server.listen().then(({ url }) => {
	console.log("Server is running at ", url);
});
