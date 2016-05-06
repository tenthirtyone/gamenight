(function() {
	'use strict';
	
	angular.module('gamenight')
	.controller('BodyController', BodyController);
	
	function BodyController() {
		var body = document.getElementsByTagName('body')[0];	
		
		var baseDir = '/img/';
		
		function pad(n, width, z) {
			z = z || '0';
			n = n + '';
			return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
		}
		
		function getBgImg() {
			return pad((Math.floor(Math.random()*97)), 3) + '.jpg';	
		}
		
		function init() {
			if(!body.style.backgroundImage) {
				body.style.backgroundImage = 'url(' + baseDir + getBgImg() +')';
			}
		}
		
		init();	
	}
	
}());