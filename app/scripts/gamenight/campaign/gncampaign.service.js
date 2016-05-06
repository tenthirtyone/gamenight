(function() {
	'use strict';
	
	angular.module('gamenight.gncampaigns')
	.service('GNCampaignsService', GNCampaignsService);
	
	function GNCampaignsService() {

      var channelData = {
        title: 'Characters',
        buttons: [
          {text: 'Create New Campaign', sref: ''}
        ],
        filters: [],
        data: [
			{name: 'Hoy Yotodventure', description: '5th Edition DND in an Eastern setting. During winter months, the monks of Shang Li Monastery experience 40 straight days of night. Each fall, the monks prepare the monastery for defense against the evils that walk the surface, beckoned from their dark holes by the long period darkness. ', img: '/img/campaigns/camp00.jpg', dm: false},
			{name: 'Copyright 2063', description: '5th Edition Shadowrun campaign. The players wake up from cryogenic sleep and suffer from amnesia. On the back of each of their necks is an barcode and the inscription \'Copyright 2063\'.', img: '/img/campaigns/camp01.jpg', dm: false},
			{name: 'The Potosio', description: '5th Edition DnD campaign. Player Characters are OP as fuck, cruisin\' around killing everything, stealing everything, selling everything and establishing a new pirate city.', img: '/img/campaigns/camp02.jpg', dm: true}
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