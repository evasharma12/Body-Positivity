const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({

    email: {
        type: String,
        trim: true,
    },

});

//compile a model from the Schema definition, and export it for use elsewhere in our app.
module.exports = mongoose.model('Email', emailSchema);