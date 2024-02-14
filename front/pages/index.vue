<template>
  <div>
    <div class="container">
      <Presentation />
      <RemoveBackgroundForm />
      <div class="service-resentation-container">
        <service-advantages />
      </div>
      <service-presentation-transition
        class="service-presentation-transition-container"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Presentation from "../components/Presentation.vue";
import RemoveBackgroundForm from "../components/RemoveBackgroundPresentation.vue";
import ServiceAdvantages from "../components/ServiceAdvantages.vue";
import ServicePresentationTransition from "../components/ServicePresentationTransition.vue";
export default {
  components: {
    Presentation,
    RemoveBackgroundForm,
    ServiceAdvantages,
    ServicePresentationTransition,
  },
  name: "HomePage",

  title: "Remove My Background",
  meta: [
    {
      name: "description",
      content:
        "Remove My Background allows you to remove the background from your photos for free.",
    },
  ],
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Cormorant Upright";
  font-weight: 100;
  height: 100%;

  font-family: "Poppins";
  .service-resentation-container {
    width: 75%;
  }
  .service-presentation-transition-container {
    width: 75%;
  }
}
</style>
