app.controller('createCardController', ['$scope', '$rootScope','cardFactory', '$location',
    'Flash', '$mdDialog', '$route',
    function ($scope, $rootScope, cardFactory, $location, Flash, $mdDialog, $route) {

        /**
         * Use ControllerAs expression, bind controller as vm (view model), declare vm as this.
         * Bind all the controller class private functions to vm, so that the view html
         * is able to access these functions.
         */
        var vm = this;
        vm.closeDialog = closeDialog;
        vm.createCard = createCard;
        vm.downloadAsFile = downloadAsFile;

        /**
         * Initialize the newCard instance's JSON structure.
         * @type {{title: string, subtitle: string, formattedText: string, image: {imageUrl: string}, buttons: *[]}}
         */
        $scope.newCard = {
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

        /**
         * Function to close the dialog.
         */
        function closeDialog() {
            $mdDialog.hide();
        }

        /**
         * Function to create a new card instance.
         */
        function createCard() {
            cardFactory.create($scope.newCard, function (data) {
                console.log(data);
                if (data.status === 200) {
                    Flash.create('success', "New card instance created.", 5000, {container: 'main'});
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
            var file = new Blob([angular.toJson($scope.newCard, true)], {type: 'text/plain'});
            a.href = URL.createObjectURL(file);
            a.download = "json.txt";
            a.click();
        }

    }]);
