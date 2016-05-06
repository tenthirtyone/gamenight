(function() {
	'use strict';
	
	angular.module('gamenight.items.list')
	.service('GNItemsListService', GNItemsListService);
	
	function GNItemsListService() {

		var items = [
			{name: 'Parlay', description: 'This master debator improves your chances to win verbal exchanges given the weilder a bonus to intimidation.', img: '/img/items/item00.jpg'}
			];

		return {
			getItems: getItems
		};
			
		function getItems() {
			return items;
		}
	}
	
}());