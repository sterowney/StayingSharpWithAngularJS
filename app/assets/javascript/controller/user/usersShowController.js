angular.module('NoteWrangler').controller('UsersShowController', function(User, $scope, $routeParams, $location) {
  $scope.user = User.get({id: $routeParams.id});

  $scope.deleteNote = function(note) {
    note.$remove().then(function() {
      $location.path("/notes");
    });
  }
});
