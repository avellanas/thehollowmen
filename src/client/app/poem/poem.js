(function () {
    'use strict';

    angular
        .module('app.poem')
        .controller('Poem', function Poem() {
            var vm = this;

            vm.isVisible = isVisible;
            vm.selectedNote = 'title';
            vm.showNote = showNote;

            function showNote(selector) {
                vm.selectedNote = selector;
            }

            function isVisible(note) {
                return vm.selectedNote === note;
            }
        });
})();

