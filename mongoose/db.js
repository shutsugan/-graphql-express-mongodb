'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://shutsugan:root@ds211289.mlab.com:11289/mongo');

const db = mongoose.connection;

db.on('error', _ => {
	console.log('---FAILED to connect to mongoose');
});

db.once('open', _ => {
	console.log('+++ Connected to mongoose');
});
