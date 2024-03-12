<template>    
    <div class="mt-10">
        <!-- <h2 class="text-start mt-20 mb-10 bg-indigo-50 ">Read About us</h2> -->
        <!-- First section start -->
        <div class="container-xl max-w-screen-xl mx-auto p-4">
            <div class="grid grid-cols-12 items-center gap-10 py-10">
                <div class="col-span-5">
                    <img src="https://placehold.co/600x400" alt="" class="rounded-lg">
                </div>
                <div class="col-span-7 flex flex-col space-y-4 p-4">
                    <h3>Some title</h3>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, debitis dolorem eligendi soluta, deleniti ab officiis doloribus quod ullam quasi quidem, tempora illo perspiciatis? Tenetur beatae eligendi molestias quasi dolore recusandae voluptatibus commodi hic quisquam, nam nemo corporis maxime sed.0</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, debitis dolorem eligendi soluta, deleniti ab officiis doloribus quod ullam quasi quidem, tempora </span>
                    <div>
                        <button class="flex items-center space-x-2 py-2 text-indigo-700 hover:text-indigo-500 hover:underline">
                            <span>Read more</span>
                            <Icon icon="ic:round-double-arrow" class="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
            <!-- First section end -->

            <!-- Second section start -->
            <div class="grid grid-cols-12 items-center gap-10 py-20">
                <div class="col-span-7 flex flex-col space-y-4 p-4">
                    <h3>Some title</h3>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, debitis dolorem eligendi soluta, deleniti ab officiis doloribus quod ullam quasi quidem, tempora illo perspiciatis? Tenetur beatae eligendi molestias quasi dolore recusandae voluptatibus commodi hic quisquam, nam nemo corporis maxime sed.0</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, debitis dolorem eligendi soluta, deleniti ab officiis doloribus quod ullam quasi quidem, tempora </span>
                    <div>
                        <button class="flex items-center space-x-2 py-2 text-indigo-700 hover:text-indigo-500 hover:underline">
                            <span>Read more</span>
                            <Icon icon="ic:round-double-arrow" class="h-4 w-4" />
                        </button>
                    </div>
                </div>
                <div class="col-span-5">
                    <img src="https://placehold.co/600x400" alt="" class="rounded-lg">
                </div>
            </div>
            <!-- Second section end -->
        </div>

        <!-- Products section start -->
        <div class="bg-indigo-950 text-indigo-50 h-auto pb-20">
            <div class="container-xl max-w-screen-xl mx-auto py-20 px-4">
                <h2 class="pb-16 text-center">Check out logi products</h2>
                <ProductSwiper />
            </div>
        </div>
        <!-- Products section end -->
        
        <!-- Newsletter section start -->
        <div class="bg-indigo-300 text-indigo-50">
            <div class="container-xl max-w-screen-xl mx-auto py-16 px-4 flex items-end justify-center space-x-10">
                <div>
                    <span class="text-xl font-bold">Want 15% off?</span>
                    <h2 class="font-bold">Register to our newsletter</h2>
                </div>
                <div>
                    <form action="" class="flex items-end space-x-5">
                        <div class="flex flex-col">
                            <!-- <label for="email">Email</label> -->
                            <input type="text" class="rounded p-3" placeholder="Email">
                        </div>
                        <div>
                            <button class="btn btn-primary">Register</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
        <!-- Newsletter section end -->

    </div>
</template>

<script>
// Components
import ProductItemComponent from '../components/Product/ProductItemComponent.vue';
import ProductSwiper from '../components/Swiper/ProductSwiper.vue';
// Icons
import { Icon } from '@iconify/vue';

export default {
    components: {
        Icon,
        ProductItemComponent,
        ProductSwiper,
    },
}
</script>

<style lang="scss" scoped>

</style>