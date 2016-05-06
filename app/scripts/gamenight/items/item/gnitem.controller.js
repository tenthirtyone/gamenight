(function() {
	'use strict';
	
	angular.module('gamenight.items.item')
	.controller('GNItemController', GNItemController);
	
	GNItemController.$inject = ['$window', 'GNItemsService', 'Upload'];
	
	function GNItemController($window, GNItemsService, Upload) {

		var vm = this;
		
		var visibleTiles = 6; 
		
		init();
		
		return {
			isTypeOf: isTypeOf,
			getItemModel: getItemModel,
			upload: upload
		};

		function isTypeOf(value) {
			return typeof(value);
		}
		
		function getItemModel(gameType, itemType) {
			return GNItemsService.getItemModel(gameType, itemType);	
		}

    function upload(file) {
        Upload.upload({
            url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
            data: {file: file}
        }).then(function (resp) {
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
					console.log(resp);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    };		
		
		function init() {
			
		};
	}
}());