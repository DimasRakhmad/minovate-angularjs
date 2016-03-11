'use strict';

app

  .controller('mtListCtrl', function($scope, $timeout, $mdBottomSheet) {

    $scope.page = {
      title: 'List',
      subtitle: 'Place subtitle here...'
    };

  })

  .controller('mtListBasicCtrl', function($scope, $timeout, $mdBottomSheet) {

    var imagePath = 'http://placekitten.com/g/600/600';
    $scope.phones = [
      { type: 'Home', number: '(555) 251-1234' },
      { type: 'Cell', number: '(555) 786-9841' }
    ];
    $scope.todos = [
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      }
    ];

  })

  .controller('mtListControlsCtrl', function($scope, $timeout, $mdDialog) {

    $scope.toppings = [
      { name: 'Pepperoni', wanted: true },
      { name: 'Sausage', wanted: false },
      { name: 'Black Olives', wanted: true },
      { name: 'Green Peppers', wanted: false }
    ];
    $scope.settings = [
      { name: 'Wi-Fi', extraScreen: 'Wi-fi menu', icon: 'zmdi zmdi-wifi-alt-2', enabled: true },
      { name: 'Bluetooth', extraScreen: 'Bluetooth menu', icon: 'zmdi zmdi-bluetooth', enabled: false }
    ];
    $scope.messages = [
      {id: 1, title: "Message A", selected: false},
      {id: 2, title: "Message B", selected: true},
      {id: 3, title: "Message C", selected: true}
    ];
    $scope.people = [
      { name: 'Janet Perkins', img: 'http://placekitten.com/g/600/600', newMessage: true },
      { name: 'Mary Johnson', img: 'http://placekitten.com/g/600/601', newMessage: false },
      { name: 'Peter Carlsson', img: 'http://placekitten.com/g/600/602', newMessage: false }
    ];
    $scope.goToPerson = function(person, event) {
      $mdDialog.show(
        $mdDialog.alert()
          .title('Navigating')
          .content('Inspect ' + person)
          .ariaLabel('Person inspect demo')
          .ok('Neat!')
          .targetEvent(event)
      );
    };
    $scope.navigateTo = function(to, event) {
      $mdDialog.show(
        $mdDialog.alert()
          .title('Navigating')
          .content('Imagine being taken to ' + to)
          .ariaLabel('Navigation demo')
          .ok('Neat!')
          .targetEvent(event)
      );
    };
    $scope.doSecondaryAction = function(event) {
      $mdDialog.show(
        $mdDialog.alert()
          .title('Secondary Action')
          .content('Secondary actions can be used for one click actions')
          .ariaLabel('Secondary click demo')
          .ok('Neat!')
          .targetEvent(event)
      );
    };

  });




