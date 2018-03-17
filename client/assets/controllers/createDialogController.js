app.controller('createDialogController', ['$scope', '$rootScope','dialogFactory', '$location', 'Flash', '$mdDialog',
    function ($scope, $rootScope, dialogFactory, $location, Flash, $mdDialog) {

        $scope.newDialog = {
            "title": "",
            "subtitle": "",
            "formattedText":  "",
            "image": {
                "imageUrl": ""
            },
            "buttons": [{
                "title": "",
                "openUriAction": {
                    "uri": ""
                }
            }]
        };

        $scope.closeDialog = function () {
            $mdDialog.hide();
        };

        $scope.create = function () {

        }



    }]);
