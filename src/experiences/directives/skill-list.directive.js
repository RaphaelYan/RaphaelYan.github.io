function () {
    return {
        restrict: 'A',
        scope: {
            title: '@title',
            skills: '=ltkExperiencesSkillList'
        },
        templateUrl: 'ltk.experiences.templates.skillList'
    };
}
