'use strict';

angular.module('flynnthoughtsApp', [
    'ui.bootstrap',
    'ngAnimate',
    'ui.router'
])
    .config(function ($httpProvider,  $sceDelegateProvider) {

        $sceDelegateProvider.resourceUrlWhitelist([
            // Allow same origin resource loads.
            'self',
            // Allow loading from our assets domain.  Notice the difference between * and **.
            'https://www.youtube.com/**'
        ]);
    }).run(function($rootScope, $window, $location) {
        // when the page refreshes, check if the user is already logged in
       // AuthenticationFactory.check();

        //$rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
        //    if ((nextRoute.access && nextRoute.access.requiredLogin) && !AuthenticationFactory.isLogged) {
        //        $location.path("/login");
        //    } else {
        //        // check if user object exists else fetch it. This is incase of a page refresh
        //        if (!AuthenticationFactory.user) AuthenticationFactory.user = $window.sessionStorage.user;
        //        if (!AuthenticationFactory.userRole) AuthenticationFactory.userRole = $window.sessionStorage.userRole;
        //    }
        //});
        //
        //$rootScope.$on('$routeChangeSuccess', function(event, nextRoute, currentRoute) {
        //    $rootScope.showMenu = AuthenticationFactory.isLogged;
        //    $rootScope.role = AuthenticationFactory.userRole;
        //    // if the user is already logged in, take him to the home page
        //    if (AuthenticationFactory.isLogged == true && $location.path() == '/login') {
        //        $location.path('/');
        //    }
        //});
    });

angular.isUndefinedOrNull = function(val) {
    return angular.isUndefined(val) || val === null
};
