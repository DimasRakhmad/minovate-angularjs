'use strict';

app

  .controller('mtInputsCtrl', function($scope, $timeout, $mdBottomSheet) {

    $scope.page = {
      title: 'Inputs',
      subtitle: 'Place subtitle here...'
    };

    $scope.user = {
      title: 'Developer',
      email: 'ipsum@lorem.com',
      firstName: '',
      lastName: '' ,
      company: 'Google' ,
      address: '1600 Amphitheatre Pkwy' ,
      city: 'Mountain View' ,
      state: 'CA' ,
      biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
      postalCode : '94043'
    };

    $scope.project = {
      description: 'Nuclear Missile Defense System',
      rate: 500
    };

    $scope.user2 = {
      name: 'John Doe',
      email: '',
      phone: '',
      address: 'Mountain View, CA'
    };

  })

  .config( function($mdThemingProvider){
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();
  });




