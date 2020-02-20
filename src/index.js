const restify = require('restify');
const routes = require('../src/routes/userRouter')


const server = restify.createServer();



server.use(restify.plugins.bodyParser())
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*")
    res.header('Access-Control-Allow-Methods', "GET", "POST", "PUT", "DELETE")
    res.header('Access-Control-Allow-Headers', 'Content-Type', 'Accept')
    next()
})

routes(server)

server.listen(3000, () => { console.log('%s listening at %s', server.name, server.url) });


