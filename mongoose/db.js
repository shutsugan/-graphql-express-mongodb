'use strict';

const mongoose = require('mongoose');

//your mlab uri
mongoose.connect(/*mongodb://<dbuser>:<dbpassword>@ds211289.mlab.com:11289*/);

const db = mongoose.connection;

db.on('error', _ => {
	console.log('---FAILED to connect to mongoose');
});

db.once('open', _ => {
	console.log('+++ Connected to mongoose');
});
