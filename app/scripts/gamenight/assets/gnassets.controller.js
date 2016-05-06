(function() {
	'use strict';
	
	angular.module('gamenight.assets')
	.controller('GNAssetsController', GNAssetsController);
	
	GNAssetsController.$inject = ['$window', 'GNAssetsService'];
	
	function GNAssetsController($window, GNAssetsService) {
      var vm = this;
      init();
      
      function init() {
        vm = GNAssetsService.getChannelData();  
      }
      
      return vm;
	}
}());