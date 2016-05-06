(function() {
	'use strict';
	
	angular.module('gamenight')
	.controller('GamenightController', GamenightController);
	
	GamenightController.$inject = ['$scope', 'GamenightService'];
	
	function GamenightController($scope, GamenightService) {
		var vm = this;
		vm.showUI = true;
		var showprofilemenu = false;
		var showsidebar = true;
		
        vm.Icons = function() {
          return GamenightService.getIconData(); 
        }
      
		vm.toggleUI = function() {
			vm.showUI = !vm.showUI;
			console.log(vm.showUI);
			return vm.showUI;
		}
		
		vm.toggleSidebar = function() {
			showsidebar = !showsidebar;
			return showsidebar;
		}
		
		vm.showSidebar = function() {
			return showsidebar;	
		}
				
				
		vm.toggleSideMenu = function() {
			showprofilemenu = !showprofilemenu;
			return showprofilemenu;
		}
		

		vm.showProfileMenu = function() {
			return showprofilemenu;	
		}
		
		return vm;
		
	}
}());