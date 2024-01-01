/* THIS FILE IS GENERATED */

import { GraphQLResolveInfo } from "graphql";
import {
	Category as CategoryModel,
	Product as ProductModel,
	Review as ReviewModel,
} from "../db";
import { Context } from "../app";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
	T extends { [key: string]: unknown },
	K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
	| T
	| {
			[P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
	  };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
	[P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
};

export type AddCategoryInput = {
	name: Scalars["String"]["input"];
};

export type AddProductInput = {
	categoryId?: InputMaybe<Scalars["ID"]["input"]>;
	description: Scalars["String"]["input"];
	image: Scalars["String"]["input"];
	name: Scalars["String"]["input"];
	onSale: Scalars["Boolean"]["input"];
	price: Scalars["Float"]["input"];
	quantity: Scalars["Int"]["input"];
};

export type AddReviewInput = {
	comment?: InputMaybe<Scalars["String"]["input"]>;
	date: Scalars["String"]["input"];
	productId: Scalars["ID"]["input"];
	rating: Scalars["Int"]["input"];
	title: Scalars["String"]["input"];
};

export type Category = {
	__typename?: "Category";
	id: Scalars["ID"]["output"];
	name: Scalars["String"]["output"];
	products: Array<Product>;
};

export type CategoryProductsArgs = {
	filter?: InputMaybe<ProductsFilterInput>;
};

export type Mutation = {
	__typename?: "Mutation";
	addCategory: Category;
	addProduct: Product;
	addReview: Review;
	deleteCategory: Scalars["Boolean"]["output"];
	deleteProduct: Scalars["Boolean"]["output"];
	deleteReview: Scalars["Boolean"]["output"];
	updateCategory: Category;
	updateProduct: Product;
	updateReview: Review;
};

export type MutationAddCategoryArgs = {
	input: AddCategoryInput;
};

export type MutationAddProductArgs = {
	input: AddProductInput;
};

export type MutationAddReviewArgs = {
	input: AddReviewInput;
};

export type MutationDeleteCategoryArgs = {
	id: Scalars["ID"]["input"];
};

export type MutationDeleteProductArgs = {
	id: Scalars["ID"]["input"];
};

export type MutationDeleteReviewArgs = {
	id: Scalars["ID"]["input"];
};

export type MutationUpdateCategoryArgs = {
	id: Scalars["ID"]["input"];
	input: UpdateCategoryInput;
};

export type MutationUpdateProductArgs = {
	id: Scalars["ID"]["input"];
	input: UpdateProductInput;
};

export type MutationUpdateReviewArgs = {
	id: Scalars["ID"]["input"];
	input: UpdateReviewInput;
};

export type Product = {
	__typename?: "Product";
	category?: Maybe<Category>;
	description: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	image: Scalars["String"]["output"];
	name: Scalars["String"]["output"];
	onSale: Scalars["Boolean"]["output"];
	price: Scalars["Float"]["output"];
	quantity: Scalars["Int"]["output"];
	reviews: Array<Review>;
};

export type ProductsFilterInput = {
	avgRating?: InputMaybe<Scalars["Int"]["input"]>;
	onSale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Query = {
	__typename?: "Query";
	categories: Array<Category>;
	category?: Maybe<Category>;
	hello?: Maybe<Scalars["String"]["output"]>;
	product?: Maybe<Product>;
	products: Array<Product>;
};

export type QueryCategoryArgs = {
	id: Scalars["ID"]["input"];
};

export type QueryProductArgs = {
	id: Scalars["ID"]["input"];
};

export type QueryProductsArgs = {
	filter?: InputMaybe<ProductsFilterInput>;
};

export type Review = {
	__typename?: "Review";
	comment?: Maybe<Scalars["String"]["output"]>;
	date: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	rating: Scalars["Int"]["output"];
	title: Scalars["String"]["output"];
};

export type UpdateCategoryInput = {
	name: Scalars["String"]["input"];
};

export type UpdateProductInput = {
	categoryId?: InputMaybe<Scalars["ID"]["input"]>;
	description?: InputMaybe<Scalars["String"]["input"]>;
	image?: InputMaybe<Scalars["String"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	onSale?: InputMaybe<Scalars["Boolean"]["input"]>;
	price?: InputMaybe<Scalars["Float"]["input"]>;
	quantity?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UpdateReviewInput = {
	comment?: InputMaybe<Scalars["String"]["input"]>;
	date?: InputMaybe<Scalars["String"]["input"]>;
	productId?: InputMaybe<Scalars["ID"]["input"]>;
	rating?: InputMaybe<Scalars["Int"]["input"]>;
	title?: InputMaybe<Scalars["String"]["input"]>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
	| ResolverFn<TResult, TParent, TContext, TArgs>
	| ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs,
> {
	subscribe: SubscriptionSubscribeFn<
		{ [key in TKey]: TResult },
		TParent,
		TContext,
		TArgs
	>;
	resolve?: SubscriptionResolveFn<
		TResult,
		{ [key in TKey]: TResult },
		TContext,
		TArgs
	>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
	subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
	resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs,
> =
	| SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
	| SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
	TResult,
	TKey extends string,
	TParent = {},
	TContext = {},
	TArgs = {},
> =
	| ((
			...args: any[]
	  ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
	| SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
	parent: TParent,
	context: TContext,
	info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
	obj: T,
	context: TContext,
	info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
	TResult = {},
	TParent = {},
	TContext = {},
	TArgs = {},
> = (
	next: NextResolverFn<TResult>,
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
	AddCategoryInput: AddCategoryInput;
	AddProductInput: AddProductInput;
	AddReviewInput: AddReviewInput;
	Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
	Category: ResolverTypeWrapper<CategoryModel>;
	Float: ResolverTypeWrapper<Scalars["Float"]["output"]>;
	ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
	Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
	Mutation: ResolverTypeWrapper<{}>;
	Product: ResolverTypeWrapper<ProductModel>;
	ProductsFilterInput: ProductsFilterInput;
	Query: ResolverTypeWrapper<{}>;
	Review: ResolverTypeWrapper<ReviewModel>;
	String: ResolverTypeWrapper<Scalars["String"]["output"]>;
	UpdateCategoryInput: UpdateCategoryInput;
	UpdateProductInput: UpdateProductInput;
	UpdateReviewInput: UpdateReviewInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
	AddCategoryInput: AddCategoryInput;
	AddProductInput: AddProductInput;
	AddReviewInput: AddReviewInput;
	Boolean: Scalars["Boolean"]["output"];
	Category: CategoryModel;
	Float: Scalars["Float"]["output"];
	ID: Scalars["ID"]["output"];
	Int: Scalars["Int"]["output"];
	Mutation: {};
	Product: ProductModel;
	ProductsFilterInput: ProductsFilterInput;
	Query: {};
	Review: ReviewModel;
	String: Scalars["String"]["output"];
	UpdateCategoryInput: UpdateCategoryInput;
	UpdateProductInput: UpdateProductInput;
	UpdateReviewInput: UpdateReviewInput;
}>;

export type CategoryResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Category"] = ResolversParentTypes["Category"],
> = ResolversObject<{
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	products?: Resolver<
		Array<ResolversTypes["Product"]>,
		ParentType,
		ContextType,
		Partial<CategoryProductsArgs>
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"],
> = ResolversObject<{
	addCategory?: Resolver<
		ResolversTypes["Category"],
		ParentType,
		ContextType,
		RequireFields<MutationAddCategoryArgs, "input">
	>;
	addProduct?: Resolver<
		ResolversTypes["Product"],
		ParentType,
		ContextType,
		RequireFields<MutationAddProductArgs, "input">
	>;
	addReview?: Resolver<
		ResolversTypes["Review"],
		ParentType,
		ContextType,
		RequireFields<MutationAddReviewArgs, "input">
	>;
	deleteCategory?: Resolver<
		ResolversTypes["Boolean"],
		ParentType,
		ContextType,
		RequireFields<MutationDeleteCategoryArgs, "id">
	>;
	deleteProduct?: Resolver<
		ResolversTypes["Boolean"],
		ParentType,
		ContextType,
		RequireFields<MutationDeleteProductArgs, "id">
	>;
	deleteReview?: Resolver<
		ResolversTypes["Boolean"],
		ParentType,
		ContextType,
		RequireFields<MutationDeleteReviewArgs, "id">
	>;
	updateCategory?: Resolver<
		ResolversTypes["Category"],
		ParentType,
		ContextType,
		RequireFields<MutationUpdateCategoryArgs, "id" | "input">
	>;
	updateProduct?: Resolver<
		ResolversTypes["Product"],
		ParentType,
		ContextType,
		RequireFields<MutationUpdateProductArgs, "id" | "input">
	>;
	updateReview?: Resolver<
		ResolversTypes["Review"],
		ParentType,
		ContextType,
		RequireFields<MutationUpdateReviewArgs, "id" | "input">
	>;
}>;

export type ProductResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Product"] = ResolversParentTypes["Product"],
> = ResolversObject<{
	category?: Resolver<
		Maybe<ResolversTypes["Category"]>,
		ParentType,
		ContextType
	>;
	description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	image?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	onSale?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
	price?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
	quantity?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	reviews?: Resolver<Array<ResolversTypes["Review"]>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = ResolversObject<{
	categories?: Resolver<
		Array<ResolversTypes["Category"]>,
		ParentType,
		ContextType
	>;
	category?: Resolver<
		Maybe<ResolversTypes["Category"]>,
		ParentType,
		ContextType,
		RequireFields<QueryCategoryArgs, "id">
	>;
	hello?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
	product?: Resolver<
		Maybe<ResolversTypes["Product"]>,
		ParentType,
		ContextType,
		RequireFields<QueryProductArgs, "id">
	>;
	products?: Resolver<
		Array<ResolversTypes["Product"]>,
		ParentType,
		ContextType,
		Partial<QueryProductsArgs>
	>;
}>;

export type ReviewResolvers<
	ContextType = Context,
	ParentType extends
		ResolversParentTypes["Review"] = ResolversParentTypes["Review"],
> = ResolversObject<{
	comment?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
	date?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	rating?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
	Category?: CategoryResolvers<ContextType>;
	Mutation?: MutationResolvers<ContextType>;
	Product?: ProductResolvers<ContextType>;
	Query?: QueryResolvers<ContextType>;
	Review?: ReviewResolvers<ContextType>;
}>;
