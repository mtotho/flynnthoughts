(function(){
    'use strict';
    angular.module('flynnthoughtsApp')
        .config(function ($stateProvider,$locationProvider, $urlRouterProvider) {

            var controllerDir = "src/controllers/";

            $stateProvider
                .state('Home', {
                    url: '/',
                    templateUrl: controllerDir + 'home/home.html?v=1',
                    controller: 'HomeCtrl as vm'
                });



            $urlRouterProvider.otherwise('/');

        });
})();