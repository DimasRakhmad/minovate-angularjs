'use strict';

app

  .controller('mtBottomSheetCtrl', function($scope, $timeout, $mdBottomSheet) {

    $scope.page = {
      title: 'Bottom Sheet',
      subtitle: 'Place subtitle here...'
    };

    $scope.alert = '';
    $scope.showListBottomSheet = function($event) {
      $scope.alert = '';
      $mdBottomSheet.show({
        parent: angular.element(document.getElementById('bottomSheetContainer')),
        templateUrl: 'bottom-sheet-list-template.html',
        controller: 'mtListBottomSheetCtrl',
        targetEvent: $event
      }).then(function(clickedItem) {
        $scope.alert = clickedItem.name + ' clicked!';
      });
    };
    $scope.showGridBottomSheet = function($event) {
      $scope.alert = '';
      $mdBottomSheet.show({
        parent: angular.element(document.getElementById('bottomSheetContainer')),
        templateUrl: 'bottom-sheet-grid-template.html',
        controller: 'mtGridBottomSheetCtrl',
        targetEvent: $event
      }).then(function(clickedItem) {
        $scope.alert = clickedItem.name + ' clicked!';
      });
    };
  })

  .controller('mtListBottomSheetCtrl', function($scope, $mdBottomSheet) {
    $scope.items = [
      { name: 'Share', icon: 'zmdi zmdi-share' },
      { name: 'Upload', icon: 'zmdi zmdi-upload' },
      { name: 'Copy', icon: 'zmdi zmdi-copy' },
      { name: 'Print this page', icon: 'zmdi zmdi-print' }
    ];
    $scope.listItemClick = function($index) {
      var clickedItem = $scope.items[$index];
      $mdBottomSheet.hide(clickedItem);
    };
  })

  .controller('mtGridBottomSheetCtrl', function($scope, $mdBottomSheet) {
    $scope.items = [
      { name: 'Google+', icon: 'zmdi zmdi-google-plus' },
      { name: 'Mail', icon: 'zmdi zmdi-email' },
      { name: 'Message', icon: 'zmdi zmdi-comment-text' },
      { name: 'Copy', icon: 'zmdi zmdi-copy' },
      { name: 'Facebook', icon: 'zmdi zmdi-facebook-box' },
      { name: 'Twitter', icon: 'zmdi zmdi-twitter-box' }
    ];
    $scope.listItemClick = function($index) {
      var clickedItem = $scope.items[$index];
      $mdBottomSheet.hide(clickedItem);
    };
  });




