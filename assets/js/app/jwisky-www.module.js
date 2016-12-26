/// <reference path="../../../typings/index.d.ts" />
var jwisky;
(function (jwisky) {
    var www;
    (function (www) {
        var NAME = 'jwisky.www';
        www.$module = angular.module(NAME, [
            'ngMaterial', 'ngAnimate'
        ]);
        setTimeout(function asyncBootstrap() {
            angular.bootstrap(document, [NAME]);
        }, (2 * 1000));
    })(www = jwisky.www || (jwisky.www = {}));
})(jwisky || (jwisky = {}));
//# sourceMappingURL=jwisky-www.module.js.map