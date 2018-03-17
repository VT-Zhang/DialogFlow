app.factory('dialogFactory', ['$http', function ($http) {
    var factory = {};

    factory.create = function (newDialog, callback) {
        $http.post('/dialog', newDialog)
            .then(function (returned_data) {
                if (typeof(callback) === 'function') {
                    console.log(returned_data);
                    callback(returned_data);
                }
            })
            .catch(function (err) {
                console.log(err)
            });
    };


    return factory;
}]);
