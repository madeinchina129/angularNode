appMod.controller("cusCtrl", function ($scope, $q, cusProvider, webRoot) {
    $scope.cusList = [];
    cusProvider.getDataList().then(
        function (success) {
            $scope.cusList = success;
            // console.log(success)



            console.log(success)
            $scope.content = "请输入进行测试";
            $scope.buttonName = '确认';
            /*for (var i = 0; i < success.length; i++) {
                $scope.tid = success[i].userId;
            }*/
            // $scope.tid = success[0].userId;
            // console.log($scope.tid)
            $scope.data = {
                isShow: false,
                template: {
                    url: webRoot + '/warn-dialog.html',
                    events: function (events) {
                        //因为在当前$scope中定义,所以能够直接访问当前$scope空间
                        events.content = $scope.content;
                        for (var i = 0; i < $scope.cusList.length; i++) {
                            $scope.tid = $scope.cusList[i].userId;
                        }
                        success.forEach(function (events) {
                            $scope.name = events.name
                            console.log(events.name)
                        });
                        events.tid = $scope.tid;
                        events.uname = $scope.name;
                        events.back = function () {//因为传递的是值,需要自己进行触发.
                            $scope.cusList.userSex = '这是一个回传(还可以查看控制台):' + events.content;
                        };

                    }
                },
                buttons: {
                    key: 'name',
                    list: [
                        {
                            name: $scope.buttonName,
                            value: 'true'
                        },
                        {
                            name: '取消',
                            value: 'false'
                        }
                    ],
                    callback: function (item, index) {
                        $scope.data.isShow = false;
                        console.log('这是一个按钮回调事件' + index);
                        console.log(item);
                    }
                }
            };


        },
        function (error) {

        },
        function (notice) {

        }
    );


})