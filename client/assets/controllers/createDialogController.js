app.controller('createDialogController', ['$scope', '$rootScope','dialogFactory', '$location', 'Flash', '$mdDialog', '$route',
    function ($scope, $rootScope, dialogFactory, $location, Flash, $mdDialog, $route) {

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
            dialogFactory.create($scope.newDialog, function (data) {
                console.log(data);
                if (data.status === 200) {
                    Flash.create('success', "New instance created.", 5000, {container: 'main'});
                    $mdDialog.hide();
                    $route.reload();
                }
            });
        }

    }]);
