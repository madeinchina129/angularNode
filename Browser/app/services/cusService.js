appMod.provider("cusProvider",function(){
    this.$get = function($http,$q){
        var url = "http://localhost:3000/trainTicket/customerApi";
        function _getList(){
            var deferd  =$q.defer();//为http请求设置一个延时请求
            $http({
                url:url,
                method:"GET"
            }).success(function(data){
                deferd.resolve(data);
            }).error(function(data){
                deferd.reject(data);
            });
            return deferd.promise;
        }
        return {
            getDataList:_getList
        }
    }
})