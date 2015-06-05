angular.module('newsApp')
.controller('PostsCtrl', ['$scope', 'posts', 'post',
function($scope, posts, post){

	// scope.post is an object. this finds the post from the posts service using the id from $stateParams
	$scope.post = post;

	// addComment function
	$scope.addComment = function(){
	  if($scope.body === '') { return; }
	  posts.addComment(post.id, {
	    body: $scope.body,
	    author: 'user',
	  }).success(function(comment) {
	    $scope.post.comments.push(comment);
	  });
	  $scope.body = '';
	};

	$scope.incrementUpvotes = function(comment){
		posts.upvoteComment(post, comment);
	};

}]);