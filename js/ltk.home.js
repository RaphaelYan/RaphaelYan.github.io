(function module() {
'use strict';

// ltk.home (home)

angular

.module("ltk.home", [])

.run(["$templateCache", function cacheTemplates($templateCache) {
    $templateCache.put("ltk.home.templates.home", "<div class=\"jumbotron\">\n    <img src='mocks/me.jpg' style='border-radius:50%;float:right;'>\n    <h1>Hi,</h1>\n    <p>I'm Raphaël Yan, a 24 years old developer from Paris.</p>\n    <p>Enjoy visiting my site and feel free to contact me for requests or propositions.</p>\n    <p>I'm actually an <u>Angular/Bootstrap front developer</u> at Alstom (Paris - La défense)</p>\n</div>\n\n<div ltk-bootstrap-title=\"My methodology\"></div>\n\n<div class=\"methods\">\n    <div class=\"col-xs-3\">\n        <i class=\"fa fa-weixin\"></i>\n        <h2>Plan</h2>\n        <h4>Listening to your needs</h4>\n    </div>\n    <i class=\"col-xs-1 fa fa-arrow-right\"></i>\n    <div class=\"col-xs-3\">\n        <i class=\"fa fa-cogs\"></i>\n        <h2>Collaborate</h2>\n        <h4>Make the magic happen</h4>\n    </div>\n    <i class=\"col-xs-1 fa fa-arrow-right\"></i>\n    <div class=\"col-xs-3\">\n        <i class=\"fa fa-dropbox\"></i>\n        <h2>Deliver</h2>\n        <h4>Enjoy the finished product</h4>\n    </div>\n</div>");
}])

.config(["$stateProvider", function states($stateProvider) {
    $stateProvider
    .state('ltk.home', {
        url: '/',
        templateUrl: 'ltk.home.templates.home'
    })
    .state('ltk.home2', {
        url: '',
        templateUrl: 'ltk.home.templates.home',
        controller: ["$rootScope", function ctrlHome($rootScope) {
            $rootScope.homeActive = true;
        }]
    });
}])
;
})();
