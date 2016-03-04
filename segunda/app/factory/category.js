(function(){
  'use strict';

  angular
    .module("segundamano")
    .factory("apiCategory", apiCategory);

  apiCategory.$inject = ["$resource"];

  function apiCategory($resource){
    return $resource("/server/categories.json",{},{});
  }

})();