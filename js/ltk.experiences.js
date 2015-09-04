(function module() {
'use strict';

// ltk.experiences (experiences)

angular

.module("ltk.experiences", [])

.run(["$templateCache", function cacheTemplates($templateCache) {
    $templateCache.put("ltk.experiences.templates.list", "<div class=\"col-xs-4\">\r\n    <div ltk-bootstrap-title=\"My skills\"></div>\r\n\r\n    <div ltk-experiences-skill-list=\"experiences.languages\" title=\"Languages\"></div>\r\n    <div ltk-experiences-skill-list=\"experiences.framework\" title=\"Framework\"></div>\r\n    <div ltk-experiences-skill-list=\"experiences.systemBuilder\" title=\"System builder\"></div>\r\n    <div ltk-experiences-skill-list=\"experiences.integration\" title=\"Integration\"></div>\r\n    <div ltk-experiences-skill-list=\"experiences.versioning\" title=\"Versioning\"></div>\r\n    <div ltk-experiences-skill-list=\"experiences.database\" title=\"Database\"></div>\r\n    <div ltk-experiences-skill-list=\"experiences.ide\" title=\"IDE\"></div>\r\n    <div ltk-experiences-skill-list=\"experiences.os\" title=\"OS\"></div>\r\n\r\n</div>\r\n<div class=\"col-xs-8\">\r\n    <div ltk-bootstrap-title=\"My projects\"></div>\r\n\r\n    <div class=\"timeline\">\r\n\r\n        <article class=\"timeline-item {{ $index % 2 ? 'alt' : '' }}\" ng-repeat=\"project in experiences.projects\">\r\n            <div class=\"timeline-desk\">\r\n                <div class=\"panel\">\r\n                    <div class=\"panel-body\"><!-- TODO: effect on hover -->\r\n                        <span class=\"arrow{{ $index % 2 ? '-alt': '' }}\"></span>\r\n                        <span class=\"timeline-icon\"></span>\r\n                        <h1 ng-if=\"project.to\">From {{ project.from }} to {{ project.to }}</h1>\r\n                        <h1 ng-if=\"!project.to\">Since {{ project.from }}</h1>\r\n                        <h4>{{ project.company + \" - \" + project.jobTitle }}</h4>\r\n                        <div class=\"notification\" ng-if=\"project.shortDescription\">\r\n                            {{ project.shortDescription }}\r\n                        </div>\r\n                        <!-- TODO: modal to show longDescription -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </article>\r\n\r\n    </div>\r\n</div>");
    $templateCache.put("ltk.experiences.templates.skillList", "<div class=\"skill-type\">{{ title }}</div>\r\n<div ng-repeat=\"skill in skills | orderBy: 'order'\" class=\"skill-line\">\r\n    <span class=\"col-xs-3\">{{ skill.name }}</span>\r\n    <div class=\"circle active\"></div>\r\n    <div class=\"circle\" ng-class=\"{active: skill.level > 1}\"></div>\r\n    <div class=\"circle\" ng-class=\"{active: skill.level > 2}\"></div>\r\n    <div class=\"circle\" ng-class=\"{active: skill.level > 3}\"></div>\r\n    <div class=\"circle\" ng-class=\"{active: skill.level > 4}\"></div>\r\n</div>");
}])

.config(["$stateProvider", function states($stateProvider) {
    $stateProvider
    .state('ltk.experiences', {
        url: '/experiences',
        templateUrl: 'ltk.experiences.templates.list',
        controller: 'LtkExperiencesListController',
        resolve: {
            experiences: ["ltkExperiencesApi", function getExperiences(ltkExperiencesApi) {
                return ltkExperiencesApi;
            }]
        }
    });
}])

.factory("ltkExperiencesApi", ["ltkBootstrapConfig", "$http", function api (ltkBootstrapConfig, $http) {
    return $http
        .get(ltkBootstrapConfig.experiences.api)
        .then(function onSuccess(response) {
            return response.data;
        });
}])

.directive("ltkExperiencesSkillList", function skillList () {
    return {
        restrict: 'A',
        scope: {
            title: '@title',
            skills: '=ltkExperiencesSkillList'
        },
        templateUrl: 'ltk.experiences.templates.skillList'
    };
})

.controller("LtkExperiencesListController", ["$scope", "experiences", function ListController ($scope, experiences) {
    $scope.experiences = experiences;
}])
;
})();
