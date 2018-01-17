var Schema = require('mongoose').Schema;

var itemSchema = new Schema({
    itemName: {
        type: String,
        index: {
            unique: true
        },
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});
var userSchema = new Schema({
    username: {
        type: String,
        index: {
            unique: true
        },
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    purchasedItem: {
        type: Schema.Types.ObjectId,
        ref: 'item'
    }
});
var item = mongoose.model('item', itemSchema);
var user = mongoose.model('user', userSchema);

module.exports = {
    Item: item,
    Client: user
}