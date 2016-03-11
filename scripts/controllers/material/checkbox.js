'use strict';

app

  .controller('mtCheckboxCtrl', function($scope, $timeout, $mdBottomSheet) {

    $scope.page = {
      title: 'Checkbox',
      subtitle: 'Place subtitle here...'
    };

    $scope.data = {};
    $scope.data.cb1 = true;
    $scope.data.cb2 = false;
    $scope.data.cb3 = false;
    $scope.data.cb4 = false;
    $scope.data.cb5 = false;

    $scope.items = [1,2,3,4,5];
    $scope.selected = [];
    $scope.toggle = function (item, list) {
      var idx = list.indexOf(item);
      if (idx > -1) list.splice(idx, 1);
      else list.push(item);
    };
    $scope.exists = function (item, list) {
      return list.indexOf(item) > -1;
    };

  });




