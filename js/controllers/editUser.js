(function () {
  'user strict';

  angular.module('app').controller('EditUserCtrl', ['$routeParams', '$location', 'UsersService', editUserCtrl]);
    function editUserCtrl($routeParams, $location, UsersService) {
      var vm = this;
      vm.user = UsersService.getById($routeParams.id);

      vm.submitForm = submitForm;
        function submitForm () {
          UsersService.updateUser(vm.user);
          $location.path('/users');
      }
    }
}());
