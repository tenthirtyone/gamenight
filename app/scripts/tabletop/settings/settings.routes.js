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
						state: 'tabletop.settings',
						config: {
							url: '/settings',
							controller: 'SettingsController',
							controllerAs: "tabletop",
							templateUrl: 'views/settings.html'
						}
					}
			];
	}
}());