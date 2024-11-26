<template>
  <div
    class="modal-container"
    v-if="open && pictures && pictures.withoutBackground"
  >
    <div class="modal">
      <button @click="closeModal" class="close-button">
        <Icon name="material-symbols:close" />
      </button>
      <span class="modal-title"
        >Your picture is ready!
        <Icon name="line-md:confirm-circle" class="icon"
      /></span>
      <div class="image-container">
        <ImageComparaisonSliderExample
          :original="pictures.original"
          :without-background="pictures.withoutBackground"
        />

        <button @click="downloadImageWithoutBackground" class="download-button">
          Download <Icon name="line-md:cloud-alt-download-loop" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ImageComparaisonSliderExample from "@/components/page/ImageComparaisonSliderExample.vue";
export default {
  components: { ImageComparaisonSliderExample },
  props: {
    pictures: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      open: true,
    };
  },

  methods: {
    closeModal() {
      this.open = false;
    },
    downloadImageWithoutBackground() {
      const link = document.createElement("a");
      link.href = this.pictures.withoutBackground.base64;
      link.download = this.pictures.original.name;
      link.click();
    },
  },
};
</script>

<style scoped lang="scss">
.modal-container {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.288);

  background: linear-gradient(
    45deg,
    rgba(112, 90, 255, 0.5),
    rgba(0, 184, 148, 0.5),
    rgba(112, 90, 255, 0.5),
    rgba(0, 184, 148, 0.5)
  );
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  .modal {
    width: 50%;
    height: 50%;
    background-color: white;
    position: absolute;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    box-sizing: border-box;
    overflow: hidden;

    border: 2px solid #705aff;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    animation: fadeIn 0.5s ease-out;

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translate(-50%, -60%);
      }
      to {
        opacity: 1;
        transform: translate(-50%, -50%);
      }
    }

    .close-button {
      position: absolute;
      top: 0;
      right: 0;
      border: none;
      cursor: pointer;
      background-color: transparent;
      font-size: 2em;
    }

    .modal-title {
      font-size: 2em;
      padding-bottom: 15px;
      .icon {
        color: #00b894;
        font-size: 1.5em;
        margin-left: 10px;
      }
    }

    .image-container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      overflow: hidden;

      .download-button {
        position: absolute;
        bottom: 10px;
        background-color: #715aff;
        color: white;
        font-weight: bold;
        width: fit-content;
        border: none;
        padding: 10px 20px;
        font-size: 1.2em;
        border-radius: 4px;
        cursor: pointer;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>
