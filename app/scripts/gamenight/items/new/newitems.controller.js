(function() {
	'use strict';
	
	angular.module('gamenight.items.new')
	.controller('NewItemsController', NewItemsController);
	
	NewItemsController.$inject = ['$window', 'NewItemsService'];
	
	function NewItemsController($window, NewItemsService) {

		init();
		
		return {
			ItemTypes: getItemTypes
		};

		function getItemTypes() {
			return NewItemsService.getItemTypes();
		};

		function init() {
			
		};
	}
}());