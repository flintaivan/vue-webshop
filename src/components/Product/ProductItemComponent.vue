<template>
    <div class="w-full max-w-sm bg-[#fafafa] border border-gray-200 rounded-lg shadow">
        <a href="#">
            <img class="h-48 w-full pb-4 rounded-t-lg" :src="prod.thumbnail" alt="product image" />
        </a>
        <div class="px-5 pb-5">
            <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900">{{ prod.title }}</h5>
            </a>
            <div class="flex items-center mt-2.5 mb-5">
                <div class="flex items-center space-x-1 rtl:space-x-reverse">
                    <Icon icon="ic:baseline-star" class="h-5 w-5 text-yellow-500" />
                    <Icon icon="ic:baseline-star" class="h-5 w-5 text-yellow-500" />
                    <Icon icon="ic:baseline-star" class="h-5 w-5 text-yellow-500" />
                    <Icon icon="ic:baseline-star" class="h-5 w-5 text-yellow-500" />
                    <Icon icon="ic:baseline-star" class="h-5 w-5 text-gray-600" />
                </div>
                <span class="text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-800 ms-3">{{prod.rating}}</span>
            </div>
            <div class="flex items-center justify-between">
                <span class="text-2xl font-bold text-indigo-500">${{ prod.price }}</span>
                <a href="#" @click.prevent="addToCart(prod)" class="flex items-center btn-primary rounded px-4 py-2 space-x-2">
                    <Icon icon="ion:cart" class="w-4 h-4" />
                    <span>Add to cart</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
// Icons
import { Icon } from '@iconify/vue';
// Stores
import useCartStore from '../../store/cartStore'

export default {
    name: 'ProductItemComponent',
    components: {
        Icon,
    },
    props: {
        prod: {
            type: Object,
        },
    },
    setup(props) {
        const cartStore = useCartStore()
        const addToCart = (prod) => {
            cartStore.addItem(prod)
        };
        return {
            addToCart,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>