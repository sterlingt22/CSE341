const mongodb = require('../db.connect');

const getData = async (req, res, next) => {
    try {
        const result = await mongodb.getDb().db().collection('user').find().toArray();
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result[0]);
    } catch (error) {
        next(error);
    }
};

module.exports = { getData };
