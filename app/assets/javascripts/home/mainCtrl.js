angular.module('newsApp')
.controller('MainCtrl', ['$scope', 'posts',
function($scope, posts){

	$scope.posts = posts.posts;


	$scope.addPost = function(){
	  if(!$scope.title || $scope.title === '') { return; }
		  posts.create({
		    title: $scope.title,
		    link: $scope.link,
		  });

	  $scope.title = '';
	  $scope.link = '';
	};
		
	// use the put() method to upvote a post. when the call returns successfully, the local copy gets updated to reflect the change
	$scope.incrementUpvotes = function(post) {
		posts.upvote(post);
		};

}]);
