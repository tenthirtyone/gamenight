(function() {
	'use strict';
	
	angular.module('gamenight.items')
	.controller('GNItemsListController', GNItemsListController);
	
	GNItemsListController.$inject = ['$window', 'GNItemsListService'];
	
	function GNItemsListController($window, GNItemsListService) {
		var body = document.getElementsByTagName('body')[0];	
		var vm = this;
		
		var visibleTiles = 6; 
		
		init();
		
		return {
			Items: getItems
		};

		function getItems() {
			return GNItemsListService.getItems();
		};

		function init() {
			
		};
	}
}());