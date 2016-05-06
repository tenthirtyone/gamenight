(function() {
	'use strict';
	angular
			.module('gamenight.assets')
			.run(appRun);

	appRun.$inject = ['routerHelper'];
	
	function appRun(routerHelper) {
			routerHelper.configureStates(getStates());
	}

	function getStates() {
			return [
					{
						state: 'gamenight.assets',
						config: {
							url: '/assets',
							controller: 'GNAssetsController',
							controllerAs: "channel",
							templateUrl: 'views/gnChannel.html'
						}
					}
			];
	}
}());