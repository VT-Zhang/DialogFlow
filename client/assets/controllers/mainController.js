app.controller('mainController', ['$scope', '$rootScope', '$location', '$cookies', '$mdDialog', 'Flash',
    function ($scope, $rootScope, $location, $cookies, $mdDialog, Flash) {

        $scope.dialogs = [
            {
                "_id": 0,
                "title": "Completing Your JWMI MBA",
                "subtitle": "Earning your JWMI MBA at YOUR pace",
                "formattedText":  "<p>If you begin attendance in {{termStartDesc}},\
                                taking {{pace}} course(s) per quarter, and completing {{attendQtr}} quarters a year,\
                                you could earn your MBA as early as {{termEndDesc}}.</p>",
                "image": {
                    "imageUrl": "https://jackwelch.strayer.edu/assets/img/JW-Logo.png"
                },
                "buttons": [{
                    "title": "Apply now!",
                    "openUriAction": {
                        "uri": "https://jackwelch.strayer.edu/about"
                    }
                }]

            },
            {
                "_id": 1,
                "title": "Completing Your JWMI MBA",
                "subtitle": "Earning your JWMI MBA at YOUR pace",
                "formattedText":  "<p>If you begin attendance in {{termStartDesc}},\
                                taking {{pace}} course(s) per quarter, and completing {{attendQtr}} quarters a year,\
                                you could earn your MBA as early as {{termEndDesc}}.</p>",
                "image": {
                    "imageUrl": "https://jackwelch.strayer.edu/assets/img/JW-Logo.png"
                },
                "buttons": [{
                    "title": "Apply now!",
                    "openUriAction": {
                        "uri": "https://jackwelch.strayer.edu/about"
                    }
                }]

            },
            {
                "_id": 2,
                "title": "Completing Your JWMI MBA",
                "subtitle": "Earning your JWMI MBA at YOUR pace",
                "formattedText":  "<p>If you begin attendance in {{termStartDesc}},\
                                taking {{pace}} course(s) per quarter, and completing {{attendQtr}} quarters a year,\
                                you could earn your MBA as early as {{termEndDesc}}.</p>",
                "image": {
                    "imageUrl": "https://jackwelch.strayer.edu/assets/img/JW-Logo.png"
                },
                "buttons": [{
                    "title": "Apply now!",
                    "openUriAction": {
                        "uri": "https://jackwelch.strayer.edu/about"
                    }
                }]

            }
        ];

        $scope.logout = function () {
            var cookies = $cookies.getAll();
            angular.forEach(cookies, function (v, k) {
                $cookies.remove(k);
            });
            $location.url('/');
            Flash.create('success', "You have successfully logged out.", 10000, {container: 'login'});
        };

        $scope.delete = function(ev, id) {
            var confirm = $mdDialog.confirm()
            .title('Are you sure want to delete this instance?')
            .htmlContent('The instance will be deleted permanently.')
            .ariaLabel('delete instance')
            .targetEvent(ev)
            .ok('YES, DELETE')
            .cancel('CANCEL')
            .multiple(true);

            $mdDialog.show(confirm).then(function () {
                mainFactory.delete(id);
                $mdDialog.hide();
            });
        }
    }])
