function($stateProvider) {
    $stateProvider
    .state('ltk.home', {
        url: '/',
        templateUrl: 'ltk.home.templates.home'
    })
    .state('ltk.home2', {
        url: '',
        templateUrl: 'ltk.home.templates.home',
        controller: function ctrlHome($rootScope) {
            $rootScope.homeActive = true;
        }
    });
}
