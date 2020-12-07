'use strict';

angular.module('flynnthoughtsApp').directive("popupCarousel",
    function() {
        return {
            scope: {
                "options":"="
            },
            templateUrl: "directives/popup-carousel.html",
            link: function(e, t) {

            },
            controller:function($scope,$rootScope, $uibModal){

                var vm = this;

                var slides = $scope.slides = [];



                $scope.$watch('options',function(options){

                    $scope.slides = options.slides;


                });

                $scope.openModal = function(){
                    var modalInstance = $uibModal.open({
                        animation: $scope.animationsEnabled,
                        templateUrl: 'popopCarousel.html',
                        controller: function($scope, $uibModalInstance, slides, options){
                            $scope.myInterval = null;
                            $scope.noWrapSlides = false;
                            $scope.isSelected = true;
                            $scope.options = options;

                           $scope.$on('modal.closing',function(){
                              console.log("modal closing");
                           });
                            $scope.slides = slides;
                            $scope.cancel = function () {
                                $uibModalInstance.dismiss('cancel');
                                $scope.isSelected = false;
                            };
                        },
                        size: 'lg',
                        resolve: {
                            slides: function () {
                                return $scope.slides;
                            },
                            options: function () {
                                return $scope.options;
                            }
                        }
                    });
                    modalInstance.opened.then(function () {
                        $scope.isSelected = true;
                    }, function () {
                        $scope.isSelected = false;
                    });


                }


            },
            controllerAs:"vm"
        }

});