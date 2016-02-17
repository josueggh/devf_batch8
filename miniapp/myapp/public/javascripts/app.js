(function(){
  'use strict';

  angular.module('myapp',['ngResource'] )
    .factory('apiUsers', apiUsers)
    .controller('mycontroller', mycontroller);

  apiUsers.$inject = ['$resource'];

  function apiUsers($resource){
    return $resource('/users/:id', {},{} );
  }

  mycontroller.$inject = ['apiUsers'];

  function mycontroller(apiUsers){
    var  mcs = this;
    mcs.welcome = "HOLA";

    mcs.users = apiUsers.query();

  }

})();