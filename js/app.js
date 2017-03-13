(function(){

     var app = angular.module('crmApp',['ngRoute']);

     app.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider){

         $routeProvider
             .when('/clients',{
                 controller:'ClientsController',
                 templateUrl:'views/clients-list.html'
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

        $http.get('http://localhost/api.php/users').then(function(result){
            $scope.use = result.data;
            
            console.log( $scope.use)
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




})();