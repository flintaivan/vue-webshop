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
        <div class="bg-indigo-950 text-indigo-50 h-auto">
            <div class="container-xl max-w-screen-xl mx-auto py-16 px-4">
                <h2 class="pb-16 text-center">Check out logi products</h2>
                <div class="flex flex-wrap space-x-6 items-center justify-center">
                    <ProductItemComponent />
                    <ProductItemComponent />
                    <ProductItemComponent />
                </div>
            </div>
        </div>
        <!-- Products section end -->

    </div>
</template>

<script>
// Components
import ProductItemComponent from '../components/Product/ProductItemComponent.vue'
// Icons
import { Icon } from '@iconify/vue';

export default {
    components: {
        Icon,
        ProductItemComponent,
    },
}
</script>

<style lang="scss" scoped>

</style>