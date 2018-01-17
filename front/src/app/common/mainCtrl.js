var app = angular.module("myApp");

app.controller('mainCtrl', ['$http', '$route', '$routeParams', function ($http, $route, $routeParams) {
    var main = this;

    var id = $routeParams.id;

    console.log(id);

    main.updateThis = false;

    console.log(main.updateThis);

    $http.get('/api/getItemData').then(function (response) {
        console.log('getItemData');
        main.getItems = response.data.message;
        console.log(response);
    }).catch(function err(err) {
        main.errmsg = response.err;
        console.log('Error Message')
        console.log(err.message);
    });

    main.insertItemData = function () {
        var postData = {
            itemName: main.itemname,
            price: main.itemprice,
        };
        $http.post('/api/insertItemData', postData).then(function (response) {
            if (response.data.status == 0) {
                main.errMsg = response.data.message.errmsg
            } else {
                $route.reload();
                console.log(response.data);

            }

        })
    };

    main.deleteItem = function (id) {
        $http.delete('/api/deleteItem/' + id).then(function (res) {
            $route.reload();
            console.log(res.data);
            console.log(res);
        }).catch(function (err) {
            console.error(err);
        })
    }



    main.updateItemData = function (id) {
        $http.put('/api/updateItemData/:id').then(function (res) {
            console.log(response.data);
        }).catch(function (err) {
            console.log(err);
        })
    }


    //// USER DATA CRUD

    $http.get('/api/getAllClients').then(function (response) {
        main.getUsers = response.data.data;
        console.log('getAllClients');
        console.log(response.data);
    }).catch(function err(err) {
        main.errmsg = err.message;
        console.log('Error Message')
    });

    main.insertUserData = function () {
        var postData = {
            username: main.username,
            mobile: main.mobile,
            purchasedItem: main.purchasedItem,
        };
        console.log('insert User data');
        console.log(postData);
        $http.post('/api/insertClient', postData).then(function (response) {
            if (response.data.status == 0) {
                main.errMsg = response.data.message.errmsg;
                console.log(response);
            } else {
                $route.reload();
                console.log(response.data);
            }
        })
    };


    main.update = function () {
        main.updateThis = true;
    }
    main.undo = function () {
        main.updateThis = false;
    }

    main.updateUserData = function (id) {
        $http.put('/api/updateItemData/:id').then(function (res) {
            console.log(response.data);
        }).catch(function (err) {
            console.log(err);
        })
    }

    main.deleteUser = function (id) {
        $http.delete('/api/deleteClient/' + id).then(function (res) {
            $route.reload();
            console.log(res.data);
            console.log(res);
        }).catch(function (err) {
            console.error(err);
        })
    }
}]);