var appMod = angular.module('MyApp', ['ui.router'])
appMod.controller('MainController', ['$scope', '$state', function ($scope, $state) {
        console.log('init ctrl');
        $scope.menuState = {show: false}
        $scope.currentType = $state.current.name.split('.')[1];
        $scope.changeTab = function (type) {
            $scope.currentType = type;
            if ($scope.currentType == "trainOrderInfo" || $scope.currentType == "airOrderInfo") {
                $scope.menuState = {show: true}
            } else {
                $scope.menuState = {show: false}
            }
        };
        $scope.changeTabList = function () {
            $scope.menuState.show = !$scope.menuState.show;
        };
    }])
appMod.run(['$state', function ($state) {
//		$state.go('app.home');
    }])
appMod.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/app/customer");
        $stateProvider.state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "app/app.html",
            controller: 'MainController'
        })
            .state('app.customer', {
                url: "/customer",
                templateUrl: "app/components/customer.html",
                resolve:{
                    delay: function($q) {
                        var delay = $q.defer(),
                            load = function(){
                                $.getScript('assets/js/comment.js',function(){
                                    delay.resolve();
                                });
                            };
                        load();
                        return delay.promise;
                    }
                }
            })
            .state('app.order', {
                url: "/order",
                templateUrl: "app/components/order.html"
            })
            .state('app.trainTicket', {
                url: "/trainTicket",
                templateUrl: "app/components/trainTicket.html",
                resolve:{
                    delay: function($q) {
                        var delay = $q.defer(),
                            load = function(){
                                $.getScript('assets/js/comment.js',function(){
                                    delay.resolve();
                                });
                            };
                        load();
                        return delay.promise;
                    }
                }
            })
            .state('app.airTicket', {
                url: "/airTicket",
                templateUrl: "app/components/airTicket.html",
                resolve:{
                    delay: function($q) {
                        var delay = $q.defer(),
                            load = function(){
                                $.getScript('assets/js/comment.js',function(){
                                    delay.resolve();
                                });
                            };
                        load();
                        return delay.promise;
                    }
                }
            })
            .state('app.trainOrderInfo', {
                url: "/trainOrderInfo",
                templateUrl: "app/components/trainOrderInfo.html"
            })
            .state('app.airOrderInfo', {
                url: "/airOrderInfo",
                templateUrl: "app/components/airOrderInfo.html"
            })
    });

