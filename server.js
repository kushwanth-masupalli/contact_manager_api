const express = require('express');
const errorhandler = require('./middleware/errorhandler');
const connectToMongo = require('../contact_manager_api/dbconnection/dbconnect');


require('dotenv').config(); // Corrected dotenv import

const app = express();
app.use(express.json())
app.use('/api/contacts',require('./routes/route'));




app.use(errorhandler)
const PORT = process.env.PORT || 8080;
connectToMongo();
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
