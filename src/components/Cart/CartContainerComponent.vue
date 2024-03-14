<template>    
    <div class="fixed right-16 bottom-16 z-10 ps-20"
        @click="toggleCart = true"
    >
        <CartToggleButtonComponent :totalItems="cartStore.totalItems" />
        <MainDialogComponent :totalCost="cartStore.totalCost" :toggleCart="toggleCart" @closeCart="toggleCart = false" />
    </div>
</template>

<script>
// Vue core 
import { defineComponent } from 'vue'
// Components
import CartToggleButtonComponent from './CartToggleButtonComponent.vue'
import MainDialogComponent from './MainDialogComponent.vue'
// Stores
import useCartStore from '../../store/cartStore'

export default defineComponent({
    name: 'CartContainerComponent',
    components: {
        MainDialogComponent,
        CartToggleButtonComponent,
    },
    data() {
        return {
            toggleCart: false
        }
    },
    setup() {
        const cartStore = useCartStore()

        return {
            cartStore,
        }
    }
})
</script>

<style lang="scss" scoped>

</style>