(function(){
    'use strict';

    angular
        .module('myApp', ['ui.router'])
        .config(function($urlRouterProvider, $stateProvider){

           $urlRouterProvider.otherwise('/search');

        	$stateProvider.state('search',{
        		url:'/search',
        		templateUrl: 'app/search/search.html',
        		controller:'MovieController as mCtrl'
        	})
        	.state('detail',{
        		url:'/detail/:movieId',
        		templateUrl: 'app/detail/detail.html',
        		controller:'MovieDetailController as detail'
        	});
        });

})

();