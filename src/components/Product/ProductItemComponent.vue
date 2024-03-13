<template>
    <div class="w-full max-w-sm bg-indigo-50 border border-gray-200 rounded-lg shadow">
        <a href="#">
            <img class="pb-4 rounded-t-lg" :src="image" alt="product image" />
        </a>
        <div class="px-5 pb-5">
            <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900">{{ title }}</h5>
            </a>
            <div class="flex items-center mt-2.5 mb-5">
                <div class="flex items-center space-x-1 rtl:space-x-reverse">
                    <Icon icon="ic:baseline-star" class="h-5 w-5 text-yellow-500" />
                    <Icon icon="ic:baseline-star" class="h-5 w-5 text-yellow-500" />
                    <Icon icon="ic:baseline-star" class="h-5 w-5 text-yellow-500" />
                    <Icon icon="ic:baseline-star" class="h-5 w-5 text-yellow-500" />
                    <Icon icon="ic:baseline-star" class="h-5 w-5 text-gray-600" />
                </div>
                <span class="text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-800 ms-3">4.0</span>
            </div>
            <div class="flex items-center justify-between">
                <span class="text-2xl font-bold text-indigo-500">${{ price }}</span>
                <a href="#" class="flex items-center btn-primary rounded px-4 py-2 space-x-2">
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

export default {
    name: 'ProductItemComponent',
    components: {
        Icon,
    },
    props: {
        title: {
            type: String,
        },
        image: {
            type: String,
        },
        price: {
            type: String,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>