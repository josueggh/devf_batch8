/* IIFE */
(function(){
  'use strict';

  angular.module('myApp',[] )
    .controller('myController',myController)
    .controller('otherController', function_controller);

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