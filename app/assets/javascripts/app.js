//module= functions run when application starts
angular.module('newsApp', ['ui.router', 'templates'])

.config(['$stateProvider', '$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      controller: 'MainCtrl'
    })

  .state('posts', {
	  url: '/posts/{id}',
	  templateUrl: 'posts/_posts.html',
	  controller: 'PostsCtrl'
 })

   $urlRouterProvider.otherwise('home');
}]);

//posts service is now in posts.js

//main ctrl now in mainCtrl.js

//posts ctrl now in postsCtrl.js




