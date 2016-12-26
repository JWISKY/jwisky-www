/// <reference path="../../../typings/index.d.ts" />
/// <reference path="jwisky-www.module.ts" />

module jwisky.www {

  export function RunFn($animate:angular.IAnimateService) : void {
      $animate.enabled(true);
  }
  RunFn.$inject = ['$animate'];

  $module.run(RunFn);
}
