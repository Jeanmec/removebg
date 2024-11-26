<template>
  <div class="image-comparaison-slider-example-container">
    <ImgComparisonSlider class="slider">
      <img
        slot="first"
        style="width: 100%"
        :alt="original.alt ? original.alt : ''"
        :src="original.src ? original.src : original.base64"
      />
      <img
        slot="second"
        style="width: 100%"
        :alt="withoutBackground.alt ? withoutBackground.alt : ''"
        :src="
          withoutBackground.src
            ? withoutBackground.src
            : withoutBackground.base64
        "
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
  props: {
    original: {
      type: Object,
      required: true,
      default: () => ({
        alt: "Image with background",
        src: "/image-with-background.jpg",
      }),
    },
    withoutBackground: {
      type: Object,
      required: true,
      default: () => ({
        alt: "Image without background",
        src: "/image-without-background.png",
      }),
    },
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
