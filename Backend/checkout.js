const mongoose = require("mongoose");

const checkoutSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    // price: {
    //     type: Number,
    //     required: true
    // },
    paymentCompleted: {
        type: Boolean,
        default: true
    }
});

const Checkout = mongoose.model('Checkout', checkoutSchema);
module.exports = Checkout;
