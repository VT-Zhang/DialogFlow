app.factory('cardFactory', ['$http', function ($http) {
    var factory = {};

    factory.showAll = function (callback) {
        $http.get('/card')
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
        $http.get('/card/' + id)
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
        $http.post('/card', newDialog)
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
        $http.put('/card/' + id, updatedDialog)
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
        $http.delete('/card/' + id)
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
