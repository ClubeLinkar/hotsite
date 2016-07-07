(function () {
  'use strict';

  angular
    .module('linkar-hotsite')
    .controller('Home', HomeController);

  function HomeController($http, $stateParams) {

    var vm = this;

    vm.init = init;

    vm.init();

    function init() {

      $http.get('/linkar/api/companies/hotsite/' + $stateParams.login).then(function (result) {

        vm.company = result.data.company;
        vm.products = result.data.products;



      });
    }

  }
})();
