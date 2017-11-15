'use strict';

// Configuring the Articles module
angular.module('learn_more').run(['menuService',
  function (Menus) {
    // Add the remote dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Learn More',
      state: 'learn_more',
      roles: ['*']
    });
  }
]);
