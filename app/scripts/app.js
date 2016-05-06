(function() {
    'use strict';
    
    angular.module('gamenight', [
		
			'gamenight.login',
			'gamenight.dashboard',
			'gamenight.gncharacters',
			'gamenight.gncampaigns',
			'gamenight.items',
			'gamenight.spells',
			'gamenight.maps',
			'gamenight.assets',
			//'gamenight.modules',
            'components',      
			'tabletop',
			'utility',
		
			'ui.router',
			'ui.bootstrap'
		]);
    
   
}());