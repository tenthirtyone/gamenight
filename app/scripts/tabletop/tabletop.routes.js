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
						state: 'tabletop',
						config: {
							url: '/tabletop',
							controller: 'TabletopShellController',
							controllerAs: "tabletopShell",
							templateUrl: 'views/tabletop.html'
						}
					}
			];
	}
}());