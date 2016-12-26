/// <reference path="../../../typings/index.d.ts" />
/// <reference path="jwisky-www.module.ts" />

module jwisky.www {

  $module.directive(
    "mAppLoading",
    [
      '$animate',
      function ($animate:angular.IAnimateService) {

        return ({
          link: link,
          restrict: "C"
        });

        function link(scope, element, attributes) {

          $animate.leave(element.children().eq(1)).then(
            function cleanupAfterAnimation() {

              // Remove the root directive element.
              element.remove();

              // Clear the closed-over variable references.
              scope = element = attributes = null;
            }
          );
        }
      }
    ]
  );
}
