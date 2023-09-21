
<script setup>
import {ref, onMounted, reactive} from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const productId = useRoute().params.id;
const product = reactive({});

onMounted(() => {
  axios.get(`https://dummyjson.com/products/${productId}`).then((response) => {
    product.id = response.data.id;
    product.title = response.data.title;
    product.description = response.data.description;
    product.price = response.data.price;
    product.thumbnail = response.data.thumbnail;
    product.images = response.data.images;
    product.discountPercentage = response.data.discountPercentage;
  });
});

</script>



<template>
  <div class="container mx-auto md:p-10 p-5">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <img :src="product.thumbnail" class="" alt="" />

        <div class="hidden md:grid md:grid-cols-4 items-center mt-4" v-for="(image,index) in product.images" :key="index">
          <img
            :src="image"
            class="h-32 mx-auto"
            alt=""
          />
        </div>
      </div>
      <div class="md:flex-1 px-4">
        <h2
          class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl"
        >
          {{product.description}}
        </h2>
        <p class="text-gray-500 text-sm">
          By
          <a href="#" class="text-lime-600 hover:underline">{{product.title}}</a>
        </p>

        <div class="flex items-center space-x-4 my-4">
          <div>
            <div class="rounded-lg bg-gray-100 flex py-2 px-3">
              <span class="text-lime-400 mr-1 mt-1">$</span>
              <span class="font-bold text-lime-600 text-3xl">{{product.price}}</span>
            </div>
          </div>
          <div class="flex-1">
            <p class="text-green-500 text-xl font-semibold">Save {{product.discountPercentage}}%</p>
            <p class="text-gray-400 text-sm">Inclusive of all Taxes.</p>
          </div>
        </div>

        <p class="text-gray-500">
         {{product.description}}
        </p>

        <div class="flex py-4 space-x-4">
          <button
            type="button"
            class="px-6 py-2 font-semibold rounded-xl bg-lime-600 hover:bg-green-500 text-white"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
