
/**
 * 配置域名访问地址
 * */
appMod.factory('webRoot',['$location',function ($location) {
    return 'http://'+$location.host()+':'+$location.port()+'/ctripBrowser/app/components';
}]);
