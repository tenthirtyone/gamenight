(function() {
	'use strict';
	
	angular.module('gamenight')
	.controller('SettingsController', SettingsController);
	
	SettingsController.$inject = ['$scope', 'TabletopService'];

	function SettingsController($scope, TabletopService) {
	var vm = this;
																
	vm.gridsize = 50;
	vm.bgColor = '#efefef';
	vm.gridColor = '#333333';
	vm.showGrid = true;
	vm.snapGrid = true;
	vm.gridscale = 5;
	
	vm.setDraggedImage = function(img) {
		TabletopService.setDraggedImage(img);
	};
	
	vm.selectImage = function(index) {
			console.log(index);
	};
	
	vm.testImages = function() {
		console.log('test');	
		console.log(TabletopService.clearSelectedImage());	
	};
	
	vm.images = TabletopService.getImages;

	vm.toggleSnap = function() {
		vm.snapGrid = TabletopService.toggleSnap();
	};
	vm.toggleGrid = function() {
		vm.showGrid = TabletopService.toggleGrid();
	};
		
	vm.setGridSize = function(gSize) {
		if (gSize < 4) {
			gSize = 4;
		}
		TabletopService.setGridSize(Number(gSize));
	};
		
	vm.setGridScale = function(gSize) {
		if (gSize < 4) {
			gSize = 4;
		}
		TabletopService.setGridSize(Number(gSize));
	};
		
	vm.setBGColor = function(bgColor) {
		TabletopService.setBGColor(bgColor);
	};
		
	vm.setGridColor = function(gridColor) {
		TabletopService.setGridColor(gridColor);
	};
		
	return vm;
}
}());