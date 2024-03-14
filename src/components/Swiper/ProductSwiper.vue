<template>
  <div class="container-lg max-w-screen-xl relative">
    <Swiper
      class="max-w-screen-lg"
      :slides-per-view="3"
      :space-between="50"
      :modules="modules"
      :navigation="{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}"
      :pagination="{el: '.swiper-pagination', clickable: true}"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <SwiperSlide v-for="prod in products" :key="prod.id">
        <ProductItemComponent :prod="prod" />
      </SwiperSlide>
    </Swiper>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination absolute bottom-0"></div>
  </div>
</template>


<script>
// Vue core
import { ref, onMounted, watch } from 'vue';
// Import Components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import ProductItemComponent from '../Product/ProductItemComponent.vue'
// Stores
import useProductStore from '../../store/productsStore'
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

export default {
    name: 'ProductSwiper',
    components: {
      Swiper,
      SwiperSlide,
      ProductItemComponent,
    },
    setup() {
      const productsStore = useProductStore();
      const products = ref([])
      onMounted(async () => {
          await productsStore.fetchProducts()
      })
      watch(() => productsStore.items, (newItems) => {
          products.value = newItems.slice(0, 8)
      })
      const onSwiper = (swiper) => {
      };
      const onSlideChange = () => {
      };
      return {
        products,
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y],
      };
    },
};
</script>

<style>
.swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: var(--swiper-pagination-bottom, -50px);
}
.swiper-button-next, .swiper-button-prev {
  color: rgb(238 242 255);
}
.swiper-pagination-bullet {
  background-color: rgb(238 242 255);
}
</style>