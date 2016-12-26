/// <reference path="../../../typings/index.d.ts" />
/// <reference path="jwisky-www.module.ts" />
var jwisky;
(function (jwisky) {
    var www;
    (function (www) {
        var AppController = (function () {
            function AppController() {
            }
            return AppController;
        }());
        www.AppController = AppController;
        AppController.$inject = [];
        www.$module.controller('AppController', AppController);
    })(www = jwisky.www || (jwisky.www = {}));
})(jwisky || (jwisky = {}));
//# sourceMappingURL=jwisky-www.controller.js.map