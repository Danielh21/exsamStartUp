angular.module('app')
        .controller("indexCtrl", indexctrl);


function indexctrl (fac, $http) {

    var self = this;

    self.hello = fac.getData();
    
    
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

};

