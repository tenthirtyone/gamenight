(function() {
	'use strict';
	
	angular.module('gamenight.dashboard')
	.controller('DashboardController', DashboardController);
	
	DashboardController.$inject = ['$window', 'DashboardService'];
	
	function DashboardController($window, DashboardService) {
		var body = document.getElementsByTagName('body')[0];	
		var vm = this;
		
		var visibleTiles = 6; 

		init();
		
		return {
			Assets: getAssets,
			Boards: getBoards,
			Campaigns: getCampaigns,
			Characters: getCharacters,
            DashIcons: getDashIcons,
            EventList: getEventList,
			Items: getItems,
            NotificationList: getNotificationList,
			Spells: getSpells,
            Trackables: getTrackables
		};

		function getAssets() {
			return DashboardService.getAssets();
		};
		function getBoards() {
			return DashboardService.getBoards();
		};
		function getCampaigns() {
			return DashboardService.getCampaigns();
		};
		function getCharacters() {
			return DashboardService.getCharacters();
		};
        function getDashIcons() {
            return DashboardService.getDashIcons(); 
        }
        function getEventList() {
            return DashboardService.getEventList(); 
        }
		function getItems() {
			return DashboardService.getItems();
		};
		function getNotificationList() {
			return DashboardService.getNotificationList();
		};
		function getSpells() {
			return DashboardService.getSpells();
		};
		function getTrackables() {
			return DashboardService.getTrackables();
		};
		function init() {

		};
	}
}());