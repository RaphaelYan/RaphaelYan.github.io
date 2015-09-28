function($stateProvider) {
    $stateProvider
    .state('ltk.experiences', {
        url: '/experiences',
        templateUrl: 'ltk.experiences.templates.list',
        controller: 'LtkExperiencesListController',
        resolve: {
            experiences: function getExperiences(ltkExperiencesApi) {
                return ltkExperiencesApi;
            }
        }
    });
}
