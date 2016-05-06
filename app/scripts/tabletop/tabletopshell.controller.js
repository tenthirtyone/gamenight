(function() {
	'use strict';
	
	angular.module('gamenight')
	.controller('TabletopShellController', TabletopShellController);
	
	function TabletopShellController() {
		var vm = this;
		vm.collapseControls = false;
		
		vm.toggleCollapse = function() {
			console.log('toggleogggle');
			vm.collapseControls = !vm.collapseControls;
		};
	}
}());