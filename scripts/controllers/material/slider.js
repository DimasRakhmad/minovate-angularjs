'use strict';

app

  .controller('mtSliderCtrl', function($scope, $timeout, $mdBottomSheet) {

    $scope.page = {
      title: 'Slider',
      subtitle: 'Place subtitle here...'
    };

    $scope.color = {
      red: Math.floor(Math.random() * 255),
      green: Math.floor(Math.random() * 255),
      blue: Math.floor(Math.random() * 255)
    };
    $scope.rating1 = 3;
    $scope.rating2 = 2;
    $scope.rating3 = 4;
    $scope.disabled1 = 0;
    $scope.disabled2 = 70;

  });




