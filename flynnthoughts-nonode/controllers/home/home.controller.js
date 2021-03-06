'use strict';

angular.module('flynnthoughtsApp')
    .controller('HomeCtrl', function ($scope, $state) {
        //
        var vm = this;

        vm.PopupModalOptions = {
            "lambertvillehome":{
                "alignment":"vertical",
                thumbnail:{
                    "path":"assets/lambertvillehome/thumb-lambertvillehome.png"

                },
                slides:[
                    {
                        "path":"assets/lambertvillehome/lambertvillehome01.jpg",
                        "text":""
                    },
                    {
                        "path":"assets/lambertvillehome/lambertvillehome02.jpg",
                        "text":""
                    },
                    {
                        "path":"assets/lambertvillehome/lambertvillehome03.jpg",
                        "text":""
                    },
                    {
                        "path":"assets/lambertvillehome/lambertvillehome04.jpg",
                        "text":""
                    }
                ]
            },
            "cabinlife":{
                "alignment":"vertical",
                thumbnail:{
                    "path":"assets/Cabin Life/thumbail-Cabin Life.png"

                },
                slides:[
                    {
                        "path":"assets/Cabin Life/Cabin Life.001.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Cabin Life/Cabin Life.002.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Cabin Life/Cabin Life.003.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Cabin Life/Cabin Life.004.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Cabin Life/Cabin Life.005.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Cabin Life/Cabin Life.006.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Cabin Life/Cabin Life.007.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Cabin Life/Cabin Life.008.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Cabin Life/Cabin Life.009.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Cabin Life/Cabin Life.010.jpeg",
                        "text":""
                    },
                    {
                        "embedurl":"https://www.youtube.com/embed/3_ZTWDWG9Ww?list=PLz4sItd-HzNI2xpgcTdedVoEpgBO84l8F",
                        "referencesize":"assets/Cabin Life/Cabin Life.010.jpeg"
                    }
                ]
            },
            "familyroom":{
                "alignment":"vertical",
                thumbnail:{
                    "path":"assets/Family Room/thumbail-Family Room.png"

                },
                slides:[
                    {
                        "path":"assets/Family Room/Family Room.001.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Family Room/Family Room.002.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Family Room/Family Room.003.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Family Room/Family Room.004.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Family Room/Family Room.005.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Family Room/Family Room.006.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Family Room/Family Room.007.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Family Room/Family Room.008.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Family Room/Family Room.009.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Family Room/Family Room.010.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Family Room/Family Room.011.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Family Room/Family Room.012.jpeg",
                        "text":""
                    }
                ]
            },
            "flynnsflowers":{
                "alignment":"vertical",
                thumbnail:{
                    "path":"assets/FlynnsFlowers/thumbail-Flynn's Flowers.png"

                },
                slides:[
                    {
                        "path":"assets/FlynnsFlowers/Flynn's Flowers.001.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/FlynnsFlowers/Flynn's Flowers.002.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/FlynnsFlowers/Flynn's Flowers.003.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/FlynnsFlowers/Flynn's Flowers.004.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/FlynnsFlowers/Flynn's Flowers.005.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/FlynnsFlowers/Flynn's Flowers.006.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/FlynnsFlowers/Flynn's Flowers.007.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/FlynnsFlowers/Flynn's Flowers.008.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/FlynnsFlowers/Flynn's Flowers.009.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/FlynnsFlowers/Flynn's Flowers.010.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/FlynnsFlowers/Flynn's Flowers.011.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/FlynnsFlowers/Flynn's Flowers.012.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/FlynnsFlowers/Flynn's Flowers.013.jpeg",
                        "text":""
                    },
                    {
                        "referencesize": "assets/FlynnsFlowers/Flynn's Flowers.013.jpeg",
                        "embedurl":"https://www.youtube.com/embed/5TC4YEFdUac?list=PLz4sItd-HzNI2xpgcTdedVoEpgBO84l8F"
                    }
                ]
            },
            "greenvelvets":{
                "alignment":"vertical",
                thumbnail:{
                    "path":"assets/Green Velvets/thumbail-Green Velvets.png"

                },
                slides:[
                    {
                        "path":"assets/Green Velvets/Green Velvets.001.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Green Velvets/Green Velvets.002.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Green Velvets/Green Velvets.003.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Green Velvets/Green Velvets.004.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Green Velvets/Green Velvets.005.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Green Velvets/Green Velvets.006.jpeg",
                        "text":""
                    }
                ]
            },
            "homeoffice":{
                "alignment":"vertical",
                thumbnail:{
                    "path":"assets/Home Office/thumbail-Home Office.png"

                },
                slides:[
                    {
                        "path":"assets/Home Office/Home Office .001.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Home Office/Home Office .002.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Home Office/Home Office .003.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Home Office/Home Office .004.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Home Office/Home Office .005.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Home Office/Home Office .006.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Home Office/Home Office .007.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Home Office/Home Office .008.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Home Office/Home Office .009.jpeg",
                        "text":""
                    },
                    {
                        "referencesize":"assets/Home Office/Home Office .009.jpeg",
                        "embedurl":"https://www.youtube.com/embed/dPDtllPPuR4?list=PLz4sItd-HzNI2xpgcTdedVoEpgBO84l8F"
                    }
                ]
            },
            "pinkdetails":{
                "alignment":"vertical",
                thumbnail:{
                    "path":"assets/Pink Details/thumbail-Pink Details.png"

                },
                slides:[
                    {
                        "path":"assets/Pink Details/Pink Details.001.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Pink Details/Pink Details.002.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Pink Details/Pink Details.003.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Pink Details/Pink Details.004.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Pink Details/Pink Details.005.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Pink Details/Pink Details.006.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Pink Details/Pink Details.007.jpeg",
                        "text":""
                    },
                    {
                        "path":"assets/Pink Details/Pink Details.008.jpeg",
                        "text":""
                    }
                ]
            },
            "shadesofgrey":{
                "alignment":"vertical",
                thumbnail:{
                    "path":"assets/shadesofgrey/thumbail-shadesofgrey.png"

                },
                slides:[
                    {
                        "path":"assets/shadesofgrey/shadesofgrey01.jpg",
                        "text":""
                    },
                    {
                        "path":"assets/shadesofgrey/shadesofgrey02.jpg",
                        "text":""
                    },
                    {
                        "path":"assets/shadesofgrey/shadesofgrey03.jpg",
                        "text":""
                    },
                    {
                        "path":"assets/shadesofgrey/shadesofgrey04.jpg",
                        "text":""
                    },
                    {
                        "path":"assets/shadesofgrey/shadesofgrey05.jpg",
                        "text":""
                    }
                ]
            }


        };


    });

