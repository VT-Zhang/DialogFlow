app.controller('mainController', ['$scope', '$rootScope', '$location', '$cookies',
    '$mdDialog', 'Flash', '$document', 'cardFactory', '$route',
    function ($scope, $rootScope, $location, $cookies, $mdDialog, Flash, $document,
              cardFactory, $route) {

        function init() {
            if (!$cookies.get("user_id")) {
                $location.url("/");
                Flash.create("danger", "You have not sign in yet, please sign in first.", 5000, {container: "login"});
            }
            cardFactory.showAll(function (data) {
                console.log(data);
                $scope.cards = data.data;
            });
        }

        init();

        $scope.logout = function () {
            var cookies = $cookies.getAll();
            angular.forEach(cookies, function (v, k) {
                $cookies.remove(k);
            });
            $location.url('/');
            Flash.create('success', "You have successfully logged out.", 5000, {container: 'login'});
        };

        $scope.deleteDialog = function (ev, id) {
            var confirm = $mdDialog.confirm()
                .title('Are you sure want to delete this instance?')
                .htmlContent('The card instance will be deleted permanently.')
                .ariaLabel('delete instance')
                .targetEvent(ev)
                .ok('YES, DELETE')
                .cancel('CANCEL')
                .multiple(true);

            $mdDialog.show(confirm).then(function () {
                cardFactory.delete(id, function (data) {
                    console.log(data);
                });
                Flash.create('success', "Card record deleted.", 5000, {container: 'login'});
                $route.reload();
            });
        };

        $scope.createDialog = function (ev) {
            $mdDialog.show({
                controller: 'createCardController',
                templateUrl: 'partials/createDialog.html',
                parent: angular.element($document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        };

        $scope.updateDialog = function (ev, id) {
            $mdDialog.show({
                controller: 'updateCardController',
                templateUrl: 'partials/updateDialog.html',
                parent: angular.element($document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals: {
                    cardID: id
                }
            });
        }
    }]);
