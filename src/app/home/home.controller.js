(function () {
  'use strict';

  angular
    .module('linkar-hotsite')
    .controller('Home', HomeController);

  function HomeController($http) {

    var vm = this;

    vm.init = init;

    vm.init();

    function init() {

    }

  }
})();
