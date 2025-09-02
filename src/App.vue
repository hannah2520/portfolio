<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script setup>
  import './assets/styles.css';
  import Navbar from './components/PortfolioNavbar.vue';
  import Footer from './components/PortfolioFooter.vue';
</script>


