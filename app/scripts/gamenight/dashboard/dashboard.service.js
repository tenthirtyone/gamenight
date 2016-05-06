(function() {
	'use strict';
	
	angular.module('gamenight.dashboard')
	.service('DashboardService', DashboardService);
	
	function DashboardService() {
		var assets = [
			{name: 'Glaciers', lvl: 4, class: "Barbarian", img: '/img/033.jpg'}
			];
		
		var boards = [
			{name: 'Underdark 1', img: '/img/011.jpg'},
			{name: 'Underdark 2', img: '/img/012.jpg'},
			{name: 'Underdark 3', img: '/img/013.jpg'},
			{name: 'Underdark 4', img: '/img/014.jpg'}
			];	
				
		var campaigns = [
			{name: 'Cyber Punk', img: '/img/042.jpg'},
			{name: 'Dungeons and Dragons', img: '/img/048.jpg'},
			{name: 'DnD 2', img: '/img/077.jpg'},
			{name: 'Vampire the Masquerade', img: '/img/052.jpg'}
			//{name: 'GURPS', img: '/img/067.jpg'},
			//{name: 'Shadowbane', img: '/img/021.jpg'},
			//{name: 'RIFTS', img: '/img/053.jpg'},
			//{name: 'Warhammer', img: '/img/087.jpg'},
			//{name: 'Settlers of Catan', img: '/img/022.jpg'}
			];

		var characters = [
			{name: 'SMASH', lvl: 4, class: "Barbarian", img: '/img/characters/barb00.jpg'}
			];
		
        var dashicons = [
            {text: 'Campaigns', sref: 'gamenight.campaigns', count: 3},
            {text: 'Characters', sref: 'gamenight.characters', count: 4},
            {text: 'Items', sref: 'gamenight.items.list', count: 1},
            {text: 'Maps', sref: 'gamenight.maps', count: 1},
            {text: 'Assets', sref: 'gamenight.assets', count: 1}
            ];
      
        var eventlist = {
            title: 'Recent Events',
            lineitems: [
              {id: 0, timestamp: '1 Hours ago', text: 'Paw of opalla'},
              {id: 1, img: '', timestamp: '2 Days ago', text: 'kobold racks a kill'},
              {id: 2, img: '/img/profile-pics/2.jpg', timestamp: 'One Week Ago', text: 'slash'},
              {id: 3, timestamp: 'Two Weeks Ago', text: 'the the hall of truth'},
              {id: 4, timestamp: 'One month ago', text: 'bookin down freeport'}
              ],
            sref: 'notifications'
            };
      
		var items = [
			{name: 'Gandlaf sowrd', img: '/img/088.jpg'}
			];
      
        var notificationlist = {
            title: 'Recent Notifications',
            lineitems: [
              {id: 0, img: '/img/profile-pics/1.jpg', timestamp: '2 Hours ago', text: 'Paw of opalla'},
              {id: 1, img: '/img/profile-pics/2.jpg', timestamp: '12 Hours ago', text: 'kobold racks a kill'},
              {id: 2, img: '/img/profile-pics/3.jpg', timestamp: 'Yesterday', text: 'slash'},
              {id: 3, img: '/img/profile-pics/4.jpg', timestamp: 'Last Week', text: 'the the hall of truth'},
              {id: 4, img: '/img/profile-pics/5.jpg', timestamp: 'One month ago', text: 'bookin down freeport'}
              ],
            sref: 'notifications'
            };
		
		var spells = [
			{name: 'Creeping Death (AoE)', lvl: 4, school: "Necromancy", img: '/img/043.jpg'}
			];
      
            
        var trackables = [
          {text: 'Attacks', count: 23},
          {text: 'Spells Cast', count: 14},
          {text: 'Items Looted', count: 11},
          {text: 'Damage Dealt', count: 121},
          {text: 'Damage Healed', count: 51}
          ];

		return {
			getAssets: getAssets,
			getBoards: getBoards,
			getCampaigns: getCampaigns,
			getCharacters: getCharacters,
            getDashIcons: getDashIcon,
            getEventList: getEventList,
			getItems: getItems,
            getNotificationList: getNotificationList, 
			getSpells: getSpells,
            getTrackables: getTrackables
		};
		
		function getAssets() {
			return assets;
		}
		
		function getBoards() {
			return boards;
		}
		
		function getCampaigns() {
			return campaigns;
		}
		
		function getCharacters() {
			return characters;
		}
      
        function getDashIcon() {
            return dashicons; 
        }
		
        function getEventList() {
            return eventlist; 
        }
		
		function getItems() {
			return items;
		}
		
		function getNotificationList() {
			return notificationlist;
		}
		
		function getSpells() {
			return spells;
		}
		
		function getTrackables() {
			return trackables;
		}
	}
	
}());