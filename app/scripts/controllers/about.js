'use strict';

/**
 * @ngdoc function
 * @name hannahApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hannahApp
 */
angular.module('hannahApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
