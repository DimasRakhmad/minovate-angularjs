'use strict';

/**
 * @ngdoc directive
 * @name minovateApp.directive:tileControlFullscreen
 * @description
 * # tileControlFullscreen
 */
app
  .directive('tileControlFullscreen', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element) {
        var dropdown = element.parents('.dropdown');

        element.on('click', function(){
          dropdown.trigger('click');
        });

      }
    };
  });
