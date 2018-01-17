const Item = require('../models/client.server.model').Item;
const Client = require('../models/client.server.model').Client;

exports.testAPI = (req, res) => {
    console.log("testAPI");
    res.send({
        message: "This is the demo API"
    });
}

exports.insertItemData = (req, res) => {
    let item = new Item({
        itemName: req.body.itemName,
        price: req.body.price
    });
    console.log(req.body.itemName)
    console.log(req.body.price)
    item.save(function (err, data) {
        if (err) {
            res.send({
                status: 0,
                message: err
            });
        } else {
            res.send({
                status: 1,
                message: 'Item SuccessFully inserted',
                data
            });
        }

    })
}

// Delete Item By Id
exports.deleteItem = (req, res) => {
    Item.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send({
                status: 1,
                message: 'item successfully Deleted',
                data: data
            });
        }
    });

};



// Update ItemData by Item Id
exports.updateItemData = (req, res) => {
    let itemData = {
        itemName: req.body.itemName,
        price: req.body.price
    }
    Item.update({
        _id: id
    }, {
        $set: itemData
    }, (err, data) => {
        if (err) {
            res.send({
                status: 0,
                message: "Could not find a item with id ",
                err: err
            });
        } else {
            res.send({
                status: 1,
                message: "data updated",
                data: data
            })
        }
    });
};

// Get All Item Data
exports.getItemData = (req, res) => {
    Item.find({}, (err, data) => {
        if (err) {
            res.send({
                status: 0,
                message: err
            })
        } else {
            res.send({
                status: 1,
                message: data
            });
        }

    });
}
exports.purchaseItems = (req, res) => {
    let username = new User({
        username: req.body.name,
        purchasedItem: req.body.purchasedItem
    });

}


exports.insertClient = (req, res) => {
    let username = req.body.username;
    let mobile = req.body.mobile;
    let purchasedItem = req.body.purchasedItem;
    Item.find({
        itemName: purchasedItem
    }, (err, data) => {
        if (err || data == "") {
            res.send({
                status: 0,
                message: err
            })
        } else {
            var id = [data[0]._id];
            console.log(id)
            let client = new Client({
                username: username,
                mobile: mobile,
                purchasedItem: id
            });
            console.log(client);
            client.save((err, data) => {
                if (err || data == "") {
                    res.send({
                        status: 0,
                        message: err
                    })
                } else {
                    res.send({
                        status: 1,
                        message: "data : " + data
                    })
                }
            })
        }
    });
}
exports.getAllClients = (req, res) => {
    Client.find({}).populate('purchasedItem')
        .exec((err, data) => {
            if (err || data == "") {
                res.send({
                    status: 0,
                    message: err
                })
            } else {
                res.send({
                    status: 1,
                    message: 'All Data Retrived',
                    data: data
                })
            }


        });
}

exports.getClient = (req, res) => {
    var name = req.body.username;
    Client.findOne({
            username: name
        })
        .populate('purchasedItem')
        .exec((err, data) => {
            if (err || data == "") {
                res.send({
                    status: 0,
                    message: err
                })
            } else {
                res.send({
                    status: 1,
                    message: data
                })
            }


        })
}

exports.deleteClient = (req, res) => {
    Client.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send({
                status: 1,
                message: 'data successfully Deleted',
                data: data
            });
        }
    });

};