<template>
    <router-link to="/" class="flex items-start px-4 py-3 space-x-2 transition-all duration-150 ease-linear hover:bg-indigo-900 rounded">
        <Icon icon="typcn:home" class="h-5 w-5" />
        <span>Home</span>
    </router-link>
    <router-link to="/about" class="flex items-start px-4 py-3 space-x-2 transition-all duration-150 ease-linear hover:bg-indigo-900 rounded">
        <Icon icon="mdi:eye" class="h-5 w-5" />
        <span>About</span>
    </router-link>
    <router-link to="/product" class="flex items-start px-4 py-3 space-x-2 transition-all duration-150 ease-linear hover:bg-indigo-900 rounded">
        <Icon icon="ri:box-3-fill" class="h-5 w-5" />
        <span>Products</span>
    </router-link>
    <router-link to="/contact" class="flex items-start px-4 py-3 space-x-2 transition-all duration-150 ease-linear hover:bg-indigo-900 rounded">
        <Icon icon="ic:baseline-mail" class="h-5 w-5" />
        <span>Contact</span>
    </router-link>
</template>

<script>
// Icons 
import { Icon } from '@iconify/vue';
    export default {
        name: 'NavbarLinkComponent',
        components: {
            Icon
        }
    }
</script>

<style lang="scss" scoped>

</style>