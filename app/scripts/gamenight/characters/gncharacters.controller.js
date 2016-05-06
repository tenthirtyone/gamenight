(function() {
	'use strict';
	
	angular.module('gamenight.gncharacters')
	.controller('GNCharactersController', GNCharactersController);
	
	GNCharactersController.$inject = ['$window', 'GNCharactersService'];
	
	function GNCharactersController($window, GNCharactersService) {
      var vm = this;
      init();
      
      function init() {
        vm = GNCharactersService.getChannelData();  
      }
      
      return vm;
    }
}());