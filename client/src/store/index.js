import { createStore } from 'vuex'
import router from '../router'
import { auth } from '../firebase/firebase.config'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth'

export default createStore({
    state: {
        user: null,
        items: [{
                id: 1,
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUysQXkwzasWQmSAmHbWHb-5yalLDFQrnduw&usqp=CAU',
                itemName: 'Exclusive Item',
                description: 'Vintage collection. Item from 1901. Used by the Great King Paul I',
                baseValue: 2000,
                bidAmount: 15,
                bidStatus: false,
                sellStatus: false,
                createdAt: new Date(),
                sellPrice: 2015,
                biddingStartsAt: new Date(),
                biddingEndsAt: new Date(),
            },
            {
                id: 2,
                imageUrl: 'http://www.antiquesdealershop.com/wp-content/uploads/2016/04/decorative-cut-stone-statues-for-sale-in-india-300x300.jpg',
                itemName: 'Exclusive Item 2',
                description: 'Vintage collection. Item from 1901. Used by the Great King Paul I',
                baseValue: 3000,
                bidAmount: 20,
                bidStatus: true,
                sellStatus: false,
                createdAt: new Date(),
                sellPrice: 2015,
                biddingStartsAt: new Date(),
                biddingEndsAt: new Date(),
            },
        ],
        item: {},
    },
    getters: {
        getItems(state) {
            return state.items
        },
        getItem(state) {
            return state.item
        },
        loggedInUser(state) {
            return state.user
        },
    },
    mutations: {
        SET_USER(state, payload) {
            state.user = payload
        },
        SIGN_OUT(state, payload) {
            state.user = null
        },
        SOCKET_CONNECT(state) {
            state.isConnected = true
        },
        SOCKET_DISCONNECT(state) {
            state.isConnected = false
        },
        FETCH_ITEM(state, payload) {
            console.log('payload: ' + payload)
            state.item = state.items.find((i) => i.id == payload)
        },
    },
    actions: {
        async register({ commit }, userInfo) {
            const { email, password } = userInfo
            try {
                await createUserWithEmailAndPassword(auth, email, password)
            } catch (error) {
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        alert('Email already in use')
                        break
                    case 'auth/weak-password':
                        alert('Weak Password')
                        break
                    case 'auth/invalid-email':
                        alert('Invalid Email')
                        break
                    case 'auth/operation-not-allowed':
                        alert('Operation not allowed')
                        break
                    default:
                        alert('Something went wrong')
                }
                return
            }
            commit('SET_USER', auth.currentUser)
            router.push('/')
        },
        async login({ commit }, userInfo) {
            const { email, password } = userInfo
            try {
                await signInWithEmailAndPassword(auth, email, password)
            } catch (error) {
                switch (error.code) {
                    case 'auth/user-not-found':
                        alert('User not found')
                        break
                    case 'auth/wrong-password':
                        alert('wrong credentials')
                        break
                    case 'auth/wrong-email':
                        alert('wrong credentials')
                        break
                    default:
                        alert('Something went wrong')
                }
                return
            }
            commit('SET_USER', auth.currentUser)
            router.push('/')
        },
        async logout({ commit }) {
            await signOut(auth)
            commit('SIGN_OUT')
            router.push('/signin')
        },
        fetchUser({ commit }) {
            auth.onAuthStateChanged(async(user) => {
                if (user === null) {
                    commit('SIGN_OUT')
                } else {
                    commit('SET_USER', user)

                    if (
                        router.isReady() &&
                        router.currentRoute.value.path === '/signin'
                    ) {
                        router.push('/')
                    }
                }
            })
        },
        async showItem({ commit }, id) {
            let itemId = id
            console.log(itemId, id)
            commit('FETCH_ITEM', itemId)
        },
    },
    modules: {},
})