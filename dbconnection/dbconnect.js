const mongoose = require('mongoose');

// Replace with your MongoDB connection string
const uri = 'mongodb://localhost/contacts';

async function connectToMongo() {
  try {
    // Connect to MongoDB using Mongoose
    const connection = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB successfully!');
    console.log('Connected to Database:', connection.connection.name); // Prints database name
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}



// Ensure the connection closes when the app exits
process.on('exit', async () => {
  await mongoose.disconnect();
});

module.exports = connectToMongo ;