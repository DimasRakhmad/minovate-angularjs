'use strict';

app

  .controller('mtToolbarCtrl', function($scope, $timeout, $mdBottomSheet) {

    $scope.page = {
      title: 'Toolbar',
      subtitle: 'Place subtitle here...'
    };

    var imagePath = 'http://placekitten.com/g/80/80';
    $scope.todos = [];
    for (var i = 0; i < 15; i++) {
      $scope.todos.push({
        face: imagePath,
        what: "Brunch this weekend?",
        who: "Min Li Chan",
        notes: "I'll be in your neighborhood doing errands."
      });
    }

  });




