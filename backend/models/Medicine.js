const mongoose = require('mongoose');

const MedicineSchema = new mongoose.Schema({
    name: String,
    manufacturerName: String,
    price: Number,
    stock: Number,
    discount: Number
});

const Medicine = mongoose.model('Medicine', MedicineSchema);
module.exports = Medicine;
