(function() {
  'use strict';
  
  angular
      .module('components.gnnotificationlist')
      .directive('gnNotificationList', gnNotificationList);

  function gnNotificationList() {
      var directive = {
          restrict: 'EA',
          templateUrl: 'views/gnNotificationList.html',
          scope: {
              notificationdata: '='
          },
          link: linkFunc,
          controller: DirectiveController,
          controllerAs: 'vm',
          bindToController: true
      };

      return directive;

      function linkFunc(scope, el, attr, ctrl) {

      }
  }

  DirectiveController.$inject = ['$scope'];

  function DirectiveController($scope) {
      var vm = this;

  }   
}());