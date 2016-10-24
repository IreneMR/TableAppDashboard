(function () {
  'user strict';

  angular.module('app').controller('UserListCtrl', ['$location', 'UsersService', userListCtrl]);

  function userListCtrl($location, UsersService) {
    var vm = this;
    vm.users = UsersService.getAll();
    vm.addUser = addUser;
    vm.editUser = editUser;
    vm.deleteUser = deleteUser;

    function editUser (user) {

       $location.path('/users/edit/' + user.id);
    }

    function deleteUser (user) {
      var result = confirm("Are you sure to delete?");
        if (result == true) {
          UsersService.deleteUser(user);
          vm.users = UsersService.getAll();
        }
    }

    function addUser () {
       $location.path('/formUser');
    }
    // vm.delete = function (id) {
    //   // Users.delete(id);
    //   if (vm.newuser.id == id)
    //     vm.newuser = {};
    // }
    //
    // vm.edit = function (id) {
    //   // vm.newuser = angular.copy(Users.get(id));
    //   $location.path('/formUser');
    // }
    //
    // vm.addUser = function () {
    //     $location.path('/formUser');
    // };
  }
}());
