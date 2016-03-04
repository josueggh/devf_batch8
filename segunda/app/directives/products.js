(function(){
  'use strict';

  angular
    .module("segundamano")
    .directive("productList", productDirective);

  function productDirective(){
    var directive = {
      restrict: 'E',
      templateUrl: '/app/directives/templates/product-list.html',
      scope : {
        products : '=',
      },
      controller: productController,
      controllerAs: 'product',
      bindToController: true,
      replace : true
    };
    return directive;
  }

  productController.$inject = [];

  function productController(){
    var product = this;
  }

})();