<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const mobileMenuOpen = ref(false);
const navLink = "ease-in duration-200 text-[17px] hover:text-lime-600";

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>
<template>
  <header class="bg-white py-4 sticky top-0 shadow-sm">
    <div class="container mx-auto px-4 lg:px-10">
      <nav
        class="relative flex flex-col md:flex-row items-center justify-between"
      >
        <a href="/" class="flex items-center md:mr-0 mr-auto">
          <img src="../assets/images/logo-green.svg" alt="Logo" class="mr-2 h-12" />
          <span class="font-bold text-xl">Goriber Shop</span>
        </a>
        <button
          @click="toggleMobileMenu"
          class="absolute top-0 right-0 ml-auto text-gray-500 focus:outline-none md:hidden"
        >
          <svg
            v-show="!mobileMenuOpen"
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M3 12h18M3 6h18M3 18h18"></path>
          </svg>

          <svg
            v-show="mobileMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div
          :class="mobileMenuOpen ? 'flex' : 'hidden'"
          class="flex-col md:flex md:flex-row md:space-x-3 lg:space-x-6 lg:text-xl font-bold md:items-center"
        >
          <RouterLink to="/store" :class="navLink">Store</RouterLink>
          <RouterLink to="/about" :class="navLink">About Us</RouterLink>
          <RouterLink to="/contact" :class="navLink">Contact Us</RouterLink>
        </div>

        <div
          :class="mobileMenuOpen ? 'block' : 'hidden'"
          class="md:flex md:items-center md:mt-0 mt-3"
        >
          <div class="flex space-x-1 lg:space-x-4">
            <div class="flex items-center space-x-3">
              <span>$0.00</span>
              <div class="relative">
                <img
                  src="../assets/images/shopping.svg"
                  class="ease-in duration-200 h-6 hover:shadow"
                  alt=""
                />
                <div
                  class="absolute text-sm -top-2 -right-3 p-1 flex justify-center items-center h-5 w-5 rounded-full bg-lime-600"
                >
                  0
                </div>
              </div>
            </div>
            <a href="#">
              <img
                src="../assets/images/profile.svg"
                class="ease-in duration-200 h-6 hover:shadow"
                alt=""
              />
            </a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
