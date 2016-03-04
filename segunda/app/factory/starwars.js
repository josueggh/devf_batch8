(function(){
  'use strict';

  angular
    .module("segundamano")
    .factory("apiStarwars", apiStarwars);

  apiStarwars.$inject = ["$resource"];

  function apiStarwars($resource){
    return $resource("http://swapi.co/api/:category/:id/",{},{});
  }

  /**
   var people = starwars.get({'category':'people','id':4});
   console.log(people);
   var planet = starwars.get({'category':'planets','id':1});
   console.log(planet);
   var star = starwars.get({'category':'starships','id':9});
   console.log(star);
  * */


})();