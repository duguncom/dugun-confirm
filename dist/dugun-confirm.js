/**
 * @memberof dugun.confirm
 * @ngdoc overview
 * @description
 * Displays window.confirm before ngClick, and if not confirmed, prevent
 * the statement from being called.
 */
angular.module('dugun.confirm', []);

/**
 * @ngdoc factory
 * @memberof dugun.confirm
 * @name DgConfirm
 *
 * @requires $window
 */
function DgConfirm($window) {
    var service = {};

    /**
     * @ngdoc method
     * @memberof DgConfirm
     * @param text {string}
     * @description
     * Open confirm popup
     */
    service.confirm = function(text) {
        return $window.confirm(text);
    };

    return service;
}

DgConfirm.$inject = [
    '$window',
];

angular.module('dugun.confirm')
    .factory('dgConfirm', DgConfirm);

/**
 * @memberof dugun.confirm
 * @ngdoc directive
 * @requires dugun.confirm:dgConfirm
 * @description
 * Displays window.confirm before ngClick, and if not confirmed, prevent
 * the statement from being called.
 */
function DgConfirmDirective(dgConfirm) {
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
                    if(dgConfirm.confirm(scope.dgConfirm)) {
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
    'dgConfirm',
];

angular.module('dugun.confirm')
    .directive('dgConfirm', DgConfirmDirective);
