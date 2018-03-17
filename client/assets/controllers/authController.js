
app.controller('authController', ['$scope', '$rootScope','authFactory', '$location', '$cookies','Flash',
    function ($scope, $rootScope, authFactory, $location, $cookies, Flash) {

        /**
         * Use ControllerAs expression, bind controller as vm (view model), declare vm as this.
         * Bind all the controller class private functions to vm, so that the view html
         * is able to access these functions.
         */
        var vm = this;
        vm.login = login;
        vm.register = register;
        vm.redirectRegistration = redirectRegistration;
        vm.redirectLogin = redirectLogin;

        $scope.newUser = {};

        /**
         * Function to login into the system
         */
        function login() {
            authFactory.login($scope.user, function (data) {
                console.log(data);
                if (data.errors) {
                    Flash.create('danger', data.errors, 5000, {container: 'login'});
                    $location.url('/');
                } else {
                    $cookies.put('user_id', data._id);
                    $location.url('/main');
                    Flash.create('success', "Logged in successfully.", 5000, {container: 'main'});
                }
            });
        }

        /**
         * Function to create a new user account.
         */
        function register() {
            authFactory.register($scope.newUser, function (data) {
                console.log(data);
                if (data.errors) {
                    if (typeof(data.errors) === 'object') {
                        angular.forEach(data.errors, function (v, k) {
                            Flash.create('danger', data.errors[k].message, 5000, {container: 'registration'});
                        });
                    } else {
                        Flash.create('danger', data.errors, 5000, {container: 'registration'});
                    }
                    $location.url('/registration');
                } else {
                    $location.url('/');
                    Flash.create('success', "User account created, now you may login using your credentials.", 5000, {container: 'login'});
                }
            });
        }

        /**
         * Function to redirect to Registration page.
         */
        function redirectRegistration() {
            $location.url('/registration');
        }

        /**
         * Function to redirect to Login page.
         */
        function redirectLogin() {
            $location.url('/');
        }

    }]);
