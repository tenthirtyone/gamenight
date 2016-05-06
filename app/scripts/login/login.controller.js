(function() {
	'use strict';
	
	angular.module('gamenight.login')
	.controller('LoginController', LoginController);
							
	LoginController.$inject = ['$state', 'LoginService'];
	
	function LoginController($state, LoginService) {
		var vm = this;
		vm.showLogin = true;
		
		vm.login = function(creds) {
			return LoginService.login(creds);
		};	
		
		function init() {	
			
			switch ($state.current.name) {
				case 'login':
					vm.showLink = 'register';
					vm.showLogin = true;
					break;
				case 'register':
					vm.showLink = 'login';
					vm.showLogin = false;
					break;
			}
		}
		
		init();
		
				
		
	}
}());