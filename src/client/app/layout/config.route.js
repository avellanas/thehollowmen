(function () {
    'use strict';

    angular
        .module('app.layout')
        .run(appRun);

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'app/layout/shell.html',
                    controller: 'Shell',
                    controllerAs: 'vm',
                    title: ''
                }
            }
        ];
    }
})();
