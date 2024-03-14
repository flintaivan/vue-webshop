<template>
    <Dialog v-model:visible="toggleCart" modal header="Header" :closable="false" :style="{ width: '56rem' }">
        <template #header>
            <div class="w-full max-w-bd-sm mx-auto p-6 flex items-center justify-between border-b-2">
                <div class="flex flex-col">
                    <h2 class="text-2xl font-bold">Cart</h2>
                    <div>Total: ${{ totalCost }}</div>
                </div>
                <Button icon="pi pi-times" @click="closeCart" class="text-red-500 border-2 border-red-500" severity="danger" rounded outlined aria-label="Cancel" />
            </div>
        </template>
        <CartListComponent />
    </Dialog>
</template>

<script>
// Vue Core
import { defineComponent } from 'vue'
// Components
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import CartListComponent from './CartListComponent.vue';
import { Icon } from '@iconify/vue';


export default defineComponent({
    name: 'MainDialogComponent',  
    components: {
        CartListComponent,
        Button,
        Dialog,
        Icon,
    },
    props: {
        toggleCart: {
            type: Boolean,
        },
        totalCost: {
            type: Number,
        },
    },
    setup(props, {emit}) {
        const closeCart = () => {
            emit('closeCart')
        };

        return {
            closeCart,
        }
    }
})
</script>

<style lang="scss" scoped>
</style>