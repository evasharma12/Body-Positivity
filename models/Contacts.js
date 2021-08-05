const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        //Mongoose will add a custom setter that 
        //removes leading and trailing whitespace using JavaScript's built-in String#trim().
        trim: true,
    },
    LastName: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    message: {
        type: String,
        trim: true,
    },
});

//compile a model from the Schema definition, and export it for use elsewhere in our app.
module.exports = mongoose.model('Contact', contactSchema);