<template>
  <div class="upload-image-form-container">
    <button @click="openFileInput" class="upload-image-form">
      <template v-if="!uploadInProgress && !fileInTreatment">
        <Icon name="line-md:cloud-alt-upload-loop" />
        <span> Click here to upload an image </span>
      </template>
      <template v-else-if="fileInTreatment">
        <Icon name="line-md:cog-filled-loop" />
        <span class="upload-state">File in treatment{{ animatedDots }}</span>
      </template>
      <template v-else>
        <Icon name="line-md:downloading-loop" />
        <span class="upload-state">Upload in progress{{ animatedDots }}</span>
      </template>
    </button>
    <input
      type="file"
      accept="
        image/png,
        image/jpeg,
        image/jpg"
      ref="input"
      @change="handleFileChange"
    />
  </div>
</template>

<script>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
export default {
  props: {
    fileInTreatment: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  data() {
    return {
      acceptedTypes: ["png", "jpeg", "jpg"],
      uploadInProgress: false,
      dotState: false,
    };
  },
  computed: {
    animatedDots() {
      return this.dotState ? "." : "..";
    },
  },
  mounted() {
    this.startDotAnimation();
  },
  unmounted() {
    this.stopDotAnimation();
  },
  methods: {
    startDotAnimation() {
      this.dotInterval = setInterval(() => {
        this.dotState = !this.dotState;
      }, 500);
    },
    stopDotAnimation() {
      if (this.dotInterval) {
        clearInterval(this.dotInterval);
        this.dotInterval = null;
      }
    },
    openFileInput() {
      this.$refs.input.click();
    },
    checkFileType(file) {
      const fileType = file.name.split(".").pop();
      if (!this.acceptedTypes.includes(fileType)) {
        return false;
      }
      return true;
    },
    formatFileSize(size) {
      const units = ["octets", "ko", "Mo", "Go", "To"];
      let i = 0;
      while (size >= 1024 && i < units.length - 1) {
        size /= 1024;
        i++;
      }
      return `${size.toFixed(2)} ${units[i]}`;
    },
    handleFileChange(event) {
      console.log("ici");
      const fileInput = event.target;
      const file = fileInput.files[0];

      console.log(fileInput);
      console.log(file);

      if (file) {
        if (!this.checkFileType(file)) {
          toast.error(
            " Please upload a file of type : " + this.acceptedTypes.join(", "),
            {
              autoClose: 5000,
            }
          );
          fileInput.value = "";
          return;
        }

        this.uploadInProgress = true;

        setTimeout(() => {
          if (file) {
            const reader = new FileReader();
            reader.onload = () => {
              const image = new Image();
              image.src = reader.result;

              image.onload = () => {
                const fileData = {
                  name: file.name,
                  size: this.formatFileSize(file.size),
                  width: image.width,
                  height: image.height,
                  base64: reader.result,
                };
                this.uploadInProgress = false;
                this.$emit("file-selected", fileData);
                fileInput.value = "";
              };
            };
            reader.readAsDataURL(file);
          }
        }, 1000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.upload-image-form-container {
  width: 100%;
  .upload-image-form {
    border: 3px dashed #fff;
    border-radius: 5px;
    width: 100%;
    min-height: 25vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 15px 0;
    transition: 0.3s;
    margin: 0 auto;
    cursor: pointer;

    background: transparent;
    background-image: linear-gradient(45deg, #ffffff0f 25%, transparent 25%),
      linear-gradient(-45deg, #ffffff0f 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #ffffff0f 75%),
      linear-gradient(-45deg, transparent 75%, #ffffff0f 75%);
    background-size: 20px 20px;
    background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
    span {
      font-size: 1.5rem;
      font-weight: bold;
      color: white;
      transition: 0.3s;
    }
    svg {
      width: 100px;
      height: 100px;
      color: white;
      transition: 0.3s;
    }
    &:hover {
      background: rgba(255, 255, 255, 0.15);
      transition: 0.3s;
    }
  }
  input[type="file"] {
    display: none;
  }
}
</style>
