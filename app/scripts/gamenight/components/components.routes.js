(function() {
	'use strict';
	angular
			.module('components')
			.run(appRun);

	appRun.$inject = ['routerHelper'];
	
	function appRun(routerHelper) {
			routerHelper.configureStates(getStates());
	}

	function getStates() {
			return [
					{
						state: 'components',
						config: {
							url: '/components',
							controller: 'ComponentsController',
							controllerAs: "components",
							templateUrl: 'views/components.html'							
						}
					}
			];
	}
}());