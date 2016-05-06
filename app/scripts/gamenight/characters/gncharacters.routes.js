(function() {
	'use strict';
	angular
			.module('gamenight.gncharacters')
			.run(appRun);

	appRun.$inject = ['routerHelper'];
	
	function appRun(routerHelper) {
			routerHelper.configureStates(getStates());
	}

	function getStates() {
			return [
					{
						state: 'gamenight.characters',
						config: {
							url: '/characters',
							controller: 'GNCharactersController',
							controllerAs: "channel",
							templateUrl: 'views/gnChannel.html'
						}
					}
			];
	}
}());