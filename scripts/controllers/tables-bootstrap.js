'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:TablesBootstrapCtrl
 * @description
 * # TablesBootstrapCtrl
 * Controller of the minovateApp
 */
app
  .controller('TablesBootstrapCtrl', function ($scope) {
     $scope.page = {
      title: 'Bootstrap Tables',
      subtitle: 'Place subtitle here...'
    };

    $scope.users = [
      { name: 'Mark', lastname: 'Otto', username: '@mdo', checked: true, selected: false },
      { name: 'Jacob', lastname: 'Thornton', username: '@fat', checked: false, selected: false },
      { name: 'Mary', lastname: 'the Bird', username: '@twitter', checked: true, selected: false },
      { name: 'Marv', lastname: 'Bond', username: '@marvo', checked: false, selected: false },
      { name: 'Larry', lastname: 'Cardl', username: '@lurie', checked: false, selected: false },
      { name: 'Jennifer', lastname: 'Minelly', username: '@jen', checked: true, selected: false },
      { name: 'Sly', lastname: 'Stall', username: '@sly', checked: true, selected: false },
      { name: 'Arnold', lastname: 'Percy', username: '@arnie', checked: true, selected: false },
      { name: 'Jack', lastname: 'Black', username: '@blacko', checked: false, selected: false }
    ];

    $scope.selectedAll = false;

    $scope.selectAll = function () {
      angular.forEach($scope.users, function(user) {
        user.selected = $scope.selectedAll;
      });
    };

  });
