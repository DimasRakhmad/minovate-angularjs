'use strict';

/**
 * @ngdoc directive
 * @name minovateApp.directive:prettyprint
 * @description
 * # prettyprint
 */
/* jshint ignore:start */
app
  .directive('prettyprint', function () {
    return {
      restrict: 'C',
      link: function postLink(scope, element) {
        element.html(prettyPrintOne(element.html(),'',true));
      }
    };
  });
/* jshint ignore:end */
