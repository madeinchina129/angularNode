appMod.controller("trainCtrl", function ($scope, $q, trainProvider,webRoot) {

    $scope.trainList=[];
    trainProvider.getDataList().then(
        function (success) {
            $scope.trainList = success;
            // console.log(success)
        },
        function (error) {

        },
        function (notice) {

        }
    );

    $scope.content="请输入进行测试";
    $scope.buttonName='确认';
    $scope.data = {
        isShow: false,
        template: {
            url: webRoot + '/warn-dialog.html',
            events: function (events) {
                //因为在当前$scope中定义,所以能够直接访问当前$scope空间
                events.content = $scope.content;
                events.back=function(){//因为传递的是值,需要自己进行触发.
                    $scope.trainList.startTime ='这是一个回传(还可以查看控制台):'+events.content;
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
                console.log('这是一个按钮回调事件'+index);
                console.log(item);
            }
        }
    };


})
