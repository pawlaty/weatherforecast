'use strict';
angular.module('weatherApp').config(
    ['$routeProvider', function config($routeProvider){
        $routeProvider
        
        .when('/',{template:'<home></home>'})

        .when('/forecast',{template:'<forecast></forecast>'})

        .when('/forecast/:days', {template:'<forecast></forecast>'})

        .when('/forecast-detail/:date',{template:'<weather-detail></weather-detail>'})

        .otherwise('/');
    }]
);