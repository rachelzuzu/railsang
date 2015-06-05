angular.module('newsApp')
.controller('PostsCtrl', ['$scope','$stateParams','posts',
function($scope, $stateParams, posts){

	// scope.post is an object. this finds the post from the posts service using the id from $stateParams
	$scope.post = posts.posts[$stateParams.id];

	// addComment function
	$scope.addComment = function(){
		if($scope.body == '') { return; }
		$scope.post.comments.push({
			body: $scope.body,
			author: 'user',
			upvotes: 0
		});
		$scope.body = '';
	};

}]);