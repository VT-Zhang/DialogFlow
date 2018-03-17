app.controller('mainController', ['$scope', '$rootScope', '$location', '$cookies',
    '$mdDialog', 'Flash', '$document', 'cardFactory', '$route',
    function ($scope, $rootScope, $location, $cookies, $mdDialog, Flash, $document,
              cardFactory, $route) {

        /**
         * Use ControllerAs expression, bind controller as vm (view model), declare vm as this.
         * Bind all the controller class private functions to vm, so that the view html
         * is able to access these functions.
         */
        var vm = this;
        vm.logout = logout;
        vm.deleteDialog = deleteDialog;
        vm.createDialog = createDialog;
        vm.updateDialog = updateDialog;

        /**
         * Init function to initialize the controller
         * Load other modularized helper functions.
         */
        function init() {
            preventAccess();
            cardFactory.showAll(function (data) {
                console.log(data);
                $scope.cards = data.data;
            });
        }

        /**
         * Helper function to prevent user access this page without logging in.
         */
        function preventAccess() {
            if (!$cookies.get("user_id")) {
                $location.url("/");
                Flash.create("danger", "You have not sign in yet, please sign in first.", 5000, {container: "login"});
            }
        }

        /**
         * Function to log out the user, remove all the cookies, and redirect to the base url.
         */
        function logout() {
            var cookies = $cookies.getAll();
            angular.forEach(cookies, function (v, k) {
                $cookies.remove(k);
            });
            $location.url('/');
            Flash.create('success', "You have successfully logged out.", 5000, {container: 'login'});
        }

        /**
         * Function to open a confirmation dialog, confirm and delete a card instance.
         * @param ev, place where the dialog open from and close to.
         * @param id, the card instance id.
         */
        function deleteDialog(ev, id) {
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
                Flash.create('success', "Card record deleted.", 5000, {container: 'main'});
                $route.reload();
            });
        }

        /**
         * Function to open the create new card dialog.
         * @param ev, place where the dialog open from and close to.
         */
        function createDialog(ev) {
            $mdDialog.show({
                controller: 'createCardController',
                controllerAs: 'vm',
                templateUrl: 'partials/createDialog.html',
                parent: angular.element($document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        }

        /**
         * Function to open the update card dialog.
         * @param ev, place where the dialog open from and close to.
         * @param id, the card instance id.
         */
        function updateDialog(ev, id) {
            $mdDialog.show({
                controller: 'updateCardController',
                controllerAs: 'vm',
                templateUrl: 'partials/updateDialog.html',
                parent: angular.element($document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals: {
                    cardID: id
                }
            });
        }

        init();

    }]);
