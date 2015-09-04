(function module() {
'use strict';

// ltk.bootstrap (bootstrap)

angular

.module("ltk.bootstrap", [
    "ngRoute",
    "ui.router",
    "ltk.home",
    "ltk.experiences",
    "ltk.contact"
])

.run(["$templateCache", function cacheTemplates($templateCache) {
    $templateCache.put("ltk.bootstrap.templates.layout", "<nav class=\"ltk-nav\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <button\n                type=\"button\"\n                class=\"navbar-toggle collapsed\"\n                data-toggle=\"collapse\"\n                data-target=\"#navbar\"\n                aria-expanded=\"false\"\n                aria-controls=\"navbar\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\">Raphaël Yan</a>\n        </div>\n        <div id=\"navbar\">\n            <ul>\n                <li ui-sref-active=\"active\" ng-class=\"{ active: homeActive }\">\n                    <a ui-sref=\"ltk.home\">\n                        Home\n                    </a>\n                </li>\n                <li ui-sref-active=\"active\">\n                    <a ui-sref=\"ltk.experiences\">\n                        My experiences\n                    </a>\n                </li>\n                <li ui-sref-active=\"active\">\n                    <a ui-sref=\"ltk.contact\">\n                        Contact me\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<div class=\"container theme-showcase\" role=\"main\">\n    <div ui-view></div>\n</div>\n\n\n<p class=\"footer\">\n    <div class=\"hr\">&nbsp;</div>\n    <div class=\"copyright\">© 2015 - All rights reserved</div>\n</p>");
    $templateCache.put("ltk.bootstrap.templates.title", "<div class=\"row title-row\">\n    {{ title }}\n</div>\n\n<div class=\"hr\">&nbsp;</div>");
}])

.config(["$stateProvider", "$routeProvider", function states($stateProvider, $routeProvider) {
    $stateProvider.state({
        name: 'ltk',
        templateUrl: 'ltk.bootstrap.templates.layout',
        abstract: true
    });

    $routeProvider.otherwise('/');
}])

.run(["$rootScope", "$state", "$log", function statesError($rootScope, $state, $log) {

    $rootScope.$on('$stateChangeSuccess', function logError(event, toState) {
        var urlTrack = toState.url;

        if (urlTrack === '' || urlTrack === '/') {
            urlTrack = '/home';
        }

        _gaq.push(['_trackPageview', urlTrack]);
    });

    $rootScope.$on('$stateChangeError', function logError(event, to, toParams, from, fromParams, err) {
        $log.error(err);
    });

    $rootScope.$on('$stateNotFound', function stateNotFound() {
        $log.error('State not found');
        $state.go('ltk.home');
    });
}])

.constant("ltkBootstrapConfig", {
    "home": {
        "api": "./mocks/home.json"
    },
    "experiences": {
        "api": "./mocks/experiences.json"
    },
    "contact": {
        "api": "./mocks/contact.json"
    }
})

.directive("ltkBootstrapTitle", function title () {
    return {
        restrict: 'A',
        scope: {
            title: '@ltkBootstrapTitle'
        },
        templateUrl: 'ltk.bootstrap.templates.title'
    };
})
;
})();
