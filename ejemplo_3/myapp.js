/* IIFE */
(function(){
  'use strict';

  angular.module('myApp',[] )
    .directive('ejemplo', ejemplo)
    .controller('myController',myController)
    .controller('otherController', function_controller);

  function ejemplo(){
      var directive = {
          restrict: 'AE',
        /*
        *   A - Atributo
        *   E - Element <tag>
        * */
          templateUrl: 'directive.html',
        /* Archivo HTML */

        /*CONTROLADOR*/
          //controller: directiveController,
          //controllerAs: 'asController',
          /*bindToController: true,*/


          replace: true
      };
      return directive;
  }

  function directiveController(){
      var asController = this;
      asController.param = Math.random();
  }


  function myController(){
    var first = this;
    first.name      = "hola mundo";
    first.number    = 3;

    first.people =  [
      {'name':'Josue', 'age': 11, 'place':'Mexico'},
      {'name':'Ramon', 'age': 12, 'place':'Mexico'},
      {'name':'Jose', 'age': 13, 'place': 'USA'},
      {'name':'Victor', 'age': 11,'place': 'USA'},
      {'name':'Pedro', 'age': 15, 'place': 'Mexico'},
    ];


    first.movies = [
      {
        'imagen': 'http://ia.media-imdb.com/images/M/MV5BMTkxNDYxOTA4M15BMl5BanBnXkFtZTgwNTk0NzQxMTE@._V1_UX182_CR0,0,182,268_AL_.jpg',
        'nombre': 'Matrix',
        'actores' : ['NEO','TRINITY','MORFEO'],
        'anio' :  ' 1999',
        'genero': 'Ficción'
      }
    ];


    first.elements  = [1,2,3,4,5,6,7,8,9];

    first.clickeame = clickeame;
    first.clickdos  = clickdos;
    first.addage =  addage;

    function addage(p){
      p.age += 1;
    }

    function clickeame(){
      console.log('c');
    }
    function clickdos(){
      console.log(first.name);
    }
  }

  function function_controller(){
    var other = this;
    other.name = "Josue";
  }
})();