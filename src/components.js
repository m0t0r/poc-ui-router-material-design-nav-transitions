(function() {
  'use strict';

  angular
    .module('app', ['ngAnimate', 'ui.router'])
    .config(appRoutes)
    .directive('app', AppComponent)
    .directive('items', ItemsComponent)
    .directive('item', ItemComponent);

  function appRoutes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('items', {
        url: '/items',
        views: {
          'app': {
            template: '<items></items>'
          }
        }
      });

    $urlRouterProvider.otherwise('/items');
  }

  function AppComponent() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: './src/app.component.html'
    }
  }

  function ItemsComponent() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: './src/items.component.html',
      controllerAs: 'vm',
      controller: function() {
        var vm = this;

        vm.items = [
          {name: 'Item 1', description: 'Description for Item 1'},
          {name: 'Item 2', description: 'Description for Item 2'},
          {name: 'Item 3', description: 'Description for Item 3'},
          {name: 'Item 4', description: 'Description for Item 4'},
          {name: 'Item 5', description: 'Description for Item 5'}
        ]
      }
    }
  }

  function ItemComponent() {
    return {
      restrict: 'E',
      scope: {
        item: '='
      },
      controllerAs: 'vm',
      bindToController: true,
      templateUrl: './src/item.component.html',
      controller: function() {
        var vm = this;
      }
    }
  }


}());