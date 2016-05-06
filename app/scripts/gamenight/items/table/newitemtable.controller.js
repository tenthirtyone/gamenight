(function() {
	'use strict';
	
	angular.module('gamenight.items.table')
	.controller('NewItemTableController', NewItemTableController);
	
	NewItemTableController.$inject = ['$window', 'NewItemTableService'];
	
	function NewItemTableController($window, NewItemTableService) {
		var body = document.getElementsByTagName('body')[0];	
		var vm = this;
		
		var visibleTiles = 6; 
		
		init();
		
		return {
			Item: getItem
		};

		function getItem() {
			return NewItemTableService.getItem();
		};

		function init() {
			
		};
	}
}());