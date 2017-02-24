console.log('topic controller started');

appModule.controller('topiccontroller', ['$scope', 'topicfactory', 'userfactory', '$routeParams', function($scope, topicfactory, userfactory, $routeParams){
  // instantiate variables
  $scope.user = {};
  $scope.topic = {};

  // retrieve user object
  userfactory.getUser(function(data){
    console.log('topic controller get user: ', data);
    $scope.user = data;
  })

  // retrieve topic
  topicfactory.getTopic($routeParams, function(data){
    console.log('topic controller getTopic route params: ', $routeParams);
    console.log('topic controller get topic', data);
    $scope.topic = data;
  })

  //post method
  $scope.savePost = function(){
    console.log('post clicked!');
    console.log('user: ', $scope.topic.user);
    console.log('post: ', $scope.post);
    $scope.post.topic = $scope.topic;
    $scope.post.user = $scope.user

  }

}])
