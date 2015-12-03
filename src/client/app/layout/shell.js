(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('Shell', function Shell(config) {
            var vm = this;

            vm.title = config.appTitle;

        });
})();

