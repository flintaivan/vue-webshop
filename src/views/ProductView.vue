<template>
       <div class="container-xl max-w-screen-xl mx-auto py-20 px-4">
        <div class="flex">
            <div :class="['mt-2 sticky top-20 left-0 flex-shrink-0 transition-all duration-300 ease-out transform shadow-lg py-3 px-3 rounded-xl bg-orange-300', sidebarOpen ? 'w-64 h-96' : 'w-16 h-16']">
                <button @click="toggleSidebar" :class="['flex items-center justify-center']">
                    <Icon icon="mage:filter-fill" :class="[sidebarOpen ? 'transition-all duration-300 ease-out rotate-90' : '', 'w-10 h-10 text-indigo-950']" />
                </button>
                <SidebarComponent v-if="sidebarOpen" />
            </div>
            <div :class="['flex-grow ml-16']">
                <div class="grid grid-cols-3 gap-5">
                    <div v-for="prod in products" class="m-2" :key="prod.id">
                        <ProductItemComponent :prod="prod" />
                        <!-- {{ console.log(prod) }} -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Vue core
import { onMounted, watch, ref } from 'vue'
// Components
import ProductItemComponent from '../components/Product/ProductItemComponent.vue'
import SidebarComponent from '../components/Main/SidebarComponent.vue'
// Icons 
import { Icon } from '@iconify/vue'
// Data
import useProductStore from '../store/productsStore'

export default {
    components: {
        ProductItemComponent,
        SidebarComponent,
        Icon,
    },
    data() {
        return {
            sidebarOpen: false,
        }
    },
    setup() {
        const productsStore = useProductStore();
        const products = ref([])
        onMounted(async () => {
            await productsStore.fetchProducts()
        })
        watch(() => productsStore.items, (newItems) => {
            products.value = newItems
            console.log(typeof newItems[0].price)
        })
        return {
            products,
        }
    },
    methods: {
        toggleSidebar() {
            this.sidebarOpen = !this.sidebarOpen;
        },
    },
}
</script>

<style lang="scss" scoped>

</style>