angular.module('NoteWrangler').controller('NotesCreateController', function(Note, $scope, $location) {

  $scope.note = new Note();

  $scope.isSubmitting = false;

  $scope.saveNote = function(note) {
    note.$save();

    $scope.isSubmitting = true;

    note.$update().then(function() {
      $location.path("/notes")
    }).finally(function() {
      $scope.isSubmitting = false;
    });
  }

});
