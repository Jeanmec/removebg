<template>
  <div class="image-comparaison-slider-example-container">
    <ImgComparisonSlider class="slider">
      <img
        slot="first"
        style="width: 100%"
        alt="baby-with-background"
        src="/image-with-background.jpg"
      />
      <img
        slot="second"
        style="width: 100%"
        alt="baby-without-background"
        src="/image-without-background.png"
      />
    </ImgComparisonSlider>
  </div>
</template>

<script>
import { ImgComparisonSlider } from "@img-comparison-slider/vue";

export default {
  name: "ExampleComponent",
  components: {
    ImgComparisonSlider,
  },
};
</script>

<style lang="scss" scoped>
.image-comparaison-slider-example-container {
  .slider {
    border-radius: 15px;
    &:focus {
      outline: none;
    }
    @media screen and (max-width: 1200px) {
      width: 50%;
    }
  }

  display: flex;
  justify-content: center;
}
</style>
