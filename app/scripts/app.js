// Main App Module
angular.module('console', [
  'console.dashboard',
  'console.personnel',
  'console.groups',
  'console.reporting'
]).

config(['$urlRouterProvider', function($urlRouterProvider) {
  $urlRouterProvider.otherwise('dashboard');
}])

.controller('MainCtrl', [function() {
  console.log('main controller');
}])

.run(function($state) {
  $state.go('dashboard');
});