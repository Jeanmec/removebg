<template>
  <div class="remove-background-container">
    <h1>
        Remove image background
    </h1>
    <div class="form">
        <remove-background-form />
    </div>
    <div class="advantages-container">

        <service-advantages />
    </div>
  </div>
</template>

<script>
import RemoveBackgroundForm from "../components/RemoveBackgroundPresentation.vue";
import ServiceAdvantages from '../components/ServiceAdvantages.vue';
export default {
    components: {
        RemoveBackgroundForm,
        ServiceAdvantages
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

  h1 {
    font-size: 3rem;
    margin: 15px 0;
  }
  h2 {
    font-size: 1.5rem;
    margin: 15px 0;
    font-weight: 300;
  }
  .advantages-container {
    width: 75%;
  }
}

</style>
