(function() {
	'use strict';
	
	angular.module('gamenight.gncampaigns')
	.controller('GNCampaignsController', GNCampaignsController);
	
	GNCampaignsController.$inject = ['$window', 'GNCampaignsService'];
	
	function GNCampaignsController($window, GNCampaignsService) {
      var vm = this;
      init();
      
      function init() {
        vm = GNCampaignsService.getChannelData();  
      }
      
      return vm;
	}
}());