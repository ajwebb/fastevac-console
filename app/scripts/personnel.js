// Personnel Module
angular.module('console.personnel', ['ui.router', 'datatables', 'datatables.bootstrap', 'ui.bootstrap', 'ngResource'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('personnel', {
      url: '/personnel',
      templateUrl: '/templates/personnel.html'
    })
}])

.controller('PersonnelCtrl', PersonnelCtrl)

.controller('PersonnelInstanceCtrl', ['$scope', '$modalInstance', 'person', function ($scope, $modalInstance, person) {

  $scope.person = person;

  $scope.groups = ['Warehouse', 'Shipping'];

  $scope.submitAdd = function () {
    $modalInstance.close();
  };

  $scope.submitImport = function () {
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

function PersonnelCtrl($resource, $modal, $log, DTOptionsBuilder, DTColumnDefBuilder) {
    var vm = this;
    vm.addPerson = addPerson;
    vm.importPersonnel = importPersonnel;
    vm.editPerson = editPerson;
    vm.deletePerson = deletePerson;

    vm.persons = $resource('data.json').query();
    vm.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withBootstrap();
    vm.dtColumnDefs = [
        DTColumnDefBuilder.newColumnDef(0),
        DTColumnDefBuilder.newColumnDef(1),
        DTColumnDefBuilder.newColumnDef(2),
        DTColumnDefBuilder.newColumnDef(3),
        DTColumnDefBuilder.newColumnDef(4),
        DTColumnDefBuilder.newColumnDef(5).notSortable()
    ];

    function addPerson() {
      var modalInstance = $modal.open({
        templateUrl: 'addPerson.html',
        controller: 'PersonnelInstanceCtrl',
        size: 'lg',
        resolve: {
          person: null
        }
      });

      modalInstance.result.then(function () {
        console.log('submit add person');
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    function importPersonnel() {

      var modalInstance = $modal.open({
        templateUrl: 'importPersonnel.html',
        controller: 'PersonnelInstanceCtrl',
        size: 'md',
        resolve: {
          person: null
        }
      });

      modalInstance.result.then(function () {
        console.log('submit personnel import');
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    function editPerson(index) {
      console.log('edit person with id: ' + vm.persons[index].id);

      var modalInstance = $modal.open({
        templateUrl: 'editPerson.html',
        controller: 'PersonnelInstanceCtrl',
        size: 'lg',
        resolve: {
          person: function() {
            return vm.persons[index];
          }
        }
      });

      modalInstance.result.then(function () {
        console.log('submit personnel edit');
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    function deletePerson(index) {
      console.log('delete person with id: ' + vm.persons[index].id);

      var modalInstance = $modal.open({
        templateUrl: 'deletePerson.html',
        controller: 'PersonnelInstanceCtrl',
        size: 'md',
        resolve: {
          person: function() {
            return vm.persons[index];
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