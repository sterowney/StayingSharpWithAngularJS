angular.module('NoteWrangler').controller('UsersIndexController', function(User, $scope) {
  $scope.notes = Note.query();
});
