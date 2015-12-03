(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('Shell', function Shell(config) {
            var vm = this;

            vm.isVisible = isVisible;
            vm.selectedNote = 'title';
            vm.showNote = showNote;
            vm.title = config.appTitle;

            function showNote(selector) {
                vm.selectedNote = selector;
            }

            function isVisible(note) {
                return vm.selectedNote === note;
            }
        });
})();

