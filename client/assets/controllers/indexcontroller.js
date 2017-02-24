console.log('angular indexcontroller');

appModule.controller("indexcontroller", function($scope, userfactory){
  // initialize variables
  $scope.user = {};
  userfactory.getUser(function(sessionuser){
    $scope.user = sessionuser;
  })
})
