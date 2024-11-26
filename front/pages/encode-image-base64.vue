<template>
  <div class="encode-image-container">
    <h1>
      <Icon name="line-md:document-code-twotone" /> Encode an image to Base64
    </h1>

    <div class="upload-form-container">
      <FormUploadImage @file-selected="handleFileSelected" />
    </div>
    <div v-if="fileData" class="result-container">
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

    <hr />

    <div class="info-section">
      <h2>Why Convert Your Image to Base64?</h2>
      <p>
        Converting your image to Base64 format can be incredibly useful for a
        variety of applications. Base64 encoding allows you to embed images
        directly into HTML, CSS, or JSON files, eliminating the need for
        separate image files and reducing the number of HTTP requests. This can
        lead to faster load times and a more streamlined user experience.
      </p>
      <p>
        With our tool, you can easily convert your image to Base64 with or
        without the prefix. The prefix is useful when embedding the Base64
        string directly into HTML or CSS, as it specifies the data type and
        encoding. Without the prefix, the Base64 string can be used in other
        contexts where the prefix is not needed.
      </p>
      <h3>Applications of Base64 Encoding</h3>
      <ul>
        <li>
          <strong>Web Development:</strong> Embed images directly into HTML or
          CSS files to reduce HTTP requests and improve page load times.
        </li>
        <li>
          <strong>Data Storage:</strong> Store images in databases as Base64
          strings to simplify data management.
        </li>
      </ul>
      <p>
        Whether you're a web developer, email marketer, our tool makes it easy
        to convert your images to Base64 format.
      </p>
    </div>
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
import CopyBase64 from "~/components/services/CopyBase64.vue";
import FormUploadImage from "~/components/services/FormUploadImage.vue";

export default {
  components: {
    FormUploadImage,
    CopyBase64,
  },

  data() {
    return {
      fileInprocess: null,
      fileData: null,
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
  },
};
</script>

<style lang="scss" scoped>
hr {
  width: 50%;
  border: 0;
  height: 1px;
  background: #ffffff8a;
  margin: 10px 0;
  margin: 50px 0;
}
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
    text-align: center;
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
