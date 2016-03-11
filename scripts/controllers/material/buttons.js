'use strict';

app

  .controller('mtButtonsCtrl', function($scope, $timeout, $mdBottomSheet) {

    $scope.page = {
      title: 'Buttons',
      subtitle: 'Place subtitle here...'
    };

    $scope.title1 = 'Button';
    $scope.title4 = 'Warn';
    $scope.isDisabled = true;
    $scope.googleUrl = 'http://google.com';

  });




