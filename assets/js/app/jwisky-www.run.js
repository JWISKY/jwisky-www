/// <reference path="../../../typings/index.d.ts" />
/// <reference path="jwisky-www.module.ts" />
var jwisky;
(function (jwisky) {
    var www;
    (function (www) {
        function RunFn($animate) {
            $animate.enabled(true);
        }
        www.RunFn = RunFn;
        RunFn.$inject = ['$animate'];
        www.$module.run(RunFn);
    })(www = jwisky.www || (jwisky.www = {}));
})(jwisky || (jwisky = {}));
//# sourceMappingURL=jwisky-www.run.js.map