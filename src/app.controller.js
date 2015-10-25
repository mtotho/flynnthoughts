'use strict';

angular.module('flynnthoughtsApp')
    .controller('AppCtrl', function ($rootScope,$scope,$state) {
        var vm=this;

        vm.selectedTab = 0;


        $rootScope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {

            vm.currentState = toState.name;
            console.log(vm.currentState);


        });


        vm.footerCircles = [
                "EFDA9B","5A5538","EFEACA","C8CBA0","8B9E88","929F98","033C4F","27778E","596573","423D41","D0D5D8","4E3555","DE8581","905545","8B5D2C","EFECD9","AC6A6E","887F78","D1BAA9","886348","7F6D57","54483A","C6BFAD","AEA69B","949494",

            "F1E7CC","E0CA90","8EAE62","C3BEA0","AAB7A6","BCC3BB","44656E","3A96A1","A3B2B9","608FC3","605B61","706279","773A37","B46C5E","AC7242","AC9E83","583030","D6CCC0","5E3C30","CEC1B0","958470","BFB7A4","B3AC9A","918A80","B1ADA4",

            "BB901F","D8BE71","B1BD4D","959677","DDE0CD","B7C6BF","759F9B","84A2AD","B8CFD5","4F729A","938A8D","392A31","964645","BE7C66","E9CBA7","CBC1A6","693B3D","C6B8AD","8B6F63","E8DFD0","E0D1BA","D7CCBA","837B6E","9E978D","D5D1C5",

            "D6B882","967E39","CAC082","9CA475","ACAF92","717D7B","7FB7AC","3A6C8D","9AC1D0","404445","54628F","6B5F6B","B1645E","D7977B","DAAF85","6D5E4B","CBBD98","BCA9A3","D5D1C8","BA9C82","635042","4F443E","E7E1D1","87837A","CCCECB"

        ];

    });

