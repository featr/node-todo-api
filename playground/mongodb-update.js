// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect(
	'mongodb://localhost:27017/TodoApp',
	{ useNewUrlParser: true },
	(err, client) => {
		if (err) {
			return console.log('Unable to connect to MongoDB server');
		}
		console.log('Connected to MongoDB server.');
		const db = client.db('TodoApp');

		// db.collection('Todos')
		// 	.findOneAndUpdate(
		// 		{
		// 			_id: new ObjectId('5bce0e8694e4928a73a68864'),
		// 		},
		// 		{
		// 			$set: {
		// 				completed: true,
		// 			},
		// 		},
		// 		{
		// 			returnOriginal: false,
		// 		}
		// 	)
		// 	.then(result => {
		// 		console.log(result);
		// 	});

		db.collection('Users')
			.findOneAndUpdate(
				{
					_id: new ObjectId('5bcdfcef7e338926c9b38a58'),
				},
				{
					$set: {
						name: 'Jenny',
					},
					$inc: {
						age: -10,
					},
				},
				{
					returnOriginal: false,
				}
			)
			.then(result => {
				console.log(result);
			});

		//client.close();
	}
);
