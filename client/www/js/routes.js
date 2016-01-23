angular.module('app.routes', ['app.services'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  
    .state('app', {
      abstract: true,
      url: '/app',
      templateUrl: 'templates/main.html',
    })
    
      
    .state('app.threads', {
      abstract: true,
      url: '/threads',
      views: {
        'sideMenu': {
          template: '<ion-nav-view></ion-nav-view>',
        }
      }
    })
      
    
      
        
    .state('app.threads.index', {
      url: '/',
      templateUrl: 'templates/threads.index.html',
      controller: 'threadsCtrl',
    })
        
      
    .state('app.threads.detail', {
      abstract: true,
      cache: false,
      url: '/:threadID',
      templateUrl: 'templates/threads.detail.html',
      controller: 'threadCtrl',
      resolve: {
        thread: function($stateParams, ThreadsService) {
          console.log('detail', $stateParams);
          return ThreadsService.getThread($stateParams.threadID);
        }
      }
    })
      
        
    .state('app.threads.detail.chat', {
      url: '/chat',
      cache: false,
      views: {
        'chatTab': {
          templateUrl: 'templates/chat.html',
          controller: 'chatCtrl'
        }
      },
      resolve: {
        messages: function($stateParams, ChatsService) {
          console.log('detail', $stateParams);
          return ChatsService.getMessages($stateParams.threadID);
        }
      }
    })
        
      
    
      
        
    .state('app.threads.detail.payments', {
      url: '/payments',
      cache: false,
      views: {
        'paymentsTab': {
          templateUrl: 'templates/payments.html',
          controller: 'paymentsCtrl'
        }
      },
      resolve: {
        payments: function($stateParams, PaymentsService) {
          console.log('detail', $stateParams);
          return PaymentsService.getPayments($stateParams.threadID);
        }
      }
    })
        
      
    
      
        
    .state('app.invites', {
      url: '/invites',
      views: {
        'sideMenu': {
          templateUrl: 'templates/invites.html',
          controller: 'invitesCtrl'
        }
      }
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/threads/');

});