(function() {
	'use strict';
	angular
			.module('gamenight.items.table')
			.run(appRun);

	appRun.$inject = ['routerHelper'];
	
	function appRun(routerHelper) {
			routerHelper.configureStates(getStates());
	}

	function getStates() {
			return [
					{
						state: 'gamenight.items.table',
						config: {
							url: '/table',
							controller: 'NewItemTableController',
							controllerAs: "newitemtable",
							templateUrl: 'views/newitemtable.html'
						}
					}
			];
	}
}());