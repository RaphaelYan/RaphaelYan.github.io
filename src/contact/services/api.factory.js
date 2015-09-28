function (ltkBootstrapConfig, $http) {
    return $http
        .get(ltkBootstrapConfig.contact.api)
        .then(function onSuccess(response) {
            return response.data;
        });
}
