<template>
    <div>
        <NavbarComponent />
        <div class="max-w-screen h-[700px] bg-header-image bg-center flex items-center justify-center">
            <div class="container-xl max-w-screen-xl mx-auto text-indigo-100 flex flex-col items-center space-y-6">
                <h1 class="text-6xl drop-shadow-xl">Welcome to Logi online store</h1>
                <span class="text-xl">This is some subtitle message here</span>
                <button class="btn btn-primary">Check out products</button>
            </div>
        </div>
    </div>
</template>

<script>
// components
import NavbarComponent from './NavbarComponent.vue';
export default {
    name: 'HeaderComponent',
    components: {
        NavbarComponent,
    }
    
}
</script>

<style lang="scss" scoped>

</style>