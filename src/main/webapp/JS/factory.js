angular.module('app')
        .factory("fac", fac);


function fac(){
    
    var service ={
      getData: getData  
    };
    
    
    function getData(){
        return "Hello From Factory";
        
        // Remember to send promises back when Using http Like
        // return $http.get("api/watchflow/redcrooslevel"); 
        // And then in the Controller use:
        //  fac.getData()
        // .then(
//           function successCallback(res) {
//                    self.avalibleResources = res.data;
//        }, function errorCallBack(error){
//           console.log("Error in callback: " + error.code); 
//        });
        // 
    }
    
    return service;
    
}
