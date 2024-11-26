<template>
  <div class="page-container">
    <Navbar class="navbar-container" />
    <NuxtPage class="page" />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/page/Footer.vue";
import Navbar from "@/components/page/Navbar.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
.navbar-container {
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 15px;
}
.page {
  padding-top: 100px;
}
.page-container {
  background-image: linear-gradient(
    to right bottom,
    #ffffff,
    #d3c8ff,
    #a592ff,
    #715aff,
    #0015ff
  );
  font-family: "Poppins";
  position: relative;
}
</style>
