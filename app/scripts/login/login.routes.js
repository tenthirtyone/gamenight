(function() {
	'use strict';
	angular
			.module('gamenight.login')
			.run(appRun);

	appRun.$inject = ['routerHelper'];
	
	function appRun(routerHelper) {
			routerHelper.configureStates(getStates());
	}

	function getStates() {
			return [
					{
						state: 'login',
						config: {
							url: '/login',
							controller: 'LoginController',
							controllerAs: "login",
							templateUrl: 'views/login.html'
						}
					},
					{
						state: 'register',
						config: {
							url: '/register',
							controller: 'LoginController',
							controllerAs: "login",
							templateUrl: 'views/login.html'
						}
					}
			];
	}
}());