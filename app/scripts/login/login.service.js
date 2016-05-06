(function() {
	'use strict';
	
	angular.module('gamenight.login')
	.service('LoginService', LoginService);
	
	LoginService.$inject = ['$http'];
	
	function LoginService($http) {
		return {
			login: login
		};
		
		function login() {
			return true;
		}
	}
	
}());