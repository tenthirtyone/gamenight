(function() {
	'use strict';
	
	angular.module('gamenight.items.table')
	.service('NewItemTableService', NewItemTableService);
	
	function NewItemTableService() {

		var item = [
			{name: 'Parlay', description: 'This master debator improves your chances to win verbal exchanges giving the weilder a bonus to intimidation.', img: '/img/items/item00.jpg'}
			];

		return {
			getItem: getItem
		};
			
		function getItem() {
			return item;
		}
	}
	
}());