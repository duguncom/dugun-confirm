# dugun-confirm
It's a simple directive that used with ngClick.

# Usage
Install and save it in bower.json.

    bower install --save dugun-confirm

Add it as a dependency

    angular.module('myApp', ['dugun.confirm']);

Use it!

    <button type="button" ng-click="deleteIt()" ng-confirm="Are you sure?">Delete</button>
