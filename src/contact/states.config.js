function($stateProvider) {
    $stateProvider
    .state('ltk.contact', {
        url: '/contact',
        templateUrl: 'ltk.contact.templates.list',
        controller: 'LtkContactListController',
        resolve: {
            contact: function getContact(ltkContactApi) {
                return ltkContactApi;
            }
        }
    });
}
