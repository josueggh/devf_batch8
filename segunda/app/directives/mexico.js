(function(){
  'use strict';

  angular
    .module("segundamano")
    .directive("mapaMexico", mapaMexico);

  function mapaMexico(){
    var directive = {
      restrict: 'EA',
      templateUrl: '/app/directives/templates/mapamexico.html',
      controller:   mexicoController,
      controllerAs: 'mexico',
      replace : true
    };
    return directive;
  }

  mexicoController.$inject= ["$scope"];

  function mexicoController($scope){
    var mexico = this;

    mexico.list = [
      {'id':'MX-HID', 'name':'Hidalgo'},
      {'id':'MX-AGU', 'name':'Aguascalientes'},
      {'id':'MX-CHH',  'name':'Chihuahua'},
      {'id':'MX-PUE', 'name':'Puebla'},
    ];
    mexico.over = null;

    var initialcolor = "#ffecb3";
    var overcolor =  "#ff8f00";
    var paths = d3.selectAll("path");
    paths.style("fill", initialcolor);


    paths.on('mouseover', function(){
      console.log(this.id);
      mexico.over = this.id;
      d3.select(this).style("fill", overcolor);
      $scope.$apply();
    });


    paths.on('mouseout', function(){
      d3.select(this).style("fill",initialcolor);
    });

  }

})();
