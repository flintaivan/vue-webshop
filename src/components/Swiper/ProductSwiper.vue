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
      <SwiperSlide v-for="(image, index) in images" :key="index">
        <ProductItemComponent title="Some title" price="523" :image="image" />
      </SwiperSlide>
    </Swiper>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination absolute bottom-0"></div>
  </div>
</template>


<script>
// Import Components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import ProductItemComponent from '../Product/ProductItemComponent.vue'
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
      const images = [
        'https://placehold.co/600x400',
        'https://placehold.co/600x400',
        'https://placehold.co/600x400',
        'https://placehold.co/600x400',
        'https://placehold.co/600x400',
      ]
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        images,
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