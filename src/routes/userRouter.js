const userController = require('../controller/usersController');

module.exports = server => {
    server.post('/new/user', userController.store)
    server.get('/user', userController.indexedDB)

    server.get('/users/:id', (req, resp, next) => {
        User.findById(req.params.id).then(user => {
            if (aluno) {
                resp.json(user)
            } else {
                resp.status(404)
                resp.json({ message: 'notfound' })
            }
        })
    })



}

