app.factory('mainFactory', ['$http', function ($http) {
    var factory = {};

    factory.delete = function (id, callback) {
        $http.post('/dialog/' + id)
        .then(function (returned_data) {
            if (typeof(callback) === 'function') {
                callback(returned_data.data)
            }
        })
        .catch(function (err) {
            console.log(err)
        });
    };

    return factory;
}]);
