<script setup>
const footerItem = "flex flex-col inline-block text-lg text-gray-500 space-y-2";
const footerHeading = "text-2xl md:text-3xl font-bold py-4";
const footerItemLink = "ease-in duration-300 hover:text-lime-600";
</script>

<template>
  <footer class="bg-green-100 py-8 md:py-16">
    <div class="container mx-auto px-4 md:px-10">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
        <div>
          <img src="../assets/images/logo-green.svg" class="h-40" alt="" />
          <span class="text-3xl font-extrabold mt-2 text-gray-500"
            >Goriber Shop</span
          >
        </div>
        <div :class="footerItem">
          <h2 :class="footerHeading">Quick Links</h2>
          <ul>
            <li><a :class="footerItemLink" href="#">Introduction</a></li>
            <li><a :class="footerItemLink" href="#">know more About Us</a></li>
            <li><a :class="footerItemLink" href="#">Visit Store</a></li>
            <li><a :class="footerItemLink" href="#">Let’s Connect</a></li>
          </ul>
        </div>
        <div :class="footerItem">
          <h2 :class="footerHeading">Important Links</h2>
          <ul>
            <li><a :class="footerItemLink" href="#">Privacy Policy</a></li>
            <li><a :class="footerItemLink" href="#">Shipping Details</a></li>
            <li><a :class="footerItemLink" href="#">Terms & Conditions</a></li>
            <li><a :class="footerItemLink" href="#">Media Kit</a></li>
          </ul>
        </div>
        <div :class="footerItem">
          <h2 :class="footerHeading">
            Get In Touch With Us For The Best Quality Plants
          </h2>
          <p>
            Qui dolore ipsum quia dolor sit amet, consec tetur adipisci velit,
            sed quia non numquam eius modi tempora incidunt lores ta porro ame.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
