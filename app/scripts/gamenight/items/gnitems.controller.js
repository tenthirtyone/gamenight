(function() {
	'use strict';
	
	angular.module('gamenight.items')
	.controller('GNItemsController', GNItemsController);
	
	GNItemsController.$inject = ['$window', 'GNItemsService'];
	
	function GNItemsController($window, GNItemsService) {
		var body = document.getElementsByTagName('body')[0];	
		var vm = this;
		
		var visibleTiles = 6; 
		
		init();
		
		return {
			GameModule: getGameModule,
			GameModules: getGameModules,
			setGameModule: setGameModule,
			Items: getItems,
			getItemModel: getItemModel,
			ItemTypes: getItemTypes
		};

		function getItems() {
			return GNItemsService.getItems();
		};

		function getGameModule() {
			return GNItemsService.getGameModule(vm.gametype);
		};

		function getGameModules() {
			return GNItemsService.getGameModules();
		};

		function getItemModel(itemType) {
			return GNItemsService.getItemModel(ItemType);
		};

		function getItemTypes(moduleName) {
			return GNItemsService.getItemTypes();
		};

		function setGameModule(moduleName) {
			return GNItemsService.setGameModule(moduleName);
		};

		function init() {
		};
	}
}());