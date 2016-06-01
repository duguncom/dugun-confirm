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
