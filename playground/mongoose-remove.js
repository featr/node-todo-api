const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

const id = '5bd9ef15188ec5a578b7405a';

Todo.findByIdAndDelete(id).then(todo => {
	console.log(todo);
});

// Todo.findOneAndDelete({})
// Todo.deleteMany({})
