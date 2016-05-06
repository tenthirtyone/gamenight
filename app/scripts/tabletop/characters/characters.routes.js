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
						state: 'tabletop.characters',
						config: {
							url: '/characters',
							controller: 'CharactersController',
							controllerAs: "tabletop",
							templateUrl: 'views/characters.html'
						}
					}
			];
	}
}());