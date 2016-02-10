describe('Testing dgConfirm directive', function() {
    var $compile,
        $rootScope,
        $window;

    beforeEach(module('dugun.confirm'));

    beforeEach(inject(function(_$compile_, _$rootScope_, _$window_){
        $compile = _$compile_;
        $rootScope = _$rootScope_;

        $rootScope.callMe = function() {};

        $window = _$window_;
        spyOn($rootScope, 'callMe');
    }));

    it('Shows the alert', function() {
        spyOn($window, 'confirm');
        var element = $compile('<button type="button" dg-confirm="Hello World!" ng-click="callMe()">Click</button>')($rootScope);
        $rootScope.$digest();
        element.triggerHandler('click');
        expect($window.confirm).toHaveBeenCalledWith('Hello World!');
    });

    it('Calles the ngClick when alert is accepted and no dgConfirmIf exists', function() {
        spyOn($window, 'confirm').and.returnValue(true);
        var element = $compile('<button type="button" dg-confirm="Hello World!" ng-click="callMe()">Click</button>')($rootScope);
        $rootScope.$digest();
        element.triggerHandler('click');
        expect($rootScope.callMe).toHaveBeenCalled();
    });

    it('Does not call ngClick when alert is not accepted and no dgConfirmIf exists', function() {
        spyOn($window, 'confirm').and.returnValue(false);
        var element = $compile('<button type="button" dg-confirm="Hello World!" ng-click="callMe()">Click</button>')($rootScope);
        $rootScope.$digest();
        element.triggerHandler('click');
        expect($rootScope.callMe).not.toHaveBeenCalled();
    });

    it('Calles the ngClick when dgConfirmIf exists and is true', function() {
        spyOn($window, 'confirm').and.returnValue(true);
        var element = $compile('<button type="button" dg-confirm="Hello World!" ng-click="callMe()" dg-confirm-if="true">Click</button>')($rootScope);
        $rootScope.$digest();
        element.triggerHandler('click');
        expect($rootScope.callMe).toHaveBeenCalled();
    });

    it('Does not call the ngClick when dgConfirmIf exists and is false', function() {
        spyOn($window, 'confirm').and.returnValue(true);
        var element = $compile('<button type="button" dg-confirm="Hello World!" ng-click="callMe()" dg-confirm-if="false">Click</button>')($rootScope);
        $rootScope.$digest();
        element.triggerHandler('click');
        expect($rootScope.callMe).toHaveBeenCalled();
    });
});
