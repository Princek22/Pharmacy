const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    orderId: String,
    customerName: String,
    customerContactNumber: String,
    products: Array,
    purchaseQuantity: Array,
    totalAmount: Number
});

const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;
