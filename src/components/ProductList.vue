<script setup>
import {RouterLink,RouterView } from 'vue-router'
import axios from 'axios'
import { ref, onBeforeMount } from 'vue'
const products = ref([])


onBeforeMount(() => {
  axios.get('https://dummyjson.com/products')
      .then(res => {
        products.value = res.data.products
      })
});


const detailsBtn =
    "text-right border border-lime-600 font-semibold transition duration-200 rounded-sm py-1 px-3 text-lime-600 hover:shadow-xl";



</script>
<template>
  <section class="container mx-auto py-20 px-10">
    <h1 class="text-2xl md:text-6xl font-semibold pb-2 text-center">
      Featured Plants
    </h1>
    <p class="text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>

    <div class="h-1 bg-lime-600 w-52 mx-auto my-3"></div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-5 mt-5 md:mt-10">
      <div class="border hover:shadow-lg cursor-pointer" v-for="product in products" :key="product.id">
        <img
          :src="product.thumbnail"
          class="h-[300px] w-auto"
          alt=""
        />
        <div class="p-5">
          <span class="text-gray-800 italic text-sm font-bold">{{product.title}}</span>
          <p>$ {{product.price}}</p>
          <div class="flex justify-between items-center mt-4">
            <router-link :to="{ name: 'productDetails', params: { id: product.id } }" :class="detailsBtn" type="submit">View Details </router-link>


          </div>
        </div>
      </div>
    </div>
  </section>
</template>
