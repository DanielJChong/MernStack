const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    petName: { 
        type: String, 
        required: [ 
            true, 
            "Pet name is required"
        ],
        minlength: [
            3,
            "Pet name must be at least 3 characters"
        ]
    },
    petType: { 
        type: String, 
        required: [
            true, 
            "Pet type is required"
        ],
        minlength: [
            3,
            "Pet type must be at least 3 characters"
        ]
    },
    petDescription: { 
        type: String, 
        required: [
            true, 
            "Pet Description is required"
        ],
        minlength: [
            3,
            "Pet Description must be at least 3 characters"
        ]
    },
    skillOne: {},
    skillTwo: {},
    skillThree: {},
}, { timestamps: true });

module.exports.Pet = mongoose.model('Pet', PetSchema);