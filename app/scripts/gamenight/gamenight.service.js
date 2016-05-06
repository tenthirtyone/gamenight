(function() {
  'use strict';
  angular.module('gamenight')
  .service('GamenightService', GamenightService);
  
  function GamenightService() {
    
    var icondata = [
        {text: 'Dashboard', sref: 'gamenight.dashboard', icon: 'fa fa-home fa-2x'},
        {text: 'Campaigns', sref: 'gamenight.campaigns', icon: 'fa fa-beer fa-2x'},
        {text: 'Characters', sref: 'gamenight.characters', icon: 'fa fa-user fa-2x'},
        {text: 'Items', sref: 'gamenight.items.list', icon: 'fa fa-shield fa-2x'},
        {text: 'Spells', sref: 'gamenight.spells', icon: 'fa fa-magic fa-2x'},
        {text: 'Maps', sref: 'gamenight.maps', icon: 'fa fa-map fa-2x'},
        {text: 'Assets', sref: 'gamenight.assets', icon: 'fa fa-tree fa-2x'}
        ];
    
    return {
      getIconData: getIconData 
    }
    
    function getIconData() {
      return icondata;
    };
    
  };
}());