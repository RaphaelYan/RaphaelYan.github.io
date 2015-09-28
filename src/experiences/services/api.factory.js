function (ltkBootstrapConfig, $http) {
    return $http
        .get(ltkBootstrapConfig.experiences.api)
        .then(function onSuccess(response) {
            return response.data;
        });
}
