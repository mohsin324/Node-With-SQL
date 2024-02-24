const router = require('express').Router();
const { user } = require('./controller');


router.route('/user').post(user);
module.exports = {
    router
}