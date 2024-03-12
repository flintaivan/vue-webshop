<template>
  <div>
    <HeaderComponent />
      <router-view></router-view>
      <FooterComponent />
  </div>
</template>

<script>
// Components
import HeaderComponent from './components/Header/HeaderComponent.vue'
import FooterComponent from './components/Footer/FooterComponent.vue';
export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>


<style scoped>
</style>
