//newsapp module= functions run when application starts
angular.module('newsApp', ['ui.router', 'templates'])

.config(['$stateProvider', '$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      controller: 'MainCtrl',
      resolve: {
        postPromise: ['posts', function(posts){
          return posts.getAll();
        }]
      }
    })
  // resolve: query all posts from the backend before the home state is loaded so all the posts exist in the db

  .state('posts', {
  	  url: '/posts/{id}',
  	  templateUrl: 'posts/_posts.html',
  	  controller: 'PostsCtrl',
      resolve: {
        post: ['$stateParams', 'posts', function($stateParams, posts) {
          return posts.get($stateParams.id);
        }]
      }
   })
  //resolve: get comments before page loads

   $urlRouterProvider.otherwise('home');
}]);

//posts service is now in posts.js

//main ctrl now in mainCtrl.js

//posts ctrl now in postsCtrl.js




