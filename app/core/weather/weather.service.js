'use strict';
angular.module('core.weather').service('cityService',['$resource', '$routeParams',
                        function($resource, $routeParams)
                        {
                          var self = this;
                          
                           self.mycity = 'parowa,pl';
                           self.dni =  3;
                           self.myobject = {objectis:'sdasdadasada'};
                          


                           self.GetCity = function(city, dni){
                              
                               var city3 = $resource(
                               'https://api.openweathermap.org/data/2.5/forecast?appid=ae789501c81d02f44f18b499731667bf',
                               {},
                               {query:{
                                  method:"GET",
                                  isArray:true}
                               });
                             
                               return city3.get({q:city, cnt:dni});
                           }
                           


                          self.GetDay = function(nr){
                              console.log("xxxxxxxxxxxxx");
                              console.log("my self.objext     is:" + self.myobject);
                              
                              var newcity = self.GetCity(self.mycity, self.dni);
                              console.log("to jest new city: "+ self.newcity);
                              var  myforecast = [];
                              try{
                                 for(let i = 0; i < newcity.lenght; i++){
                                    console.log(i);   
                                    if(newcity.list[i].dt == nr){
                                          myforecast  =  newcity.list[i];
                                          console.log("pętla");
                                          console.log("my self.objext.list[i] is:" + newcity.list[i]);
                                    }
                                    console.warn("my forecast is: " + myforecast);}
                              }
                              catch(ex){
                                 console.error("error przy tworzeniu my forecst: " + ex.message);
                              }
                              finally{
                                 console.info("finally return fomyforecast: " + myforecast);
                                 return myforecast;
                              }
                          }
                       }
                  ]
);




