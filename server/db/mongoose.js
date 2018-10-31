const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(
	'mongodb://featr:jenifer727@ds227469.mlab.com:27469/todo-api' ||
		'mongodb://localhost:27017/TodoApp',
	{ useNewUrlParser: true }
);

module.exports = { mongoose };
