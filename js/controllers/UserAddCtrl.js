(function () {
  'user strict';
  angular.module('app').controller('UserAddCtrl', ['$location','UsersService', userAddCtrl]);
    function userAddCtrl ($location, UsersService) {
      var vm = this;
      vm.user = {};
      vm.submitForm = submitForm;
      vm.addAddress = addAddress;
      function submitForm (personalDataForm) {
        if (personalDataForm.$valid) {
          UsersService.newUser(vm.user);
          $location.path('/users');
          return true
        }
      }
      function addAddress () {
        vm.user.address = {};
      }
    }
}());
