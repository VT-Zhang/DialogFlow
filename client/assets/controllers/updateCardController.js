app.controller('updateCardController', ['$scope', '$rootScope','cardFactory', '$location',
    'Flash', '$mdDialog', '$route', 'cardID',
    function ($scope, $rootScope, cardFactory, $location, Flash, $mdDialog, $route, cardID) {

        /**
         * Use ControllerAs expression, bind controller as vm (view model), declare vm as this.
         * Bind all the controller class private functions to vm, so that the view html
         * is able to access these functions.
         */
        var vm = this;
        vm.closeDialog = closeDialog;
        vm.updateCard = updateCard;
        vm.downloadAsFile = downloadAsFile;

        /**
         * Init function to initialize the controller
         * Load other modularized helper functions.
         */
        function init () {
            cardFactory.show(cardID, function (data) {
                $scope.selectedCard = data.data;
            });
        }

        /**
         * Function to close the dialog.
         */
        function closeDialog() {
            $mdDialog.hide();
        }

        /**
         * Function to update a existing card instance.
         */
        function updateCard() {
            cardFactory.update(cardID, $scope.selectedCard, function (data) {
                if (data.status === 200) {
                    Flash.create('success', "Record updated successfully.", 5000, {container: 'main'});
                    $mdDialog.hide();
                    $route.reload();
                }
            });
        }

        /**
         * Function to download the input as text file in JSON format.
         */
        function downloadAsFile() {
            var a = document.createElement("a");
            document.body.appendChild(a);
            var file = new Blob([angular.toJson($scope.selectedCard, true)], {type: 'text/plain'});
            a.href = URL.createObjectURL(file);
            a.download = "json.txt";
            a.click();
        }

        init();

    }]);
