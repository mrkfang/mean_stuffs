var appModule = angular.module("myApp", ['ngRoute'])

appModule.config(function($routeProvider){
$routeProvider
  .when("/", {
    templateUrl: "partials/login.html",
    controller: "usercontroller"
  })
  .when("/dashboard", {
    templateUrl: "partials/dashboard.html",
    controller: "dashboardcontroller"
  })
  .when('/topic/:id', {
    templateUrl: 'partials/topic.html',
    controller: 'topiccontroller'
  })
  .when('/user/:id', {
    templateUrl: 'partials/user.html',
    controller: 'usercontroller'
  })
  // .when('/logout')
  .otherwise({
    redirectTo: '/'
  })
  // .when("/show/:id", {
  //   templateUrl: "partials/show.html",
  //   controller: "editUserController"
  // })
  // .when('/edit/:id',{
  //   templateUrl: 'partials/edit.html',
  //   controller: "editUserController"
  // })
  // .otherwise({
  //   redirectTo: "/"
  // })
})
