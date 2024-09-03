const mongoose = require('mongoose');

const SalesExecutiveSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
    gender: String,
    experienceYears: Number
});

const SalesExecutive = mongoose.model('SalesExecutive', SalesExecutiveSchema);
module.exports = SalesExecutive;
