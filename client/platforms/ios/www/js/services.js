var threads={somehash:{id:"somehash",name:"Yosemite Trip",description:"We dem boyz ayyyy",imageUrl:"http://placehold.it/300x300"},somehash2:{id:"somehash2",name:"House of Flying Teaspoons",description:"Rent and stuff",imageUrl:"http://placehold.it/300x300"}},payments={paymentId1:{threadID:"somehash",amount:349.67,metadata:{payee:"BOOTS COVENT GARDEN"}}},chats={somehash:{messages:[{sender:{id:1,name:"Ben",imageUrl:"http://placehold.it/150x150"},body:"Yo, lets do this ting",time_sent:"19:37"},{sender:{id:2,name:"Drake",imageUrl:"http://placehold.it/150x150"},body:"I know when that hotline bling",time_sent:"19:39"}]},somehash2:{messages:[{sender:{id:1,name:"Ben",imageUrl:"http://placehold.it/150x150"},body:"Ya'll owe me rent",time_sent:"16:42"},{sender:{id:3,name:"Esteban Winsmore",imageUrl:"http://placehold.it/150x150"},body:"This is a wonderful home",time_sent:"16:43"}]}};angular.module("app.services",[]).factory("ThreadsService",[function(){return{getThreads:function(){return threads},getThread:function(e){return threads[e]}}}]).factory("PaymentsService",[function(){return{getPayments:function(e){return"somehash"===e?[payments.paymentId1]:[]},getPayment:function(e){return payments[e]}}}]).factory("ChatsService",[function(){return{getMessages:function(e){return chats[e]?chats[e].messages:[]}}}]);