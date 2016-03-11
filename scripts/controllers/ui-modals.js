'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:UiModalsCtrl
 * @description
 * # UiModalsCtrl
 * Controller of the minovateApp
 */
app
  .controller('ModalsCtrl', function ($scope) {
    $scope.page = {
      title: 'Modals',
      subtitle: 'Place subtitle here...'
    };
  })

  .controller('ModalDemoCtrl', function ($scope, $uibModal, $log) {

    $scope.items = ['item1', 'item2', 'item3'];

    $scope.open = function(size) {

      var modalInstance = $uibModal.open({
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  })

  // Please note that $modalInstance represents a modal window (instance) dependency.
  // It is not the same as the $modal service used above.

  .controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

    $scope.items = items;
    $scope.selected = {
      item: $scope.items[0]
    };

    $scope.ok = function () {
      $uibModalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  })

  .controller('SplashDemoCtrl', function ($scope, $uibModal, $log) {
    $scope.items = ['item1', 'item2', 'item3'];

    $scope.openSplash = function(event, size) {

      var options = angular.element(event.target).data('options');

      var modalInstance = $uibModal.open({
        templateUrl: 'mySplashContent.html',
        controller: 'ModalInstanceCtrl',
        size: size,
        backdropClass: 'splash' + ' ' + options,
        windowClass: 'splash' + ' ' + options,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  });

