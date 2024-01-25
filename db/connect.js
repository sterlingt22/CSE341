const { MongoClient } = require('mongodb');

const initDb = async (callback) => {
    try {
        // Your connection string
        const uri = 'mongodb://your-mongodb-uri';

        // Create a new MongoClient
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        // Connect to the MongoDB server
        await client.connect();

        // Call the callback with the client
        callback(null, client);
    } catch (error) {
        // Log the error or handle it appropriately
        console.error('Error initializing MongoDB:', error);
        callback(error);
    }
};