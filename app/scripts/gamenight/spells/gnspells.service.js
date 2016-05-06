(function() {
	'use strict';
	
	angular.module('gamenight.spells')
	.service('GNSpellsService', GNSpellsService);
	
	function GNSpellsService() {

      var channelData = {
        title: 'Characters',
        buttons: [
          {text: 'Create New Spell', sref: ''},
          {text: 'Create New Spell Table', sref: ''}
        ],
        filters: [],
        data: [
			{name: 'Multi-Fireball', description: '5th Edition DnD Evocation spell. Each HD in the Fireball spell becomes a separate, smaller, fireball. Each miniature fireball deals 1d4 splash damage in a 5ft radius.', img: '/img/spells/spell00.jpg'}
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