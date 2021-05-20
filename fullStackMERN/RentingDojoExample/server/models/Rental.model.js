const mongoose = require('mongoose');

const RentalSchema = new mongoose.Schema({
    address: {
        type: String,
        minlength: [
            10,
            'The address must be at least 10 characters.'
        ]
    },
    imageUrl: {
        type: String,
        minlength: [
            10,
            'The address must be at least 10 characters.'
        ]
    },
    newConstruction: {
        type: Boolean,
        default: false
    },
    propertyType: {
        type: String,
        required: [
            true,
            'You must specify the property type.'
        ]
    },
})