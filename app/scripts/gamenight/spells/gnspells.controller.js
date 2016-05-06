(function() {
	'use strict';
	
	angular.module('gamenight.spells')
	.controller('GNSpellsController', GNSpellsController);
	
	GNSpellsController.$inject = ['$window', 'GNSpellsService'];
	
	function GNSpellsController($window, GNSpellsService) {
      var vm = this;
      init();
      
      function init() {
        vm = GNSpellsService.getChannelData();  
      }
      
      return vm;
	}
}());