<template>
    <div 
        id="animation-box" 
        class="relative inline-block cursor-pointer animate__animated bg-orange-500 p-4 rounded-full" 
        @animationend="removeAnimateClass" 
        ref="cartRef"
    >
        <Icon icon="mdi:cart" class="w-8 h-8 text-indigo-50 relative"/>
        <Badge :value="totalItems" class="bg-orange-800 absolute top-0 left-8 transform translate-x-1/2 -translate-y-1/2" />
    </div>
</template>


<script>
// Vue core
import { defineComponent, ref, watch } from "vue"
// Components
import Badge from 'primevue/badge';
// Icons
import { Icon } from '@iconify/vue';


    export default defineComponent({
        name: 'CartToggleButtonComponent',
        components: {
            Icon,
            Badge,
        },
        props: {
            totalItems: {
                type: Number,
                default: 0
            }
        },
        setup(props) {
            const cartRef = ref(null)
            watch(() => props.totalItems, () => {
                cartRef.value.classList.add('animate__heartBeat')
            });
            const removeAnimateClass = () => {
                cartRef.value.classList.remove('animate__heartBeat')
            }
            return {
                cartRef,
                removeAnimateClass
            }
        }
    })
</script>

<style lang="scss" scoped>

</style>