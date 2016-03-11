'use strict';

app

  .controller('mtProgressCircularCtrl', function($scope, $interval) {

    $scope.page = {
      title: 'Progress Circular',
      subtitle: 'Place subtitle here...'
    };

    $scope.mode = 'query';
    $scope.determinateValue = 30;
    $interval(function() {
      $scope.determinateValue += 1;
      if ($scope.determinateValue > 100) {
        $scope.determinateValue = 30;
      }
    }, 100, 0, true);

  });




