(function(){
  'use strict';

  angular
    .module('segundamano')
    .config(configuration);

  configuration.$inject = ['$routeProvider'];

  function configuration($routeProvider){
    $routeProvider
      .when('/',
        { 
          templateUrl : './app/home/ctrl_home.html', 
          controller  : 'homeCtrl', 
          controllerAs: 'home'
        })
      .otherwise( {
        redirectTo : '/' 
      });
  }

})();