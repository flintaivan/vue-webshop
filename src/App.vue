<template>
  <div>
    <HeaderComponent />
      <router-view></router-view>
  </div>
</template>

<script>
// Components
import HeaderComponent from './components/Header/HeaderComponent.vue'
export default {
  components: {
    HeaderComponent,
  }
}
</script>


<style scoped>
</style>
