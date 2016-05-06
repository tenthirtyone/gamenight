(function() {
	'use strict';
	
	angular.module('gamenight.maps')
	.service('GNMapsService', GNMapsService);
	
	function GNMapsService() {

      var channelData = {
        title: 'Characters',
        buttons: [
          {text: 'Create New Map', sref: ''},
          {text: 'Create New Map Collection', sref: ''}
        ],
        filters: [],
        data: [
			{name: 'Red Cutter', description: 'Boat Battlemap', img: '/img/maps/map00.jpg'}
			]
      }

      return {
          getChannelData: getChannelData
		};
      
      function getChannelData() {
          return channelData;
        }
	}
	
}());