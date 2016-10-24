(function () {
  'use strict';

  angular.module('app').config(config);

  function config($routeProvider) {
    $routeProvider
      .when('/users',{
        templateUrl: 'views/users.html',
        controller: 'UserListCtrl',
        controllerAs: 'vm'
      })
      .when('/users/edit/:id',{
        templateUrl: 'views/_form.html',
        controller: 'EditUserCtrl',
        controllerAs: 'vm'
      })
      .when('/formUser',{
        templateUrl: 'views/_form.html',
        controller: 'UserAddCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/users'
      });
  }
}());
