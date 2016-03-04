(function(){
  'use strict';

  angular
    .module('segundamano')
    .config(configuration);

  configuration.$inject = ['$routeProvider'];

  categoriesData.$inject = ['apiCategory'];
  function categoriesData(apiCategory){
    return apiCategory.query();
  }

  productsData.$inject = ['apiProduct'];
  function productsData(apiProduct){
    return apiProduct.query();
  }

  function configuration($routeProvider){
    $routeProvider
      .when('/',
        { 
          templateUrl : './app/home/ctrl_home.html', 
          controller  : 'homeCtrl', 
          controllerAs: 'home',
          resolve : {
            categories : categoriesData,
            products   : productsData
          }
        })
      .otherwise( {
        redirectTo : '/' 
      });
  }

})();