app.factory('dialogFactory', ['$http', function ($http) {
    var factory = {};

    factory.showAll = function (callback) {
        $http.get('/dialog')
            .then(function (returned_data) {
                if (typeof(callback) === 'function') {
                    console.log(returned_data);
                    callback(returned_data);
                }
            })
            .catch(function (err) {
                console.log(err);
            });
    };

    factory.show = function (id, callback) {
        $http.get('/dialog/' + id)
            .then(function (returned_data) {
                if (typeof(callback) === 'function') {
                    callback(returned_data);
                }
            })
            .catch(function (err) {
                console.log(err);
            });
    };

    factory.create = function (newDialog, callback) {
        $http.post('/dialog', newDialog)
            .then(function (returned_data) {
                if (typeof(callback) === 'function') {
                    console.log(returned_data);
                    callback(returned_data);
                }
            })
            .catch(function (err) {
                console.log(err);
            });
    };

    factory.update = function (id, updatedDialog, callback) {
        $http.put('/dialog/' + id, updatedDialog)
            .then(function (returned_data) {
                if (typeof(callback) === 'function') {
                    console.log(returned_data);
                    callback(returned_data);
                }
            })
            .catch(function (err) {
                console.log(err);
            });
    };

    factory.delete = function (id, callback) {
        $http.delete('/dialog/' + id)
            .then(function (returned_data) {
                if (typeof(callback) === 'function') {
                    callback(returned_data);
                }
            })
            .catch(function (err) {
                console.log(err)
            });
    };

    return factory;
}]);
