(function() {
	'use strict';
	
	angular.module('gamenight.maps')
	.controller('GNMapsController', GNMapsController);
	
	GNMapsController.$inject = ['$window', 'GNMapsService'];
	
	function GNMapsController($window, GNMapsService) {
      var vm = this;
      init();
      
      function init() {
        vm = GNMapsService.getChannelData();  
      }
      
      return vm;
	}
}());