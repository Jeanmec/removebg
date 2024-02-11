<template>
  <div class="form-remove-background-container">
    <div @click="selectPicture" class="form-remove-background">
      <Icon name="solar:cloud-upload-linear" />
    </div>

    <input type="file" accept="image/png, image/jpeg" @change="selectPicture" />
  </div>
</template>

<script>
export default {
  methods: {
    async selectPicture(e) {
      console.log(await this.getBase64(e.target.files[0]));
    },

    /**
     * Converts a file to base64 format.
     * @param {File} file - The file to be converted.
     * @returns {Promise<string>} - A promise that resolves with the base64 representation of the file.
     */
    getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form-remove-background-container {
  .form-remove-background {
    border: 3px dashed #fff;
    border-radius: 5px;
    width: 100%;
    min-height: 25vh;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 100px;
      height: 100px;
      color: white;
    }
  }
}
</style>
