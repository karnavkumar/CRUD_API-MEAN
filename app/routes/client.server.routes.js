module.exports = function (app, express) {
    var item = require('../controllers/client.server.controller.js');
    var router = express.Router();

    router.get('/testAPI', item.testAPI);
    router.post('/insertItemData', item.insertItemData);
    router.put('/updateItemData', item.updateItemData);
    router.delete('/deleteItem/:id', item.deleteItem);
    router.get('/getItemData', item.getItemData);

    router.get('/getClient', item.getClient);
    router.get('/getAllClients', item.getAllClients);
    router.post('/insertClient', item.insertClient);
    router.delete('/deleteClient/:id', item.deleteClient);


    app.use(config.baseApiUrl, router);
};