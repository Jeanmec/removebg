<template>
  <div class="remove-background-container">
    <h1>
        Remove image background
    </h1>
    <div class="form">
        <remove-background-form />
    </div>
  </div>
</template>

<script>
import RemoveBackgroundForm from "../components/RemoveBackgroundPresentation.vue";
export default {
    components: {
        RemoveBackgroundForm
    }
};
</script>

<style lang="scss" scoped>
.remove-background-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: "Poppins";
  margin: 0 auto;
  min-height: calc(100vh - 100px);
}

</style>
