'use strict';

/**
 * @ngdoc function
 * @name hannahApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hannahApp
 */
angular.module('hannahApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $scope.projects = [
        {name:"Bridgecrest Medical",desc:"UX Design, Interface Management"},
        {name:"Growing Power",desc:"Graphic Design, Logo Redesign"},
        {name:"Striped",desc:"Graphic Design, Logo Redesign"},
        {name:"True Spirit",desc:"UX Design, eCommerce Site"},
        {name:"Lifelock",desc:"UX Design, Designing for Habits"}
    ]
  });
