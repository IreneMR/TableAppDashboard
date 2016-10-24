(function () {
  'user strict';
  angular.module('app').factory('UsersService', [usersService]);

  function usersService() {
    var users = [{
      id: 1,
      first_name:"Irene",
      last_name:"MR",
      email:"irene-mr@gmail.com",
      phone:"+34602989825"
    }];
    var nextId = 2;
    var userFactory = {
      getAll : getAll,
      updateUser : updateUser,
      deleteUser : deleteUser,
      newUser : newUser,
      getById : getById
    };
    function getAll() {
      return angular.copy(users);
    }
    function getById(id) {
      var userIndex = searchIndex(id);
      return angular.copy(users[userIndex]);
    }
    function searchIndex (id) {
      var index;
      for (var i in users) {
        if (users[i].id == id)
          index = i;
      }
      return index;
    }
    function updateUser(user) {
      var userIndex = searchIndex(user.id);
      users[userIndex] = user;
    }
    function deleteUser(user) {
      var userIndex = searchIndex(user.id);
      users.splice(userIndex, 1)
    }
    function newUser(user) {
      user.id = nextId;
      users.push(user);
      nextId +=1;
    }
    return userFactory;
  }

    // var users=[];
    // var uid = 1;
    //
    // var getAllUsers = function(){
    //   return users;
    // }
    //
    // var searchId = function(){
    //   var newId=0
    //   for (var i in users) {
    //     if (users[i].id>newId){
    //       newId = users[i].id
    //     }
    //   }
    //   return newId+1;
    // }
    //
    // var addUser = function(user){
    //   user.id = searchId();
    //   users.push(user);
    // }
    //
    // this.save = function (user) {
    //   if(user.id == null) {
    //     user.id = uid++;
    //     users.push(user);
    //   } else {
    //     for (i in users) {
    //       if (users[i].id == user.id) {
    //         user[i] = user;
    //       }
    //     }
    //   }
    // }
    //
    // this.delete = function (id) {
    //   for (i in users) {
    //     if (users[i].id == id) {
    //       users.splice(i, 1);
    //     }
    //   }
    // }
    //
    // this.list = function () {
    //   return users;
    // }

    // return {
      // getAllUsers: getAllUsers,
      // addUser: addUser,
    // }

  // angular.module('app').factory('User', ['Users', function(Users){
  //   var getUser=function(id){
  //     var users = Users.getAllUsers();
  //     var user = null;
  //     for (var i in users){
  //       if (user.id == id){
  //         user = users[i];
  //       }
  //     }
  //     return user
  //   }
  //
  //   var updateUser=function(modUser){
  //     var user=getUser(modUser.id);
  //     user = modUser;
  //   }
  //
  //   return {
  //     getUser:  getUser,
  //     updateUser: updateUser,
  //     deleteUser: deleteUser
  //   }
  // }]);

}());
