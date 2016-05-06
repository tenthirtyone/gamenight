(function() {
	'use strict';
	angular
			.module('gamenight.spells')
			.run(appRun);

	appRun.$inject = ['routerHelper'];
	
	function appRun(routerHelper) {
			routerHelper.configureStates(getStates());
	}

	function getStates() {
			return [
					{
						state: 'gamenight.spells',
						config: {
							url: '/spells',
							controller: 'GNSpellsController',
							controllerAs: "channel",
							templateUrl: 'views/gnChannel.html'
						}
					}
			];
	}
}());