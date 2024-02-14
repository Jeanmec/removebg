<template>
  <div class="encode-image-container">
    <h1>Encode an image to Base64</h1>

    <div class="upload-form-container">
      <upload-image-form
        @file-selected="handleFileSelected"
        @base64-process="handleStateFileProcess"
      />
    </div>
    <div v-if="fileInprocess == false && fileData" class="result-container">
      <h2>
        Get the base64 of the selected image by clicking on the area below.
      </h2>

      <div class="preview-uploaded-image">
        <img :src="fileData.base64" alt="Uploaded image" />
        <div class="info">
          <span class="filename">Filename : {{ fileData.name }}</span>
          <span class="filesize">Filesize : {{ fileData.size }}</span>
          <span class="width">Width : {{ fileData.width }} px</span>
          <span class="height">Height : {{ fileData.height }} px</span>
        </div>
      </div>
      <div class="base64-result">
        <div class="result">
          <copy-base-64
            title="With base64 prefix :"
            :base64="fileData.base64"
            :base64ToShow="fileData.base64.slice(0, 100) + '...'"
          />
        </div>
        <div class="result">
          <copy-base-64
            title="Without base64 prefix :"
            :base64="fileData.base64.split(',')[1]"
            :base64ToShow="fileData.base64.split(',')[1].slice(0, 100) + '...'"
          />
        </div>
      </div>
    </div>
    <div v-else-if="fileInprocess == true"><loader /></div>
  </div>
</template>

<script setup>
useHead({
  title: "Remove My Background - Encode Image to Base64",
  meta: [
    {
      name: "description",
      content:
        "Encode an image to Base64. Get instant base64 of any image for free.",
    },
  ],
});
</script>

<script>
import CopyBase64 from "../components/CopyBase64.vue";
import Loader from "../components/Loader.vue";
import UploadImageForm from "../components/UploadImageForm.vue";

export default {
  components: {
    UploadImageForm,
    Loader,
    CopyBase64,
  },

  data() {
    return {
      fileInprocess: null,
      fileData: Object,
    };
  },
  watch: {
    fileData(newVal) {
      if (newVal) {
        this.handleFileSelected(newVal);
      }
      deep: true;
    },
  },
  methods: {
    handleFileSelected(fileData) {
      this.fileData = fileData;
    },
    handleStateFileProcess() {
      this.fileInprocess = !this.fileInprocess;
    },
  },
};
</script>

<style lang="scss" scoped>
.encode-image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Cormorant Upright";
  font-weight: 100;
  width: 75%;
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

  .upload-form-container {
    width: 75%;
    display: flex;
    justify-content: center;
  }
  .result-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    font-family: "Inter";

    h2 {
      text-align: left;
      width: 100%;
      font-weight: 400;
    }
    .base64-result {
      width: 100%;
    }

    .preview-uploaded-image {
      width: 100%;
      display: flex;
      column-gap: 15px;
      .info {
        width: 100%;
        display: flex;
        flex-direction: column;
        font-size: 1.5rem;
        font-weight: 300;
        span {
          display: block;
          font-size: 0.5em;
          margin: 5px 0;
        }
      }
      img {
        max-width: 200px;
        max-height: 120px;
      }
    }
  }
}
</style>
