(function() {
	'use strict';
	
	angular.module('tabletop.boards')
	.controller('BoardsController', BoardsController);
	
	function BoardsController() {
		var vm = this;
		
		console.log('Boards Loaded');
	}
}());