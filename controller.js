const { getConn } = require('./db');
const user = async(req, res, next) => {
    let { firstName, lastName } = req.body;
    await getConn(firstName, lastName);
    return res.status(200).json({
        message: 'success',
        description: 'Hello Node JS',
        user: req.body
    });
}


module.exports = {
    user
}