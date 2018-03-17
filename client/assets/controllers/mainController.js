app.controller('mainController', ['$scope', '$rootScope', '$location', '$cookies',
    '$mdDialog', 'Flash', '$document', 'dialogFactory', '$route',
    function ($scope, $rootScope, $location, $cookies, $mdDialog, Flash, $document,
              dialogFactory, $route) {

        function init () {
            if(!$cookies.get("user_id")){
                $location.url("/");
                Flash.create("danger", "You have not sign in yet, please sign in first.", 5000, {container: "login"});
            }
            dialogFactory.showAll(function(data) {
                console.log(data);
                $scope.dialogs = data.data;
            });
        }

        init();

        $scope.logout = function () {
            var cookies = $cookies.getAll();
            angular.forEach(cookies, function (v, k) {
                $cookies.remove(k);
            });
            $location.url('/');
            Flash.create('success', "You have successfully logged out.", 10000, {container: 'login'});
        };

        $scope.deleteDialog = function(ev, id) {
            var confirm = $mdDialog.confirm()
            .title('Are you sure want to delete this instance?')
            .htmlContent('The instance will be deleted permanently.')
            .ariaLabel('delete instance')
            .targetEvent(ev)
            .ok('YES, DELETE')
            .cancel('CANCEL')
            .multiple(true);

            $mdDialog.show(confirm).then(function () {
                dialogFactory.delete(id, function (data) {
                    console.log(data);
                });
                $route.reload();
            });
        };

        $scope.createDialog = function (ev) {
            $mdDialog.show({
                controller: 'createDialogController',
                templateUrl: 'partials/createDialog.html',
                parent: angular.element($document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        };

        $scope.updateDialog = function (ev, id) {
            $mdDialog.show({
                controller: 'updateDialogController',
                templateUrl: 'partials/updateDialog.html',
                parent: angular.element($document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals: {
                    dialogID: id
                }
            });
        }
    }]);
