(function module() {
'use strict';

// ltk.contact (contact)

angular

.module("ltk.contact", [])

.run(["$templateCache", function cacheTemplates($templateCache) {
    $templateCache.put("ltk.contact.templates.list", "<div ltk-bootstrap-title=\"Feel free to contact me !\"></div>\n\n<div class=\"contact-networks\">\n    <div class=\"col-xs-2 contact-icon\" ng-repeat=\"network in contact.networks | orderBy: 'order'\" ng-class=\"{disabled: !network.href}\">\n        <a target=\"_blank\" ng-href=\"{{ network.href }}\">\n            <i class=\"fa fa-{{ network.icon }}\"></i>\n            <span class=\"contact-text\">{{ network.display }}</span>\n        </a>\n    </div>\n</div>\n\n<ul ng-if=\"contact.websites.length\">\n    <li ng-repeat=\"website in contact.websites\">\n        <a href=\"{{ website }}\">\n            <i class=\"fa fa-globe\"></i>\n            {{ website }}\n        </a>\n    </li>\n</ul>");
}])

.config(["$stateProvider", function states($stateProvider) {
    $stateProvider
    .state('ltk.contact', {
        url: '/contact',
        templateUrl: 'ltk.contact.templates.list',
        controller: 'LtkContactListController',
        resolve: {
            contact: ["ltkContactApi", function getContact(ltkContactApi) {
                return ltkContactApi;
            }]
        }
    });
}])

.factory("ltkContactApi", ["ltkBootstrapConfig", "$http", function api (ltkBootstrapConfig, $http) {
    return $http
        .get(ltkBootstrapConfig.contact.api)
        .then(function onSuccess(response) {
            return response.data;
        });
}])

.controller("LtkContactListController", ["$scope", "contact", function ListController ($scope, contact) {
    $scope.contact = contact;
}])
;
})();
