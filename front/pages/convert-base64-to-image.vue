<template>
  <div class="convert-base64-to-image-container">
    <h1>
      <Icon name="line-md:document-list-twotone" /> Convert Base64 to image
      <Icon name="line-md:image-twotone" />
    </h1>
    <p class="description">
      Easily convert Base64 to images online using a complimentary decoding
      tool. Decode Base64 as an image and preview it instantly in your web
      browser. Gain valuable insights into the image, including resolution, MIME
      type, extension, and size. For the reverse process, explore our
      <NuxtLink to="/encode-image-base64"
        ><b>Image to Base64 conversion tool</b></NuxtLink
      >
    </p>
    <textarea class="input-image-base64" v-model="base64"></textarea>
    <button class="decode-button" @click="decodeBase64">
      Decode Base64 to image
    </button>
    <div class="result" v-if="imageData && imageData.base64">
      <div class="info">
        <h2>Image Informations</h2>
        <span>Width : {{ imageData.width }} px</span>
        <span>Width : {{ imageData.height }} px</span>
        <span>Extension : .{{ imageData.fileType }}</span>
      </div>
      <h2>Preview Image</h2>
      <img :src="imageData.base64" alt="Decoded image" />
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Remove My Background - Convert Base64 to Image",
  meta: [
    {
      name: "description",
      content:
        "Convert Base64 to images online using a complimentary decoding tool. Decode Base64 as an image and preview it instantly in your web browser. Gain valuable insights into the image, including resolution, MIME type, extension, and size.",
    },
  ],
});
</script>

<script>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
export default {
  components: {},

  data() {
    return {
      base64: "",
      imageData: Object,
    };
  },
  methods: {
    async decodeBase64() {
      this.imageData = await this.getImageDataFromBase64(this.base64);
    },

    checkBase64FileType(firstChar) {
      switch (firstChar) {
        case "/":
          return "jpeg";
        case "i":
          return "png";
        case "R":
          return "gif";
        case "U":
          return "webp";
        case "Q":
          return "x-icon";
        default:
          return false;
      }
    },

    getImageDataFromBase64(base64String) {
      const prefix = base64String.split(",")[1];
      let fileType = "";
      if (!prefix) {
        fileType = this.checkBase64FileType(base64String.charAt(0));
        base64String = `data:image/${fileType};base64,${base64String}`;
      } else {
        fileType = this.checkBase64FileType(prefix.charAt(0));
      }

      if (!fileType) {
        toast.error("Base64 not supported.", {
          autoClose: 2000,
        });
        return;
      }

      const [, base64Data] = base64String.match(
        /^data:image\/([a-zA-Z+]+);base64,(.+)$/
      );

      const binaryString = atob(base64Data);
      const byteArray = new Uint8Array(binaryString.length);

      for (let i = 0; i < binaryString.length; i++) {
        byteArray[i] = binaryString.charCodeAt(i);
      }

      const image = new Image();

      return new Promise((resolve) => {
        image.onload = function () {
          resolve({
            base64: base64String,
            width: this.width,
            height: this.height,
            fileType,
          });
        };
        image.src = base64String;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.convert-base64-to-image-container {
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
    margin: 15px 10px;
    text-align: center;
  }
  .description {
    text-align: center;
    font-family: "Inter";
    font-weight: 300;
    a {
      text-decoration: none;
      border-bottom: 3px solid #715aff;
      color: black;
      transition: 0.2s;
      &:hover {
        border-bottom: 5px solid #715aff;
        transition: 0.2s;
      }
    }
  }

  /* CSS */
  .decode-button {
    padding: 10px 25px;
    border: 0;
    font-size: 1.2em;
    margin-top: 20px;
    transition: all 150ms ease-in-out;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: rgba(255, 255, 255, 0.2) 0px 1px 0px 0px inset,
      rgba(0, 0, 0, 0.07) 0 1px 1px, rgba(0, 0, 0, 0.07) 0 2px 2px,
      rgba(0, 0, 0, 0.07) 0 4px 4px;
    font-weight: 600;
    color: #fff;
    font-family: "Inter";
    box-shadow: rgba(32, 27, 92, 0.8) 0px 0px 0px 1px,
      rgba(255, 255, 255, 0.7) 0 0 3px 0 inset, 0 1px 2px 0 rgba(0, 0, 0, 0.5);

    background-image: radial-gradient(
        53% 87% at 44% 90%,
        rgba(255, 255, 255, 0.36) 0%,
        transparent 100%
      ),
      linear-gradient(80deg, #5044e5 0%, #463cca 100%);

    &:hover {
      filter: brightness(1.1);
    }
    &:active {
      transform: scale(0.95);
    }
  }

  .result {
    display: flex;
    flex-direction: column;
    .info {
      display: flex;
      flex-direction: column;
      span {
        display: block;
        font-size: 1em;
        margin: 5px 0;
        font-family: "Inter";
        font-weight: 300;
      }
    }
  }
  .input-image-base64 {
    width: 75%;
    margin-top: 20px;
    padding: 10px;
    border-radius: 5px;
    outline: 3px solid rgba(113, 90, 255, 0.5);
    background: rgba(255, 255, 255, 0.15);
    transition: 0.2s;

    overflow: auto;
    border: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    overflow-x: hidden;

    height: 150px;

    resize: none;
    &:focus,
    &:hover {
      transition: 0.2s;
      outline: 6px solid #715aff;
    }
  }
  h1 {
    font-size: 3rem;
    margin: 15px 0;
  }
  h2 {
    font-size: 1.5rem;
    margin: 15px 0;
    font-weight: 300;
    font-weight: 600;
    font-family: "Inter";
  }
}
</style>
