app.controller('updateDialogController', ['$scope', '$rootScope','dialogFactory', '$location', 'Flash', '$mdDialog', '$route', 'dialogID',
    function ($scope, $rootScope, dialogFactory, $location, Flash, $mdDialog, $route, dialogID) {

        console.log(dialogID);

        function init () {
            dialogFactory.show(dialogID, function (data) {
                console.log(data);
                $scope.selectedDialog = data.data;
            });
        }

        init();

        $scope.closeDialog = function () {
            $mdDialog.hide();
        };

        $scope.update = function () {
            dialogFactory.update(dialogID, $scope.selectedDialog, function (data) {
                console.log(data);
                if (data.status === 200) {
                    Flash.create('success', "Record updated successfully.", 5000, {container: 'main'});
                    $mdDialog.hide();
                    $route.reload();
                }
            });
        }

    }]);
