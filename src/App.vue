<template>
  <div>
    <HeaderComponent :isHomepage="isHomepage()" />
      <router-view></router-view>
      <FooterComponent />
  </div>
</template>

<script>
// Vue core
import { useRoute } from 'vue-router';
import { watch } from 'vue';
// Components
import HeaderComponent from './components/Header/HeaderComponent.vue'
import FooterComponent from './components/Footer/FooterComponent.vue';
export default {
  components: {
    HeaderComponent,
    FooterComponent
  },
  setup() {
    const route = useRoute()
    const isHomepage = () => {
      let data
      if(route.name == 'Home') {
        data = {
          height: 'h-[700px]',
          title: 'Welcome to Logi online store',
          subtitle: 'This is some subtitle message here',
          button: true
          } 
      } else {
        data = {
          height: 'h-[300px]',
          title: 'Check out all products',
          subtitle: 'This is some subtitle message here',
          button: false
          } 
        }
        return data
      } 
    return {
      isHomepage,
    }
  },
}
</script>


<style scoped>
</style>
