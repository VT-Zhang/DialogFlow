app.controller('authController', ['$scope', '$rootScope','authFactory', '$location', '$cookies','Flash',
    function ($scope, $rootScope, authFactory, $location, $cookies, Flash) {

        $scope.newUser = {};
        $scope.messages = [];
        $scope.flag = false;

        $scope.register = function () {
            authFactory.register($scope.newUser, function (data) {
                console.log(data);
                if (data.errors) {
                    if (typeof(data.errors) === 'object') {
                        angular.forEach(data.errors, function (v, k) {
                            // $scope.messages.push(data.errors[k].message);
                            Flash.create('danger', data.errors[k].message, 5000, {container: 'registration'});
                        });
                    }
                    else {
                        Flash.create('danger', data.errors, 5000, {container: 'registration'});
                    }
                    $location.url('/');
                }
                else {
                    $scope.flag = false;
                    $cookies.put('user_id', data._id);
                    $cookies.put('user_name', data.first_name);
                    $location.url('/main');
                }
            });
        };

        $scope.login = function () {
            authFactory.login($scope.user, function (data) {
                console.log(data);
                if (data.errors) {
                    Flash.create('danger', data.errors, 5000, {container: 'login'});
                    $location.url('/');
                }
                else {
                    $scope.flag = false;
                    $cookies.put('user_id', data._id);
                    $location.url('/main');
                    Flash.create('success', "Logged successfully.", 5000, {container: 'main'});
                }
            });
        };

        $scope.redirectRegistration = function () {
            $location.url('/registration');
        };

        $scope.redirectLogin = function () {
            $location.url('/');
        }

    }]);
