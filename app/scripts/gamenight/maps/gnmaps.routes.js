(function() {
	'use strict';
	angular
			.module('gamenight.maps')
			.run(appRun);

	appRun.$inject = ['routerHelper'];
	
	function appRun(routerHelper) {
			routerHelper.configureStates(getStates());
	}

	function getStates() {
			return [
					{
						state: 'gamenight.maps',
						config: {
							url: '/map',
							controller: 'GNMapsController',
							controllerAs: "channel",
							templateUrl: 'views/gnChannel.html'
						}
					}
			];
	}
}());