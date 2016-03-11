'use strict';

app

  .controller('mtFabToolbarCtrl', function($scope, $timeout, $mdBottomSheet) {

    $scope.page = {
      title: 'Fab Toolbar',
      subtitle: 'Place subtitle here...'
    };

    $scope.isOpen = false;
    $scope.demo = {
      isOpen: false,
      count: 0,
      selectedDirection: 'left'
    };

  });




