( function(){
  'use strict';

  angular.module('myapp',['ngResource'] )
    .factory('apiUsers', apiUsers)
    .controller('mycontroller', mycontroller);

  /*[_x_ => $resource]*/
  apiUsers.$inject = ['$resource'];
  function apiUsers($resource){
    /* GET /users/1000 PUT /users/1000 DEL /users/1000 */
    return $resource('/users/:id', {},{} );
  }

  mycontroller.$inject = ['apiUsers'];
  function mycontroller(apiUsers){
    var  mc = this;

    mc.hello = "Hola";
    mc.show  = show;

    mc.users = apiUsers.query();

    function show(user){
      console.log(user);
    }
  }
  
})();