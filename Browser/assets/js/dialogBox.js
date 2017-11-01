/**
 * Created by wangzhiwei on 16/11/16.
 * 两个必须参数
 * loadData  所有的参数
 */
appMod.directive('dialog', function () {
    return {
        restrict: 'AE',
        scope: {
            loadData: '=loadData'//数据源 可以是对象和url
        },
        template: '<div ng-show="loadData.isShow" class="dialog-main"><div class="dialog-box">' +
        '<div class="dialog-content"><i class="close-button" ng-click="close()">x</i>' +
        '<div ng-include="loadData.template.url"></div>' +
        '</div>' +
        '<div class="dialog-button-box">' +
        '<button ng-click="clickValue(item,$index)" ng-repeat="item in loadData.buttons.list" class="{{\'button\'+$index}}">{{item[key]}}</button>' +
        '</div></div></div>',
        replace: true,
        link: function (scope, element, attr) {
            var buttons = {//默认按钮
                key: 'name',
                list: [
                    {
                        name: '确认',
                        value: true
                    },
                    {
                        name: '取消',
                        value: false
                    }
                ]/*,
                 callback: scope.callBack*/
            };
            scope.events = {};
            scope.init=function(){
                //判断是(内容or模板)or自定义按钮
                if(scope.loadData==undefined){
                    return;
                }else if (typeof scope.loadData == "string") {//通过url传入
                    //scope.loadData = {//默认对话框
                    //    show: false,
                    //    template: scope.loadData,
                    //    buttons: buttons
                    //};
                } else {
                    //模板事件绑定
                    if(scope.loadData.template.events){//是否传入模板事件
                        scope.loadData.template.events(scope.events);
                    }
                    if(scope.loadData.buttons){//需要按钮
                        if (scope.loadData.buttons.list == undefined) {//判断是否使用默认按钮
                            buttons.callback=scope.loadData.buttons.callback;
                            scope.loadData.buttons = buttons;
                        }
                        scope.key = scope.loadData.buttons.key;//用于确定按钮显示哪个字段
                        scope.clickValue = function (item, index) {
                            scope.loadData.buttons.callback(item, index);
                        };
                    }
                }
                scope.close=function(){
                    scope.loadData.isShow=false;
                }
            };
            if(scope.loadData){
                scope.init();
                //scope.loadData.
            }
            scope.$watch('loadData',function(n,o){
                scope.init();
            });


        }
    }
});