import { ref } from "vue";
import { defineStore } from "pinia";

export default defineStore({
    id: 'products',
    state: () => ({
        items: [],
        currentPageNum: 0,
        limitPerPage: 30,
        hasMore: true,
    }),
    actions: {
        productsReceived(items) {
            if(items.length === 0) return this.hasMore = false

            this.items = [...this.items, ...items]
            this.currentPageNum += 1
        },

        resetProducts() {
            this.items = []
            this.currentPageNum = 0
            this.limitPerPage = 30
            this.hasMore = true
        },

        async fetchProducts() { 
            await fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(json => 
                this.items = json.products
            );
        },
    },
})