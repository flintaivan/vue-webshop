<template>
  <div>
    <HeaderComponent />
    <div class="container-xl max-w-screen-xl mx-auto p-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// Components
import HeaderComponent from './components/Header/HeaderComponent.vue';

export default {
  components: {
    HeaderComponent,
  }
}
</script>


<style scoped>
</style>
