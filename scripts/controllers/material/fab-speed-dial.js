'use strict';

app

  .controller('mtFabSpeedDialCtrl', function($scope, $timeout, $mdBottomSheet) {

    $scope.page = {
      title: 'Fab Speed Dial',
      subtitle: 'Place subtitle here...'
    };

  })

  .controller('mtFabSpeedDialBasicCtrl', function() {
    this.topDirections = ['left', 'up'];
    this.bottomDirections = ['down', 'right'];
    this.isOpen = false;
    this.availableModes = ['md-fling', 'md-scale'];
    this.selectedMode = 'md-fling';
    this.availableDirections = ['up', 'down', 'left', 'right'];
    this.selectedDirection = 'up';
  })

  .controller('mtFabSpeedDialMoreCtrl', function($mdDialog) {
    var self = this;
    self.hidden = false;
    self.items = [
      {name: "Twitter", icon: "zmdi zmdi-twitter-box", direction: "left" },
      {name: "Facebook", icon: "zmdi zmdi-facebook-box", direction: "right" },
      {name: "Google Hangout", icon: "zmdi zmdi-google-plus-box", direction: "left" }
    ];
    self.openDialog = function($event, item) {
      // Show the dialog
      $mdDialog.show({
        clickOutsideToClose: true,
        controller: function($mdDialog) {
          // Save the clicked item
          this.item = item;
          // Setup some handlers
          this.close = function() {
            $mdDialog.cancel();
          };
          this.submit = function() {
            $mdDialog.hide();
          };
        },
        controllerAs: 'dialog',
        templateUrl: 'dialog.html',
        targetEvent: $event
      });
    }
  });




