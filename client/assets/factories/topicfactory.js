console.log('started topicfactory');
appModule.factory("topicfactory", function($http){
  var factory = {}
  var topics = []
  factory.index = function(callback){
    $http.get("/topics").then(function(response){
      console.log("topic factory index response: ", response);
      if (response.errors) {
        console.log('topic factory index errors: ', response.errors);
      } else {
        callback(response.data)
      }
    })
  }
  factory.create = function(topic, callback){
    console.log("topic factory create" );

    $http.post("/topic", topic).then(function(response){
      console.log('topic factory create response: ', response.data);
      callback(response.data);
    })
  }
  factory.getTopic = function(id, callback){
    console.log('topic factory getTopic for id 444: ', id); //this works

    $http.get('/topic/' +id.id).then(function(response){
      console.log('topic factory getTopic response: ', response.data);
      callback(response.data);
    })
  }
  return factory;
})
