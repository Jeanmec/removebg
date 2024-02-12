<template>
  <div class="image-comparaison-slider-example-container">
    <ImgComparisonSlider class="slider">
      <img
        slot="first"
        style="width: 100%"
        src="/public/image-with-background.jpg"
      />
      <img
        slot="second"
        style="width: 100%"
        src="/public/image-without-background.png"
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
.slider {
  border-radius: 15px;
  &:focus {
    outline: none;
  }
}

.custom-animated-handle {
  transition: transform 0.2s;
}

.slider-with-animated-handle:hover .custom-animated-handle {
  transform: scale(1.2);
}
</style>
