const Post = require("../../models/post");

function createPost(req, res, next) {
	const post = req.body;
	post.owner = req.user._id;
	Post.create(post)
		.then((post) => {
			res.status(201).json({ post: post });
		})
		.catch(next);
}

function deletePost(req, res, next) {
	Post.findById(req.params.id)
		.then((post) => {
			if (post.owner.equals(req.user._id)) {
				return post.deleteOne();
			} else {
				res.sendStatus(401);
			}
		})
		.then(() => res.sendStatus(204))
		.catch(next);
}

function indexPost(req, res, next) {
	Post.find({})
		.populate("owner")
		.then((posts) => {
			return posts.map((posts) => posts);
		})
		.then((posts) => {
			return res.status(200).json({ posts: posts });
		})
		.catch(next);
}

function updatePost(req, res, next) {
	Post.findById(req.params.id)
		.then((post) => {
			if (post.owner.equals(req.user._id)) {
				return post.updateOne(req.body);
			} else {
				res.sendStatus(401);
			}
		})
		.then(() => res.sendStatus(204))
		.catch(next);
}

function indexMyPosts(req, res, next) {
	const user = req.user._id;
	Post.find({ owner: user })
		.populate("owner")
		.then((posts) => {
			return posts.map((posts) => posts);
		})
		.then((posts) => {
			return res.status(200).json({ posts: posts });
		})
		.catch(next);
}

module.exports = {
	createPost,
	deletePost,
	indexPost,
	updatePost,
	indexMyPosts,
};
