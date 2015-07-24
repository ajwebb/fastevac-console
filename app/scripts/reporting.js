// Dashboard Module
angular.module('console.reporting', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('reporting', {
      url: '/reporting',
      templateUrl: '/templates/reporting.html',
      controller: 'ReportingCtrl'
    })
}])

.controller('ReportingCtrl', [function() {
  console.log('reporting controller');
}]);