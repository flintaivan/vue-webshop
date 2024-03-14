import { ref } from "vue";
import { defineStore } from "pinia";

export default defineStore({
    id: 'store',
    state: () => ({
        items: ref([]),
        totalItems: ref(0),
        totalCost: ref(0)
    }),

    actions: {
        addItem(item) {
            let targetItem = this.items.filter(currItem => currItem.id === item.id)[0]

            if (targetItem) targetItem.count += 1
            else this.items = [...this.items, {...item, count: 1}]
    
            this.totalItems += 1
            this.totalCost += item.price
        },
    
        removeItem(item) {
            let targetItem = this.items.filter(currItem => currItem.id === item.id)[0]
    
            if(targetItem.count === 1) this.items = this.items.filter(currItem => currItem.id != item.id)
            else targetItem.count -= 1
    
            this.totalItems -= 1
            this.totalCost -= item.price
        },
    }
}) 