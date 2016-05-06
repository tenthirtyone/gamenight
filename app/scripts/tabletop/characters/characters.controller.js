(function() {
	'use strict';
	
	angular.module('tabletop.characters')
	.controller('CharactersController', CharactersController);
	
	function CharactersController() {
		console.log('Characters Loaded');
	}
}());