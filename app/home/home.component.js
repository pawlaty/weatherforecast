'use strict';
angular.module('home').component(
    'home',{
        templateUrl:'home/home.template.html',
        controller: ['$scope',
                     '$location',
                     'cityService',
                     function HomeController($scope,$location,cityService){

                          $scope.city = cityService.mycity;
                          $scope.$watch('city', function(){
                              cityService.mycity = $scope.city;
                          });

                          $scope.dni =  3 ;
                          $scope.$watch('dni', function(){
                            cityService.dni = $scope.dni ;
                          });
                         

                          $scope.submit = function(){  
                              $location.path('/forecast/' + $scope.dni);
                          };
                          
                        }]
        }
); 