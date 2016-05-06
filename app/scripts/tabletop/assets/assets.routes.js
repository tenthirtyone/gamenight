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
						state: 'tabletop.assets',
						config: {
							url: '/assets',
							controller: 'AssetsController',
							controllerAs: "tabletop",
							templateUrl: 'views/assets.html'
						}
					}
			];
	}
}());