const mongodb = require('../db.connect');

const getData = async (req, res, next) => {
    try {
        const db = mongodb.getDb();
        const result = await db.collection('user').find().toArray();

        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result);
    } catch (error) {
        // Instead of next(error), you might want to send an error response to the client
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getData };
