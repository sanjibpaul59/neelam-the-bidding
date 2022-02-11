const app = require('express')()
const http = require('http').createServer(app)
const morgan = require('morgan')

app.use(morgan('dev'))

const io = require('socket.io')(http, {
    cors: {
        origins: ['http://localhost:8080/'],
    },
})
app.get('/', (req, res) => {
    res.send('<h1>Hey Socket</h1>')
})

io.on('connection', (socket) => {
    console.log(socket.id, ' connected')

    socket.on('disconnect', () => {
        console.log(socket.id, 'disconnected')
    })

    if (io.sockets.connected)
        socket.emit('connections', Object.keys(io.sockets.connected).length)
    else socket.emit('connections', 0)

    socket.on('emit_message', (msg) => {
        console.log('message: ' + msg)
    })

    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data)
    })
})

http.listen(8000, () => {
    console.log('listening on *:8000')
})