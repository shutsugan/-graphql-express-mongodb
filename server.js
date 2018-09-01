'use strict';

const path = require('path');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const body_parser = require('body-parser');

const mongoose = require('./mongoose/db');
const Todo = require('./mongoose/todo');
const schema = require('./graphql/Schema/Schema');

const app = express();

app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());

app.get('/', (req, res) => {
	res.sendFile(path.resolve(
		__dirname, 
		'index.html'
	));
});

app.post('/quotes', (req, res) => {
	const todoItem = new Todo({
		itemId: 1,
		item: req.body.item,
		completed: false
	});

	todoItem.save((err, result) => {
		if (err) {
			console.log(`---TodoItem save Failed ${err}`);
			return;
		}

		console.log(`+++TodoItem saved successfully ${result}`);
		res.redirect('/');
	});
});

app.use('/graphql', graphqlHTTP(res => ({schema})));

app.listen(3000, _ => console.log('Running!!...'));