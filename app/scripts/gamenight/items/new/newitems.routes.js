(function() {
	'use strict';
	angular
			.module('gamenight.items.new')
			.run(appRun);

	appRun.$inject = ['routerHelper'];
	
	function appRun(routerHelper) {
			routerHelper.configureStates(getStates());
	}

	function getStates() {
			return [
					{
						state: 'gamenight.items.new',
						config: {
							url: '/new',
							controller: 'NewItemsController',
							controllerAs: "newitems",
							templateUrl: 'views/newitems.html'
						}
					}
			];
	}
}());