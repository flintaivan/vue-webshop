<template>
    <div id="list-box" ref="cartList" class="h-full max-w-bd-sm mx-auto relative overflow-auto pb-16">    
        <ul class="w-full px-2" v-if="cartStore.items.length > 0">
            <li v-for="item in cartStore.items" :key="item.id" class="mt-8 text-secondary flex items-center">
                <div class="w-96">
                    <img class="h-52 w-full" :src="item.thumbnail" alt="">
                </div>
                <div class="flex flex-col p-4 ms-10">
                    <div class="text-xl text-secondary font-mont font-bold">{{ item.title }}</div>
                    <div class="text-sm text-secondary font-ssp flex py-4">
                        <!-- <span class="px-2">{{  }}</span> -->
                        <span class="font-bold">Price: </span>
                        <span class="px-2">${{ item.price }}</span>
                    </div>
                    <div class="flex items-center">
                        <div class="">
                            <Button @click.prevent="removeFromCart(item)" icon="pi pi-minus" class="border-2 text-red-500 border-red-500 hover:bg-red-500 hover:text-white" severity="danger" aria-label="Cancel" />
                        </div>                    
                        <span class="px-3">{{ item.count }}</span>
                        <div class="">
                            <Button @click.prevent="addToCart(item)" icon="pi pi-plus" class="border-2 text-green-500 border-green-500 hover:bg-green-500 hover:text-white" severity="success" aria-label="Cancel" />
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <div v-else>
            <span class="text-xl p-6">No items in cart...</span>
        </div>
    </div> 
</template>

<script>
//  Vue core
import { defineComponent } from 'vue'
// Components
import Button from 'primevue/button';
// Stores
import useCartStore from '../../store/cartStore'

export default defineComponent({
    name: 'CartListComponent',
    components: {
        Button,
    },
    emits: ['changeTab'],
    data() {
        return {
            cartList: null
        }
    },
    setup() {
        const cartStore = useCartStore();
        const addToCart = (item) => {
            cartStore.addItem(item)
        };
        const removeFromCart = (item) => {
            cartStore.removeItem(item)
        }
        return {
            cartStore,
            addToCart,
            removeFromCart,
        }
    }
})
</script>

<style lang="scss" scoped>

</style>