(function() {
	'use strict';
	angular
			.module('gamenight')
			.run(appRun);

	appRun.$inject = ['routerHelper'];
	
	function appRun(routerHelper) {
			routerHelper.configureStates(getStates());
	}

	function getStates() {
			return [
					{
						state: 'gamenight',
						config: {
							url: '/gamenight',
							controller: 'GamenightController',
							controllerAs: "gamenight",
							templateUrl: 'views/gamenight.html'							
						}
					}
			];
	}
}());