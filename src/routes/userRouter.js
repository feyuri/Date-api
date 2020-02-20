const userController = require('../controller/usersController');

module.exports = server => {
    server.post('/new/user', userController.store)
}

