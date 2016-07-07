(function () {
  'use strict';

  angular.module('linkar-hotsite').config(Config);

  function Config($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('home', {
      url: '/:login',
      templateUrl: 'app/home/home.html',
      controller: 'Home',
      controllerAs: 'vm'
    });

    $urlRouterProvider.otherwise('/');
  }
})();
