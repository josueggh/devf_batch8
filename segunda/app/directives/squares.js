(function(){
  'use strict';

  angular
    .module("segundamano")
    .directive("square", squareDirective);

  function squareDirective(){
      var directive = {
        restrict: 'E',
        templateUrl: '/app/directives/templates/square.html',
        scope : {
            categories : '=',
        },
        controller: squareController,
        controllerAs: 'square',
        bindToController: true,
        replace : true
      };
      return directive;
  }

  squareController.$inject = [];

  function squareController(){
    var square = this;
  }

})();