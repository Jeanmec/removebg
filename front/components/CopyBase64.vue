<template>
  <div class="copy-base64-container">
    <span v-if="title" class="title"> {{ title }}</span>
    <div class="input-result" @click="copyToClipboard">
      <pre>{{ base64ToShow }} </pre>
      <Icon name="material-symbols:content-copy-outline-rounded" />
    </div>
  </div>
</template>

<script>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  name: "CopyBase64",
  props: {
    title: {
      type: String,
      required: true,
    },
    base64: {
      type: String,
      required: false,
    },
    base64ToShow: {
      type: String,
      required: false,
    },
  },
  methods: {
    async copyToClipboard() {
      try {
        await navigator.clipboard.writeText(this.base64);

        toast.success("Copied to clipboard", {
          autoClose: 2000,
        });
      } catch (err) {
        toast.error("Failed to copy", {
          autoClose: 2000,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.copy-base64-container {
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin: 15px 0;

  .title {
    font-weight: 300;
  }

  .input-result {
    position: relative;
    display: flex;
    align-items: center;
    pre {
      margin: 5px 0;
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background: rgba(255, 255, 255, 0.15);
      font-family: "Poppins";
      font-size: 1em;
      cursor: pointer;
      transition: 0.3s;
      color: #3f3f3f;

      -webkit-user-select: none; /* Safari */
      -ms-user-select: none; /* IE 10 and IE 11 */
      user-select: none; /* Standard syntax */
    }
    svg {
      position: absolute;
      right: 10px;
      cursor: pointer;
      width: 25px;
      height: 25px;
      transition: 0.3s;
    }
    &:hover {
      pre {
        background: rgba(255, 255, 255, 0.25);
        transition: 0.3s;
        border: 1px solid #fff;
      }
      svg {
        color: #fff;
        transition: 0.3s;
      }
    }
  }
}
</style>
