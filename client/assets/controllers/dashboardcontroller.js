console.log('dashboardcontroller has started');
appModule.controller("dashboardcontroller", function($scope, userfactory, topicfactory, $location){
    $scope.user = {};
    $scope.topic = {};
    var users = [];
    var topics = [];
    var categories=[];

    $scope.categories = ['trees', 'dogs', 'lulz', 'diablo', 'marcus']
    $scope.topic.category = $scope.categories[0];
    userfactory.index(function(data){
      console.log('dashboard controller index users:', data);
      users = data;
    })

    userfactory.getUser(function(data){
      user = data
      console.log("dashboard getUser: ", user);
    })

    topicfactory.index(function(data){
      console.log('dashboard controller index');
      $scope.topics = data
    })

    $scope.visitTopic = function(topic){
      console.log('visiting topic: ', topic);
      $location.url('/topic/'+topic._id);
    }

    $scope.visitUser = function(user){
      console.log('visiting user: ', user);
      $location.url('/user/'+user._id);
    }

    $scope.addTopic = function(){
      console.log("dashboardcontroller addTopic" );
      // console.log('$scope.user: ', $scope.user);
      // userfactory.getUser(function(sessionuser){
      //   console.log("adding topic, getting session user: ", sessionuser);
      //   console.log(user);
      // })
      var submitted_topic = $scope.topic;
      submitted_topic.user = user
      console.log('updated topic with user HEREHERE: ', submitted_topic);

      topicfactory.create( submitted_topic, function(data){
        console.log('dashboard create topic response data', data);
        topicfactory.index(function(data){
          $scope.topics = data
        })
      })
    }
})
