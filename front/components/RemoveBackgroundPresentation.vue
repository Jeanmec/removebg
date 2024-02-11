<template>
  <div class="remove-background-form-contrainer">
    <span class="description"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolorum aut
      quam nisi eaque quod molestias voluptatem eveniet deserunt distinctio
      adipisci a asperiores, amet saepe obcaecati aliquam tenetur corrupti
      facilis?</span
    >
    <div class="form-presentation-container">
      <div class="form-container">
        <upload-image-form @file-selected="handleFileSelected" />
      </div>
      <div class="result">
        <!-- <img v-if="image" :src="image" /> -->
      </div>
    </div>
    <service-advantages />
  </div>
</template>

<script>
import ServiceAdvantages from "./ServiceAdvantages.vue";
import UploadImageForm from "./UploadImageForm.vue";
export default {
  components: { UploadImageForm, ServiceAdvantages },
  data() {
    return {
      imageData: null,
    };
  },
  methods: {
    async handleFileSelected(file) {
      console.log(file);

      const res = await this.$postRemoveBackground(file.base64);
      console.log(res);

      // this.imageData =
    },
  },
};
</script>

<style lang="scss" scoped>
.remove-background-form-contrainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75%;
  margin: 0 auto;

  .advantages-container {
    display: flex;
    width: 50%;
  }

  .form-presentation-container {
    width: 80%;
    display: flex;
    column-gap: 3em;
    .form-container {
      width: 100%;
    }
  }
  .description {
    font-size: 1.2rem;
    font-weight: 400;
    color: #fff;
    text-align: center;
    display: block;
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 75%;
  }
}
</style>
