'use strict';

app
  .controller('UiDragulaCtrl', function ($scope, dragularService, ipsumService) {


    $scope.page = {
      title: 'Dragula',
      subtitle: 'Place subtitle here...'
    };

    $scope.tasks = {
      new: [{
        name: ipsumService.words(2),
        created: '26.09.2015',
        due_date: '29.10.2015',
        dsc: ipsumService.sentences(3),
        priority: {
          key: 'priority-high',
          value: 'High priority'
        }
      },
      {
        name: ipsumService.words(2),
        created: '18.05.2015',
        due_date: '30.11.2015',
        dsc: ipsumService.sentences(3),
        priority: {
          key: 'priority-high',
          value: 'High priority'
        }
      },
      {
        name: ipsumService.words(2),
        created: '13.08.2015',
        due_date: '15.12.2015',
        dsc: ipsumService.sentences(3),
        priority: {
          key: 'priority-low',
          value: 'Low priority'
        }
      },
      {
        name: ipsumService.words(2),
        created: '12.10.2015',
        due_date: '24.12.2015',
        dsc: ipsumService.sentences(3),
        priority: {
          key: 'priority-normal',
          value: 'Normal priority'
        }
      }],
      progress: [{
        name: ipsumService.words(2),
        created: '13.08.2015',
        due_date: '16.10.2015',
        dsc: ipsumService.sentences(3),
        priority: {
          key: 'priority-medium',
          value: 'Medium priority'
        }
      },
      {
        name: ipsumService.words(2),
        created: '05.06.2015',
        due_date: '26.11.2015',
        dsc: ipsumService.sentences(3),
        priority: {
          key: 'priority-low',
          value: 'Low priority'
        }
      }],
      finished: [{
        name: ipsumService.words(2),
        created: '06.09.2015',
        due_date: '13.10.2015',
        dsc: ipsumService.sentences(3),
        priority: {
          key: 'priority-normal',
          value: 'Normal priority'
        }
      },
      {
        name: ipsumService.words(2),
        created: '09.05.2015',
        due_date: '08.09.2015',
        dsc: ipsumService.sentences(3),
        priority: {
          key: 'priority-high',
          value: 'High priority'
        }
      },
      {
        name: ipsumService.words(2),
        created: '12.08.2015',
        due_date: '16.08.2015',
        dsc: ipsumService.sentences(3),
        priority: {
          key: 'priority-medium',
          value: 'Medium priority'
        }
      }]
    };

    $scope.dragularOptions = {
      classes: {
        mirror: 'drag-task'
      },
      nameSpace: 'common'
    };

  });
