<template>
       <div class="container-xl max-w-screen-xl mx-auto py-20 px-4">
        <div class="flex">
            <div :class="['flex-shrink-0 transition-all duration-300 ease-out transform shadow-lg py-4 px-3 rounded-xl bg-indigo-200', sidebarOpen ? 'w-64' : 'w-16']">
                <button @click="toggleSidebar" :class="['flex items-center justify-center']">
                    <Icon icon="mage:filter-fill" :class="[sidebarOpen ? 'transition-all duration-300 ease-out rotate-90' : '', 'w-10 h-10 text-indigo-50']" />
                </button>
                <SidebarComponent v-if="sidebarOpen" />
            </div>
            <div :class="['flex-grow ml-16']">
                <div class="grid grid-cols-3 gap-5">
                    <div v-for="(image, index) in images" class="m-2">
                        <ProductItemComponent :key="index" :image="image" title="Some Title" price="231" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Components
import ProductItemComponent from '../components/Product/ProductItemComponent.vue'
import SidebarComponent from '../components/Main/SidebarComponent.vue'
// Icons 
import { Icon } from '@iconify/vue'

export default {
    components: {
        ProductItemComponent,
        SidebarComponent,
        Icon,
    },
    data() {
        return {
            sidebarOpen: false
        }
    },
    setup() {
        const images = [
            'https://placehold.co/600x400',
            'https://placehold.co/600x400',
            'https://placehold.co/600x400',
            'https://placehold.co/600x400',
            'https://placehold.co/600x400',
        ]
        return {
            images
        }
    },
    methods: {
        toggleSidebar() {
            this.sidebarOpen = !this.sidebarOpen
            console.log(this.sidebarOpen)
        },
    },
}
</script>

<style lang="scss" scoped>

</style>