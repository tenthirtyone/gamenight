(function() {
	'use strict';
	angular
			.module('gamenight.gncampaigns')
			.run(appRun);

	appRun.$inject = ['routerHelper'];
	
	function appRun(routerHelper) {
			routerHelper.configureStates(getStates());
	}

	function getStates() {
			return [
					{
						state: 'gamenight.campaigns',
						config: {
							url: '/campaigns',
							controller: 'GNCampaignsController',
							controllerAs: "channel",
							templateUrl: 'views/gnChannel.html'
						}
					}
			];
	}
}());