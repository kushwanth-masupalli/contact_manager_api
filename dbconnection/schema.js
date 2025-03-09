const mongoose = require('mongoose');

const mongooseSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: [true, 'please add the contact name']
    },
    email: {
        type: String,
        required: [true, 'please add the email address']
    },
    phoneno: {
        type: String,
        required: [true, 'please add the phone number']
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Contact', mongooseSchema);
