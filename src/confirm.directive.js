/**
 * @memberof dugun.confirm
 * @ngdoc directive
 * @description
 * Displays window.confirm before ngClick, and if not confirmed, prevent
 * the statement from being called.
 */
function DgConfirmDirective($window) {
    return {
        priority: 1,
        restrict: 'A',
        scope: {
            dgConfirmIf: "=",
            ngClick: '&',
            dgConfirm: '@'
        },
        link: function (scope, element, attrs) {
            element.unbind("click").bind("click", function ($event) {
                $event.preventDefault();

                if(angular.isUndefined(scope.dgConfirmIf) || scope.dgConfirmIf) {
                    if($window.confirm(scope.dgConfirm)) {
                        scope.ngClick();
                    }
                } else {
                    scope.$apply(scope.ngClick);
                }
            });

        }
    };
}

DgConfirmDirective.$inject = [
    '$window',
];

angular.module('dugun.confirm')
    .directive('dgConfirm', DgConfirmDirective);
