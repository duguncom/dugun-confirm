module.exports = function(config) {
    config.set({
        basePath: './',

        frameworks: ['jasmine'],

        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'src/dugun-confirm.module.js',
            'src/confirm.service.js',
            'src/confirm.directive.js',
            'test/confirm.spec.js',
        ],

        autoWatch : true,

        browsers: [
            'PhantomJS',
        ],
    });
};
