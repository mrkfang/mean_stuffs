console.log('started postfactory');
appModule.factory("postfactory", function($http){
  var usersession = ""
  var factory = {}

  factory.login = function (username, callback){
    usersession = username;
    callback(usersession);
    $http.post('/create', username)
  }

  return factory;
})
