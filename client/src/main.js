import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import VueSocketIO from 'vue-3-socket.io'
import SocketIO from 'socket.io-client'

createApp(App)
    .use(
        new VueSocketIO({
            debug: true,
            connection: SocketIO('http://localhost:8000'),
            vuex: {
                store,
                actionPrefix: 'SOCKET_',
                mutationPrefix: 'SOCKET_',
            },
        })
    )
    .use(store)
    .use(router)
    .mount('#app')