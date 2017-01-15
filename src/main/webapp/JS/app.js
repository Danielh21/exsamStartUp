var app = angular.module("app", []);


app.controller("indexCtrl", function ($http) {

    var self = this;

    self.hello = "Hello World";
//   self.rest = rest;
//   
//   self.rest();


    //Rest Call
//    function rest() {
//        $http({
//            method: 'GET',
//            url: '/someUrl'
//        }).then(function successCallback(response) {
//            var g = response.data;
//        }, function errorCallback(response) {
//            console.log("Error");
//        });
//    }

});


