(function(){
  'use strict';

  angular
    .module("segundamano")
    .factory("apiProduct", apiProduct);

  apiProduct.$inject = ["$resource"];

  function apiProduct($resource){
    return $resource("/server/myproducts.json",{},{});
  }

})();