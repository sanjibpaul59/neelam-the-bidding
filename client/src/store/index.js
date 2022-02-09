import { createStore } from 'vuex'

export default createStore({
    state: {
        users: [
            { id: 0.34, email: 'paul12@mail.com', password: 12, isLoggedIn: false },
        ],
        user: {},
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
    },
    getters: {
        getItems(state) {
            return state.items
        },
        getUsers(state) {
            return state.users
        },
        loggedInUser(state) {
            return state.user
        },
    },
    mutations: {
        ADD_USER(state, payload) {
            let newUser = payload
            state.users.push(newUser)
        },
        AUTH_USER(state, payload) {
            let user = state.users.find((user) => user.email === payload.email)
            if (user) {
                state.user = user
                state.user.isLoggedIn = true
                console.log(user)
            } else {
                state.user = {}
            }
        },
        SIGN_OUT(state, payload) {
            console.log(payload.id)
            let user = state.users.find((user) => user.id === payload.id)
            if (user) {
                state.user = {}
                user.isLoggedIn = false
            }
            const index = state.users.indexOf(user)
            state.users.splice(index, 1, user)
        },
    },
    actions: {
        async addUser({ commit }, payload) {
            let newUser = await payload
            let userId = Math.random()
            newUser.id = userId
            newUser.isLoggedIn = false
            console.log(newUser)
            commit('ADD_USER', newUser)
        },
        async authUser({ commit }, payload) {
            let user = await payload
            commit('AUTH_USER', payload)
        },
        async userSignout({ commit }, payload) {
            let userId = await payload
            commit('SIGN_OUT', userId)
        },
    },
    modules: {},
})