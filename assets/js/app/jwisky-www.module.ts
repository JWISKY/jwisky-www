/// <reference path="../../../typings/index.d.ts" />

module jwisky.www {

  var NAME:string = 'jwisky.www';

  export var $module:angular.IModule = angular.module(NAME, [
    'ngMaterial', 'ngAnimate'
  ]);

  setTimeout(
    function asyncBootstrap() {
      angular.bootstrap( document, [ NAME ] );
    },
    ( 2 * 1000 )
  );
}
