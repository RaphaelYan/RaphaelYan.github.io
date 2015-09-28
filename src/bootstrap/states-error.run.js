function($rootScope, $state, $log, $window) {

    $rootScope.$on('$stateChangeSuccess', function logError(event, toState) {
        var urlTrack = toState.url;

        if (urlTrack === '' || urlTrack === '/') {
            urlTrack = '/home';
        }

        // jscs:disable disallowDanglingUnderscores
        $window._gaq.push(['_trackPageview', urlTrack]);
        // jscs:enable disallowDanglingUnderscores
    });

    $rootScope.$on('$stateChangeError', function logError(event, to, toParams, from, fromParams, err) {
        $log.error(err);
    });

    $rootScope.$on('$stateNotFound', function stateNotFound() {
        $log.error('State not found');
        $state.go('ltk.home');
    });
}
