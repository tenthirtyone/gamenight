(function() {
	'use strict';

	angular.module('gamenight')
	.service('TabletopService', TabletopService);

	TabletopService.$inject = ['$rootScope'];

	function TabletopService($rootScope) {
		var savedCanvases = [];
		var gridSnap = true;
		var gridSize = 50;
		var showGrid = true;
		var snapGrid = true;
		var bgColor = "#efefef";
		var gridColor = "#333333";
		var images = [];
		var draggedImage = null;
		var selectedImage = {};
		
			return {
					saveCanvas: saveCanvas,
					savedCanvases: getSavedCanvases,
					restoreCanvas: restoreCanvas,
					removeCanvas: removeCanvas,
					boardExists: boardExists,
					getGridSize: getGridSize,
					setGridSize: setGridSize,
					showGrid: getShowGrid,
					snapGrid: getSnapGrid,
					toggleSnap: toggleSnapGrid,
					toggleGrid: toggleGrid,
					getBGColor: getBGColor,
					setBGColor: setBGColor,
					getGridColor: getGridColor,
					setGridColor: setGridColor,
					syncImages: syncImages,
					getImages: getImages,
					clearDraggedImage: clearDraggedImage,
					addDraggedImage: addDraggedImage,
					setDraggedImage: setDraggedImage,
				scopeApply: scopeApply,
				getSelectedImage: getSelectedImage,
				clearSelectedImage: clearSelectedImage
			};
			
			function clearSelectedImage() {
				selectedImage = {};	
				console.log('bleh');
			}

			function getSelectedImage() {
				return selectedImages;
			}
			
			function addDraggedImage() {
				console.log(draggedImage);
				if (draggedImage) {
					images.push({
						src: draggedImage.src,
						x: draggedImage.x,
						y: draggedImage.y,
						width: draggedImage.width,
						height: draggedImage.height
					});	
				}
				draggedImage = null;
			}
			
			function setDraggedImage(img) {
				console.log('wts');
				draggedImage = img;
			}
		
			function clearDraggedImage() {
				draggedImage = null;	
			}
		
			
			function syncImages(newImages) {
				images = newImages;
				$rootScope.$apply();
			}

			function getImages() {
				return images;	
			}

			function setGridColor(gColor) {
					gridColor = gColor;   
			}

			function getGridColor() {
					return gridColor;   
			}

			function getBGColor() {
					return bgColor;   
			}

			function setBGColor(BGColor) {
					bgColor = BGColor;
			}

			function getSnapGrid() {
					return snapGrid;   
			}
			function toggleSnapGrid() {
					snapGrid = !!!snapGrid;   
					return snapGrid;
			}        
			function toggleGrid() {
					showGrid = !!!showGrid;   
					return showGrid;
			}
			function getShowGrid() {
					return showGrid;
			}
		
			function scopeApply() {
				$rootScope.$apply();	
			}

			function getGridSize() {
					return gridSize;   
			}
			function setGridSize(gSize) {
					gridSize = gSize;
			}

			function boardExists(boardName) {
					return !!_.find(savedCanvases, function(item){
						 return item.boardName === boardName;
					});
			}

			function saveCanvas(boardName, config, objects) {
					console.log(objects);
					var board = {
							boardName: boardName,
							config: config,
							objects: objects};
					savedCanvases.push(board);
			}

			function getSavedCanvases() {
					return savedCanvases;   
			}

			function removeCanvas(boardName) {
							_.remove(savedCanvases, function(canvas) {
									return canvas.boardName == boardName;
							});
			}

			function restoreCanvas(index) {
					if (savedCanvases.length > 0) {
							return savedCanvases[index];   
					} else {
							return {
							bgColorSet: false,
							bgColor: "#ffffff",
							grid: false,
							gridColor: "#000000",                    
							gridSize: 50
							};   
					}
			}


	}


}());