(function(){

     var app = angular.module('crmApp',['ngRoute']);

     app.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider){

         $routeProvider
             .when('/clients',{
                 controller:'ClientsController',
                 templateUrl:'views/clients-list.html'
             })
             .when('/clients/:clientId',{
                 controller:'ClientDetailCtrl',
                 templateUrl:'views/sectors-list.html'
             })
             .when('/sectors',{
                 templateUrl:'views/sectors-list.html'
             })
             .when('/users',{
                 templateUrl:'views/users-list.html'
             })
             .otherwise({
                redirectTo:'/clients'

         });


         $locationProvider
             .html5Mode(true);
        }]);

    app.controller('ClientsController',['$scope','$http',function($scope,$http)
    {
        $scope.clients=[];
        $scope.orderBycolumn = 'id';
        $scope.orderByDir = false;
        $scope.filterBy ={};

        $http.get('data/clients.json').then(function(result){
            $scope.users = result.data;
        });

        $http.get('data/sectors.json').then(function(result){
            $scope.sectors = result.data;
        });

        $http.get('data/users.json').then(function(result){
            $scope.names = result.data;


        });

        $scope.changeOrder = function(columnName){

            if($scope.orderBycolumn == columnName){
                $scope.orderByDir =! $scope.orderByDir
            }else{
                $scope.orderBycolumn = columnName;
                $scope.orderByDir =false;

            }
        }


    }])

    app.controller('ClientDetailCtrl',['$scope',function($scope){



      }])



})();