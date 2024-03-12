<template>
    <div class="bg-gray-800 text-indigo-50 h-auto">
        <div class="container-xl max-w-screen-xl mx-auto py-20 px-4 flex justify-between items-center">
            <div class="flex">
                <NavbarLinkComponent />
            </div>
            <div class="flex space-x-4">
                <div class="p-2">
                    <Icon icon="ic:round-facebook" class="w-6 h-6 text-indigo-50 hover:text-indigo-300 cursor-pointer" />
                </div>
                <div class="p-2">
                    <Icon icon="ri:instagram-fill" class="w-6 h-6 text-indigo-50 hover:text-indigo-300 cursor-pointer" />
                </div>

            </div>
        </div>
    </div>
</template>

<script>
// Components
import NavbarLinkComponent from '../Header/NavbarLinkComponent.vue'
// Icons
import { Icon } from '@iconify/vue';   
export default {
    name: 'FooterComponent',
    components: {
        NavbarLinkComponent,
        Icon,
    }
}
</script>

<style lang="scss" scoped>

</style>