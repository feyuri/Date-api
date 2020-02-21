
const User = require('../models/user');

module.exports = {
    async store(req, res, next) {
        try {
            let { name, email, number, password } = req.body
            let user = await Users.findOne({ name, email, nunber, password })
            if (!user) {
                let user = await new user(req.body)
                user.save().then(aluno => {
                    resp.json(aluno)
                })
            } else {
                resp.json(user)
            }


        } catch{
            res.status(400)
            res.json({ message: error.message })

        }

    },
    async indexedDB(req, resp, next) {
        try {
            User.find().then(users => {
                resp.json(users)
                return next()
            })

        } catch{
            res.status(404)
            res.json({ message: 'not found' })


        }


    },
}
