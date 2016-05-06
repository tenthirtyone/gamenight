(function() {
	'use strict';
	angular
			.module('gamenight.dashboard')
			.run(appRun);

	appRun.$inject = ['routerHelper'];
	
	function appRun(routerHelper) {
			routerHelper.configureStates(getStates());
	}

	function getStates() {
			return [
					{
						state: 'gamenight.dashboard',
						config: {
							url: '/dashboard',
							controller: 'DashboardController',
							controllerAs: "dashboard",
							templateUrl: 'views/dashboard.html'
						}
					}
			];
	}
}());