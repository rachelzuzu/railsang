// posts service

angular.module('newsApp')

// inject $http so we can go to http://localhost:3000/posts.json in our browser and see an array of all the posts in our database 
.factory('posts', ['$http', function($http){
	//service body
	var o = {
		posts: []
	};

	// get all the posts in the service, posts.js
	o.getAll = function() {
	  return $http.get('/posts.json').success(function(data){
	    angular.copy(data, o.posts);
	  });
	};

	//create new posts
	o.create = function(post) {
	  return $http.post('/posts.json', post).success(function(data){
	    o.posts.push(data);
	  });
	};

	// upvote method
	o.upvote = function(post) {
	  return $http.put('/posts/' + post.id + '/upvote.json')
	    .success(function(data){
	      post.upvotes += 1;
	    });
	};

	//retrieve a single post from the server
	// o.get = function(id) {
	// 	return $http.get('/posts/' + id + '.json').then(function(res){
	// 		return res.data;
	// 	});
	// };

	return o;
	}
]);
