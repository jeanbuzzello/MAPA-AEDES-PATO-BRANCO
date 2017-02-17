exports.list = function(req, res, next) {
	User.find({
		{ age: { $gt: 18 } },
		{ name: 1, address: 1 }
	}, function(err, users) {
		if (err) {
			return next(err);
		} else {
			res.json(users);
		}
	});
};