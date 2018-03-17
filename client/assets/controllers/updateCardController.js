app.controller('updateCardController', ['$scope', '$rootScope','cardFactory', '$location',
    'Flash', '$mdDialog', '$route', 'cardID',
    function ($scope, $rootScope, cardFactory, $location, Flash, $mdDialog, $route, cardID) {

        function init () {
            cardFactory.show(cardID, function (data) {
                $scope.selectedCard = data.data;
            });
        }

        init();

        $scope.closeDialog = function () {
            $mdDialog.hide();
        };

        $scope.update = function () {
            cardFactory.update(cardID, $scope.selectedCard, function (data) {
                if (data.status === 200) {
                    Flash.create('success', "Record updated successfully.", 5000, {container: 'main'});
                    $mdDialog.hide();
                    $route.reload();
                }
            });
        };

        $scope.downloadAsFile = function() {
            var a = document.createElement("a");
            document.body.appendChild(a);
            var file = new Blob([angular.toJson($scope.selectedCard, true)], {type: 'text/plain'});
            a.href = URL.createObjectURL(file);
            a.download = "json.txt";
            a.click();
        }

    }]);
