
const User = require('../models/user');

module.exports = {
    async store(req, res, next) {
        try {
            console.log('aqui')
            console.log(req.body.data)
            res.json(true)
        } catch{ }

    }
}
