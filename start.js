require('dotenv').config();

const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('open', ()=>{
    console.log('Mongoose connection open');
})
.on('error', (err)=>{
    console.log(`Connection error: ${err.message}`);
});


const app = require('./app');

require('./models/Contacts');

const server = app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Express is running on port ${server.address().port}`);
})
