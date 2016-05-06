(function() {
	'use strict';
	angular
			.module('gamenight.items.item')
			.run(appRun);

	appRun.$inject = ['routerHelper'];
	
	function appRun(routerHelper) {
			routerHelper.configureStates(getStates());
	}

	function getStates() {
			return [
					{
						state: 'gamenight.items.item',
						config: {
							url: '/item',
							controller: 'GNItemController',
							controllerAs: "gnitem",
							templateUrl: 'views/gnitem.html'
						}
					}
			];
	}
}());