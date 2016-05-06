(function() {
	'use strict';
	
	angular.module('gamenight.items')
	.service('GNItemsService', GNItemsService);
	
	function GNItemsService() {
		var currentModule = '';
		var gameModules = [
			{
				id: 'dnd5e',
				name: 'Dungeons and Dragons 5e',
				description: 'The 5th edition of Wizard\'s of the Coast Dungeons and Dragons.',
			},
			{
				id: 'shadowrun5e',
				name: 'Shadowrun 5e',
				description: 'The 5th edition of uhhhh Shadowrun.',
			},
		];
		
		var ArmorModel = {
			headers: [
				'Name',
				'Type',
				'Cost',
				'AC',
				'Max Dex Mod',
				'Strength Req',
				'Stealth Pen',
				'Weight'
				],
			values: [
				{
					name: '',
					type: '',
					cost: 0,
					ac: 0,
					dexmodmax: 0,
					strreq: 0,
					stealth: false,
					weight: 0
				}]
		};
		
		var WeaponModel = {
			headers: [
				'Name',
				'Type',
				'Cost',
				'Min Dam',
				'Max Dam',
				'Weight',
				'Properties'
				],
			values: [
				{
					name: '',
					type: '',
					cost: 0,
					mindam: 0,
					maxdam: 0,
					weight: 0,
					properties: []
				}]			
		};
		
		var itemtypes = [
			{ id: 0, gameModuleId: 'dnd5e', itemType: 'Armor'},
			{ id: 1, gameModuleId: 'dnd5e', itemType: 'Weapon'}
		];
		
		var items = [
			{ gameModuleId: 'dnd5e', name: 'Parlay', description: 'This master debator improves your chances to win verbal exchanges given the weilder a bonus to intimidation.', img: '/img/items/item00.jpg'}
			];
		
		init();
		
		return {
			getItems: getItems,
			getGameModules: getGameModules,		
			setGameModule: setGameModule,
			getItemTypes: getItemTypes,
			getItemModel: getItemModel
		};
			
		function getItems() {
			return items;
		}
		
		function getGameModules() {
			return gameModules;
		}		
		
		function setGameModule(gameModule) {
			currentModule = gameModule;
		}		
		
		function getGameType() {
			return vm.gametype;
		}		
		
		function getItemModel(gameType, itemType) {
			switch (itemType) {
				case 'Armor':
					return ArmorModel;
					break;
				case 'Weapon':
					return WeaponModel;
					break;
			}
		}
		
		function getItemTypes() {
			return itemtypes;
		}
				
		function init() {	
			
		}
	}
	
}());