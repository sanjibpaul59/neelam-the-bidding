import { io } from 'socket.io-client'

class SocketService {
    socket
    constructor() {}
    setupSocketConnection() {
        this.socket = io(process.env.SERVER_SOCKET_PORT)

        this.socket.emit('my-message', 'Hello there from Vue.')
    }
    disconnect() {
        if (this.socket) {
            this.socket.disconnect()
        }
    }
}

export default new SocketService()