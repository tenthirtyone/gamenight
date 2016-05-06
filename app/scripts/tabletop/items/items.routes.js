(function() {
	'use strict';
	angular
			.module('tabletop')
			.run(appRun);

	appRun.$inject = ['routerHelper'];
	
	function appRun(routerHelper) {
			routerHelper.configureStates(getStates());
	}

	function getStates() {
			return [
					{
						state: 'tabletop.items',
						config: {
							url: '/items',
							controller: 'ItemsController',
							controllerAs: "tabletop",
							templateUrl: 'views/items.html'
						}
					}
			];
	}
}());