<template>
  <div class="remove-background-form-contrainer">
    <span class="description"
      >Explore the capabilities of our completely free background removal
      service. Enjoy professional-level image editing without any charges.
      Embrace creativity without limitations, as our service comes to you at no
      cost.</span
    >
    <div class="form-presentation-container">
      <div class="form-container">
        <FormUploadImage
          @file-selected="handleFileSelected"
          :fileInTreatment="fileInTreatment"
        />
      </div>
      <Modal
        v-if="imagesData?.withoutBackground"
        :open="true"
        :pictures="imagesData"
      />
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import FormUploadImage from "~/components/services/FormUploadImage.vue";
export default {
  components: { FormUploadImage, Modal },
  data() {
    return {
      imagesData: null,
      maxFileSize: 3 * 1024 * 1024,
      resultBackgroundMode: "white",
      fileInTreatment: false,
    };
  },
  methods: {
    async handleFileSelected(file) {
      this.imagesData = null;

      if (file.size > this.maxFileSize) {
        toast.error(`File is too big, max size is ${this.maxFileSize}MB.`, {
          autoClose: 2000,
        });
        return;
      }
      this.fileInTreatment = true;

      const res = await this.$postRemoveBackground(file);

      if (res.base64) {
        this.imagesData = {
          original: {
            base64: file.base64,
            name: res.fileName,
          },
          withoutBackground: {
            base64: res.base64,
          },
        };
      }
      this.fileInTreatment = false;
    },

    downloadImageWithoutBackground() {
      const link = document.createElement("a");
      link.href = this.imagesData.base64;
      link.download = this.imagesData.name;
      link.click();
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
    align-items: center;
    .form-container {
      width: 100%;
    }
    .result {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .image-result {
        padding: 15px 0;
        border-radius: 10px;
        position: relative;

        &.bg-white {
          background-color: #fff;
        }
        &.bg-dark {
          background-color: #000;
        }
        img {
          max-width: 500px;
          max-height: 250px;
        }
      }
      .download-result {
        display: flex;
        align-items: center;
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
          rgba(255, 255, 255, 0.7) 0 0 3px 0 inset,
          0 1px 2px 0 rgba(0, 0, 0, 0.5);

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

      .toggle-bg {
        position: absolute;
        top: 10px;
        right: 10px;
        border: none;
        background-color: #fff;
        padding: 5px 10px;
        border-radius: 999px;
        cursor: pointer;
        display: flex;
        svg {
          width: 20px;
          height: 20px;
        }
        &.white {
          background-color: #fff;
          color: #000;
        }
        &.dark {
          background-color: #000;
          color: #fff;
        }
      }
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
