(function() {
	'use strict';
	
	angular.module('agEnterkey')
	.directive('agEnterkey', agEnterkey);
	
	function agEnterkey() {
			return function (scope, element, attrs) {
				!!window.event.shiftKey;
					element.bind("keydown keypress", function (event) {
							if(event.which === 13 && !event.shiftKey) {
									scope.$apply(function (){
											scope.$eval(attrs.agEnterkey);
									});

									event.preventDefault();
							}
					});
			};
	};
}());