(function(){
    'use strict';
    angular.module('flynnthoughtsApp')
        .config(function ($stateProvider,$locationProvider, $urlRouterProvider) {

            var controllerDir = "controllers/";

            $stateProvider
                .state('Home', {
                    url: '/',
                    templateUrl: controllerDir + 'home/home.html?v=1',
                    controller: 'HomeCtrl as vm'
                })
                .state('About', {
                    url: '/about',
                    templateUrl: controllerDir + 'about/about.html?v=1',
                    controller: 'AboutCtrl as vm'
                });



            $urlRouterProvider.otherwise('/');

        });
})();