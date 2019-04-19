'use strict';
angular.module('forecast').component(
    'forecast',{
        templateUrl:'forecast/forecast.template.html',
        controller: ['$scope',
                     '$routeParams',
                     'cityService',
                      function ForecastController($scope,$routeParams,cityService){

                        $scope.samplecity = cityService.mycity;
                        $scope.$watch('samplecity', function(){                         
                          cityService.mycity = $scope.samplecity;
                        });

                        
                        $scope.days = $routeParams.days;
                        $scope.$watch('days', function(){
                          cityService.dni = $scope.days;
                        });

                                                
                        $scope.city_object = cityService.GetCity($scope.samplecity, $scope.days);
                        console.log("this is city3 in service : " + $scope.city_object);
                        $scope.$watch('city_object', function(){
                          cityService.myobject = $scope.city_object;
                          console.log("zmiana my object in service wynosi teraz: " + $scope.city_object);
                         
                        });
                       

 

                        $scope.ConvertToDate = function(dt){
                          return new Date(dt);
                        };

                        $scope.ConvertToFaranheith = function(tmp){
                          return Math.round( (1.8*(tmp - 273))+32);
                        };

                        $scope.ConvertToCelc = function(tmp){
                          return Math.round(tmp -273);
                        }



                      }
                    ]
    }
);