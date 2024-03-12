<template>
    <div class="bg-indigo-950 text-indigo-100">
        <div class="container-xl max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between">
            <div>
                <Icon icon="simple-icons:logitech" class="h-14 w-14" />
            </div>
            <div class="flex space-x-6">
                <NavbarLinkComponent />
            </div>
        </div>
    </div>
</template>

<script>
// Components 
import NavbarLinkComponent from './NavbarLinkComponent.vue'
// Icons
import { Icon } from '@iconify/vue';
    export default {
        name: 'NavbarComponent',
        components: {
            Icon,
            NavbarLinkComponent,
        }
    }
</script>

<style lang="scss" scoped>

</style>