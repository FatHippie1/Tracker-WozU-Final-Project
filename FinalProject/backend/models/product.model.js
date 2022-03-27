const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    productname: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
}, {
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;