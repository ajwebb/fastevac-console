// Group Module
angular.module('console.groups', ['ui.router', 'datatables', 'datatables.bootstrap', 'ui.bootstrap', 'ngResource'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('groups', {
      url: '/groups',
      templateUrl: '/templates/groups.html'
    })
}])

.controller('GroupCtrl', GroupCtrl)

.controller('GroupInstanceCtrl', ['$scope', '$modalInstance', 'group', function ($scope, $modalInstance, group) {

  $scope.group = group;

  $scope.personnel = ['Abraham Avery', 'Ahmed Dean', 'Caren Mcdowell', 'Dalia Marquez', 'Mario Norris', 'Robert Ham', 'Sean Valdez'];

  $scope.submitAdd = function () {
    $modalInstance.close();
  };

  $scope.submitEdit = function () {
    $modalInstance.close();
  };

  $scope.submitDelete = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
}]);

function GroupCtrl($resource, $modal, $log, DTOptionsBuilder, DTColumnDefBuilder) {
    var vm = this;
    vm.addGroup = addGroup;
    vm.editGroup = editGroup;
    vm.deleteGroup = deleteGroup;

    vm.groups = $resource('group-data.json').query();
    vm.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withBootstrap();
    vm.dtColumnDefs = [
        DTColumnDefBuilder.newColumnDef(0),
        DTColumnDefBuilder.newColumnDef(1),
        DTColumnDefBuilder.newColumnDef(2),
        DTColumnDefBuilder.newColumnDef(3).notSortable()
    ];

    function addGroup() {
      var modalInstance = $modal.open({
        templateUrl: 'addGroup.html',
        controller: 'GroupInstanceCtrl',
        size: 'lg',
        resolve: {
          group: null
        }
      });

      modalInstance.result.then(function () {
        console.log('submit add group');
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    function editGroup(index) {
      console.log('edit group with id: ' + vm.groups[index].id);

      var modalInstance = $modal.open({
        templateUrl: 'editGroup.html',
        controller: 'GroupInstanceCtrl',
        size: 'lg',
        resolve: {
          group: function() {
            return vm.groups[index];
          }
        }
      });

      modalInstance.result.then(function () {
        console.log('submit edit group');
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    function deleteGroup(index) {
      console.log('delete group with id: ' + vm.groups[index].id);

      var modalInstance = $modal.open({
        templateUrl: 'deleteGroup.html',
        controller: 'GroupInstanceCtrl',
        size: 'md',
        resolve: {
          group: function() {
            return vm.groups[index];
          }
        }
      });

      modalInstance.result.then(function () {
        console.log('submit personnel delete');
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
}