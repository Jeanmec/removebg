<template>
  <div class="presentation-container">
    <text-presentation />
    <image-comparaison-slider-example />
  </div>
</template>

<script>
import ImageComparaisonSliderExample from "@/components/page/ImageComparaisonSliderExample.vue";
import TextPresentation from "@/components/TextPresentation.vue";
export default {
  components: { TextPresentation, ImageComparaisonSliderExample },
  name: "Presentation",
};
</script>

<style lang="scss" scoped>
.presentation-container {
  display: flex;
  align-items: center;
  font-family: "Cormorant Upright";
  font-weight: 100;
  column-gap: 3em;
  width: 75%;
  margin: 50px 0;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
}
</style>
