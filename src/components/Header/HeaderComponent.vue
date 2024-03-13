<template>
    <div>
        <NavbarComponent />
        <div 
        :class="isHomepage.height"
        class="max-w-screen bg-header-image bg-center flex items-center justify-center">
            <div class="container-xl max-w-screen-xl mx-auto text-indigo-100 flex flex-col items-center space-y-6">
                <h1 class="text-6xl drop-shadow-xl">{{ isHomepage.title }}</h1>
                <span class="text-xl">{{ isHomepage.subtitle }}</span>
                <button v-if="isHomepage.button" class="btn btn-primary">Check out products</button>
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
    },
    props: {
        isHomepage: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>

</style>