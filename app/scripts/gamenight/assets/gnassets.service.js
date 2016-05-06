(function() {
	'use strict';
	
	angular.module('gamenight.assets')
	.service('GNAssetsService', GNAssetsService);
	
	function GNAssetsService() {

      var channelData = {
        title: 'Characters',
        buttons: [
          {text: 'Create New Asset', sref: ''},
          {text: 'Create New Asset Table', sref: ''}
        ],
        filters: [],
        data: [
          {name: 'Barrel', description: 'Barrel Object', img: '/img/assets/asset00.jpg'}
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