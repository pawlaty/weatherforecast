'use strict';
angular.module('weatherDetail').component(
    'weatherDetail',{
        templateUrl:'weather-detail/weather-detail.template.html',
        controller:['$scope',
                    '$log',
                    '$routeParams',
                    'cityService', 
                    function DetailController($scope,$log,$routeParams,cityService){
                    
                    $scope.day = $routeParams.date;  
                    $scope.myCity = cityService.GetDay($scope.day); 
                    $log.log("$scope.day is:" + $scope.day);   
                    $log.log("$scope.city is:" + $scope.myCity);   
                     
        }]
    }
);