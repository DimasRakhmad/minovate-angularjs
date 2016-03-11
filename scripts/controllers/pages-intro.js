'use strict';

app
  .controller('IntroPageCtrl', function ($scope) {
    $scope.page = {
      title: 'Intro page',
      subtitle: 'Place subtitle here...'
    };

    $scope.IntroOptions = {
      overlayOpacity: 0.8,
      showBullets: false,
      showStepNumbers: false,
      nextLabel: 'Next <i class="fa fa-chevron-right"></i>',
      prevLabel: '<i class="fa fa-chevron-left"></i> Previous',
      skipLabel: '<i class="zmdi zmdi-close"></i>',
      doneLabel: '<i class="zmdi zmdi-close"></i>',
      steps: [
        {
          element: 'header .branding',
          intro: '<h2 class="header">Branding Section</h2> <p>You can place your logo here.</p>',
          position: 'right'
        },
        {
          element: 'header .sidebar-collapse',
          intro: '<h2 class="header">Sidebar Offset</h2> <p>You can change sidebar width by clicking on this element.</p>'
        },
        {
          element: 'header .settings',
          intro: '<h2 class="header">Template Settings</h2> <p>You can change various things from this dropdown like colors and element visibility options.</p>'
        },
        {
          element: '#main-search',
          intro: '<h2 class="header">Main Search Field</h2> <p>You can assign you search engine function to this element.</p>'
        },
        {
          element: 'header .dropdown.users',
          intro: '<h2 class="header">User Requests</h2> <p>Just some dummy data here.</p>'
        },
        {
          element: 'header .dropdown.messages',
          intro: '<h2 class="header">Received Messages</h2> <p>Just some dummy data here again.</p>'
        },
        {
          element: 'header .dropdown.notifications',
          intro: '<h2 class="header">Notifications</h2> <p>Just some dummy data here again.</p>'
        },
        {
          element: 'header .dropdown.nav-profile',
          intro: '<h2 class="header">Your Profile</h2> <p>Dropdown for user actions and subpages.</p>'
        },
        {
          element: 'header .dropdown.language',
          intro: '<h2 class="header">Language Change</h2> <p>You can change current template language. Only for example purposes, just sidebar menu elements translated.</p>',
          position: 'left'
        },
        {
          element: '.toggle-right-sidebar',
          intro: '<h2 class="header">Right Sidebar Toggle</h2> <p>This one toggle on/off right sidebar.</p>',
          position: 'left'
        },
        {
          element: '#sidebar',
          intro: '<h2 class="header">Sidebar</h2> <p>You can find menu element at this section.</p>',
          position: 'right'
        }
      ]
    };
  });
