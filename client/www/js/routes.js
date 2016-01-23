angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
    .state('rootMenu', {
      url: '/root-side-menu',
      abstract:true,
      templateUrl: 'templates/rootMenu.html'
    })
      
    
      
    .state('individualThreadView', {
      url: '/thread',
      abstract:true,
      templateUrl: 'templates/individualThreadView.html'
    })
      
    
      
        
    .state('rootMenu.groups', {
      url: '/groups',
      views: {
        'side-menu21': {
          templateUrl: 'templates/groups.html',
          controller: 'groupsCtrl'
        }
      }
    })
        
      
    
      
        
    .state('individualThreadView.chat', {
      url: '/thread-chat',
      views: {
        'tab2': {
          templateUrl: 'templates/chat.html',
          controller: 'chatCtrl'
        }
      }
    })
        
      
    
      
        
    .state('individualThreadView.payments', {
      url: '/thread-payments',
      views: {
        'tab3': {
          templateUrl: 'templates/payments.html',
          controller: 'paymentsCtrl'
        }
      }
    })
        
      
    
      
        
    .state('rootMenu.invites', {
      url: '/invites',
      views: {
        'side-menu21': {
          templateUrl: 'templates/invites.html',
          controller: 'invitesCtrl'
        }
      }
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/root-side-menu/groups');

});