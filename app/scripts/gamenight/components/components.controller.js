(function() {
	'use strict';
	
	angular.module('components')
	.controller('ComponentsController', ComponentsController);
	
	ComponentsController.$inject = ['$scope', 'routerHelper'];
	
	function ComponentsController($scope, routerHelper) {
      var vm = this;
      
      vm.icondata = [
        {text: 'Dashboard', sref: 'gamenight.dashboard', icon: 'fa fa-home fa-2x'},
        {text: 'Campaigns', sref: 'gamenight.campaigns', icon: 'fa fa-beer fa-2x'},
        {text: 'Characters', sref: 'gamenight.characters', icon: 'fa fa-user fa-2x'},
        {text: 'Items', sref: 'gamenight.items.list', icon: 'fa fa-shield fa-2x'},
        {text: 'Maps', sref: 'gamenight.maps', icon: 'fa fa-map fa-2x'},
        {text: 'Assets', sref: 'gamenight.assets', icon: 'fa fa-tree fa-2x'}
        ]; 
      
      vm.channelbuttondata = [
          {text: 'Create New Character', sref: ''},
          {text: 'Create New CharacterTable', sref: ''}
        ],
        
      vm.channeltitledata = {text: 'Characters'};
      
      vm.dashicondata = [
        {text: 'Campaigns', sref: 'gamenight.campaigns', count: 3},
        {text: 'Characters', sref: 'gamenight.characters', count: 4},
        {text: 'Items', sref: 'gamenight.items.list', count: 1},
        {text: 'Maps', sref: 'gamenight.maps', count: 1},
        {text: 'Assets', sref: 'gamenight.assets', count: 1}
        ]; 
      
      vm.displayboxdata = [
        { gameModuleId: 'dnd5e', name: 'Parlay', description: 'This master debator improves your chances to win verbal exchanges given the weilder a bonus to intimidation. This is just bullshit text to fill out the box and test overflow', img: '/img/items/item00.jpg'}
        ];
      
      vm.notificationlist = {
        title: 'Recent Notifications',
        lineitems: [
          {id: 0, img: '/img/profile-pics/1.jpg', timestamp: '2 Hours ago', text: 'Paw of opalla'},
          {id: 1, img: '/img/profile-pics/2.jpg', timestamp: '12 Hours ago', text: 'kobold racks a kill'},
          {id: 2, img: '/img/profile-pics/3.jpg', timestamp: 'Yesterday', text: 'slash'},
          {id: 3, img: '/img/profile-pics/4.jpg', timestamp: 'Last Week', text: 'the the hall of truth'},
          {id: 4, img: '/img/profile-pics/5.jpg', timestamp: 'One month ago', text: 'bookin down freeport'}
          ],
        sref: 'notifications'
        };
      
      vm.trackabledata = [
        {text: 'Attacks', count: 23},
        {text: 'Spells Cast', count: 14},
        {text: 'Items Looted', count: 11},
        {text: 'Damage Dealt', count: 121},
        {text: 'Damage Healed', count: 51}
        ];
      
      return this;
		
	}
}());