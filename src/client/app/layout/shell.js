(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('Shell', Shell);

    Shell.$inject = ['$location', '$anchorScroll', 'config'];

    function Shell($location, $anchorScroll, config) {
        var vm = this;

        vm.title = config.appTitle;
        vm.scroll = scroll;

        function scroll(selector) {
            console.log('Scrolling to ' + selector);

            // set the location.hash to the id of the element you wish to scroll to.
            $location.hash(selector);

            $anchorScroll();

        }
    }
})();

