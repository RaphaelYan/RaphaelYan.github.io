function($stateProvider, $routeProvider) {
    $stateProvider.state({
        name: 'ltk',
        templateUrl: 'ltk.bootstrap.templates.layout',
        abstract: true
    });

    $routeProvider.otherwise('/');
}
