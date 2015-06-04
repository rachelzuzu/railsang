angular.module('newsApp')
.factory('posts', [function(){
	//service body
	var o = {
		posts: []
	};
	return o;
	}]);