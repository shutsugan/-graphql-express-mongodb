'use strict';

const Todo = require('../../mongoose/todo')
const {
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLSchema,
	GraphQLString,
	GraphQLList,
	GraphQLInt,
	GraphQLBoolean
} = require('graphql/type');

function getProjection(fieldASTs) {
	return fieldASTs
		.fieldNodes[0]
		.selectionSet
		.selections
		.reduce((projections, selection) => {
			projections[selection.name.value] = true;
			return projections;
		}, {})
};

const todoType = new GraphQLObjectType({
	name: 'todo',
	descripton: 'todo item',
	fields: _ => ({
		itemId: {
			type: (GraphQLInt),
			description: 'The id of the todo.'
		},
		item: {
			type: GraphQLString,
			description: 'The name of the todo.'
		},
		completed: {
			type: GraphQLBoolean,
			description: 'Completed todo?'
		}
	})
});

const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'RootQueryType',
		fields: {
			todo: {
				type: new GraphQLList(todoType),
				args: {
					itemId: {
						name: 'itemId',
						type: new GraphQLNonNull(GraphQLInt)
					}
				},
				resolve: (root, {itemId}, source, fieldASTs) => {
					const projections = getProjection(fieldASTs);
					const foundItems = new Promise((resolve, reject) => {
						Todo.find({itemId}, projections, (err, todos) => {
							err ? reject(err) : resolve(todos)
						})
					});

					return foundItems;
				}
			}
		}
	})
});

module.exports = schema;