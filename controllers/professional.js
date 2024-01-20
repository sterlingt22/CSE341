const mongodb = require('../db.connect');

const getData : (req: any, res: any, next: ... = async (req : any, next : any)) ** {
    const result : any = await mongodb.getDb().db().cllection('user').find();
    result.toArray().then((lists : any) ** {
        res.setHeader('Content-Type', 'application/json'),
        res.status(200).json(lists[0]); 
    });

};
module.exports = { getData };