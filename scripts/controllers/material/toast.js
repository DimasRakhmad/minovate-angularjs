'use strict';

app

  .controller('mtToastCtrl', function($scope, $mdToast, $animate) {

    $scope.page = {
      title: 'Toast',
      subtitle: 'Place subtitle here...'
    };

    $scope.toastPosition = {
      bottom: false,
      top: true,
      left: false,
      right: true
    };
    $scope.getToastPosition = function() {
      return Object.keys($scope.toastPosition)
        .filter(function(pos) { return $scope.toastPosition[pos]; })
        .join(' ');
    };
    $scope.showCustomToast = function() {
      $mdToast.show({
        parent: angular.element(document.querySelector('#toastContainer')),
        controller: 'ToastShowCtrl',
        templateUrl: 'toast-template.html',
        hideDelay: 6000,
        position: $scope.getToastPosition()
      });
    };
    $scope.showSimpleToast = function() {
      $mdToast.show(
        $mdToast.simple()
          .parent(angular.element(document.querySelector('#toastContainer')))
          .content('Simple Toast!')
          .position($scope.getToastPosition())
          .hideDelay(3000)
      );
    };
    $scope.showActionToast = function() {
      var toast = $mdToast.simple()
        .parent(angular.element(document.querySelector('#toastContainer')))
        .content('Action Toast!')
        .action('OK')
        .highlightAction(false)
        .position($scope.getToastPosition());
      $mdToast.show(toast).then(function(response) {
        if ( response == 'ok' ) {
          alert('You clicked \'OK\'.');
        }
      });
    };

  })

  .controller('ToastShowCtrl', function($scope, $mdToast) {
    $scope.closeToast = function() {
      $mdToast.hide();
    };
  });




