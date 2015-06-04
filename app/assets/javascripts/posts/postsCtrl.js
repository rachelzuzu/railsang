angular.module('newsApp')
.controller('PostsCtrl', ['$scope','$stateParams','posts',
function($scope, $stateParams, posts){

	// grabs post by id; scope object, scope.post, grabs post from the posts service using the id from $stateParams
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