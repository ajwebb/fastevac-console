// Dashboard Module
angular.module('console.dashboard', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: '/templates/dashboard.html',
      controller: 'DashboardCtrl'
    })
}])

.controller('DashboardCtrl', [function() {
  console.log('dashboard controller');
}]);