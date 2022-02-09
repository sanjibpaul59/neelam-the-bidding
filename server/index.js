const app = require('express')()
const http = require('http').createServer(app)

const io = require('socket.io')(http, {
    cors: {
        origins: ['http://localhost:8080'],
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
    socket.on('my-message', (arg) => {
        console.log(`message ${arg}`)
    })
})

http.listen(8000, () => {
    console.log('listening on *:8000')
})