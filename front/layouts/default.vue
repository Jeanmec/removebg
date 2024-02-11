<template>
  <div class="page-container">
    <Navbar class="navbar-container" />
    <NuxtPage class="page" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Navbar,
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
}
</style>
