angular.module('app.controllers', ['app.services'])
        
.controller('threadsCtrl', function($scope, ThreadsService) {
    console.log('using threadsCtrl');
    $scope.threads = ThreadsService.getThreads();
})

.controller('threadCtrl', function ($scope, thread) {
    $scope.thread = thread;
    console.log('thread detail', thread);
})
   
.controller('chatCtrl', function($scope, thread, messages) {
    $scope.messages = messages;
    console.log('chat thread detail', messages);
})
   
.controller('paymentsCtrl', function($scope, thread, payments) {
    $scope.payments = payments;
    console.log('payments thread detail', payments);
})
   
.controller('invitesCtrl', function($scope) {

})
