(function() {
	'use strict';
	angular
			.module('gamenight.items')
			.run(appRun);

	appRun.$inject = ['routerHelper'];
	
	function appRun(routerHelper) {
			routerHelper.configureStates(getStates());
	}

	function getStates() {
			return [
					{
						state: 'gamenight.items',
						config: {
							url: '/items',
							controller: 'GNItemsController',
							controllerAs: "items",
							templateUrl: 'views/gnitems.html'
						}
					}
			];
	}
}());