(function() {
	'use strict';
	
	angular.module('gamenight.dashboard')
	.service('GNCharactersService', GNCharactersService);
	
	function GNCharactersService() {

      var channelData = {
        title: 'Characters',
        buttons: [
          {text: 'Create New Character', sref: ''},
          {text: 'Create New CharacterTable', sref: ''}
        ],
        filters: [],
        data: [
			{name: 'SMASH', lvl: 4, description: 'SMASH is not a name, it is an eventuality for any one or thing remaining in this man\'s vicinity for too long. SMASH was raised by bears after his village was destroyed orc hordes. He is unable to speak or read and his childhood and teenage years were spent wrestling bears. Goblin poachers separated him from his usine family. Enraged, SMASH began a one-man war against all greenskins and can be found roaming mountainous territories by following the trail of crucified orc and goblin skulls.', class: "Barbarian", img: '/img/characters/barb00.jpg'},
			{name: 'Gronk', lvl: 9, description: 'Gronk the mad alchemist began life as a man. An addiction to chemicals and a short list of test subjects forced Gronk to test his terrible concoctions himself. ', class: "Mad Alchemist", img: '/img/characters/char00.jpg'},
			{name: 'Swon', lvl: 2, description: 'Swon the douche bag fighter. This douche bag fights douche bags as a fighter of douche bags.', class: "Fighter", img: '/img/characters/char01.jpg'},
			{name: 'Table: Army of Men', lvl: 3, description: 'Human fighters, rangers, barbarians between levels 1 and 5', img: '/img/characters/set00.jpg'}
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