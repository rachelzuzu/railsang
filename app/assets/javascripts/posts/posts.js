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

	return o;
	}]);
