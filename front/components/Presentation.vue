<template>
  <div class="presentation-container">
    <text-presentation />
    <illustration />
  </div>
</template>

<script>
import Illustration from "./Illustration.vue";
import TextPresentation from "./TextPresentation.vue";
export default {
  components: { Illustration, TextPresentation },
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
}
</style>
