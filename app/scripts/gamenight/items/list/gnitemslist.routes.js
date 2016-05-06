(function() {
	'use strict';
	angular
			.module('gamenight.items.list')
			.run(appRun);

	appRun.$inject = ['routerHelper'];
	
	function appRun(routerHelper) {
			routerHelper.configureStates(getStates());
	}

	function getStates() {
			return [
					{
						state: 'gamenight.items.list',
						config: {
							url: '/list',
							controller: 'GNItemsListController',
							controllerAs: "itemslist",
							templateUrl: 'views/gnitemslist.html'
						}
					}
			];
	}
}());