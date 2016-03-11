'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:UimasonryCtrl
 * @description
 * # UiMasonryCtrl
 * Controller of the minovateApp
 */
app
  .controller('UiMasonryCtrl', function ($scope, ipsumService) {

    /*jshint bitwise:false */

    $scope.page = {
      title: 'Masonry',
      subtitle: 'Place subtitle here...'
    };

    function genBrick() {
      var height = ~~(Math.random() * 500) + 100;
      var id = ~~(Math.random() * 10000);
      return {
        src: 'http://lorempixel.com/g/720/' + height + '/?' + id,
        title: ipsumService.randomMi()+ipsumService.words(1)+' '+ipsumService.randomMi()+ipsumService.words(1),
        content: ipsumService.sentences(2)
      };
    }

    $scope.bricks = [
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick(),
      genBrick()
    ];
  });
