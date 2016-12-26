/// <reference path="../../../typings/index.d.ts" />
/// <reference path="jwisky-www.module.ts" />

module jwisky.www {

  export class AppController {
    constructor() {
    }
  }
  AppController.$inject = [];

  $module.controller('AppController', AppController);
}
