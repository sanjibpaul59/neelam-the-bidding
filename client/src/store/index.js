import { createStore } from 'vuex'

export default createStore({
    state: {
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
    },
    mutations: {},
    actions: {},
    modules: {},
})