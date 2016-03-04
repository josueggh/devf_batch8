(function(){
  'use strict';

  angular.module('segundamano')
    .controller('homeCtrl',homeCtrl);

  homeCtrl.$inject = ["categories","products"];

  function homeCtrl(categories, products){
    var home = this;
    home.categories = categories;
    home.products = products;
  }

})();